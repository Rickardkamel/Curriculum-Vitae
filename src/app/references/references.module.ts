import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

import { ReferencesComponent }   from './references.component';
import { ReferencesService } from './references.service';

@NgModule({
    imports: [SharedModule],
    exports: [
        ReferencesComponent
        ],
    declarations: [
        ReferencesComponent
    ],
    providers: [ReferencesService],
})
export class ReferencesModule { }
