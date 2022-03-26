import { Navbar, Container } from 'react-bootstrap';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from './Preloader';
import getATHData from '../api/getATHData';

const Header = () => {
    const content = useSelector(state => state); //this hook gives us redux store state
    const dispatch = useDispatch(); //this hook gives us dispatch method

    useEffect(() => {
        dispatch(getATHData())
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
            <Container className='navbarHeader'>
                <Navbar.Brand style={{fontSize: "18px"}} href="#"><p>Bitcoin ATH:</p>${content ? content.ath.data.athPrice.USD.toFixed(2) : 'No data'}</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end navbarHeader-fromto" style={{marginRight: "35px", fontWeight: "600", fontSize: '16px'}}>
                    <Navbar.Text style={{marginRight: "35px"}}>
                        <p>From All-Time High:</p><span>{fromATH.toFixed(2)}%</span>
                    </Navbar.Text>
                    <Navbar.Text>
                        <p>To All-Time High:</p><span>{toATH.toFixed(2)}%</span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;