import { NgModule } from '@angular/core';
import { ContactService } from './contact.service';
import { ContactComponent } from './contact.component';
import { FORM_DIRECTIVES } from '@angular/forms/src/directives';


@NgModule({
    imports: [],
    exports: [
        ContactComponent
    ],
    declarations: [
        ContactComponent,
        FORM_DIRECTIVES
    ],
    providers: [ContactService]
})

export class ContactModule { }
