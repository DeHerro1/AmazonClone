import React from 'react';
import Detail from '../../../../Detail/Detail';
import laptop from '../../../../../assets/laptop.jpg';
import comp from '../../../../../assets/comp1.jpg';
import comp3 from '../../../../../assets/comp1.jpg';
import comp2 from '../../../../../assets/comp2.jpg';
import './Computer.css';
import {Switch, Route} from 'react-router-dom';

function Computer() {
    return (
        <div className="computerDetails">
            <Switch>
                <Route path="/computers/computer">
                    <Detail
                img={laptop}
                rating={5}
                id="4323405"
                price={360}
                type='by Acer'
                text="Acer Aspire 5 Slim Laptop, 
                15.6 inches Full HD IPS Display, 
                AMD Ryzen 3 3200U, Vega 3 Graphics,..."
                decimal="98"/>
                </Route>
                <Route path="/computers/computer2">
                <Detail
                img={comp}
                rating={4}
                id="4323406"
                price={60}
                type='by Roku'
                text="Roku Streaming Stick+ | HD/4K/HDR Streaming 
                Device with Long-range Wireless and Voice Remote with.."
                decimal="98"/>
                </Route>
                <Route path="/computers/computer3">
                <Detail
                img={comp2}
                rating={5}
                price={47}
                id="4323407"
                type='by Roku'
                text="Roku Premiere | HD/4K/HDR Streaming Media Player, 
                Simple Remote and Premium HDMI Cable"
                decimal="98"/>
                </Route>
                <Route path="/computers/computer4">
                <Detail
                img={comp3}
                rating={2}
                price={35}
                id="4323408"
                type='by Roku'
                text="Roku Streaming Stick+ | HD/4K/HDR Streaming 
                Device with Long-range Wireless and Voice Remote with.."
                decimal="98"/>
                </Route>
            </Switch>
           
        </div>
    )
}

export default Computer;
