import React, { useState } from "react";
import "./styles.scss";
import List from "./components/List";
import ListItem from "./components/ListItem";

import data from "./data.json";

export default function App() {
    const [position, setPosition] = useState("top");
    const availableOptions = ["top", "right", "bottom", "left"];
    let flexDirection, pointerAngles;
    switch (position) {
        case "top":
            flexDirection = "column";
            pointerAngles = { false: "180deg", true: "270deg" };
            break;
        case "right":
            flexDirection = "row-reverse";
            pointerAngles = { false: "180deg", true: "0" };
            break;
        case "bottom":
            flexDirection = "column-reverse";
            pointerAngles = { false: "180deg", true: "90deg" };
            break;
        case "left":
            flexDirection = "row";
            pointerAngles = { false: "0", true: "180deg" };
            break;
        default:
            flexDirection = "column";
            pointerAngles = { false: "180deg", true: "270deg" };
    }
    const renderItem = (title, content, expanded, onTitleClick) => <div className="item-content" style={{ flexDirection }}>
        <div className="title" onClick={() => onTitleClick(!expanded)}>
            {flexDirection === "row" ? <h2>{title}</h2> : null}
            <img src="/images/hand.png" style={{
                transform: `rotate(${pointerAngles[expanded]})`
            }}></img>
            {flexDirection !== "row" ? <h2>{title}</h2> : null}
        </div>
        <div className={`content-${expanded ? "expanded" : "collapsed"}`}>{content}</div>
    </div >

    return (
        <div className="App">
            <div className="select-option">
                <div>Select title placement</div>
                <select onChange={event => setPosition(event.target.value)} value={position}>
                    {availableOptions.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))}
                </select>
            </div>
            <h1>List with title position {position}</h1>
            <List>
                {data.map(({ id, title, content }, index) => <ListItem renderItem={renderItem.bind(null, title, content)} key={id} />)}
            </List>
        </div>
    );
}
