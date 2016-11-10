import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ISkill } from '../shared';
import { SkillService } from './skill.service';
declare var $: any;
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
        let timer = Observable.timer(500, 1000);
        timer.subscribe(t => {
          this.jQueryLoader();
        });
      });
  }

  jQueryLoader() {
    $('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
      if (visible) {
        $.each($('div.progress-bar'), function () {
          $(this).css('width', $(this).attr('aria-valuenow') + '%');
        });
        $(this).unbind('inview');
      }
    });
  }
}
