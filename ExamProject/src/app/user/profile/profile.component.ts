import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

interface Profile {
  username: string;
  email: string;
  tel: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;

  profileDetails: Profile = {
    username: '',
    email: '',
    tel: '',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(13)]],
    email: [
      '',
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
    tel: [''],
    // ToDo: render this from the template and make more fields on click of a button
    // persons: this.fb.array([]),
  });

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;
    this.profileDetails = {
      username,
      email,
      tel,
    };

    this.form.setValue({
      username,
      email,
      tel,
    });
  }
  // pagination
  // records => 1000
  // 10 records per page -> page: 100
  // 10 records => 4 => offset= 4, limit = 10

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  logout(): void {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
      },
      error: () => {
        this.router.navigate(['/auth/login']);
      },
    });
  }


  saveProfileHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = { ...this.form.value } as Profile;
    const { username, email, tel } = this.profileDetails;

    this.userService.updateProfile(username!, email!, tel!).subscribe(() => {
      this.toggleEditMode();
    });
  }

  cancel(): void {
    const { username, email, tel } = this.userService.user!;
    this.profileDetails = {
      username,
      email,
      tel,
    };
    this.form.setValue({
      username,
      email,
      tel,
    });
    this.toggleEditMode();
  }
}
