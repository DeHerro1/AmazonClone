import React from 'react';
import Computer from '../Category/Games/Game/Game';
import camera from '../../../../assets/camera.jpg';
import acc from '../../../../assets/accesories.jpg';
import car from '../../../../assets/car elec.jpg';
import comp from '../../../../assets/computer-acc.jpg';
import headphone from '../../../../assets/headphone.jpg';
import speaker from '../../../../assets/speaker.jpg';

import Nav from '../../Nav/Nav';
import {Route, Switch} from 'react-router-dom';
import Electronic from './Electronic/Electronic'

function Computers() {
    return (
        <div>
             <Nav />
             <Switch>
             <Route path="/electronics/electronic1" component={Electronic} />
             <Route path="/electronics/electronic2" component={Electronic} />
             <Route path="/electronics/electronic3" component={Electronic} />
             <Route path="/electronics/electronic4" component={Electronic} />
             <Route path="/electronics/electronic5" component={Electronic} />
             <Route path="/electronics/electronic6" component={Electronic} />
             <Route path="/electronics">
             <Computer
                img={camera}
                rating={5}
                link="/electronics/electronic1"
                price='60'
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
            <Computer
                img={acc}
                rating={4}
                link="/electronics/electronic2"
                price='60'
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
            <Computer
                img={speaker}
                rating={3}
                link="/electronics/electronic3"
                price='60'
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>    
            <Computer
                img={car}
                rating={2}
                link="/electronics/electronic4"
                price='60'
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
                <Computer
                img={headphone}
                rating={2}
                link="/electronics/electronic5"
                price='60'
                id="4323413"
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
                <Computer
                img={comp}
                rating={2}
                link="/electronics/electronic6"
                price='60'
                id="4323414"
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
                </Route>
             </Switch>
            
                
        </div>
    )
}

export default Computers;
