import dayjs from 'dayjs';

Cypress.dayjs = dayjs;
class TransactionsPage{
    selectorList(){
        const selectors = {
            firstDateTable: '[data-testid="table-date"]',
            fisrtIdTable: 'tr:nth-of-type(1) [data-testid="table-subscriptions"] span.block',
        }

        

        return selectors
    }

    currentDateMatcher(){
        const dateFormat = Cypress.dayjs().format('MMM D, YYYY');

        cy.get(this.selectorList().firstDateTable).eq(0).contains(dateFormat);
    }

    idMatcher(id){
        cy.get(this.selectorList().fisrtIdTable).contains(id)
    }

}

export default TransactionsPage