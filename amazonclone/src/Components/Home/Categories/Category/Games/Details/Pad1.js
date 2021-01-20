import React from 'react';
import Detail from '../../../../../Detail/Detail';
import pad from '../../../../../../assets/pad1.webp';
import pad2 from '../../../../../../assets/pad2.webp';
import pad3 from '../../../../../../assets/pad3.webp';
import pad4 from '../../../../../../assets/pad4.webp';
import {Switch, Route} from 'react-router-dom';

function Details(props) {
    console.log(props)
    return (
        <div className="details">
            <Switch>
                <Route path="/games/pad1">
                <Detail
                img={pad}
                rating={5}
                price={60}
                id="4323401"
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
                </Route>
                <Route path="/games/pad2">
                <Detail
                img={pad2}
                rating={5}
                price={46}
                id="4323402"
                text="Nintendo Switch Pro Controller"
                type='Nintendo Switch'
                decimal="95"/>
                </Route>
                <Route path="/games/pad3">
                <Detail
                img={pad3}
                rating={4}
                price={50}
                id="4323403"
                link='./games/pad3'
                text="Xbox Core Controller - Carbon Black"
                type='Xbox One'
                decimal="99"/>
                </Route>
                <Route path='/games/pad4'>
                <Detail
                img={pad4} 
                rating={4}
                price={30}
                id="4323404"
                text="Xbox Core Controller - Robot White"
                type='by Microsoft'
                link='./games/pad4'
                decimal="98"/>
                </Route>
            </Switch>
           
        </div>
    )
}

export default Details;
