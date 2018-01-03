var resJson = {
  success: function(data, msg) {
      return {
          status: 'success',
          data: data || [],
          msg: msg || ''
      };
  },
  fail: function(data, msg) {
      if(typeof msg === 'object') {
          msg = msg.toString();
      }
      return {
          status: 'fail',
          data: data || [],
          msg: msg || ''
      }
  }
}

module.exports = resJson;