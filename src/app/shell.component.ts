import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  template:
  `
 <app-home></app-home>
 <app-header></app-header>
 <app-about></app-about>
 <app-technologies></app-technologies>
 <app-resume></app-resume>
 <app-skills></app-skills>
 <app-contact></app-contact>
 
<div class="scroll-up">
		<a href="#home"><i class="fa fa-angle-up"></i></a>
	</div>
  `,
})

export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
