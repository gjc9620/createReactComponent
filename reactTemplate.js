const paramCase = require('param-case');


module.exports = function reactTemplate ({
  name = 'template',
}) {
  return `import React, { Component, PropTypes } from 'react';
import Iconfont from 'components/Iconfont';
import fetchAPI from 'utils/fetch';
import JSBridge from 'za-jsbridge';
import classnames from 'classnames';
import { connect } from 'react-redux';

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
