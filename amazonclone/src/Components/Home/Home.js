import React from 'react';
import './Home.css';
import ImageSlider from './ImageSlider';
import Categories from './Categories/Categories';
import {Switch, Route} from 'react-router-dom';
import Games from './Categories/Category/Games/Games';
import Nav from './Nav/Nav';
import Computers from './Categories/Computer/Computers';
import Tvs from './Categories/Tvs/Tvs';
import Electronics from './Categories/Electronics/Electronics';


function Home() {
    return (
        <div className="home">
            <Switch>
                <Route path="/games">
                    <Games />
                </Route>
                <Route path="/computers">
                    <Computers />
                </Route>
                <Route path="/tvs">
                    <Tvs />
                </Route>
                <Route path="/electronics">
                    <Electronics />
                </Route>
                <Route path="/">
                <Nav />
            <div className="categories_container">
                <ImageSlider />
                <Categories />
            </div>
                </Route>
            </Switch>
        </div>
    )
}

export default Home;
