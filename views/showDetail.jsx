const React = require('react');

class ShowDetail extends React.Component {
    render() {
        return (
            <html>
                <head><title>Detail</title></head>
                <body>
                    <div>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div>
                        id : {this.props.luxury[0].luxury_id}<br/>
                        brand : {this.props.luxury[0].brand}<br/>
                        founder : {this.props.luxury[0].founder}<br/>
                        country : {this.props.luxury[0].country}<br/>
                    </div>
                    <div>
                        <a href="/">Index로 돌아가기</a>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = ShowDetail;