import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
import {environment} from "../environments/environment";
//  comme axios avec vueJS
@Injectable({
  providedIn: 'root' // or register in the provider in the app.module.ts
})
export class EmployeeService {
  private apiServerURL= environment.apiUrl; // to add later, could be in the .env

  constructor(private  http: HttpClient) { }
  public  getEmployees():Observable<Employee[]>{
    return  this.http.get<Employee[]>(`${this.apiServerURL}/employee/all`);
  }
  public  addEmployee(employee:Employee):Observable<Employee>{
    return  this.http.post<Employee>(`${this.apiServerURL}/employee/add`,employee);
  }
  public  updateEmployee(employee:Employee):Observable<Employee>{
    return  this.http.put<Employee>(`${this.apiServerURL}/employee/update`,employee);
  }
  public  deleteEmployee(employeeID:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerURL}/employee/delete/${employeeID}`);
  }
}
