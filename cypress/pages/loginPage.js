class LoginPage{
    selectorList(){
        const selectors = {
            userNameField: "#username [name='email']",
            passwordField: '#password input.pl-3',
            continueButton: "#continue tl-loading.sc-tl-button",
            submitButton: "#login tl-loading.sc-tl-button",
        }

        return selectors
    }

    acessLoginPage(){
       cy.visit('/cart-schedule') 
    }

    loginWithUser(login){
        cy.get(this.selectorList().userNameField).type(login, { delay: 0 })
        
    }

    loginsWithPassword(password){
        cy.get(this.selectorList().passwordField).type(password)
    }

    continueButton(){
        cy.get(this.selectorList().continueButton).click()
    }

    submitButton(){
        cy.get(this.selectorList().submitButton).click()
    }
}

export default LoginPage