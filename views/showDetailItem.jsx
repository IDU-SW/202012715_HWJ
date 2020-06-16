const React = require('react');

function ShowDetailItem(props) {

    return (
        <form>
            <input type="text" readonly value={props.luxury.id}></input><br/>
            <input type="text" readonly value={props.luxury.brand}></input><br/>
            <input type="text" readonly value={props.luxury.founder}></input><br/>
            <input type="text" readonly value={props.luxury.country}></input>
        </form>
    )
}

module.exports = ShowDetailItem;
