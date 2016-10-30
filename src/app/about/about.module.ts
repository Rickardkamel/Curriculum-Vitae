import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { AboutService } from './about.service';

@NgModule({
    imports: [],
    exports: [
        AboutComponent
    ],
    declarations: [
        AboutComponent
    ],
    providers: [AboutService]
})

export class AboutModule { }
