class MySubscriptionPage{
    selectorList(){
        const selectors = {
            markAllCheckboxes:"[style='width: 30px;']",
            deleteConfirmButton: '#page-taly button.text-error-700 span.block',
            cancelButton: '[loading="false"]',
            emptyListMessage:'#page-taly div.min-h-\\[72px\\]',
        }

        return selectors
    }

    planCheck(item, plan){
        cy.get(item).contains(plan)
    }

    markAllCheckboxes(){
        cy.get(this.selectorList().markAllCheckboxes).click()
    }

    deleteConfirmButtonClick(){
        cy.get(this.selectorList().deleteConfirmButton).click()
    }

    cancelButtonClick(){
        cy.get(this.selectorList().cancelButton).click()
    }

    emptySubListCheck(emptymessage){
        cy.get(this.selectorList().emptyListMessage).should('have.text', emptymessage)
    }

}

export default MySubscriptionPage