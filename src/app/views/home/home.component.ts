import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  disableLine2: boolean = true
  disableLine3: boolean = true
  disableLine4: boolean = true
  disableLine5: boolean = true

  constructor() {
   }

  ngOnInit(): void {
  }

  insertWord(){
    
  }

  checkLineInput(line:string){
    
  }

  submitLine(){

  }

}
