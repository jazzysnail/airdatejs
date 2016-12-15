import _utl from '../_utl'

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

export default _class
