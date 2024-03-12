import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;
  user: any = {};
  submitted: boolean = false;

  constructor(private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  saveUser() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;

      this.userService.create(userData)
        .subscribe(response => {
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    } else {
      // Mark all fields as touched to display validation messages
      this.markFormGroupTouched(this.userForm);
    }
  }


  newUser(): void {
    this.submitted = false;
    this.userForm.reset();
  }

   // Helper method to mark all form controls as touched
   markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
