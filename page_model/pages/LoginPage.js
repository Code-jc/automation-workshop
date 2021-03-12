import { Selector} from 'testcafe'
import 
class LoginPage {
    constructor(){
        this.usernameField = Selector();
        this.passwordField = Selector();
        this.loginButton = Selector();
        this.cancelButton = Selector();
        this.errorMessage = Selector();

    }

async submitLoginForm(username, password){

}

}

export default new LoginPage();