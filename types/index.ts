export interface SignUpForm {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  errors: Array<Errors>;
}

export interface LoginForm {
  email: string | null;
  password: string | null;
  errors: Array<Errors>;
}

export enum Errors {
  Email = "InvalidEmail",
  Password = "InvalidPassword",
  FirstName = "InvalidFirstName",
  LastName = "InvalidLastName",
}
