import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import SearchPage from '../pages/searchPage.js';
import PlanPage from '../pages/planPage.js';
import CheckoutPage from '../pages/checkoutPage.js';
import MenuPage from '../pages/menuPage.js';
import MySubscriptionPage from '../pages/mySubscriptionsPage.js';

const loginPage = new LoginPage();
const searchPage = new SearchPage();
const planPage = new PlanPage(); 
const checkoutPage = new CheckoutPage();    
const menuPage = new MenuPage(); 
const mySubscriptionsPage = new MySubscriptionPage();

const searchSelector = {
  firstSearch :'Crunchy box',
  secondSearch : 'Groupeddd',
  thirdSearch : 'Starter Refil - bread & cheese',
  selectFirstPlan:'[href="/shop/brand/nothealthy/crunchy-box"]',
  selectSecondPlan:'[href="/shop/brand/test-1/grouped"]',
  selectThirdPlan: '[href="/shop/brand/stacys-bread/starter-refil-bread-cheese"]',
}

const daySelector = {
  monday: '[data-state="open"] [label="Monday"]',
  tuesday: '[data-state="open"] [label="Tuesday"]',
  wednesday: '[data-state="open"] [label="Wednesday"]',
}

const subscriptionslist = {
  firstItem: 'tr:nth-of-type(1) [data-testid="brand-header"] span.block',
  secondItem: 'tr:nth-of-type(2) [data-testid="brand-header"] span.block',
  thirdItem: 'tr:nth-of-type(3) [data-testid="brand-header"] span.block',
}


describe('template spec', () => {
  it('passes', () => {
    loginPage.acessLoginPage()
    loginPage.setUser(userData.userAcess.login)
    loginPage.continueButton()
    loginPage.setPassword(userData.userAcess.password)
    loginPage.submitButton()

    searchPage.searchBar(searchSelector.firstSearch, searchSelector.selectFirstPlan)
    planPage.frequencySelector()
    planPage.addCartButton()

    searchPage.searchBar(searchSelector.secondSearch, searchSelector.selectSecondPlan)
    planPage.addCartButton()

    searchPage.searchBar(searchSelector.thirdSearch, searchSelector.selectThirdPlan)
    planPage.addCartButton()
    planPage.checkoutButton()

    checkoutPage.daySelector(daySelector.monday)
    checkoutPage.setDeliveryButton()
    checkoutPage.daySelector(daySelector.tuesday)
    checkoutPage.setDeliveryButton()
    checkoutPage.daySelector(daySelector.wednesday)
    checkoutPage.setDeliveryButton()
    checkoutPage.saveButton()
    checkoutPage.placeOrderButton()

    cy.reload(true)

    menuPage.myAccountButtonClick()
    menuPage.mySubscriptionsButtonClick()

    cy.reload(true)

    menuPage.mySubscriptionsButtonClick()
    menuPage.myAccountButtonClick()
    menuPage.mySubscriptionsButtonClick()
   
    mySubscriptionsPage.planCheck(subscriptionslist.firstItem, searchSelector.firstSearch)
    mySubscriptionsPage.planCheck(subscriptionslist.secondItem, searchSelector.secondSearch)
    mySubscriptionsPage.planCheck(subscriptionslist.thirdItem, searchSelector.thirdSearch)

    mySubscriptionsPage.markAllCheckboxes()
    mySubscriptionsPage.deleteConfirmButtonClick()
    mySubscriptionsPage.cancelButtonClick()

  })
})