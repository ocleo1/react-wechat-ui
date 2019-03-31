import React from 'react';

export default class You extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={Style.you}>
        <img width={50} height={50} src="jerry.jpg" />
        <div style={Style.triRight}></div>
        <span style={Style.text}>{this.props.chatContent}</span>
      </div>
    );
  }
}

const Style = {
  you: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: 'auto',
    margin: '10px 0 10px 0'
  },
  triRight: {
    position: 'relative',
    top: 10,
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderRight: '10px solid white',
    borderBottom: '10px solid transparent',
		borderLeft: '10px solid transparent'
  },
  text: {
    maxWidth: 250,
    padding: 10,
    backgroundColor: 'white',
    border: '1px solid white',
    overflowWrap: 'break-word',
    wordWrap: 'break-word'
  }
}
