'use strict';
/*!
 * Airdate v1.0.0
 * (c) 2016-2016 jazzysnail
 * Released under the MIT License.
 */

import './theme/default/default.less';
import {_utl, _class} from './lib';
import _date from './date.js'

((global) => {

  const config = {
    el     : null,
    format : 'YYYY-MM-DD',
    unit   : 'sec',  // ['day','hours','min','sec','ke','zi']
    min    : '1900-01-01 00:00:00',
    max    : '2099-12-31 23:59:59',
    theme  : 'default'
  };

  // Constructor
  function _init (opt = config) {
    let Air = this;
    try {
      Air.v = 'v1.0.0';
      if (typeof opt.el == 'object') {
        Air.el = opt.el;
      }else{
        console.error("Missing parameters 'el'");
      }
      setInput(Air.el);
      if (typeof opt.theme == 'String') {
        // use theme
        // _utl.use();
      }
    } catch (e) {}
  }

  function setInput (el) {
    el.setAttribute('disabled','disabled');
    _class.add(el,'airdate-input');
  }

  global.Airdate = _init;

})(global)
