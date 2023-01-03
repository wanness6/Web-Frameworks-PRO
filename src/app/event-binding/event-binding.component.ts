import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  counter : number = 0;
  count : string ="0";
  xCoords : number = 0;
  yCoords : number =0;
  constructor(){

  }

  increment(){
    this.counter++;
    
  }
  setCounter(value: string): void{
    this.count = value;
  }
  setCoords(event: MouseEvent): void{
    this.xCoords = event.clientX;
    this.yCoords = event.clientY;
  }
}
