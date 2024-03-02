import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { APIService } from '../service/api.service';

import { cuenta } from '../interfaces/cuentas';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-form-account',
  standalone: true,
  imports: [NgFor,RouterLink,FormsModule, ReactiveFormsModule],
  templateUrl: './form-account.component.html',
  styleUrl: './form-account.component.css'
})
export class FormAccountComponent {
  apiService=inject(APIService);
  form!:FormGroup;
  router = inject(Router);

  datalist:any[]=[];
  ngOnInit():void{

  this.form= new FormGroup({
    cuenta: new FormControl('',[Validators.required]),
    Monto: new FormControl('',Validators.required)
  })
}
  submit(){

    const cts:cuenta ={
      cuenta:this.form.value.cuenta,
      Monto:this.form.value.Monto,

    };
     this.apiService.saveAccount2(cts).subscribe(()=>{
      console.log(this.form.value)
      this.router.navigateByUrl('/list-account');
       });

    /*this.apiService.saveAccountcts).subscribe((res:cuenta)=>{
      alert("Saved");
     //this.router.navigateByUrl('/users');
     /*
    },(Error)=>{
      console.log(Error);
    })*/
  }

 
}
