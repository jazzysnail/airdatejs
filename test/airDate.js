'use strict';

(function (win) {
  var config = {
    theme: 'default',
    format: 'YYYY-MM-DD',
    min: '',
    max: ''
  };

  win.airDate = function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$theme = _ref.theme,
        theme = _ref$theme === undefined ? 'default' : _ref$theme;

    return theme;
  };
})(window);