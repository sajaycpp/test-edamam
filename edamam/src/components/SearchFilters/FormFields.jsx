import React from 'react'
import {
    DIET_TYPE,
    HEALTH_TYPE,
    DISH_TYPE,
    MEAL_TYPE,
    CUISINE_TYPE
} from '../../config/filterConstants'


export const CuisineSelector = ({
    cuisineChanged,
    loading
}) => {
    return(
        <>
        <label>
        Cuisine Type
        </label>
        <select
        disabled={loading}
        onChange={(e) => cuisineChanged(e.target.value)}
        >
        <option value="">Select</option>
            {CUISINE_TYPE.map( (itemType, index) => {
                return(
                    <option key={index}>
                        {itemType}
                    </option>
                );
            })}
            
        </select>
        </>
    );
}

export const MealSelector = ({
    mealChanged,
    loading
}) => {
    return(
        <>
        <label>
        Meal Type
        </label>
        <select
        disabled={loading}
        onChange={(e) => mealChanged(e.target.value)}
        >
            <option value="">Select</option>
            {MEAL_TYPE.map( (itemType, index) => {
                return(
                    <option key={index}>
                        {itemType}
                    </option>
                );
            })}
            
        </select>
        </>
    );
}

export const DishSelector = ({
    dishChanged,
    loading
}) => {
    return(
        <>
        <label>
            Dish Type
            </label>
            <select
            disabled={loading}
            onChange={(e) => dishChanged(e.target.value)}
            >
                <option value="">Select</option>
                {DISH_TYPE.map( (itemType, index) => {
                    return(
                        <option key={index}>
                            {itemType}
                        </option>
                    );
                })}
                
            </select>
        </>
    );
}

export const HealthSelector = ({
    healthTypeChanged,
    loading
}) => {
    return(
        <>
        <label>
            Health Type
            </label>
            <select
            disabled={loading}
            onChange={(e) => healthTypeChanged(e.target.value)}
            >
                <option value="">Select</option>
                {HEALTH_TYPE.map( (itemType, index) => {
                    return(
                        <option value={itemType.value} key={index}>
                            {itemType.label}
                        </option>
                    );
                })}
                
            </select>
        </>
    );
}

export const DietSelector = ({
    dietChanged,
    loading
}) => {
    return(
        <>
        <label>
            Diet Type
            </label>
            <select
            disabled={loading}
            onChange={(e) => dietChanged(e.target.value)}
            >
                <option value="">Select</option>
                {DIET_TYPE.map( (itemType, index) => {
                    return(
                        <option value={itemType.value} key={index}>
                            {itemType.label}
                        </option>
                    );
                })}
                
            </select>
        </>
    );
}

// export const CuisineSelector = (){
//     return(

//     );
// };