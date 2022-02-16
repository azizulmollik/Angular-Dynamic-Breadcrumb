import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test32',
  template: `
    <p>
      test32 works!
    </p>
    
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class Test32Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
