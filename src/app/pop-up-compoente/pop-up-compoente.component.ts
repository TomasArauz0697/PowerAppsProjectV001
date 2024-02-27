import { Component } from '@angular/core';
import { APIService } from '../service/api.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-pop-up-compoente',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './pop-up-compoente.component.html',
  styleUrl: './pop-up-compoente.component.css'
})
export class PopUpCompoenteComponent {
 data:any[]=[];
  constructor(private apiService:APIService){

  }
  ngOnInit():void{
    this.llenardata();
    console.log("Pepito");
  }

  llenardata(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      console.log(this.data);
      
    })
  }
}
