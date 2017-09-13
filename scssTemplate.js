module.exports = function scssTemplate ({
  className = 'template',
}) {
  return `.${className.toLowerCase()}{
  display: flex;
}

  `
};
