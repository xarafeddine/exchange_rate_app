import { useState, useCallback, useEffect } from "react";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { getExchangeRates } from "../api";
import {useSelector, useDispatch} from 'react-redux'
import { getAmount, getCurrencyCode, getCurrencyData, changeCurrencyCode } from "../store/rates";
import { supportedCurrencies } from "../store/rates";


export function ExchangeRate() {
  // const [amount, setAmount] = useState("1.50");
  // const [currencyCode, setCurrencyCode] = useState("USD");
  const dispatch = useDispatch()

  const amount = useSelector(getAmount)
  const currencyCode = useSelector(getCurrencyCode)

  const currencyData = useSelector(getCurrencyData)



  // const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  // fetch the exchange rates in first time 
  useEffect(() => {
    dispatch(changeCurrencyCode(currencyCode))
  }, []);

  // const handleCurrencyCode = useCallback(
  //   (e) => setCurrencyCode(e.target.value),
  //   []
  // );

  // const handleAmountChange = useCallback((e) => {
  //   let newAmount = e.target.value;
  //   setAmount(newAmount);
  // }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
