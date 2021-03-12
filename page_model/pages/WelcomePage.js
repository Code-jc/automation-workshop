import {selector} from 'testcafe'

class WelcomePage {
    constructor(){
        this.loginButton = selector ('.btn.btn-lg');
    }

}

export default new WelcomePage();