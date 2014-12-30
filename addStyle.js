var addStyle = function (css, opt) {

  var opt = opt || {};
  var doc = opt.doc || document;

  if (doc.createStyleSheet) {

    var sheet = doc.createStyleSheet()
    sheet.cssText = css;

    return sheet.ownerNode;

  } else {

    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);

    return style;

  }

};

module.exports = exports = addStyle;