import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBurger, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './food.css';

library.add(faBurger, faCheckSquare, faCoffee)

interface Props extends React.PropsWithChildren{
  name: string,
  price: number,
  icon: any,
  id: number,
  orderThisFood: () => void;
}

const Food: React.FC<Props> = ({name, price, icon, children, id, orderThisFood}) => {
    return (
        <div onClick={orderThisFood} className="food" id={id}>
          <div className="iconFood"><FontAwesomeIcon icon={icon} /></div>
          <div className="foodInfo">
            <h4 className="foodName">{name}</h4>
            <span>Price: {price}<strong>KGS</strong></span>
          </div>
        </div>
    );
};

export default Food;