/* global __BUILD_CONFIG__ */

export default {
  // do not forget authToken on page reload (for development)
  KEEP_LOGGED_IN: process.env.NODE_ENV === 'development',

  ...((__BUILD_CONFIG__ === 'dev') ? require('./dev').default : {}),
  ...((__BUILD_CONFIG__ === 'stage') ? require('./stage').default : {}),
  ...((__BUILD_CONFIG__ === 'prod') ? require('./prod').default : {})
}
