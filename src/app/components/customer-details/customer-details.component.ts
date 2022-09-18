import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/intefaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customers: any= [];
  customersName:string="";

  constructor(private actRoute: ActivatedRoute,private cs: CustomersService, private router: Router) { }

  ngOnInit(): void {
   this.customersName = this.actRoute.snapshot.params['firstName'];
     this.cs.getCustomers().subscribe((customersData: Customer[]) => {
      this.customers = customersData;
    }) 
  }

  allCustomers():void{
    this.router.navigateByUrl('home');
  }
 

  
 
}
