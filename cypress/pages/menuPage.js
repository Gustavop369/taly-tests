class MenuPage{
    selectorList(){
        const selectors = {
            myAccountButton: '#btn_account_link_nav rect.w-full',
            mySubscriptionsButton: '[data-testid="subscriptions"] tl-stack.sc-tl-stack-h',
            mytransactionsButton: '[data-testid="transactions"]',
        }

        return selectors
    }

    myAccountButtonClick(){
        cy.get(this.selectorList().myAccountButton).click();
    }

    mySubscriptionsButtonClick(){
        cy.get(this.selectorList().mySubscriptionsButton).click();
    }

    mytransactionsButtonClick(){
        cy.get(this.selectorList().mytransactionsButton).click();
    }


}

export default MenuPage