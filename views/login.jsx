const React = require('react');

class Login extends React.Component {
    render() {
        return (
            <html>
                <head><title>Login</title></head>
                <body>
                    <div>
                        <form method="post" action="/login">
                            id : <input type="text" name="id"></input><br/>
                            pw : <input type="text" name="pw"></input><br/>
                            <input type="submit" value="로그인"></input>
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

module.exports = Login;