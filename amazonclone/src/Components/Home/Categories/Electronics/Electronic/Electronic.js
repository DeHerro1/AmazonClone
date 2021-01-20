import React from 'react';
import Detail from '../../../../Detail/Detail';
import camera from '../../../../../assets/camera.jpg';
import acc from '../../../../../assets/accesories.jpg';
import car from '../../../../../assets/car elec.jpg';
import comp from '../../../../../assets/computer-acc.jpg';
import headphone from '../../../../../assets/headphone.jpg';
import speaker from '../../../../../assets/speaker.jpg';
import {Switch, Route} from 'react-router-dom';

function Computer() {
    return (
        <div className="computerDetails">
            <Switch>
                <Route path="/electronics/electronic1">
                <Detail
                img={camera}
                rating={5}
                price={60}
                id="4323409"
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
                </Route>

                <Route path="/electronics/electronic2">
                <Detail
                img={acc}
                rating={4}
                price={60}
                id="4323410"
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
                </Route>

                <Route path="/electronics/electronic3">
                <Detail
                img={speaker}
                rating={3}
                price={60}
                id="4323411"
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
                </Route>

                <Route path="/electronics/electronic4">
                <Detail
                img={car}
                rating={2}
                price={40}
                id="4323412"
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
                </Route>

                <Route path="/electronics/electronic5">
                <Detail
                img={headphone}
                rating={2}
                price={60}
                id="4323413"
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
                </Route>

                <Route path="/electronics/electronic6">
                <Detail
                img={comp}
                rating={2}
                price={60}
                id="4323414"
                type='PlayStation 5'
                text="DualSense Wireless Controller"
                decimal="98"/>
                </Route>
            </Switch>
        </div>
    )
}

export default Computer;
