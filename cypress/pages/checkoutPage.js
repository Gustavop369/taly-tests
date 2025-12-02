class CheckoutPage{
    selectorList(){
        const selectors = {
            setDeliveryButton: '[data-state="open"] #set-delivery-schedule',
            saveButton: '#save-and-continue-btn',
            placeOrderButton:'#place-order-btn',
            checkoutPageMessage: 'Review your order details to continue',
            checkoutPanel: "[padding='px-4']",
            orderConfirmation: '[data-testid="confirmation-title"] span.leading-normal',
        }

        
        return selectors
    }
    
    invoiceId;

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

    getInvoiceID(){
        cy.get(this.selectorList().orderConfirmation)
            .should('be.visible')
            .then(($element) => {
            const fullText = $element.text().trim(); 
            this.invoiceId = fullText.replace('#','')
        });
    }

    orderConfirmation(){
        cy.get(this.selectorList().orderConfirmation).should('be.visible')
    }



}

export default CheckoutPage