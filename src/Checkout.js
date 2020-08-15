import React from 'react'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{basket} ] = useStateValue();

    return 
        <div className='checkout'>
            Hello there
        </div>
    
}

export default Checkout
