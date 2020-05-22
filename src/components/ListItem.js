import React, { useState } from "react";
import PropTypes from "prop-types";

const ListItem = ({ title, content, titlePosition }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <li className={`${titlePosition} ${expanded ? 'expanded' : 'collapsed'}`}>
            <div className="title" onClick={() => setExpanded(!expanded)}>
                <h3>{title}</h3>
                <img src="/images/hand.png" alt="" />
            </div>
            <div className="text">
                {content}
            </div>
        </li>
    );
};

const ListItemType = PropTypes.shape({
    titlePosition: PropTypes.oneOf(["top", "right", "bottom", "left", undefined]),
    title: PropTypes.string,
    content: PropTypes.string
});

ListItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    titlePosition: ListItemType.titlePosition
};

export { ListItemType, ListItem };
