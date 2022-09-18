import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../intefaces/Customer';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(customers: Customer[], propName: keyof Customer, value: string): Customer[] {
     let custArr: Customer[] = []
    for (let customer of customers) {

      if ((customer[propName] as string).toLowerCase().includes(value.toLowerCase())) {
        custArr.push(customer)
      }

    }

    return custArr
  }

}
