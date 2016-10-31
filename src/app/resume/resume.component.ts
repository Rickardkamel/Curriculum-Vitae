import { Component, OnInit } from '@angular/core';

import { ResumeService } from './resume.service';
import { IResume } from '../shared';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements OnInit {

  private resumeList: IResume[] = [];

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.getResumes()
    .subscribe(resumes => {
      this.resumeList = resumes;
      console.log(this.resumeList);
    });
  }

}
