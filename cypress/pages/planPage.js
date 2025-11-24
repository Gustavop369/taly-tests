class PlanPage{
    selectorList(){
        const selectors = {
            frequencySelector: '[data-testid="subscribe-btn"] div.flex-wrap',
            thirdPositionPlanSelector:'#radix-\\:r0\\: div:nth-child(2) div.justify-between',
            addCartButton:'[data-testid="add-to-cart-cta"] span.block',
            checkoutButton: '#proceed-to-checkout',
        }

        return selectors
    }

    frequencySelector(){
        cy.get(this.selectorList().frequencySelector).click()
        cy.get(this.selectorList().thirdPositionPlanSelector).click()
        
    }

    addCartButton(){
        cy.get(this.selectorList().addCartButton).click()
    }

    checkoutButton(){
        cy.get(this.selectorList().checkoutButton).click()
    }


}

export default PlanPage