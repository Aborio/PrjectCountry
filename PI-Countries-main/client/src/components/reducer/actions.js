import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const SEARCH = 'SEARCH';
export const ERROR = 'ERROR';
export const ORDER_CARDS = 'ORDER_CARDS';
export const FILTER_BY_REGION = 'FILTER_BY_REGION';
export const RESET_FILTER = 'RESET_FILTER';
export const SEARCH_NAME = 'SEARCH_NAME';
export const CREATE = 'CREATE';
export const GET_ACTIVITY = 'GET_ACTIVITY';

export const getCountries = () =>{
    return async function(dispatch){
        const apiCountry = await axios.get(
            '//127.0.0.1:3001/countries/'
            )
        const country = apiCountry.data;
        dispatch({type: GET_COUNTRIES, payload: country});

    };
};

export const getCountry = (id) => async dispatch => {
    try {
        let json = await axios.get(`//localhost:3001/countries/${id}`)
        return dispatch({ type: GET_COUNTRY, payload: json.data })
    } catch (error) {
        return dispatch({ type: ERROR })
    }
};

export const getByName = (name) => async dispatch => {
    try {
        let json = await axios.get(`//localhost:3001/countries/${name}`)
        return dispatch({ type: SEARCH, payload: json.data })
    } catch (error) {
        return dispatch({ type: ERROR })
    }
}

export const getByNameTwo =  (name) => async dispatch =>{
    try {
        let json = await axios.get(`//localhost:3001/countries/name?name=${name}`)
        return dispatch({ type: SEARCH_NAME, payload: json.data })
    } catch (error) {
        return dispatch({ type: ERROR })
    }
}



export const orderCards = (order) => {
    return {
        type: 'ORDER_CARDS',
        payload: order
    }
}

export const filterByRegion = (region) => {
    return {
        type: 'FILTER_BY_REGION',
        payload: region
    }
}

export function postActivity (payload){
    return async function(dispatch){
        const apiActivity = await axios.post(
            'http://localhost:3001/activities/', payload
        )
        console.log(apiActivity.data)
        const activity = apiActivity.data;
        dispatch({type: CREATE, payload: activity});
    };

}

export const getActivities = () =>{
    return async function(dispatch){
        const apiActivity = await axios.get(`//localhost:3001/activities`
            )
        const activity = apiActivity.data;
        dispatch({type: GET_ACTIVITY, payload: activity});
        
    };
};
    




export const resetFilter = () => {
    return {
        type: 'RESET_FILTER'
    }
}


// export const filterBySource =() =>{}