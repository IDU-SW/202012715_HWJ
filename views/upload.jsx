const React = require('react');

class Upload extends React.Component {
    render() {
        return (
            <html>
                <head><title>upload</title></head>
                <body>
                    <form method="post" action="/upload" enctype='multipart/form-data'>
                        File : <input type="file" name="img"></input><br />
                        <input type="submit" value="전송"></input>
                    </form>
                </body>
            </html>
        );
    }
}

module.exports = Upload;