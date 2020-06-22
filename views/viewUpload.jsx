const React = require('react');

class viewUpload extends React.Component {
    render() {

        return (
            <html>
                <head><title>View_File_Upload</title></head>
                <body>
                        <h1>file : {this.props.name}</h1> <br />
                        <h1>url : {this.props.url}</h1>
                </body>
            </html>
        );

    }
};
module.exports = viewUpload;