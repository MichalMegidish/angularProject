import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/intefaces/Contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[]=[]
  // contact:Contact={name:"",email:"",birthday:new Date('0'), phones:[]}
   
  constructor(private cs: ContactsService) { }

 
 ngOnInit(): void {
 this.contacts = this.cs.getAll()
    
  }

}
