module.exports = function reactTemplate ({
  name = 'template',
}) {
  return `import React from "react";
import Iconfont from 'components/Iconfont';
import fetchAPI from 'utils/fetch';
import JSBridge from 'za-jsbridge';
import classnames from 'classnames';
import { connect } from 'react-redux';

class ${name} extends React.Component {
  render() {
    return (
      <section className='${name}'></section>
    )
  }
}

export default ${name};

`
};
