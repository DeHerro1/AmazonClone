import React from 'react';
import Game from './Game/Game';
import pad from '../../../../../assets/pad1.webp';
import pad2 from '../../../../../assets/pad2.webp';
import pad3 from '../../../../../assets/pad3.webp';
import pad4 from '../../../../../assets/pad4.webp';
import {withRouter, Switch, Route} from 'react-router-dom';
import Pad1 from './Details/Pad1';
import Nav from '../../../Nav/Nav';

function Games() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path="/games/pad1" component={Pad1} />
                <Route path="/games/pad2" component={Pad1} />
                <Route path="/games/pad3" component={Pad1} />
                <Route path="/games/pad4" component={Pad1} />
                <Route path="/games">
                <Game
                img={pad}
                rating={5}
                link='/games/pad1'
                price='60'
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
                <Game
                img={pad2}
                rating={5}
                link='./games/pad2'
                price='46'
                text="Nintendo Switch Pro Controller"
                type='Nintendo Switch'
                decimal="95"/>
                <Game
                img={pad3}
                rating={4}
                price='50'
                link='./games/pad3'
                text="Xbox Core Controller - Carbon Black"
                type='Xbox One'
                decimal="99"/>
                <Game
                img={pad4} 
                rating={4}
                price='30'
                text="Xbox Core Controller - Robot White"
                type='by Microsoft'
                link='./games/pad4'
                decimal="98"/>
                </Route>
            </Switch>
            
        </div>
    )
}

export default withRouter(Games);
