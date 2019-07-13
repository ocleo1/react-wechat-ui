import React from 'react';
import ReactDOM from 'react-dom';

import WeChat from '../index';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const dateTime = new Date().toLocaleString();

    return (
      <WeChat
        width={480}
        height={400}
        data={[
          { role: 0, name: 'Tom', avatar: 'tom.jpg', content: 'Hello World' },
          { role: 0, name: 'Tom', avatar: 'tom.jpg', content: 'This is Tom' },
          { role: 0, name: 'Tom', avatar: 'tom.jpg', content: 'Where is Jerry?' },
          { role: -1, content: dateTime },
          { role: 1, name: 'Jerry', avatar: 'jerry.jpg', content: 'I am here~~~' }
        ]}
        displayName={true} />
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
