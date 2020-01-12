import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  oddeven = [7, 6, 5, 5, 4, 3, 22, 19, 58];
  allPopulated:boolean = false;
  firstName:string = null ; 
  lastName:string = null; 
  email:string = null; 
  age:number = null;
  numone: number = 0;
  numtwo: number = 0;
  sumthree: number = 0;
  prodthree: number = 0;
  divthree: number = 0;
  subthree: number = 0;
  constructor() {}

  display(){
    this.allPopulated = true;
  }

  convert(value){
    return parseInt(value); 
  }

  mathOperation() {
    this.sumthree = parseInt(this.numone.toString()) + parseInt(this.numtwo.toString());
    this.prodthree = this.numone*this.numtwo;
    this.divthree = this.numone/this.numtwo;
    this.subthree = this.numone - this.numtwo;
    alert("add:" + this.sumthree + "-product:" + this.prodthree + "-division:" + this.divthree + "-sub:" + this.subthree);
  }
}
