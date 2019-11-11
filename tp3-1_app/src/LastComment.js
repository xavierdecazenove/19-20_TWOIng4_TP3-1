import React from 'react';


class LastComment extends React.Component {
    render() {
        return(
            <div className="box-last-comment">
                <a>{this.props.lastComment}</a>
                <button onClick={this.props.onClick}>👍 C'est super ! {this.props.likes}</button>
            </div>
        );
    }
}
export default LastComment;