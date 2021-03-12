import { Selector } from 'testcafe';

class WelcomePage {
   constructor() {
      this.loginButton = Selector('.btn.btn-lg');
   }
}

export default new WelcomePage();
