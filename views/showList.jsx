const React = require('react');
const ShowListItem = require('./ShowListItem');

class ShowList extends React.Component {
    render() {
        let items = new Array(this.props.luxury.len);
        let i = 0;
        for(var key in this.props.luxury){
            items[i] = this.props.luxury[key];
            i = i + 1;
        }

        // let items = this.props.luxury.map( (item, index) => {
        //     return <ShowListItem item={item} key={index}/>
        // });

        return (
            <html>
                <head><title>List</title></head>
                <body>
                    <div>
                        <h1>{this.props.title}</h1>
                        <ul>
                            <li>{items}</li>
                        </ul>
                    </div>
                    <div>
                        <a href="/">Index로 돌아가기</a>
                    </div>
                </body>
            </html>
        );

    }
};
module.exports = ShowList;