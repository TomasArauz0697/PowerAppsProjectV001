import { Component, inject } from '@angular/core';
import { APIService } from '../service/api.service';
import { NgForOf } from '@angular/common';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { cuenta } from '../interfaces/cuentas';

@Component({
  selector: 'app-pop-up-compoente',
  standalone: true,
  imports: [NgForOf,FormsModule, ReactiveFormsModule,RouterLink],
  templateUrl: './pop-up-compoente.component.html',
  styleUrl: './pop-up-compoente.component.css'
})
export class PopUpCompoenteComponent {
apiService=inject(APIService);
router = inject(Router);
 datalist:any[]=[];
 form!:FormGroup;

  constructor(){

  }
    ngOnInit():void{
      this.llenardata();

    this.form= new FormGroup({
      cuenta: new FormControl('',[Validators.required]),
      Monto: new FormControl('',Validators.required)
    })
  }

  get f(){
    return this.form.controls;
  }
  navigate(){
   // this.router.navigate(['FormC',1])
    this.router.navigateByUrl('/FormC');
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

  llenardata(){
     this.apiService.getData2().subscribe(Result=>{
      this.datalist=Result;
      console.log(this.datalist);
      
    })
  }

  deleted(ids:string){
    this.apiService.deleteAccount(ids).subscribe(()=>{
      console.log("deleted")
      this.datalist=this.datalist.filter(x=>x._id!=ids)
    })
  }

  Refresh(){
    this.llenardata();
    this.ngOnInit();
  }
}
