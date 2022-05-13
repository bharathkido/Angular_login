import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
hide = true;
loginForm: FormGroup;
invalidMessage: boolean=false;
  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:[''],
      password:['']
    })
  }
  
  submitdata(){
    var data = this.loginForm.getRawValue()

    if(data.userName == "Bharathkumar@gmail.com" && data.password == "Admin@1234")
    {
      this.router.navigate(['/dashboard']);
    }
    else{
    this.loginForm.reset();
    this.invalidMessage= true;
    }

  }

}
