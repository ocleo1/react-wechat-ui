import React from 'react';

export default class Me extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={Style.me}>
        <span style={Style.text}>{this.props.chatContent}</span>
        <div style={Style.tri}></div>
        <img width={50} height={50} src="tom.jpg" />
      </div>
    );
  }
}

const Style = {
  me: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 'auto',
		margin: '10px 0 10px 0'
  },
  tri: {
    position: 'relative',
    top: 10,
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '10px solid transparent',
    borderLeft: '10px solid #99E867'
  },
  text: {
    maxWidth: 250,
    padding: 10,
    backgroundColor: '#99E867',
    border: '1px solid #99E867',
    overflowWrap: 'break-word',
    wordWrap: 'break-word'
  }
}
