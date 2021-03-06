'use strict';
/*!
 * Airdate v1.0.0
 * (c) 2016-2016 jazzysnail
 * Released under the MIT License.
 */
import './theme/default/default.less';
import {_utl, _class, _style} from './lib';
((global) => {

  const config = {
    format : 'YYYY-MM-DD',
    unit   : 'sec',  // ['day','hours','min','sec','ke','zi']
    min    : '1900-01-01 00:00:00',
    max    : '2099-12-31 23:59:59',
    theme  : 'default'
  };

  // Constructor
  function Airdate (opt = {}) {
    try {
      let Air = this;
      Air.v = 'v1.0.0';
      if (typeof opt.theme == 'String') {
        // use theme
        // _utl.use();
      }
    } catch (e) {
      console.error("Use the 'new' keyword to instantiate an Airdate object!");
    }
  }

  const $ = function (ele) {
    return document.querySelector(ele)
  };

  /*
   * 日期操作
   * datepick handle
  */
  const _date = {

  };

  global.Airdate = Airdate;

})(global)
