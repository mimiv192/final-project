import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import LowerCards from '../components/Cards/LowerCards';

class LowerLimbs extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title ="Lower Limb Selection" subtitle ="See What's Available"/>
            
                <div className= "container">
 <h2>
 Welcome to PBP
</h2>
 <p>
    We have a selection of lower limb prosthetics from our authorized donars. 
</p>
</div>
<div>
    <LowerCards />
</div>
< Footer />
            </div>
        );
    }
}
export default LowerLimbs;