class MenuPage{
    selectorList(){
        const selectors = {
            myAccountButton: '#btn_account_link_nav rect.w-full',
            mySubscriptionsButton: '[data-testid="subscriptions"] tl-stack.sc-tl-stack-h',
            mytransactionsButton: '[data-testid="transactions"]',
            myCartButton: '#btn_cart_page_nav',
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

    myCartButtonClick(){
       cy.get(this.selectorList().myCartButton).first().click(); 
    }


}

export default MenuPage