export interface ISignUp{
    email: string,
    firstName: string,
    password: string,
    confirmPassword: string,
    
    // photo: File,
    // currentBalacne: Number,
}
  export interface IRegisterError {
    email: string[],
    password: string[],
    confirmPassword: string[],
  }