import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AboutComponent } from './about.component';
import { AboutService } from './about.service';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        AboutComponent,
    ],
    declarations: [
        AboutComponent
    ],
    providers: [AboutService]
})

export class AboutModule { }
