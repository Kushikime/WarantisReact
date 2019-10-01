import React from 'react';

import Mainpage from '../mainPage';
import ProfitCalculator from "../ProfitCalculator/ProfitCalculator";
import SaveFond from "../SaveFond/SaveFond";
import SignUp from "../SignUp/SignUp";
import Footer from "../Footer/Footer";
import CreateDeposit from "../CreateDeposit/CreateDeposit";

function Home() {

    return (
        <div>
            <CreateDeposit />
            <Mainpage />
            <ProfitCalculator />
            <SaveFond />
            <SignUp />
            <Footer />
        </div> 
    );
}
export default Home;
