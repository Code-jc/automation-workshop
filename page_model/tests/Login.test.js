import WelcomePage from '../pages/WelcomePage';
import LoginPage from '../pages/LoginPage';
import MyNotesPage from '../pages/MyNotesPage';
import { CREDENTIALS } from '../data/Constants';

fixture('login fixture testing')
   .page`http://testapp.galenframework.com`.beforeEach(async t => {
   await t.click(WelcomePage.loginButton);
});

test('Users can login using valid credentials', async t => {
   await t
      .click(WelcomePage.loginButton)
      .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME, {
         paste: true,
      })
      .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD, {
         paste: true,
      })
      .click(LoginPage.loginButton);

   await t.expect(MyNotesPage.pageTitle.exists).ok();
});

test('Users can not login using invalid credential', async t => {
   await t
      .click(WelcomePage.loginButton)
      .typeText(LoginPage.userNameField, '')
      .typeText(LoginPage.passwordField, '')
      .click(LoginPage.loginButton);

   await t.expect(MyNotesPage.errorMessage.exists).ok();
   await t
      .expect(LoginPage.errorMessage.innerText)
      .eql('The username of password is incorrect');
});
