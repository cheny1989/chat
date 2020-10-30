import React, { Component } from 'react';
import logo192 from '../logo192.png';

class Messages extends Component {
    render() {
        return (
            <div className="messages" ref={this.props.refProp}>
                <h2>Talk to me<img src={logo192} className="App-logo"/></h2>
                
                {this.props.messages.map((message, indexMessage) =>
                    <div className={`message ${(this.props.username === message.user ? 'message-me': '')}`} key={indexMessage}>
                        <div className="message-user">{message.user}</div>
                        <div className="message-content">{message.content}</div>
                    </div>
                )}
            </div>
        );
    }
}

export default Messages;