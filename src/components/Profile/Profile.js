import React from 'react';
import Header from '../Header';
import ProfileWrapper from '../ProfileWrapper'
import Footer from '../Footer';
import {BreadCrub} from '../Common'
import '../../assets/styles/bread-crub.scss'
const Profile = () => {
    return(
        <div>
            <Header />
            <BreadCrub />
            <ProfileWrapper />
            <Footer />
        </div>
    )
}

export default Profile;