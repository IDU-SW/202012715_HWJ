const React = require('react');

class Index extends React.Component {
    render() {
        return (
            <html>
                <head><title>Index</title></head>
                <body>
                    <div>
                        <h1>index Page입니다.</h1>
                        <h3>{this.props.status}</h3>
                    </div>
                    <div>
                        <a href="/luxuries">전체조회</a> <br/><br/>
                        <a href="/luxury/add">새로만들기</a><br/><br/>
                        <a href="/login">로그인 페이지로 이동</a><br/><br/>
                        <a href="/logout">로그아웃</a>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Index;