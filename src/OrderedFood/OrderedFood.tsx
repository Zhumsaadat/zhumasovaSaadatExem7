import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faX, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faX, faCoffee)
import './OrderedFoods.css'

interface Order extends React.PropsWithChildren {
  name: string,
  count: number,
  price: number
  id: number,
}


const OrderedFood: React.FC<Order> = ({name, count, price, id}) => {


  return (
    <div className="orderedFoods">
      <div>{name}</div>
      <strong>{count}x</strong>
      <div>{price}KGS</div>
      <div className="iconDelete"><FontAwesomeIcon icon="fa-solid fa-x" /></div>
    </div>
  );
};

export default OrderedFood;