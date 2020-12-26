import React, {useState} from 'react'

export const ResultsContainer = ({
    results,
    searchParams,
    err,
    loading
}) => {
    const errorList = {
        [111]: "Something went wrong. Please refresh the page",
        [500]: "Internal server error, Please try after some time",
        [400]: "Fetching failed, please try again"
    };
    return (
        errorList[err] ? (
        <div
        className="row row-result"
        >
        <h5>{errorList[err]}</h5>
        </div>
    ) :
    results ? (
        <div>
            <ResultSummary 
            searchParams={searchParams} 
            total={results.count}
            loading={loading}
            />
            <ResultList
             cuisineList={results.hits}
             total={results.count}
            />
        </div>
    ) 
    : null
    )
}

export const ResultSummary = ({
    searchParams,
    total,
    loading
}) => {
    const [history, setHistory] = useState(1);
    let title = '';
    if( searchParams.length && searchParams[history-1] ){
        const {freeText, cuisine, diet, dish, health, meal} = searchParams[history-1];
        title = [freeText, cuisine, diet, dish, health, meal].filter( item => item ).join(", ");
    }

    return(
        <div
        className="row outline"
        >
            <div
            className="column"
            >
                <label>Total Results : {total}</label>
            </div>
            <div
            className="column history"
            >
                <label>
                    Last five searches : 
                    <select
                    onChange={(e) => setHistory(e.target.value)}
                    >
                        <option 
                        selected={loading ? true : false}
                        >1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </label>
                <label>
                    {title}
                </label>
            </div>
        </div>
    )
}

export const ResultList = ({
    cuisineList,
    total,
    err
}) => {

    return (
        total == "0" ? (
            <div
            className="row row-result"
            >
            <h5>No results found</h5>
            </div>
        ) :
        cuisineList.map( (cuisine) => {
            return(
                    <div
                    className="row row-result"
                    >
                        <div
                        className="column imageWrap"
                        >
                        <a href={cuisine.recipe.url} target="_blank">
                            <img src={cuisine.recipe.image} />
                            <label>{cuisine.recipe.label}</label>
                        </a>
                        </div>
                        <div
                        className="column"
                        >
                            <label className="ingredients">
                            ingredients : 
                            </label>
                            <ul>
                            {cuisine.recipe.ingredients.map( (item, index) => {
                                return(
                                    <li key={index}>
                                 {item.text}
                                </li>
                                )
                            })}
                            </ul>
                            
                        </div>
                    </div>
            )
        })
    )
}