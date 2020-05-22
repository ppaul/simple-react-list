import React, { useState } from "react";
import PropTypes from "prop-types";

const ListItem = ({ renderItem }) => {
    const [expanded, setExpanded] = useState(true);
    return (
        <li>
            {renderItem(expanded, setExpanded)}
        </li>
    );
};

ListItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    renderItem: PropTypes.func
};

export default ListItem;
