import { Navbar, Container } from 'react-bootstrap';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import Preloader from './Preloader';
import getATHData from '../api/getATHData';
// import getAllСryptocurrencies from '../api/getAllСryptocurrencies';

const Header = () => {
    const content = useSelector(state => state); //this hook gives us redux store state
    const dispatch = useDispatch(); //this hook gives us dispatch method

    useEffect(() => {
        dispatch(getATHData())
        // dispatch(getAllСryptocurrencies())
    }, []);

    if (!content.ath.data) return <Preloader/>;

    const athPrice = content.ath.data.athPrice.USD;
    const currentPrice = content.ath.data.price.USD;

    //  From ATH
    const fromATH = (athPrice - currentPrice) / athPrice * 100;

    // To ATH
    const toATH = (athPrice - currentPrice) / currentPrice * 100;

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#"><p>Bitcoin ATH:</p>${content ? content.ath.data.athPrice.USD.toFixed(2) : 'No data'}</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{marginRight: "35px"}}>
                        <p style={{fontWeight:"600"}}>From ATH:</p><span>{fromATH.toFixed(2)}%</span>
                    </Navbar.Text>
                    <Navbar.Text>
                        <p style={{fontWeight:"600"}}>To ATH:</p><span>{toATH.toFixed(2)}%</span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;