import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test3',
  template: `
    <p [hidden]="myOutlet.isActivated">
      outlet: test3 works! From: {{routeData}}
    </p>
    <router-outlet #myOutlet="outlet"></router-outlet>
  `,
  styles: [
  ]
})
export class Test3Component implements OnInit {

  routeData = {};

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      this.routeData = data['from'];
    });
  }

}
