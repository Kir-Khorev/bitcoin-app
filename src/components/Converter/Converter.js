import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Preloader from '../../components/Preloader';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import getAllСryptocurrencies from '../../api/getAllСryptocurrencies';
import CurrencyRow from './CurrencyRow';
import icon from '../../assets/icon/arrow.svg';
import './Converter.css';

function Converter() {
    const allCurrencies = useSelector(state => state.currencies.data);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState(1);
    const [toCurrency, setToCurrency] = useState(1);

    useEffect(() => {
        dispatch(getAllСryptocurrencies())
    }, []);

    // Set Amount:
    let incAmount = () => setAmount(Number(amount) + 1);
    let decAmount = () => amount > 0 ? setAmount(amount - 1) : '';
    let handleChange = (e) => {
        (e.target.validity.valid) ? setAmount(e.target.value) : setAmount(amount);
    };

    // Preloader
    if (!allCurrencies) return <Preloader />;

    return (
        <div className="converter">
            <InputGroup size="lg" className='converterAmount'>
                <Button onClick={() => incAmount()} variant="info">+</Button>
                <Button onClick={() => decAmount()} variant="info">-</Button>
                <FormControl type="text" pattern="[0-9]*" className="formControl" value={amount} onChange={handleChange} placeholder="1" />
                <InputGroup.Text id="basic-addon1" className='converterAmount__amount'>Amount</InputGroup.Text>
            </InputGroup>

            <h2>Choose currencies:</h2>
            <div className='currencyRow'>
                {/* First dropdown */}
                <CurrencyRow currencyOptions={allCurrencies} selectedCurrency={fromCurrency}
                    onChangeCurrency={e => setFromCurrency(e.target.value)}
                />
                <img src={icon} alt='arrow-icon' className='currencyRow--icon' />
                {/* Second dropdown */}
                <CurrencyRow currencyOptions={allCurrencies} selectedCurrency={toCurrency}
                    onChangeCurrency={e => setToCurrency(e.target.value)}
                />
            </div>
            <h1>Result: {fromCurrency && toCurrency ? ((fromCurrency * amount) / toCurrency) : 0}</h1>
        </div>
    );
}

export default Converter;