const _utl = {
  /*
   * 修饰字符
   * @param {String} str
  */
  trim(str) {
    str = str || '';
    return str.replace(/^\s|\s$/g, '').replace(/\s+/g, ' ');
  },
  use(lib, id) {
    var link = doc[creat]('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = Dates.getPath + lib + as[5];
    id && (link.id = id);
    doc[tags]('head')[0].appendChild(link);
    link = null;
  }
};

export default _utl
// module.export = _utl
