import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  template:
  `
  <div class="fade-in-body">
 <app-home></app-home>
 <app-header></app-header>
 <app-about></app-about>
 <app-techniques></app-techniques>
 <app-resume></app-resume>
 <app-skill></app-skill>
 <app-contact></app-contact>
 <app-references></app-references>
 
<div class="scroll-up">
		<a href="#home"><i class="fa fa-angle-up"></i></a>
	</div>
 </div>
  
  `,
})

export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
