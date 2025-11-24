class CheckoutPage{
    selectorList(){
        const selectors = {
            setDeliveryButton: '[data-state="open"] #set-delivery-schedule',
            saveButton: '#save-and-continue-btn',
            placeOrderButton:'#place-order-btn',
            checkoutPageMessage: 'Review your order details to continue',
            checkoutPanel: "[padding='px-4']",
        }

        return selectors
    }

    setDeliveryButton(){
        cy.get(this.selectorList().setDeliveryButton).click()
    }

    saveButton(){
        cy.get(this.selectorList().saveButton).click()
    }

    placeOrderButton(){
       cy.get(this.selectorList().placeOrderButton).click() 
    }

    daySelector(day){
        cy.get(day).click()
    }

    checkIfUserLoggedin(){
        cy.get(this.selectorList().checkoutPanel).contains(this.selectorList().checkoutPageMessage)
    }



}

export default CheckoutPage