import React from 'react';
import Dish from "./dish/Dish";
import classes from "./Meal.module.css";

const Meal = () => {
    return (
        <div className={classes.Meals}>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
        </div>
    );
};

export default Meal;