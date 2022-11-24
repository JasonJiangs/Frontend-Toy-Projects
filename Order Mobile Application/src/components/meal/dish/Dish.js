import React from 'react';
import classes from "./dish.module.css"

export const Dish = () => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src="/img/img.png" alt='Burger Image'/>
            </div>
            <div>
                <h3 className={classes.Title}>Big Mac</h3>
                <p className={classes.Desc}>Quarter Pounder with cheese. </p>
                <div className={classes.PriceWrapper}>
                    <span className={classes.Price}>12</span>
                    <div>Quantity</div>
                </div>
            </div>
        </div>
    );
};

export default Dish;