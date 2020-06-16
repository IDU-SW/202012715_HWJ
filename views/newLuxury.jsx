const React = require('react');

class NewLuxury extends React.Component {
    render() {
        return (
            <html>
                <head><title>New Luxury</title></head>
                <body>
                    <div>
                        <form method="post" action="/luxuries">
                            brand : <input type="text" name="brand"></input><br/>
                            founder : <input type="text" name="founder"></input><br/>
                            country : <input type="text" name="country"></input><br/>
                            <input type="submit" value="추가"></input>
                        </form>
                    </div>
                    <div>
                        <a href="/">돌아가기</a>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = NewLuxury;