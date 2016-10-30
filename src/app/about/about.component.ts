import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import { IAbout } from './about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  aboutMeInfo: IAbout;
  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAboutMe()
      .subscribe(aboutData => {
        this.aboutMeInfo = aboutData;
      });
  }
}
