const React = require('react');

class ShowDetail extends React.Component {
    render() {
        return (
            <html>
                <head><title>Detail</title></head>
                <body>
                    <div>
                        <h1>{this.props.luxury.title}</h1>
                    </div>
                    <div>
                        <form>
                            <input type="text" readonly value={this.props.luxury.id}></input><br/>
                            <input type="text" readonly value={this.props.luxury.brand}></input><br/>
                            <input type="text" readonly value={this.props.luxury.founder}></input><br/>
                            <input type="text" readonly value={this.props.luxury.country}></input>
                        </form>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = ShowDetail;