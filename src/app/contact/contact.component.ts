import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './contact.service';
import { IEmail } from '../shared/email.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})

export class ContactComponent implements OnInit {

  public message: IEmail = { name: '', email: '', message: '' };

  constructor(private contactService: ContactService) { }

  ngOnInit() { }

  onSubmit() {
    this.contactService.postEmail(this.message)
      .subscribe(response => this.handleResponse(response),
      error => this.handleResponse(error)
      );
  }

  handleResponse(response) {
    if (response.status === 'success') {
      this.message = { name: '', email: '', message: '' };
      alert('Thank you for your message');
    }

    if (response.status === 'error') {
      alert('Sorry, your message could not be sent. Try again or send the email directly to rickardkamel@gmail.com. Thank you');
    }
  }
}


