export interface ISignUp{
    email: String,
    name: String,
    password: String,
    confirmPassword: String,
    
    // photo: File,
    // currentBalacne: Number,
}
  export interface IRegisterError {
    email: string[],
    password: string[],
    confirmPassword: string[],
  }