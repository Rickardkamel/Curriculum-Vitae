import { NgModule } from '@angular/core';
import { ResumeService } from './resume.service';
import { SharedModule } from '../shared/shared.module';

import { ResumeComponent } from './resume.component';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        ResumeComponent
    ],
    declarations: [
        ResumeComponent
    ],
    providers: [ResumeService]
})

export class ResumeModule { }
