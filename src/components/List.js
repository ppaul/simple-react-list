import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemType } from "./ListItem";

const List = ({ items, titlePosition }) => (
    <ul className="List">
        {items.map((item, index) => (
            <ListItem
                {...item}
                key={index}
                titlePosition={titlePosition}
            />
        ))}
    </ul>
);

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(ListItemType)),
    titlePosition: ListItemType.titlePosition
};

export default List;
