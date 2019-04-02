import React from 'react';
import PropTypes from 'prop-types';

const TAG = -1;
const ME = 0;

export default class ChatBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTag() {
    return <div style={Style.tag}>{this.props.content}</div>;
  }

  renderRole() {
    const isMe = this.props.role == ME;
    const style = isMe ? Style.me : Style.you;
    const textStyle = isMe ? Style.myText : Style.yourText;
    const trangleStyle = isMe ? Style.triangleRight : Style.triangleLeft;

    const avatar = <img width={50} height={50} src={this.props.avatar} />;
    const bubble = <span style={textStyle}>{this.props.content}</span>;

    return (
      <div style={style}>
        { isMe ? bubble : avatar }
        <div style={trangleStyle}></div>
        { isMe ? avatar : bubble }
      </div>
    )
  }

  render() {
    const component = this.props.role == TAG ?
      this.renderTag() :
      this.renderRole();

    return component;
  }
}

ChatBubble.propTypes = {
  role: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
}

ChatBubble.defaultProps = {
  role: 0,
  content: ''
}

const Style = {
  me: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 470,
    height: 'auto',
    margin: '10px 0 10px 0',
    paddingRight: 10
  },
  you: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: 470,
    height: 'auto',
    margin: '10px 0 10px 0',
    paddingLeft: 10
  },
  triangleRight: {
    position: 'relative',
    top: 10,
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '10px solid transparent',
    borderLeft: '10px solid #99E867'
  },
  triangleLeft: {
    position: 'relative',
    top: 10,
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderRight: '10px solid white',
    borderBottom: '10px solid transparent',
    borderLeft: '10px solid transparent'
  },
  myText: {
    maxWidth: 250,
    padding: 10,
    backgroundColor: '#99E867',
    border: '1px solid #99E867',
    overflowWrap: 'break-word',
    wordWrap: 'break-word'
  },
  yourText: {
    maxWidth: 250,
    padding: 10,
    backgroundColor: 'white',
    border: '1px solid white',
    overflowWrap: 'break-word',
    wordWrap: 'break-word'
  }
}
