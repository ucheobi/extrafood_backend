import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  public async getCustomer(): Promise<Customer[]> {
    return await this.customerRepository.find({}).catch((err) => {
      throw new Error('There is a problem fetching data from the server');
    });
  }

  // createAccount(customer: Customer) {
  //   return await this.customerRepository.create(customer);
  // }
}
