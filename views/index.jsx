const React = require('react');

class Index extends React.Component {
    render() {
        return (
            <html>
                <head><title>Index</title></head>
                <body>
                    <div>
                        <h1>index Page입니다.</h1>
                    </div>
                    <div>
                        <a href="/luxuries">전체조회</a> <br/>
                        <a href="/luxury/add">새로만들기</a>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Index;