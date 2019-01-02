import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiService} from '../../share/services/api.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder , private api : ApiService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
public async register(){
    const val = this.form.value;
    console.log(val.username,val.email,val.password);
    let params : object = {
      "user":{
        username: val.username,
        email: val.email,
        password: val.password
      }
    };
    try {
      let response : object = await this.api.POST("/api/users", params)
      alert("register successful")
      
    } catch (error) {
      console.log("singup error " , error);
      
    }
    
  }

}
