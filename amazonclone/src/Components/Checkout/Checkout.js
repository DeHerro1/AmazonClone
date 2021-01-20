import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Checkout.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your baske. To buy one ore more, 
                        click "Add to basket" next to the item.</p>
                </div>
            ): (
                <div>
                    <h2 className="check_in">Your shopping basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            type={item.type}
                            text={item.text}
                            img={item.img}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
            <div className="checkout_right">
                <h1>subtotal</h1>
                <Subtotal />
            </div>
            )}
        </div>
    )
}

export default Checkout;
