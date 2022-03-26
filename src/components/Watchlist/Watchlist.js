import React, { useEffect } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { useDispatch, useSelector } from "react-redux";
import Preloader from '../../components/Preloader';
import './Watchlist.css';
import getAllСryptocurrencies from '../../api/getAllСryptocurrencies';

// Helper funcs
function priceFormatter(cell) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + parseFloat(cell.USD.price).toFixed(5);
}

function marketFormatter(cell) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + parseFloat(cell.USD.marketCap).toFixed(2);
}

export default function Watchlist() {
    const allCurrencies = useSelector(state => state.currencies.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllСryptocurrencies())
    }, []);

    // Preload
    if (!allCurrencies) return <Preloader />;

    return (
        <div className='tableWrapper'>
            <h1>Watchlist</h1>
            <BootstrapTable className="tableHeader" data={allCurrencies} striped={true} hover={true}>
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='values' dataFormat={priceFormatter}>Price</TableHeaderColumn>
                <TableHeaderColumn dataField='circulatingSupply'>Circ. Supply</TableHeaderColumn>
                <TableHeaderColumn dataField='values' dataFormat={marketFormatter} >Market Cap</TableHeaderColumn>
                <TableHeaderColumn dataField='category'>Category</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}