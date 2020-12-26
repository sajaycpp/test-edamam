import React from 'react'
import {
    SearchFilters
} from '../../components/SearchFilters'
import{
    ResultsContainer
} from '../../components/SearchResults'
import{
    API_BASE_URL
} from '../../config/common'

export class SearchWrapper extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            results: null,
            err: false,
            searchParams: [],
            loading: false
        }

        this.fetchCuisines = this.fetchCuisines.bind(this);
    }

    fetchCuisines (apiProps) {
        
        const url = `${API_BASE_URL}/search?` +
        `q=${apiProps.freeText}&` +
        (apiProps.cuisine ? `cuisineType=${apiProps.cuisine}&` : '') +
        (apiProps.meal? `mealType=${apiProps.meal}&` : '') +
        (apiProps.dish ? `dishType=${apiProps.dish}&` : '') +
        (apiProps.health ? `health=${apiProps.health}&` : '') +
        `calories=100-300&` +
        (apiProps.diet ? `diet=${apiProps.diet}&` : '') +
        `time=1`;
        

        this.setState({loading: true});
        fetch(url)
        .then(
            res => {
                return res.json()
            },
            (err) => {
                this.setState({
                    loading: false,
                    err: !err.status ? 111 : (err.status >= 500 ? 500 : 400)
                });
            }
        )
        .then( (resp) => {
            this.state.searchParams.unshift( apiProps );
            if( this.state.searchParams.length > 5 ){
                this.state.searchParams.pop();
            }
            this.setState({
                results: resp,
                searchParams: this.state.searchParams,
                loading: false,
                err: false
            });
            }
        )
    }

    render(){
        let title = '';
        if( this.state.searchParams.length ){
            const {freeText, cuisine, diet, dish, health, meal} = this.state.searchParams[0];
            title = [freeText, cuisine, diet, dish, health, meal].filter( item => item ).join(", ");
        }
        
        return (
        <div>
            <header className="App-header">
            <h5>
            {title ? `${title} Recipes`: 'Search Recipes'}
            </h5>
            </header>
            <SearchFilters 
            fetchCuisines={this.fetchCuisines}
            loading={this.state.loading}
            />
            <ResultsContainer 
            {...this.state}
            />
        </div>
        )
    }
}