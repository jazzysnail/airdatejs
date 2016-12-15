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

export default _style
