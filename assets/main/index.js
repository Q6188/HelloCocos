System.register("chunks:///_virtual/HelloWorld.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var t,e,r,l;return{setters:[function(o){t=o.inheritsLoose},function(o){e=o.cclegacy,r=o._decorator,l=o.Component}],execute:function(){var n;e._RF.push({},"8b648HUCVFLhLUWHK6b4k5y","HelloWorld",void 0);var c=r.ccclass;r.property,o("HelloWorld",c("HelloWorld")(n=function(o){function e(){return o.apply(this,arguments)||this}return t(e,o),e.prototype.start=function(){console.info("Hello world")},e}(l))||n);e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./HelloWorld.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});