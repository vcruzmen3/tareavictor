import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  public hometext= 'ESte es el segundo texto  22222';

  constructor() { }

  ngOnInit(): void {

  }

}
