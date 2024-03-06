import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { SetBackground } from 'src/app/shared/customDirectives/setBackground.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, SetBackground],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authSrv: AuthService)
  {
    this.loginForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }

  onSubmit()
  {
    if(this.loginForm.valid)
    {
      console.log("this.loginForm.value", this.loginForm.value)
      this.authSrv.onLogin(this.loginForm.value).subscribe(
        {
          next: () => {}
        }
      )
    }else
    {
      this.loginForm.markAllAsTouched();
    }
  }
}
