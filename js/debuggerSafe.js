document.onkeydown=function (e){let currKey=0,evt=e||window.event;currKey=evt.keyCode||evt.which||evt.charCode;if (currKey == 123) {window.event.cancelBubble = true;window.event.returnValue = false;}}
/**
 * 安全文件禁止debugger调试
 */
eval(function (p, a, c, k, e, r) { e = function (c) { return c.toString(a) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('2 i=\'\',3=["e",""];(4(a){a[3[0]]=3[1]})(8);2 9=["g"];!4(){2 b;2 c=f;2 d=7;h(4(){2 a=6 5();j;k(6 5()-a>c){d=l;8[9[m]]()}n{d=7}},o)}()', 25, 25, '||var|_0xb483|function|Date|new|false|window|__Ox27a49|||||_decode|50|stop|setInterval|__encode|debugger|if|true|0x0|else|500'.split('|'), 0, {}))
