const React = require('react');

function ShowListItem(props) {

    return (
        <li>
            luxury_id : {props.item._id} <br/>
            brand : <a href={'/luxuries/' + props.item._id}>{props.item.brand}</a> <br/>
            founder : {props.item.founder} <br/>
            country : {props.item.country}
            <hr width='200px' align='left'/>
        </li>
    )
}

module.exports = ShowListItem;
