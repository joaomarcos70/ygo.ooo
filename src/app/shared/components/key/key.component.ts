import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'key-component',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})


export class KeyComponent implements OnInit {
  
  @Input() inputKey: String = "";
  @Input() inputColor: String = "";
  @Input() inputValid: boolean = false;
  
  constructor() { }

  ngOnInit(): void {}

}