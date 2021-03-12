import { Selector } from 'testcafe' 
import { CREDENTIALS } from '../data/Constants';
class LoginPage {
    constructor(){
        this.usernameField = Selector('input[name="login.username"]');
        this.passwordField = Selector('input[name="login.password"]');
        this.loginButton = Selector('.btn-lg.btn-primary').withExactTest('Login');
        this.errorMessage = Selector('#login-error-message');
  }

    async submitLoginForm(username, password){
        await t
        .typeText(loginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME, {paste:true})
        .typeText(loginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD, {paste:true})
        .click(this.loginButton)

    }

}

export default new LoginPage();