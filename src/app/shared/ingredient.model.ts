export class Employee {
  constructor(
    public employeeId: string,
    public employeeNumber: string,
    public firstName: string,
    public lastName: string,
    public birthday: Date, 
    public gender: string,
    public pictureUrl: string
  ) {}
}
