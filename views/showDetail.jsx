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
                        <form method="post" action={'/luxury/edit/' + this.props.luxury._id}>
                            <table>
                                <tr align="center">
                                    <td>
                                        id
                                    </td>
                                    <td>
                                        brand
                                    </td>
                                    <td>
                                        founder
                                    </td>
                                    <td>
                                        country
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" name="luxury_id" value={this.props.luxury._id} readOnly /><br/>
                                    </td>
                                    <td>
                                        <input type="text" name="brand" value={this.props.luxury.brand} /><br/>
                                    </td>
                                    <td>
                                        <input type="text" name="founder" value={this.props.luxury.founder} /><br/>
                                    </td>
                                    <td>
                                        <input type="text" name="country" value={this.props.luxury.country} /><br/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="submit" value="수정" />&nbsp;&nbsp;&nbsp;
                                        <a href={'/luxury/del/' + this.props.luxury._id}>삭제</a>
                                    </td>
                                </tr>
                            </table>
                            
                        </form>
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