import React from 'react';
import { Button, Form, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
    } = props

    return (
        <div className='currencySelect currencySelectWrapper' value={selectedCurrency} onChange={onChangeCurrency}>
            <Form.Select aria-label="Default select example" size="lg">
                {
                    currencyOptions.map((i) => {
                        return <option value={i.values.USD.price} key={i.id}>{i.name}</option>
                    })
                }
            </Form.Select>
        </div>
    );
}

export default CurrencyRow;
