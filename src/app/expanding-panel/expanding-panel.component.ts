import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanding-panel',
  templateUrl: './expanding-panel.component.html',
  styleUrls: ['./expanding-panel.component.css']
})
export class ExpandingPanelComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
