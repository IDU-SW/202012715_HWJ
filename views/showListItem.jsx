const React = require('react');

function ShowListItem(props) {

    return (
        <li>
            id : {props.item.id} <br/>
            brand : <a href={'/luxuries/' + props.item.id}>{props.item.brand}</a> <br/>
            설립자 : {props.item.founder} <br/>
            국가 : {props.item.country}
        </li>
    )
}

module.exports = ShowListItem;
