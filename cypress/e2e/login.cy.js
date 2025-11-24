import UserData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage";
import CheckoutPage from "../pages/checkoutPage";

const loginPage = new LoginPage();
const checkout = new CheckoutPage();



describe('template spec', () => {
  it('Login Success', function() {
  loginPage.acessLoginPage()
  loginPage.setUser(UserData.userAcess.login)
  loginPage.continueButton()
  loginPage.setPassword(UserData.userAcess.password)
  loginPage.submitButton()

  checkout.checkIfUserLoggedin()
  });

it.only('Login Fail Wrong Email', function() {
  loginPage.acessLoginPage()
  loginPage.setUser(UserData.userWrongAcess.login)
  loginPage.continueButton()
  cy.contains('Please, provide a valid email address.').should('be.visible');
  //loginPage.setPassword(UserData.userWrongAcess.password)
  //loginPage.submitButton()

  
  /*cy.visit('/shop')
  cy.get('div:nth-child(2) > [data-testid="plan-card"] > div.group > div.gap-3 > div:nth-child(1) > div.h-auto > div.w-full.justify-center > div.absolute > [data-testid="add-to-cart-plan"] > button.w-full > div.flex > tl-icon.p-1 > svg.aspect-square').click();
  cy.get('[data-testid="cart-modal-btn"] span.flex').click();
  cy.get('[data-testid="cart-modal-btn"] button.w-full').click();
  cy.get('#username [name="email"]').type('gustavo+office3@wearetaly.com');
  cy.get('#continue div.w-full').click();
  cy.get('#password input.pl-3').click();
  cy.get('#password input.pl-3').type('hsbahdbasbhdsabhdahs');
  //cy.get('#login button.w-full').click();
  //cy.contains('SIGNUP').should('be.visible');
  */
  //cy.get('#login tl-loading.sc-tl-button').click();
  
});
});
