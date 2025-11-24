describe('template spec', () => {
  it.skip('login-success', function() {
  cy.visit('/shop')
  //cy.get('#btn_signup_login_nav rect.w-full').click();
  //cy.get('#btn_submit_email').click();
  cy.get('[data-testid="snacks"] div.media-text-container').click();
  cy.get('div.gap-4 div:nth-child(2) [data-testid="plan-card"] div.group div.gap-3 div:nth-child(1) div.h-auto div.w-full.justify-center div.absolute [data-testid="add-to-cart-plan"] button.w-full div.flex tl-icon.p-1 svg.aspect-square').click();
  cy.get('[data-testid="cart-modal-btn"] span.flex').click();
  cy.get('[data-testid="cart-modal-btn"] span.flex').click();
  cy.get('#username [name="email"]').type('gustavo+office3@wearetaly.com');
  cy.get('#continue tl-loading.sc-tl-button').click();
  cy.get('#password input.pl-3').type('Gustavo@369');
  cy.get('#login tl-loading.sc-tl-button').click();
  cy.get('#btn_cart_page_nav span.block').click();
  cy.contains('Delivery Dates').should('be.visible');

});

it.skip('login-fail', function() {
  cy.visit('/shop')
  cy.get('div:nth-child(2) > [data-testid="plan-card"] > div.group > div.gap-3 > div:nth-child(1) > div.h-auto > div.w-full.justify-center > div.absolute > [data-testid="add-to-cart-plan"] > button.w-full > div.flex > tl-icon.p-1 > svg.aspect-square').click();
  cy.get('[data-testid="cart-modal-btn"] span.flex').click();
  cy.get('[data-testid="cart-modal-btn"] button.w-full').click();
  cy.get('#username [name="email"]').type('gustavo+office3@wearetaly.com');
  cy.get('#continue div.w-full').click();
  cy.get('#password input.pl-3').click();
  cy.get('#password input.pl-3').type('hsbahdbasbhdsabhdahs');
  //cy.get('#login button.w-full').click();
  //cy.contains('SIGNUP').should('be.visible');
  cy.get('#login tl-loading.sc-tl-button').click();
  cy.contains('Incorrect username or password.').should('be.visible');
});
});
