describe('template spec', () => {
  it('passes', () => {
    //user for acess: gustavo+auttest@wearetaly.com

    const searchSelector = {
      firstSearch :'Crunchy box',
      secondSearch : 'Groupeddd',
      thirdSearch : 'Starter Refil - bread & cheese'
        
    }
  

    cy.visit('https://staging.devtalysub.com/shop')
    cy.get('[data-testid="snacks"] span.block').click();
    cy.get('tl-stack:nth-child(1) div.gap-4 div:nth-child(1) [data-testid="plan-card"] div.group div.gap-3 div:nth-child(1) div.h-auto div.w-full.justify-center div.absolute [data-testid="add-to-cart-plan"] button.w-full div.flex tl-icon.p-1 svg.aspect-square').click();
    cy.get('[data-testid="cart-modal-btn"] span.flex').click();
    cy.get('[data-testid="cart-modal-btn"] span.flex').click();
    cy.get('#username [name="email"]').type('gustavo+auttest@wearetaly.com');
    cy.get('#continue tl-loading.sc-tl-button').click();
    cy.get('#password input.pl-3').type('Gustavo@369');
    cy.get('#login tl-loading.sc-tl-button').click();
    cy.get('#autocomplete-1-label').click();
    cy.get('#autocomplete-1-input').type(searchSelector.firstSearch);
    cy.get('[href="/shop/brand/nothealthy/crunchy-box"]').click();
    cy.get('[data-testid="subscribe-btn"] div.flex-wrap').click();
    cy.get('#radix-\\:r0\\: div:nth-child(2) div.justify-between').click();
    cy.get('[data-testid="add-to-cart-cta"] span.block').click();
    cy.get('#autocomplete-0-label').click();
    cy.get('#autocomplete-0-input').type(searchSelector.secondSearch);
    cy.get('[href="/shop/brand/test-1/grouped"]').click();
    cy.get('[data-testid="add-to-cart-cta"] span.block').click();
    cy.get('#autocomplete-0-label').click();
    cy.get('#autocomplete-0-input').type(searchSelector.thirdSearch);
    cy.get('[href="/shop/brand/stacys-bread/starter-refil-bread-cheese"]').click();
    cy.get('[data-testid="add-to-cart-cta"] button.text-base').click();
    
    
    cy.get('#proceed-to-checkout').click();
    cy.get('[data-state="open"] [label="Monday"]').click();
    cy.get('[data-state="open"] #set-delivery-schedule').click();
    cy.get('[data-state="open"] [label="Tuesday"]').click();
    cy.get('[data-state="open"] #set-delivery-schedule').click();
    cy.get('[data-state="open"] [label="Wednesday"]').click();
    cy.get('[data-state="open"] #set-delivery-schedule').click();
    
    cy.get('#save-and-continue-btn').click();
    cy.get('#place-order-btn').click();
    
    cy.reload(true)
   
    cy.get('#btn_account_link_nav rect.w-full').click();
    cy.get('[data-testid="subscriptions"] tl-stack.sc-tl-stack-h').click();
    

    
    cy.get('tr:nth-of-type(1) [data-testid="brand-header"] span.block').contains(searchSelector.firstSearch);
    cy.get('tr:nth-of-type(2) [data-testid="brand-header"] span.block').contains(searchSelector.secondSearch);
    cy.get('tr:nth-of-type(3) [data-testid="brand-header"] span.block').contains(searchSelector.thirdSearch);
    cy.get('#page-taly th:nth-child(1) div.border').click();
    cy.get('#page-taly button.text-error-700 span.block').click();
    cy.get('[loading="false"]').click();
    
  })
})