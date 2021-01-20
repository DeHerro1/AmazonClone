import React from 'react';
import './Subtotal.css';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import CurencyFormat from 'react-currency-format';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <p className="total_number">{basket.length} items:
            <strong className="total_price"><CurencyFormat
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
                /></strong></p>
            <button className='totalBtn'>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
