import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SkillComponent } from './skill.component';
import { SkillService } from './skill.service';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        SkillComponent
    ],
    declarations: [
        SkillComponent
    ],
    providers: [SkillService]
})

export class SkillModule {
}
