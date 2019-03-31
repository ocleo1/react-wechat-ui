import React from 'react';
import PropTypes from 'prop-types';

import Me from './Me';
import You from './You';

export default class WeChat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
          width: this.props.width,
          height: this.props.height,
          overflowY: 'scroll',
          backgroundColor: '#1C1C1C'
        }}>
        {
          this.props.data.map((item, index) => {
						if (item.role === 0) {
							return <Me chatContent={item.content} key={`me${index}`}/>
						} else{
							return <You chatContent={item.content} key={`you${index}`}/>
						}
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
