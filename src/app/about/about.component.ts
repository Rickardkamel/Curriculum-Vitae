import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import { IAbout, IProject } from '../shared';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  aboutMeInfo: IAbout;
  projectList: IProject;

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAboutMe()
      .subscribe(aboutData => {
        this.aboutMeInfo = aboutData;
      });

    this.aboutService.getProjects()
    .subscribe(projects => {
      this.projectList = projects;
    })
  }
}
