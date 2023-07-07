export interface ISignUp{
    email: string,
    firstName: string,
    password: string,
    confirmPassword: string,
    currentBalance: number,
    // photo: File,
   
}
  export interface IRegisterError {
    email: string[],
    password: string[],
    confirmPassword: string[],
  }