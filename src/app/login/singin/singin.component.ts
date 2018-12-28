import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder }  from '@angular/forms';
import { Router} from '@angular/router';
import {ApiService} from '../../share/services/api.service'
import { HttpClient , HttpHeaders ,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder : FormBuilder , private router : Router , private apiservice :ApiService ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  username;
  info;
  token;
  async login(){
    const val = this.form.value;
    console.log(val.email);
    this.apiservice.setuser(val.email,val.password)

    await this.apiservice.auPOST().subscribe(data => {this.info = data;
      this.username = this.info.user.username;
      this.token = this.info.user.token;
      //console.log(this.token);
      localStorage.setItem('token', this.token);
      
        if(val.email===this.info.user.email && val.password==="jakejake"){
          //this.apiservice.GET();
          console.log('ban dang nhap thanh cong');
          this.apiservice.setuser1(this.username);
          this.router.navigateByUrl("")
        }else{
          alert("user chua ton tai , dk ngay")
        }
        return this.username
      },error => 
      {alert("user chua ton tai or sai mat khau");
      this.router.navigateByUrl("")
    })
      

  }
  Singup(){
    this.router.navigate(["/singup"])

  }

}
