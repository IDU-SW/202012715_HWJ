const React = require('react');
const ShowListItem = require('./ShowListItem');

class ShowList extends React.Component {
    render() {
        let items = this.props.luxury.map( (item, index) => {
            return <ShowListItem item={item} key={index}/>
        });

        return (
            <html>
                <head><title>List</title></head>
                <body>
                    <div>
                        <h1>{this.props.title}</h1>
                        <ul>
                            {items}
                        </ul>
                    </div>
                    <div>
                        <a href="/">Index로 돌아가기</a>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = ShowList;