import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import Category from './Category/Category';
import './Categories.css';
import game from '../../../assets/game.jpg';
import computer from '../../../assets/computer.jpg';
import deals from '../../../assets/deals.jpg';
import tv from '../../../assets/tv.jpg';
import electronics from '../../../assets/electronics.jpg';
import nono from '../../../assets/nonoPrime.jpg';
import basics from '../../../assets/amazonbasics.jpg';
import bed from '../../../assets/bed.jpg';

function Categories() {
    return (
        <div className="categories">
            <Switch>
            <Route path="/">
                <Category
                title="Gaming Accessories" 
                img={game}
                text="Shop our full selection"
                link="/games"/>
                <Category
                title="Computer & Accesories" 
                img={computer}
                text="See more"
                link="/computers" />
                <Category
                title="Find your ideal TV" 
                img={tv}
                text="See more"
                link="/tvs"/>
                <Category
                title="Electronics" 
                img={electronics}
                text="See more"
                link="/electronics" />
                <Category
                title="Shop top categories" 
                img={nono}
                text="See more" />
                <Category
                title="AmazonBasics" 
                img={basics}
                text="See more" />
                <Category
                title="Explore home bedding" 
                img={bed}
                text="See more"/>
                 <Category
                title="Data & Promotions" 
                img={deals}
                text="Shop Now"/>
            </Route>
            </Switch>
            
        </div>
    )
}

export default withRouter(Categories);