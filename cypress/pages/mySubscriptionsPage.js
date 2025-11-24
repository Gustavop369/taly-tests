class MySubscriptionPage{
    selectorList(){
        const selectors = {
            markAllCheckboxes:"[style='width: 30px;']",
            deleteConfirmButton: '#page-taly button.text-error-700 span.block',
            cancelButton: '[loading="false"]',
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


}

export default MySubscriptionPage