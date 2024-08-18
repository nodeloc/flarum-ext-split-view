/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/states/ComposerState */ "flarum/forum/states/ComposerState");
/* harmony import */ var flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/ComposerBody */ "flarum/forum/components/ComposerBody");
/* harmony import */ var flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__);








flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('nodeloc-split-view', function () {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'load', function (_, componentClass) {
    this.isSplitView = false;
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'controlItems', function (items) {
    items.add('preview', m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7___default()), {
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.forum.composer.preview_tooltip')
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
      icon: "fas fa-columns",
      className: "Button Button--icon",
      onclick: this.attrs.preview
    })));
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'headerItems', function (items) {
    var _app$current$get;
    if ((_app$current$get = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.get('stream')) != null && _app$current$get.discussion) {
      return;
    }
    items.add('preview-discussion', m("div", {
      className: "Split-view Post-body " + ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer).isSplitView ? '' : 'hidden')
    }), 50);
  });
  (flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_4___default().prototype).jumpToPreview = function (e) {
    var _this = this;
    if (!(e instanceof MouseEvent)) {
      return;
    }
    this.composer.isSplitView = !this.composer.isSplitView;
    if (this.composer.isSplitView) {
      var previousContent = this.composer.fields.content();
      s9e.TextFormatter.preview(this.composer.fields.content(), this.$('.Split-view')[0]);
      this.composerPreviewInterval = setInterval(function () {
        var currentContent = _this.composer.fields.content();
        if (currentContent !== previousContent) {
          previousContent = currentContent;
          s9e.TextFormatter.preview(currentContent, _this.$('.Split-view')[0]);
        }
      }, 100);
    } else {
      clearInterval(this.composerPreviewInterval);
      this.composerPreviewInterval = null;
    }
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'oncreate', function () {
    this.composerPositionInterval = setInterval(function () {
      if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer).position !== "normal") {
        var _app$current;
        if (((_app$current = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current)) == null || (_app$current = _app$current.data) == null ? void 0 : _app$current.routeName) !== "composer") return;
      }
      var $editorContainer = $(".TextEditor-editorContainer");
      var $composer = this.$('.ComposerPage');
      if (!$composer.length) $composer = this.$('.Composer');
      if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer).isSplitView) {
        var $textarea = this.$('.TextEditor textarea');
        var $splitView = this.$('.Split-view');
        if ($editorContainer.offset()) {
          /**
           * 计算当前屏幕是否为手机，以及是否有足够的空间在竖向方向上显示预览
           * 手机端界面，composer为非全屏，且屏幕有大于一倍textarea高度剩余，将composer拉长。
          */
          var mode = "normal";
          var textareaHeight = $editorContainer.height();
          var screenHeight = window.innerHeight;
          if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().screen() === "phone") {
            var composerHeight = $(".ComposerBody").height();
            var composerPaddingBottom = parseInt(($editorContainer.css("padding-bottom") || "0px").substring(0, -2)) || 0;
            if (screenHeight - textareaHeight - composerHeight + composerPaddingBottom > 0) {
              mode = "vertical";
            }
          }
          if (mode === "normal") {
            var width = parseInt($editorContainer.width() / 2);
            var height = parseInt($editorContainer.height());
            $textarea.css({
              width: width
            });
            $composer.css("padding-bottom", '');
            $editorContainer.css("padding-bottom", '');
            $splitView.removeClass("vertical");
            $splitView.css({
              width: width,
              height: height,
              top: $textarea.offset().top - $composer.offset().top,
              left: $textarea.offset().left - $composer.offset().left + $textarea.width()
            });
          } else {
            var _width = parseInt($editorContainer.width());
            var _height = parseInt($editorContainer.height());
            $textarea.css({
              width: _width
            });
            $composer.css({
              paddingBottom: _height
            });
            $editorContainer.css({
              paddingBottom: _height
            });
            $splitView.addClass("vertical");
            $splitView.css({
              width: $textarea.width(),
              height: $textarea.height() + 10,
              top: $textarea.offset().top - $composer.offset().top + _height,
              left: $textarea.offset().left - $composer.offset().left
            });
          }
        }
      } else {
        $composer.css("padding-bottom", '');
        $editorContainer.css("padding-bottom", '');
      }
    }, 100);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'onremove', function () {
    //该定时器应当被正确移除
    this.composerPreviewInterval && clearInterval(this.composerPreviewInterval);
    clearInterval(this.composerPositionInterval);
  });
});

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/ComposerBody":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ComposerBody']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/ComposerBody'];

/***/ }),

/***/ "flarum/forum/components/DiscussionComposer":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionComposer']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionComposer'];

/***/ }),

/***/ "flarum/forum/states/ComposerState":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/states/ComposerState']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/states/ComposerState'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map