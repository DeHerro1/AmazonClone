import React from 'react';
import Detail from '../../../../Detail/Detail';
import tv1 from '../../../../../assets/tv1.webp';
import tv2 from '../../../../../assets/tv2.webp';
import tv3 from '../../../../../assets/tv3.webp';
import tv4 from '../../../../../assets/tv4.webp';

import {Switch, Route} from 'react-router-dom';

function Computer() {
    return (
        <div className="computerDetails">
            <Switch>
                <Route path="/tvs/tv">
                    <Detail
                img={tv1}
                rating={5}
                price={60}
                id="4323415"
                type='Electronics'
                text='TCL 32" 3-Series 720p ROKU Smart TV - 32S335'
                decimal="98"/>
                </Route>
                <Route path="/tvs/tv2">
                <Detail
                img={tv2}
                rating={4}
                price={60}
                id="4323416"
                type='Electronics'
                text='TCL 55" 5-Series 4K UHD Dolby Vision HDR QLED ROKU Smart TV - 55S535'
                decimal="98"/>
                </Route>
                <Route path="/tvs/tv3">
                <Detail
                img={tv3}
                rating={5}
                price={150}
                id="4323417"
                type='Electronics'
                text="Hisense 32-Inch Class H4 Series 
                LED Roku Smart TV with Alexa Compatibility (32H4F, 2020 Model)"
                decimal="98"/>
                </Route>
                <Route path="/tvs/tv4">
                <Detail
                img={tv4}
                rating={2}
                id="4323418"
                price={447}
                type='Electronics'
                text='SAMSUNG QN32Q50RAFXZA Flat 32" QLED 4K 32Q50 Series Smart TV'
                decimal="98"/>
                </Route>
            </Switch>
           
        </div>
    )
}

export default Computer;
