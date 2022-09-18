import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/intefaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit {

  @Input() id?: string;
  customer:Customer={firstName: "", lastName: "", phone:"", email:"", address:""}

  constructor(private cs: CustomersService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(this.id){
      this.cs.getCustomerById(this.id).subscribe((customerData:Customer)=>{
        this.customer = customerData
      })
    }
  }

  editCustomer():void{
     this.cs.editCustomer(this.customer).then(()=>{
      this.activeModal.close();
      alert('Customer updated seccessfully')
    })
    .catch((err)=> console.log(err));
  }

}
