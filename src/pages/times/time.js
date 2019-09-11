import _typeof from '@babel/runtime/helpers/typeof'
import _classCallCheck from '@babel/runtime/helpers/classCallCheck'
import _createClass from '@babel/runtime/helpers/createClass'

var Time =
/* #__PURE__ */
(function () {
  function Time() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now()

    _classCallCheck(this, Time)

    if (_typeof(time) === 'object') {
      this.Date = time
    } else {
      if (String(time).length <= 10) {
        this.time = time * 1000
      }

      this.Date = new Date(time)
    }
  }

  _createClass(Time, [{
    key: '_parseDate',
    value: function _parseDate(Date) {
      return {
        y: Date.getFullYear(),
        m: Date.getMonth() + 1,
        d: Date.getDate(),
        h: Date.getHours(),
        i: Date.getMinutes(),
        s: Date.getSeconds(),
        a: Date.getDay()
      }
    }
  }, {
    key: 'parseTime',
    value: function parseTime() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '{y}-{m}-{d} {h}:{i}:{s}'

      var Date = this._parseDate(this.Date)

      return format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
        var value = Date[key]

        if (key === 'a') {
          return '星期' + ['日', '一', '二', '三', '四', '五', '六'][value]
        }

        if (result.length > 0 && value < 10) {
          value = '0' + value
        }

        return value || 0
      })
    }
  }])

  return Time
}())

export default Time
