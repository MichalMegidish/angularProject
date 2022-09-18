import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/intefaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {

  customer:Customer = {firstName: "", lastName: "", phone:"", email:"", address:""}
  constructor(private cs: CustomersService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    this.cs.addCustomer(this.customer).then(()=>{
      alert("customer was added successfully!")
      this.reset();
    }).catch ((err)=> console.log(err));
  }
  reset():void {
    this.customer = {firstName:"", lastName:"", phone:"", email:"", address:""}
  }

}
