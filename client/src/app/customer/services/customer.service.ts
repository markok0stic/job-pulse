import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginCustomer, RegisterCustomer, Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient.post<LoginCustomer>(`${environment.api}/users/login`, {
      email,
      password,
    });
  }

  register(data: RegisterCustomer) {
    return this.httpClient.post<Customer>(`${environment.api}/users/register`, {
      ...data,
    });
  }

  editProfile(userData: FormData) {
    return this.httpClient.put<Customer>(
      `${environment.api}/users/edit-profile`,
      userData
    );
  }
}
