import {FILTER_BY_ACTIVITY ,GET_ACTIVITY ,CREATE ,SEARCH_NAME ,RESET_FILTER ,GET_COUNTRIES, SEARCH, ERROR, GET_COUNTRY, ORDER_CARDS, FILTER_BY_REGION } from "./actions";


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
                countries: [...action.payload]
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
            console.log(allCountries)
            // const filtered = action.payload === 'All' ?
            //     allCountries :
            //     allCountries.filter(el =>
            //     el.continent === action.payload)                 este caso funciona con la api de antes, la cual funcionaba con la acual pero al principio.
            //     console.log(filtered)

            const filtered = action.payload === 'All' ?
            allCountries :
            allCountries.filter(el => {
            const formattedPayload = action.payload.toLowerCase(); // Convertir a minúsculas
            const formattedContinent = el.continent.replace(/[{}]/g, '').toLowerCase(); // Eliminar las llaves y convertir a minúsculas
            return formattedContinent === formattedPayload;
            });
            return {
                ...state,
                countries: filtered
            }

        case FILTER_BY_ACTIVITY:
            const allCountriesTwo = [...state.countries]
            const filteredTwo = action.payload === 'All' ?
                allCountriesTwo :
                allCountriesTwo.filter(el => el.activities === action.payload)
            return {
                ...state,
                countries: filteredTwo
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