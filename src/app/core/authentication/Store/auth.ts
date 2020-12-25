export interface RegistrationForm {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}
export interface LoginForm {
  userName: string;
  password: string;
}
export interface UserTokens {
  token: string;
  refreshToken: string;
}
export interface LoginRequestResults {
  access_token: string;
  token_type: string;
  refresh_token: string;
}
