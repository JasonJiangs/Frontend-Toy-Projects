import React from 'react'
import classes from './Counter.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";

export default function Counter(props) {
  return (
    <div className={classes.Counter}>
        {
            (props.amount && props.amount !== 0) ?  (
            <>
                <button className={classes.Sub}>
                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </button>
                <span className={classes.Count}>{props.amount}</span>
            </>
                ) : null
        }
        <button className={classes.Add}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
    </div>
  )
}

