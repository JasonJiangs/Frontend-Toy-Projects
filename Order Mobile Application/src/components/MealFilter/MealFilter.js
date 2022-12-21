import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from "./MealFilter.module.css";

const MealFilter = (props) => {
    const [keyword, setKeyword] = useState('');

    const inputChangeHandler = e => {
        const keyword = e.target.value.trim();
        props.onFilter(keyword)
    }


    return (
        <div className={classes.FilterMeals}>
            <div >
                <input
                    onChange={inputChangeHandler}
                    className={classes.SearchInput}
                    type="text"
                    placeholder={"Please Enter Key Word"}
                />
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
    );
};

export default MealFilter;