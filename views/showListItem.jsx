const React = require('react');

function ShowListItem(props) {

    return (
        <li>
            luxury_id : {props.item.luxury_id} <br/>
            brand : <a href={'/luxuries/' + props.item.luxury_id}>{props.item.brand}</a> <br/>
            founder : {props.item.founder} <br/>
            country : {props.item.country}
            <hr width='200px' align='left'/>
        </li>
    )
}

module.exports = ShowListItem;
