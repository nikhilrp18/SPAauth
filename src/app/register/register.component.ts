import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!:FormGroup

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formbuilder.group({
      name:[''],
      email:[''],
      password:[''],
      reppass:['']
    })
  }

  signup(){
    console.log('Inside signup');
    console.log(this.signupForm.value);
    
    
    this.http.post<any>('http://localhost:3000/users',this.signupForm.value).subscribe(data=>{alert("data")})
  }
}
