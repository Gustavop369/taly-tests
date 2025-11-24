class SearchPage{
    selectorList(){
        const selectors = {
            searchBar: '#autocomplete-0-label',
            searchBarInput:'#autocomplete-0-input',
        
        }

        return selectors
    }

    searchBar(searchcontent, listselector){
        cy.get(this.selectorList().searchBar).click()
        cy.get(this.selectorList().searchBarInput).type(searchcontent)
        cy.get(listselector).click()
    }


}

export default SearchPage