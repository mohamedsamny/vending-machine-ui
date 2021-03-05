const config = {
  production: {
    API_URI: 'http://somedomain.com'
  },
  development: {
    API_URI: 'http://localhost:3000'
  }
}
console.log(process.env.REACT_APP_ENV)
module.exports = config[process.env.REACT_APP_ENV || 'development']
