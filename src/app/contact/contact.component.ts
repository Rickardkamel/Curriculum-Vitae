import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './contact.service';
import { IEmail } from '../shared/email.interface';
import { Component, OnInit } from '@angular/core';

declare var swal: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})

export class ContactComponent implements OnInit {

  public message: IEmail = { name: '', email: '', subject: '', message: '' };

  constructor(private contactService: ContactService) { }

  ngOnInit() { }

  onSubmit() {
    this.contactService.postEmail(this.message)
      .subscribe(response => this.handleResponse(response),
      error => this.handleResponse(error)
      );
  }

  handleResponse(response) {
    if (response.status === 200) {
      this.message = { name: '', email: '', subject: '', message: '' };
      swal({
        title: 'Sent!',
        text: 'Your message has been sent!',
        type: 'success',
        confirmButtonText: 'Ok'
      });
    } else {
      swal({
        title: 'Error!',
        text: 'Sorry, your message could not be sent. Try again or send the email directly to rickardkamel@gmail.com. Thank you!',
        type: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }
}
