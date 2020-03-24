
module.exports = function indexTemplate({
  name = 'template',
}) {
  
  return `import './${name}.less';

export { default } from './${name}.jsx';

`;
}


