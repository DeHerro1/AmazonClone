import React from 'react';
import Computer from '../Category/Games/Game/Game';
import tv1 from '../../../../assets/tv1.webp';
import tv2 from '../../../../assets/tv2.webp';
import tv3 from '../../../../assets/tv3.webp';
import tv4 from '../../../../assets/tv4.webp';
import Nav from '../../Nav/Nav';
import {Route, Switch} from 'react-router-dom';
import Tv from './Tv/Tv';

function Computers() {
    return (
        <div>
             <Nav />
             <Switch>
             <Route path="/tvs/tv" component={Tv} />
             <Route path="/tvs/tv2" component={Tv} />
             <Route path="/tvs/tv3" component={Tv} />
             <Route path="/tvs/tv4" component={Tv} />
             <Route path="/tvs">
             <Computer
                img={tv1}
                rating={5}
                link='/tvs/tv'
                price='120'
                type='Electronics'
                text="TCL 32' 3-Series 720p ROKU Smart TV - 32S335"
                decimal="98"/>
            <Computer
                img={tv2}
                rating={4}
                link='/tvs/tv2'
                price='140'
                type='Electronics'
                text='TCL 55" 5-Series 4K UHD Dolby Vision HDR QLED ROKU Smart TV - 55S535'
                decimal="98"/>
            <Computer
                img={tv3}
                rating={5}
                link='/tvs/tv3'
                price='150'
                type='Electronics'
                text="Hisense 32-Inch Class H4 Series 
                LED Roku Smart TV with Alexa Compatibility (32H4F, 2020 Model)"
                decimal="98"/>    
            <Computer
                img={tv4}
                rating={2}
                link='/tvs/tv4'
                price='447'
                type='Electronics'
                text='SAMSUNG QN32Q50RAFXZA Flat 32" QLED 4K 32Q50 Series Smart TV'
                decimal="98"/>
                </Route>
             </Switch>
            
                
        </div>
    )
}

export default Computers;
