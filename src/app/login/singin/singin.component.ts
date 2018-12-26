import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder }  from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder : FormBuilder , private router : Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  login(){
    const val = this.form.value;
    console.log(val.email);
    
    //this.service.setData(val.email)

    //console.log(val.email);
    //console.log(val.password);
    if(val.email==="minhvv" && val.password==="1234"){
      console.log('ban dang nhap thanh cong');
      this.router.navigateByUrl("")
    }else{
      alert("user chua ton tai , dk ngay")
    }

  }
  Singup(){
    this.router.navigate(["/singup"])

  }

}
