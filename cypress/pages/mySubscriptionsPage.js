class MySubscriptionPage{
    selectorList(){
        const selectors = {
            allCheckboxes: '#page-taly button.text-error-700 span.block',
            cancelButton: '[loading="false"]',
        }

        return selectors
    }

    planCheck(item, plan){
        cy.get(item).contains(plan)
    }

    markAllCheckboxes(){
        cy.get(this.selectorList().allCheckboxes).click()
    }

    cancelButtonClick(){
        cy.get(this.selectorList().cancelButton).click()
    }


}

export default MySubscriptionPage