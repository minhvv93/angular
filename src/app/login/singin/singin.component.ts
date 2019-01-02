import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../share/services/api.service'
import { LoadingService } from '../../share/services/loading.service'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiservice: ApiService, private loading: LoadingService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  username;
  info: object;
  token;
  dieukien = false;
  public async login() {
    const val = this.form.value;
    //console.log(val.email);
    let params: object = {
      "user": {
        email: val.email,
        password: val.password
      }
    };
    try {
      this.dieukien = this.loading.showloading();
      let responce: object = await this.apiservice.POST("/api/users/login", params);
      //console.log(this.info.user.username);


      console.log("login responce", responce);
      this.dieukien = this.loading.hideloading();
    } catch (error) {
      //console.log("login error", error);
      await timeout(5000);
      this.router.navigateByUrl("");
      alert("user sai email or password")
    }

    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    //   function timeout(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
    // async function sleep(fn, ...args) {
    //     await timeout(3000);
    //     return fn(...args);
    // }


    // this.apiservice.auPOST().subscribe(data => {
    //   this.info = data;
    //   this.username = this.info.user.username;
    //   this.token = this.info.user.token;
    //   //console.log(this.token);
    //   localStorage.setItem('token', this.token);
    //   localStorage.setItem('user', this.info.user.username);
    //   //console.log(localStorage.setItem('user', this.info.user.username));


    //   //if(val.email===this.info.user.email && val.password==="jakejake"){
    //   //this.apiservice.GET();
    //   console.log('ban dang nhap thanh cong');
    //   this.apiservice.changeData(this.username);
    //   //this.apiservice.setuser1(this.username);
    //   this.router.navigateByUrl("")
    //   // }else{
    //   //   alert("user chua ton tai , dk ngay")
    //   // }
    //   return this.username
    // }, error => {
    //   alert("user chua ton tai or sai mat khau roi , nhap lai");
    //   this.router.navigateByUrl("")
    // })

  }
  Singup() {
    this.router.navigate(["/singup"])

  }

}
