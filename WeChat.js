import React from 'react';
import PropTypes from 'prop-types';

import ChatBubble from './ChatBubble';
import GroupChatBubble from './GroupChatBubble';

export default class WeChat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Bubble = this.props.isGroupChat ? GroupChatBubble : ChatBubble;

    return (
      <div style={{
          width: this.props.width,
          height: this.props.height,
          overflowY: 'scroll',
          backgroundColor: '#1C1C1C'
        }}>
        {
          this.props.data.map((item, index) => {
            return (
              <Bubble
                key={index}
                role={item.role}
                name={item.name}
                avatar={item.avatar}
                content={item.content} />
            );
          })
        }
      </div>
    );
  }
}

WeChat.propTypes = {
  data: PropTypes.array.isRequired
}

WeChat.defaultProps = {
  isGroupChat: false,
  data: [],
  width: 480,
  height: 150
}
