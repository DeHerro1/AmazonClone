import React from 'react';
import Computer from '../Category/Games/Game/Game';
import laptop from '../../../../assets/laptop.jpg';
import comp from '../../../../assets/comp1.jpg';
import comp2 from '../../../../assets/comp2.jpg';
import Nav from '../../Nav/Nav';
import {Route, Switch} from 'react-router-dom';
import ComputerDetail from './Computer/Computer'

function Computers() {
    return (
        <div>
             <Nav />
             <Switch>
             <Route path="/computers/computer" component={ComputerDetail} />
             <Route path="/computers/computer2" component={ComputerDetail} />
             <Route path="/computers/computer3" component={ComputerDetail} />
             <Route path="/computers/computer4" component={ComputerDetail} />
             <Route path="/computers">
             <Computer
                img={laptop}
                rating={5}
                link='/computers/computer'
                price='60'
                type='by Acer'
                text="Acer Aspire 5 Slim Laptop, 
                15.6 inches Full HD IPS Display, 
                AMD Ryzen 3 3200U, Vega 3 Graphics,..."
                decimal="98"/>
            <Computer
                img={comp}
                rating={4}
                link='/computers/computer2'
                price='60'
                type='by Roku'
                text="Roku Streaming Stick+ | HD/4K/HDR Streaming 
                Device with Long-range Wireless and Voice Remote with.."
                decimal="98"/>
            <Computer
                img={comp2}
                rating={5}
                link='/computers/computer3'
                price='60'
                type='by Roku'
                text="Roku Premiere | HD/4K/HDR Streaming Media Player, 
                Simple Remote and Premium HDMI Cable"
                decimal="98"/>    
            <Computer
                img={comp}
                rating={2}
                link='/computers/computer4'
                price='60'
                type='by Roku'
                text="Roku Streaming Stick+ | HD/4K/HDR Streaming 
                Device with Long-range Wireless and Voice Remote with.."
                decimal="98"/>
                </Route>
             </Switch>
            
                
        </div>
    )
}

export default Computers;
