import React from 'react';
import Header from '../Header'
import {DropDown} from '../DropDown';
import Footer from '../Footer'
import EscortsImages from '../EscortsImages';
import './Home.scss'

const Home = () => (
    <div className="homePage">
    <Header />
    <DropDown />
    <EscortsImages />
    <Footer />
</div>
)

export default Home;