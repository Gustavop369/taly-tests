import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import SearchPage from '../pages/searchPage.js';
import PlanPage from '../pages/planPage.js';
import CheckoutPage from '../pages/checkoutPage.js';
import MenuPage from '../pages/menuPage.js';
import TransactionsPage from '../pages/transactionsPage.js';

const loginPage = new LoginPage();
const searchPage = new SearchPage();
const planPage = new PlanPage(); 
const checkoutPage = new CheckoutPage();    
const menuPage = new MenuPage(); 
const transactionsPage = new TransactionsPage();

const searchSelector = {
  firstSearch :'Crunchy box',
  selectFirstPlan:'[href="/shop/brand/nothealthy/crunchy-box"]',
}


describe('Buy a plan and check if transaction exist', () => {
  it('Check if product is in transactions', () => {
    loginPage.acessLoginPage()
    loginPage.setUser(userData.userAcess.login)
    loginPage.continueButton()
    loginPage.setPassword(userData.userAcess.password)
    loginPage.submitButton()
    
    searchPage.searchBar(searchSelector.firstSearch, searchSelector.selectFirstPlan)
    planPage.onceOffButtonCheck()
    planPage.addCartButton()
    menuPage.myCartButtonClick()
    planPage.checkoutButton()
    
    checkoutPage.setDeliveryButton()
    checkoutPage.saveButton()
    checkoutPage.placeOrderButton()
    
    checkoutPage.getInvoiceID()
      cy.then(() => {
        const invId = checkoutPage.invoiceId
        menuPage.myAccountButtonClick()
        menuPage.mytransactionsButtonClick()
        transactionsPage.idMatcher(invId)
        cy.log(invId)
        
      });
    
  })
})