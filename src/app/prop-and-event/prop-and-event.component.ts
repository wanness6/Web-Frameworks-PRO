import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-and-event',
  templateUrl: './prop-and-event.component.html',
  styleUrls: ['./prop-and-event.component.css']
})
export class PropAndEventComponent {

  //variables voor de lijst
  lijstje: Item[]= [];
  idCounter:number = 1;
  isEmpty : boolean=true;
  itemName :string = "";
  state : boolean = true;

  //variables voor movie
  width: string = "640";
  height: string = "400";
  state2 : boolean = false;

  constructor(){

  }

  //functies voor lijstje
  pushItem(itemName: string){
    this.lijstje.push(new Item(this.idCounter, itemName));
    this.idCounter++;
    this.isEmpty = false;
  }
  checkIfEmpty(){
    if(this.lijstje.length == 0){
      this.isEmpty = true;
    }
  }
  //splice maakt de input op die plek weg met 1 input??? denk ik....
  delete(position:number){
    this.lijstje.splice(position, 1);
  }
  checkInput(){
    this.state = false;
  }


  //functies voor movie
  changeResolution(event:any){
    var myArray = event.target.value.split("x");

    this.width = myArray[0];
    this.height = myArray[1];
  }
  playState(){ this.state2 = false;}
  pauseState(){ this.state2 = true;}
}


//class voor lijstje
export class Item{
  constructor(public id:number, public name: string){ }
}