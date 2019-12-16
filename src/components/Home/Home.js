import React from 'react';
import Header from '../Header'
import {DropDown} from '../DropDown';
import Footer from '../Footer'
import EscortsImages from '../EscortsImages';
import Container from '../../container';
import './Home.scss'

const Home = () => (
    <div className="homePage">
       
    <Header />
    <Container>  
    <DropDown />
    <EscortsImages />
    </Container>
    <Footer />
</div>
)

export default Home;