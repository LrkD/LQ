import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  employees: Employee[] = [];

  newEmployeeId: string = '';
  newEmployeeNumber: string = '';
  newFirstName: string = '';
  newLastName: string = '';
  newBirthday: Date; // Change the type to Date
  newGender: string = '';
  newPictureUrl: string = '';

  constructor() { }

  ngOnInit() {
    // Initialize some sample employees
    this.employees.push(
      new Employee('1', 'EMP001', 'John', 'Doe', new Date('1990-01-01'), 'male', 'https://example.com/john.jpg'),
      new Employee('2', 'EMP002', 'Jane', 'Doe', new Date('1992-05-15'), 'female', 'https://example.com/jane.jpg')
    );
  }

  addEmployee() {
    if (this.newEmployeeId && this.newEmployeeNumber && this.newFirstName && this.newLastName && this.newBirthday && this.newGender && this.newPictureUrl) {
      const newEmployee = new Employee(
        this.newEmployeeId,
        this.newEmployeeNumber,
        this.newFirstName,
        this.newLastName,
        this.newBirthday, // Pass Date object
        this.newGender,
        this.newPictureUrl
      );
      this.employees.push(newEmployee);

      // Clear input fields after adding the employee
      this.clearEmployeeFields();
    }
  }

  deleteEmployee(index: number) {
    if (index >= 0 && index < this.employees.length) {
      this.employees.splice(index, 1);
    }
  }

  clearEmployeeList() {
    this.employees = [];
  }

  private clearEmployeeFields() {
    this.newEmployeeId = '';
    this.newEmployeeNumber = '';
    this.newFirstName = '';
    this.newLastName = '';
    this.newBirthday = null; // Reset birthday to null or new Date() if you want to reset to today's date
    this.newGender = '';
    this.newPictureUrl = '';
  }
}
