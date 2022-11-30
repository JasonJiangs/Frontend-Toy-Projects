import React from 'react';
import classes from "./dish.module.css"
import Counter from '../../UI/Counter';

export const Dish = (prop) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={prop.meal.img} alt='Burger Image'/>
            </div>
            <div>
                <h3 className={classes.Title}>{prop.meal.title}</h3>
                <p className={classes.Desc}>{prop.meal.desc}</p>
                <div className={classes.PriceWrapper}>
                    <span className={classes.Price}>{prop.meal.price}</span>
                    <Counter
                        onAdd={prop.onAdd}
                        meal={prop.meal}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dish;