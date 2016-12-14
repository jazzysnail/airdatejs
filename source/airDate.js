'use strict';
/*!
 * Airdate v1.0.0
 * (c) 2016-2016 jazzysnail
 * Released under the MIT License.
 */
((win) => {

  function Airdate () {
    let Air = this;
    Air.v = 'v1.0.0';
  }

  win.Airdate = Airdate;

  const $ = function (ele) {
    return document.querySelector(ele)
  };

  const config = {
    format : 'YYYY-MM-DD',
    unit   : 'sec',  // ['day','hours','min','sec','ke','zi']
    min    : '1900-01-01 00:00:00',
    max    : '2099-12-31 23:59:59',
    theme  : 'default'
  };



  const _utl = {
    /*
     * 修饰字符
     * @param {String} str
    */
    trim(str) {
      str = str || '';
      return str.replace(/^\s|\s$/g, '').replace(/\s+/g, ' ');
    }
  };



  /*
   * 类名操作
   * className handle
  */
  const _class = {
    /*
     * 添加
     * @param {String || Number} index
    */
    add(ele, cls) {
      ele = ele || {};
      this.has(ele, cls) || (ele.className += ' ' + cls);
      ele.className = _utl.trim(ele.className);
      return this;
    },
    /*
     * 判断是否存在
     * @param {String || Number} index
    */
    has(ele, cls) {
      ele = ele || {};
      return new RegExp('\\b' + cls +'\\b').test(ele.className);
    },
    /*
     * 删除
     * @param {String || Number} index
    */
    remove(ele, cls) {
      ele = ele || {};
      if (this.has(ele, cls)) {
          var reg = new RegExp('\\b' + cls +'\\b');
          ele.className = ele.className.replace(reg, '');
      }
      return this;
    },
    /*
     * 切换 (找到切换，未找到新增)
     * toggle (if found swap, else add)
     * @param {object} ele
     * @param {String} nVal
     * @param {String} oVal
    */
    toggle(ele,nVal,oVal) {
      var c = ele.className;
      if (c != null && c.indexOf(oVal) > -1) {
        this.remove(ele,oVal);
        this.add(ele,nVal);
      }else{
        this.add(ele,nVal);
      }
    }
  };



  /*
   * css属性操作
   * css handle
  */
  const _style = {
    /*
     * 清除class属性
     * @param {String || Number} index
    */
    remove(elem, attr) {
      var s = elem.style;
      if(s.removeProperty){
          s.removeProperty(attr);
      } else {
          s.removeAttribute(attr);
      }
    },
  };


  /*
   * 日期操作
   * date handle
  */
  const _date = {

  };
  console.log(document.getElementsByClassName('body'));
  _class.add(document.getElementsByClassName('body'),'hehe');









})(window)
