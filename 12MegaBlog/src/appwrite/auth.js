import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ name, password, email }) {
    try {
      let userAccount = await this.account.create(
        ID.unique(),
        email.password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
        // call another method
        // return userAccount;
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ password, email }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      // throw error;
      console.log("appwrite service :: getCurrentUser :: error ", error);
    }
    return null;
  }
  async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("appwrite service :: logout :: error ", error);

    }
  }
}

let authService = new AuthService();
export default authService;
