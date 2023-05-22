import {GET_ACTIVITY ,CREATE ,SEARCH_NAME ,RESET_FILTER ,GET_COUNTRIES, SEARCH, ERROR, GET_COUNTRY, ORDER_CARDS, FILTER_BY_REGION } from "./actions";


const initialState = {
    countries: [],
    sorting: [],
    allCountries: [],
    error: false,
    actividades: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case SEARCH:
            return {
                ...state,
                sorting: [action.payload]
            }
        case GET_COUNTRY:
            return {
                ...state,
                sorting: [...action.payload]
            }
        case SEARCH_NAME:
            return {
                ...state,
                countries: action.payload
            }

        case GET_ACTIVITY:
            return {
                ...state,
                actividades: action.payload
            }
            
        case ERROR:
            return {
                ...state,
                error: true
            }

        case CREATE:
            return {
                ...state,
                actividades: [...state.actividades, action.payload]
            }

        case FILTER_BY_REGION:
            const allCountries = [...state.countries]
            const filtered = action.payload === 'All' ?
                allCountries :
                allCountries.filter(el => el.region === action.payload)
            return {
                ...state,
                countries: filtered
            }




        case ORDER_CARDS:
            let sorted = action.payload === 'asc' ?
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }
                ) :
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                }
                )
            return {
                ...state,
                countries: sorted
                
            }

        case RESET_FILTER:
            return {
                ...state,
                countries: action.allCountries
            }
           

        default:
            return {...state};
    }
}

export default reducer;