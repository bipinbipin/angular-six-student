import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable, fromEvent } from '../../../node_modules/rxjs';

export class IconWithBadge {
  symbol: string;
  count: number;
  color: string;
  position?: string;
  size?: string;
}

@Component({
  selector: 'app-reactive-js',
  templateUrl: './reactive-js.component.html',
  styleUrls: ['./reactive-js.component.css']
})
export class ReactiveJsComponent implements OnInit {


  iconList: IconWithBadge[] = [
    {symbol: 'home', count: 15, color: 'warn'},
    {symbol: 'bookmark', count: 7, color: 'primary'},
    {symbol: 'cached', count: 13, color: 'accent'},
    {symbol: 'dashboard', count: 9, color: 'primary'},
  ];

  evtEmitter = new EventEmitter();
  events: string[] = [];

  constructor() { }

  ngOnInit() {
    // this.mouseLog();
    this.subEvtEmitter();

    const obs = Observable.create((observer: any) => {
      observer.next('welcome back developer');
      observer.next('welcome back developer again');
      observer.next('welcome back developer again and again');
      observer.next('now there are 4 things');

    });

    obs.subscribe(x => this.addToList(x));

    obs.subscribe(y => this.addToList('From Another Observer: ' + y));

  }

  evtClick() {
    const rnd = Math.random();
    this.evtEmitter.emit(rnd);
  }

  subEvtEmitter() {
    this.evtEmitter.subscribe(e => {
      // console.log('from the event emitter ', e);
      this.events.push(e);
    });
  }

  addToList(value: any) {
    const node = document.createElement('li');
    node.appendChild(document.createTextNode(value));
    document.getElementById('obs-list').appendChild(node);
  }

  mouseLog() {
    fromEvent(document.body, 'mousemove')
      .subscribe((e: any) => console.log(e.pageX, e.pageY));
  }

  copyFunction() {
    console.log('copied something..?');
  }

  scrollFunction() {
    console.log('scrollin...');
  }
}
