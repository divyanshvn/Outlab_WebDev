import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GpService } from '../gp.service';
import { data } from '../data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient, private GpService : GpService) {}
  success = false;
  
  posts : data;

  ngOnInit() {

    this.GpService.getdata()
    .subscribe((data: data) => this.posts = data);

    this.myForm = this.fb.group({
      name: [ '' ,[
        Validators.required,
      ]],
      
      email: ['',[
        Validators.required,
        Validators.email
      ]],

      feedback: ['',[
        Validators.required,
      ]],

      comments:['',[
      ]]
    })

    this.myForm.valueChanges.subscribe(console.log)
    }

    get email(){
      return this.myForm.get('email');
    }

    get feedback(){
      return this.myForm.get('feedback');
    }

    submitHandler(){
      console.log(this.myForm.value);
      this.GpService.reg(this.myForm.value)
      .subscribe(
        response => {alert("Successfully Submitted"), this.success=true},
        error => alert("Unsuccessful.. Try again")
      )
    }
}
