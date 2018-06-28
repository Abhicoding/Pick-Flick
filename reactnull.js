import requireHacker from 'require-hacker'

const reactNullComponent = `
  require('react').createClass({
    render() {
      return null;
    }
  })
`
requireHacker.hook('svg', () => `module.exports = ${reactNullComponent}`)
