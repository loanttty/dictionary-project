import React from "react";
import Meaning from "./Meaning"

export default function Result (props) {
    if (props.results) {
        return (
            <div className="results">
                <h2>{props.results.word}</h2>
                {props.results.meanings.map((meaningItem,index) => <Meaning key={index} meaning={meaningItem} />)}
            </div>
        )
    } else {
        return null
    }
}