import { Component, OnInit } from '@angular/core';

import { ISkill } from '../shared';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
})
export class SkillComponent implements OnInit {
  private skillList: ISkill[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skillService.getSkills()
      .subscribe(skills => {
        this.skillList = skills;
        console.log(this.skillList);
      });
  }
}

