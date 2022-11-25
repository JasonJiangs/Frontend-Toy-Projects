import React from 'react';
import Dish from "./dish/Dish";
import classes from "./Meal.module.css";

const Meal = (props) => {
    return (
        <div className={classes.Meals}>
            {props.mealsData.map(item =>
                <Dish
                    key={item.id}
                    meal={item}
                />
            )}
        </div>
    );
};

export default Meal;