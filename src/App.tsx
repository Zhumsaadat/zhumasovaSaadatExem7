import React, { useState } from 'react'
import './App.css'
import Food from './Food/Food';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBurger, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import OrderedFood from './OrderedFood/OrderedFood';

library.add(faCheckSquare, faCoffee)

interface Props extends React.PropsWithChildren{
  name: string,
  price: number,
  icon: any,
  id: number
}

interface Orders extends React.PropsWithChildren {
  name: string,
  count: number,
  price: number
  id: number,
}

function App() {
  const [foods, setFoot] = useState<Props[]>([
    {name: 'Hamburger', price: 120,  icon: faBurger, id: 1},
    {name: 'Hamburger2', price: 120,  icon: faBurger, id: 2},
    {name: 'Hamburger3', price: 120,  icon: faBurger, id: 3},
    {name: 'Hamburger4', price: 120,  icon: faBurger, id: 4},
    {name: 'Hamburger5', price: 120,  icon: faBurger, id: 5},
    {name: 'Hamburger6', price: 120,  icon: faBurger, id: 6},
  ]);

  const [orders, setOrder] = useState<Orders[]>([
     {name: "Hamburger", price: 80, count: 0, id: 1},
    {name: "Hamburger", price: 80, count: 0, id: 1}
  ]);

  const display = () => {
    if (!orders[0]) {
      return "d-block"
    } else {
      return "d-none"
    }
  }

  const orderThisFood = (e) => {
    const id = e.currentTarget.id - 1;
    const orderThisFood: Orders = {
        name: foods[id].name,
        count: 1,
        price: foods[id].price,
        id: orders.length + 1,
      };

      if(orders.find(food => food.name === orderThisFood.name)){
        setOrder((prevState) => {
          prevState.find(food => food.name === orderThisFood.name)!.count++
          return [...prevState]
        })
        console.log(orders.find(food => food.name === orderThisFood.name))
      } else {
        setOrder((prevState) => {
          return [...prevState, orderThisFood];
        })
      }

    }


  return (
   <div className="dFlex">
     <div className="menuBlock">
       <h2 className="titleMenuBlock">Menu</h2>
       <div className="foods">
         {foods.map((food, index) => {
           return (<div key={index}>
               <Food
                 name={food.name}
                 price={food.price}
                 icon={food.icon}
                 id= {food.id}
                 orderThisFood={orderThisFood}
               />
             </div>
           );
         })}
       </div>
     </div>


     <div className="bill">
         <h2>Order details</h2>
         <div className={display()}>
         <div>order is empty! <br/> Pleas add some foods!</div>
       </div>
       <div>
         {orders.map((food, index) => {
           return (<div key={index}>
             <OrderedFood
               name={food.name}
               price={food.price}
               count={food.count}
               id= {food.id}
             />
           </div>)})}
       </div>

     </div>
   </div>

  )
}

export default App
