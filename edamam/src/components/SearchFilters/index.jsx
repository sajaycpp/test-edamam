import React from 'react'
import {
    DIET_TYPE,
    HEALTH_TYPE,
    DISH_TYPE,
    MEAL_TYPE,
    CUISINE_TYPE
} from '../../config/filterConstants'
import '../style.css'
import {
    CuisineSelector,
    MealSelector,
    DishSelector,
    HealthSelector,
    DietSelector
} from './FormFields'

export class SearchFilters extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            cuisine: '',
            diet: '',
            dish: '',
            health: '',
            meal: '',
            freeText: '',
            avanceSearch: false
        }

        this.mealChanged = this.mealChanged.bind(this);
        this.cuisineChanged = this.cuisineChanged.bind(this);
        this.dietChanged = this.dietChanged.bind(this);
        this.dishChanged = this.dishChanged.bind(this);
        this.healthTypeChanged = this.healthTypeChanged.bind(this);
        this.freeTextChanged = this.freeTextChanged.bind(this);
        this.advanceSearchEnabled = this.advanceSearchEnabled.bind(this);
        
    }
    advanceSearchEnabled(val) {
        this.setState({avanceSearch: val})
    }

    freeTextChanged (val){
        this.setState({freeText: val})
    }

    cuisineChanged (val){
        this.setState({cuisine: val})
    }

    dietChanged (val){
        this.setState({diet: val})
    }

    dishChanged (val){
        this.setState({dish: val})
    }

    healthTypeChanged (val){
        this.setState({health: val})
    }

    mealChanged  (val){
        this.setState({meal: val})
    }

    
    render(){

        return(
        <div 
        className={`${!this.state.avanceSearch ? "formWrapper" : ""} form-bg`}
        >
         <div 
        className="formHeightWrapper"
        >
        <div
        className="row"
        >
            <div
            className="column"
            >
               <CuisineSelector 
                cuisineChanged={this.cuisineChanged}
                loading={this.props.loading}
                />
            </div>

             <div
            className="column"
            >
                <MealSelector 
                mealChanged={this.mealChanged}
                loading={this.props.loading}
                />
            </div>

        </div>

        <div
        className="row"
        >
            <div
            className="column"
            >
               <DishSelector 
               dishChanged={this.dishChanged}
               loading={this.props.loading}
               />
            </div>

             <div
            className="column"
            >
                <HealthSelector 
                healthTypeChanged={this.healthTypeChanged}
                loading={this.props.loading}
                />
            </div>

        </div>

        <div
        className="row"
        >
            <div
            className="column"
            >
               <DietSelector 
               dietChanged={this.dietChanged}
               loading={this.props.loading}
               />
            </div>

             {/* <div
            className="column"
            >
                <MealSelector />
            </div> */}

        </div>

        <div
        className="row row-last"
        >
            <div
            className="column"
            >
                <label>Enter your favourite cuisine</label>
              <input 
              type="text" 
              onChange={ (e) => this.freeTextChanged(e.target.value) }
              />


            </div>

            <div
            className="column"
            >
                
               <button
               disabled={this.props.loading}
               onClick={ () => this.props.fetchCuisines(this.state) }
               >
                   Search Cuisine
               </button>
               {this.props.loading &&<div class="lds-dual-ring"></div>}
                
                <input 
                type="checkbox" 
                onClick={ (e) => this.advanceSearchEnabled(e.target.checked) }
                />
                <label
                className="advanced"
                >Advance Search</label>
                
            </div>

             {/* <div
            className="column"
            >
                <MealSelector />
            </div> */}

        </div>
        </div>
        </div>
        )
    }


}