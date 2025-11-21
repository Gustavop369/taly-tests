describe('template spec', () => {
  it('passes', () => {
  
  looping()
  
})

  const looping = () => {
    cy.wait(500).then(() => {
    cy.visit('https://wearetaly.com/')
    cy.get('#header svg.text-gray-900').click();
    cy.get('img[alt="Flipz Salted Caramel Pretzel Snacks 90g"]').click();
    cy.get('[data-testid="add-to-cart-cta"] span.block').click();
    cy.get('#username [name="email"]').type('gustavopereirar@hotmail.com', { delay: 0 });
    cy.get('#continue tl-loading.sc-tl-button').click();
    cy.get('#password input.pl-3').type('Gustavo@369');
    cy.get('#login tl-loading.sc-tl-button').click();
    cy.get('[data-testid="plan-qty-name"] span.block').contains('x1 Super Strength Collagen Zooki - 30 servings / Blackcurrant');
    cy.get('#btn_account_link_nav rect.w-full').click();
    cy.get('[title="Logout"] [type="button"]').click();
    looping();
    });
  }

})