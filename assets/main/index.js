System.register("chunks:///_virtual/add.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,r,n,o;return{setters:[function(t){e=t.inheritsLoose},function(t){r=t.cclegacy,n=t._decorator,o=t.Component}],execute:function(){var c;r._RF.push({},"bfac3YIaMNFe487RBauPkwS","add",void 0);var s=n.ccclass;n.property,t("Add",s("Add")(c=function(t){function r(){return t.apply(this,arguments)||this}return e(r,t),r.prototype.start=function(){},r}(o))||c);r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./add.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

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