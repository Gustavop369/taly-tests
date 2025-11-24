class MenuPage{
    selectorList(){
        const selectors = {
            myAccountButton: '#btn_account_link_nav rect.w-full',
            mySubscriptionsButton: '[data-testid="subscriptions"] tl-stack.sc-tl-stack-h',
        }

        return selectors
    }

    myAccountButtonClick(){
        cy.get(this.selectorList().myAccountButton).click();
    }

    mySubscriptionsButtonClick(){
        cy.get(this.selectorList().mySubscriptionsButton).click();
    }


}

export default MenuPage