import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{`XCD 65`}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox'/>This order contains gifts
                </small>
                </>
            )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'XCD'}
        />
        <button>Proceed to Checkout</button>
            
        </div>
        );    
}

export default Subtotal;
