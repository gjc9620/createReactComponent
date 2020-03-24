const paramCase = require('param-case');


module.exports = function reactTemplate ({
  name = 'template',
}) {
  return `import React, { Component, PropTypes } from 'react';

class ${name} extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  // componentDidMount() {}
  render() {
    return (
      <section className='${paramCase(name)}'></section>
    )
  }
}

${name}.defaultProps = {

};

export default ${name};

`
};
