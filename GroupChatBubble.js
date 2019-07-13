import React from 'react';
import PropTypes from 'prop-types';

const TAG = -1;
const ME = 0;

export default class ChatBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTag() {
    return <div style={Style.tag}><span style={Style.tagText}>{this.props.content}</span></div>;
  }

  renderRole() {
    var isMe = this.props.role == ME;
    var style = isMe ? Style.me : Style.you;
    var trangleStyle = isMe ? Style.triangleRight : Style.triangleLeft;
    var textStyle = isMe ? Style.textMy : Style.textYour;

    var avatar = <img width={50} height={50} src={`images/${this.props.avatar}.jpg`} />;
    var bubble = <span style={textStyle}>{this.props.content}</span>;

    var me = (
      <div style={style}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <span style={Style.myName}>{this.props.name}</span>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            {bubble}
            <div style={trangleStyle}></div>
          </div>
        </div>
        {avatar}
      </div>
    );

    var you = (
      <div style={style}>
        {avatar}
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <span style={Style.yourName}>{this.props.name}</span>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={trangleStyle}></div>
            {bubble}
          </div>
        </div>
      </div>
    );

    return isMe ? me : you;
  }

  render() {
    var component = this.props.role == TAG ?
      this.renderTag() :
      this.renderRole();

    return component;
  }
}

ChatBubble.propTypes = {
  role: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
}

ChatBubble.defaultProps = {
  role: 0,
  content: ''
}

const Style = {
  tag: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0 20px 0'
  },
  me: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: '20px 10px 20px 0'
  },
  you: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: '20px 0 20px 10px'
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
  tagText: {
    color: '#B1B1B1',
    backgroundColor: '#3F3F3F',
    border: '1px solid #3F3F3F',
    padding: '5px 10px 5px 10px'
  },
  textMy: {
    maxWidth: 250,
    padding: 10,
    backgroundColor: '#99E867',
    border: '1px solid #99E867',
    overflowWrap: 'break-word',
    wordWrap: 'break-word'
  },
  textYour: {
    maxWidth: 250,
    padding: 10,
    backgroundColor: 'white',
    border: '1px solid white',
    overflowWrap: 'break-word',
    wordWrap: 'break-word'
  }
}
