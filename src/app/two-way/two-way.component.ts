import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {

  //voor de persoonsinfo te tonen
  firstName:string = "";
  lastName:string = "";
  streetName:string = "";
  houseNr:string = "";
  city:string ="";
  state:boolean = false;

  showText(){
    this.state = true;
  }

}
