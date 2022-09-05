import { getExchangeRates } from "../api";

const initialState = {
    amount: "12.00",
    currencyCode: "USD",
    currencyData: { USD: 1.0 }
}

export const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN","MAD"];


export function ratesReducer(state = initialState, action){
    switch (action.type){
        case "rates/amountChanged":
            return { ...state, amount: action.payload }
        case "rates/currencyCodeChanged":
            return { ...state, currencyCode: action.payload }
        case "rates/ratesReceived":
            return { ...state, currencyData: action.payload }
        default:
            return state ;
    }
    
   
}

//selectors

export const getAmount = state => state.rates.amount
export const getCurrencyCode = state => state.rates.currencyCode
export const getCurrencyData = state => state.rates.currencyData

//action creatores
export const changeAmount = (amount) => ({
    type: "rates/amountChanged",
    payload: amount
})

export function changeCurrencyCode(currencyCode){
    return function changeCurrencyCodeThunk(dispatch){
        dispatch({
            type: "rates/currencyCodeChanged",
            payload: currencyCode
        })
        getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
            dispatch({
                type: "rates/ratesReceived",
                payload: rates
            })
        })
    }
} 