import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/intefaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { AddCustomersComponent } from '../add-customers/add-customers.component';
import { EditCustomersComponent } from '../edit-customers/edit-customers.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer = {firstName: "", lastName: "", phone:"", email:"", address:""}

  prodFirstName: string=""
  prodLasttName:string=""
  prodEmail:string=""

  constructor(private cs: CustomersService,private modal: NgbModal) { }

  ngOnInit(): void {
  this.getCustomers()
    
  }

  getCustomers(): void {
     this.cs.getCustomers().subscribe((customersData: Customer[])=>{
      this.customers = customersData;
    })
  }

  addCustomer():void{
   this.modal.open(AddCustomersComponent,{
      size:'lg',
      centered: true,
      windowClass: 'dark-modal'
    })
    
  }
  
  deleteCustomer(customer:Customer):void{
    if(confirm('Are you sure?')){
      this.cs.deleteCustomer(customer)
      .then(() => alert('Customer deleted successfully!'))
      .catch((err) => console.log(err));
      
    }
  }

   editCustomer(customer:Customer):void{
    const modalRef = this.modal.open(EditCustomersComponent,{
      size:'lg',
      centered: true,
      windowClass: 'dark-modal'
    })
    modalRef.componentInstance.id=customer.id;
   }
}
