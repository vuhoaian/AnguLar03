export type User = {
  _id: string;
  fullname: string;
  email: string;
  password: string;
  role:string;
};
export type ValidLogin = {
  email: string;
  password: string;
}
export type responseDataLogin = {
  token: string;
  user: {
      email: string;
      username: string;
      role: "admin" | "member";
  }
}