import React from 'react';
import ReactDOM from 'react-dom';

import WeChat from '../WeChat';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <WeChat
        isGroupChat={true}
        width={480}
        height={400}
        data={[
          { role: 0, name: 'Tom', content: 'Hello World' },
          { role: 0, name: 'Tom', content: 'This is Tom' },
          { role: 0, name: 'Tom', content: 'Where is Jerry?' },
          { role: 1, name: 'Jerry', content: 'I am here~~~' }
        ]}/>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
