import { Component, OnInit } from '@angular/core';
import { keyInterface} from 'src/app/interface/keyboard.interface';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.scss']
})
export class VirtualKeyboardComponent implements OnInit {

  keyboard: keyInterface[]=[]

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("/assets/keyboardA.json").subscribe((data:any) => {
      this.keyboard = data
    })
  }
}
