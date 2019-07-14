import React from 'react';
import PropTypes from 'prop-types';

const TAG = -1;
const ME = 0;

export default class ChatBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTag(data) {
    return (
      <div style={Style.tag}>
        <span style={Style.tagText}>
          {data.content}
        </span>
      </div>
    );
  }

  renderRole(data) {
    const isMe = data.role === ME;
    const roleStyle = isMe ? Style.me : Style.you;
    const chatStyle = isMe ? Style.myChat : Style.yourChat;
    const nameStyle = isMe ? Style.myName : Style.yourName;
    const bubbleStyle = isMe ? Style.myBubble : Style.yourBubble;
    const trangleStyle = isMe ? Style.triangleRight : Style.triangleLeft;
    const textStyle = isMe ? Style.myText : Style.yourText;

    const avatar = <img width={50} height={50} src={data.avatar || '/default.jpg'} />;
    const name = <div style={nameStyle}>{data.name}</div>;
    const content = <div style={textStyle}>{data.content}</div>;

    return (
      <div style={roleStyle}>
        { isMe ? null : avatar }
        <div style={chatStyle}>
          { this.props.displayName ? name : null }
          <div style={bubbleStyle}>
            { isMe ? content : null }
            <div style={trangleStyle}></div>
            { isMe ? null : content }
          </div>
        </div>
        { isMe ? avatar : null }
      </div>
    );
  }

  render() {
    const { data } = this.props;
    const component = data.role === TAG ?
      this.renderTag(data) :
      this.renderRole(data);

    return component;
  }
}

ChatBubble.propTypes = {
  data: PropTypes.shape({
    role: PropTypes.number,
    content: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  displayName: PropTypes.bool
}

ChatBubble.defaultProps = {
  displayName: false
}

const Style = {
  tag: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0 20px 0'
  },
  me: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    margin: '20px 10px 20px 0'
  },
  you: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    margin: '20px 0 20px 10px'
  },
  myChat :{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  yourChat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
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
  myName: {
    color: '#616161',
    margin: '0 20px 5px 0'
  },
  yourName: {
    color: '#616161',
    margin: '0 0 5px 20px'
  },
  myBubble: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  yourBubble: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  tagText: {
    color: '#B1B1B1',
    backgroundColor: '#3F3F3F',
    border: '1px solid #3F3F3F',
    padding: '5px 10px 5px 10px'
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
};
