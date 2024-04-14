import { Component } from '@angular/core';
import { EmailService } from '../../service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})

export class EmailComponent {

  data = {
    to: "",
    subject: "",
    message: ""
  }

  constructor(private email: EmailService,private snack:MatSnackBar) { }


  doSubmitForm() {
    console.log("try to submit form");
    console.log(this.data);

    if(this.data.to=='' || this.data.subject=='' || this.data.message==''){
      this.snack.open("Fields can not be empty !!","OK");
      return;
    }
    this.email.sendEmail(this.data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
}
}
