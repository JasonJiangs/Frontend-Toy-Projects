import './App.css';
import Meal from "./components/meal/Meal";
import {useDebugValue, useState} from "react";

function App() {
    const initialData = [
        {
            id: '1',
            title: 'Big Mac',
            desc: '800-900 Cal.',
            price: 11.09,
            img: '/imgs/burger.png'
        }, {
            id: '2',
            title: 'McNuggets',
            desc: '1660 Cal. 40x',
            price: 12.09,
            img: '"/imgs/mcnuggets.png"'
        }, {
            id: '3',
            title: 'Chocolate Shake',
            desc: '650 Cal.',
            price: 5.09,
            img: '/imgs/chocolateShake.png'
        }, {
            id: '4',
            title: 'Cookie',
            desc: '140-170 Cal. 1x',
            price: 1.59,
            img: '/imgs/cookie.png'
        }, {
            id: '5',
            title: 'Apple Pie',
            desc: '510 Cal.',
            price: 2.99,
            img: '/imgs/applePie.png'
        }
    ]
    const [mealData, setMealsData] = useState(initialData)

    // store cart data
    const [cartData, setCartData] = useState({
        items:[],
        totalAmount: 0,
        totalPrice: 0
    });

    const subMealHandler = (product) => {
        // copy cart
        const tempCart = {...cartData};

        product.amount -= 1;

        if (product.amount === 0) {
            // remove cart if the amount is already 0
            tempCart.items.splice(tempCart.items.indexOf(product), 1)
        }

        tempCart.totalAmount -= 1;
        tempCart.totalPrice -= product.price;

        setCartData(tempCart)
    }

    const addMealHandler = (product) => {
        const tempCart = {...cartData};

        if (tempCart.items.indexOf(product) === -1) { // -1: not find the target product
            tempCart.items.push(product);
            product.amount = 1;
        } else {
            product.amount += 1;
        }
        tempCart.totalAmount += 1;
        tempCart.totalPrice += product.price;

        setCartData(tempCart)
    }

    return (
        <div style={{width:'100%', height:200, backgroundColor:''}}>
            <Meal
                mealsData={mealData}
                onAdd={addMealHandler}
            />
        </div>
    );
}

export default App;
