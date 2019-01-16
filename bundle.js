/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/spec.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/mode/kukulu.js":
/*!*****************************!*\
  !*** ./dist/mode/kukulu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

CodeMirror.defineSimpleMode("kukulu", {
  start: [ { token: 'comment', regex: /[ \t]*#.*/ },
  { token: 'atom', regex: /Q[1-9][0-9]*/ },
  { token: 'atom', regex: /P[1-9][0-9]*/ },
  { token: 'atom', regex: /L[1-9][0-9]*-S[1-9][0-9]*/ },
  { token: 'atom', regex: /L[1-9][0-9]*-F[1-9][0-9]*/ },
  { token: 'atom', regex: /L[1-9][0-9]*/ },
  { token: 'atom', regex: /U[1-9][0-9]*/ },
  { token: 'atom', regex: /S[1-9][0-9]*/ },
  { token: 'keyword',
    regex: /Item|Property|Lexeme|Sense|Form|String|Text|Math|Time|Id|Url|Quantity|Coordinate|Shape|Media|Tabular|Bool|Set|Range|DataType|Entity/ },
  { token: 'string',
    regex: /"(:?[^\\"'\n\r]+|\\(:?[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/ },
  { token: 'string-2',
    regex: /'(:?[^\\"'\n\r]+|\\(:?[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*'/ },
  { token: 'link',
    regex: /[a-z]+:\/\/[^\s\t<>"{}|^`\\]+|<[a-z]+:\/\/[^\s\t<>"{}|^`\\]+>/ },
  { token: 'meta', regex: /@[a-zA-Z]+(-[a-zA-Z0-9]+)*-/ },
  { token: 'meta', regex: /@[a-zA-Z]+(-[a-zA-Z0-9]+)*/ },
  { token: 'variable-2',
    regex: /\?[?+*]?([a-zA-Z_][a-zA-Z0-9_-]*)?/ },
  { token: 'type',
    regex: /[+-]?([0-9]*[.])?[0-9]+([eE][+-]?[0-9]+)?(~|!|((±|[+]-|[+]\/-)[+-]?([0-9]*[.])?[0-9]+([eE][+-]?[0-9]+)?)|[[][+-]?([0-9]*[.])?[0-9]+([eE][+-]?[0-9]+)?,[+-]?([0-9]*[.])?[0-9]+([eE][+-]?[0-9]+)?\])?/ },
  { token: 'keyword', regex: /True/ },
  { token: 'keyword', regex: /False/ },
  { token: 'keyword', regex: /novalue/ },
  { token: 'keyword', regex: /somevalue/ },
  { token: 'keyword', regex: /Empty/ },
  { token: 'tag', regex: /[a-z][A-Za-z]*/ },
  { token: 'operator', regex: /[~*^]/ },
  { token: 'operator', regex: /=~/ },
  { token: 'operator', regex: /!~/ },
  { token: 'operator', regex: /=>/ },
  { token: 'operator', regex: /<=>/ },
  { token: 'operator', regex: /===/ },
  { token: 'operator', regex: /!==/ },
  { token: 'operator', regex: /==/ },
  { token: 'operator', regex: /!=/ },
  { token: 'operator', regex: /!/ },
  { token: 'operator', regex: />=/ },
  { token: 'operator', regex: />/ },
  { token: 'operator', regex: /<=/ },
  { token: 'operator', regex: /</ },
  { token: 'operator', regex: /:=/ },
  { token: 'operator', regex: /\.\.\./ },
  { token: 'operator', regex: /\./ },
  { token: 'operator', regex: /\|/ },
  { token: 'operator', regex: /&/ },
  { token: 'operator', regex: /:/ },
  { token: 'operator', regex: /,/ },
  { token: 'string', regex: /[a-zA-Z].*/ } ]
})

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/codemirror/lib/codemirror.css":
/*!****************************************************!*\
  !*** ./node_modules/codemirror/lib/codemirror.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/codemirror/src/codemirror.js":
/*!***************************************************!*\
  !*** ./node_modules/codemirror/src/codemirror.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit/main.js */ "./node_modules/codemirror/src/edit/main.js");


/* harmony default export */ __webpack_exports__["default"] = (_edit_main_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"]);


/***/ }),

/***/ "./node_modules/codemirror/src/display/Display.js":
/*!********************************************************!*\
  !*** ./node_modules/codemirror/src/display/Display.js ***!
  \********************************************************/
/*! exports provided: Display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return Display; });
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");




// The display handles the DOM integration, both for input reading
// and content drawing. It holds references to DOM nodes and
// display-related state.

function Display(place, doc, input) {
  let d = this
  this.input = input

  // Covers bottom-right square when both scrollbars are present.
  d.scrollbarFiller = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["elt"])("div", null, "CodeMirror-scrollbar-filler")
  d.scrollbarFiller.setAttribute("cm-not-content", "true")
  // Covers bottom of gutter when coverGutterNextToScrollbar is on
  // and h scrollbar is present.
  d.gutterFiller = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["elt"])("div", null, "CodeMirror-gutter-filler")
  d.gutterFiller.setAttribute("cm-not-content", "true")
  // Will contain the actual code, positioned to cover the viewport.
  d.lineDiv = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["eltP"])("div", null, "CodeMirror-code")
  // Elements are added to these to represent selection and cursors.
  d.selectionDiv = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["elt"])("div", null, null, "position: relative; z-index: 1")
  d.cursorDiv = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["elt"])("div", null, "CodeMirror-cursors")
  // A visibility: hidden element used to find the size of things.
  d.measure = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["elt"])("div", null, "CodeMirror-measure")
  // When lines outside of the viewport are measured, they are drawn in this.
  d.lineMeasure = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["elt"])("div", null, "CodeMirror-measure")
  // Wraps everything that needs to exist inside the vertically-padded coordinate system
  d.lineSpace = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["eltP"])("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                    null, "position: relative; outline: none")
  let lines = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["eltP"])("div", [d.lineSpace], "CodeMirror-lines")
  // Moved around its parent to cover visible view.
  d.mover = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["elt"])("div", [lines], null, "position: relative")
  // Set to the height of the document, allowing scrolling.
  d.sizer = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["elt"])("div", [d.mover], "CodeMirror-sizer")
  d.sizerWidth = null
  // Behavior of elts with overflow: auto and padding is
  // inconsistent across browsers. This is used to ensure the
  // scrollable area is big enough.
  d.heightForcer = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["elt"])("div", null, null, "position: absolute; height: " + _util_misc_js__WEBPACK_IMPORTED_MODULE_2__["scrollerGap"] + "px; width: 1px;")
  // Will contain the gutters, if any.
  d.gutters = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["elt"])("div", null, "CodeMirror-gutters")
  d.lineGutter = null
  // Actual scrollable element.
  d.scroller = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["elt"])("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll")
  d.scroller.setAttribute("tabIndex", "-1")
  // The element in which the editor lives.
  d.wrapper = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["elt"])("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror")

  // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_0__["ie_version"] < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0 }
  if (!_util_browser_js__WEBPACK_IMPORTED_MODULE_0__["webkit"] && !(_util_browser_js__WEBPACK_IMPORTED_MODULE_0__["gecko"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_0__["mobile"])) d.scroller.draggable = true

  if (place) {
    if (place.appendChild) place.appendChild(d.wrapper)
    else place(d.wrapper)
  }

  // Current rendered range (may be bigger than the view window).
  d.viewFrom = d.viewTo = doc.first
  d.reportedViewFrom = d.reportedViewTo = doc.first
  // Information about the rendered lines.
  d.view = []
  d.renderedView = null
  // Holds info about a single rendered line when it was rendered
  // for measurement, while not in view.
  d.externalMeasured = null
  // Empty space (in pixels) above the view
  d.viewOffset = 0
  d.lastWrapHeight = d.lastWrapWidth = 0
  d.updateLineNumbers = null

  d.nativeBarWidth = d.barHeight = d.barWidth = 0
  d.scrollbarsClipped = false

  // Used to only resize the line number gutter when necessary (when
  // the amount of lines crosses a boundary that makes its width change)
  d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null
  // Set to true when a non-horizontal-scrolling line widget is
  // added. As an optimization, line widget aligning is skipped when
  // this is false.
  d.alignWidgets = false

  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null

  // Tracks the maximum line length so that the horizontal scrollbar
  // can be kept static when scrolling.
  d.maxLine = null
  d.maxLineLength = 0
  d.maxLineChanged = false

  // Used for measuring wheel scrolling granularity
  d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null

  // True when shift is held down.
  d.shift = false

  // Used to track whether anything happened since the context menu
  // was opened.
  d.selForContextMenu = null

  d.activeTouch = null

  input.init(d)
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/focus.js":
/*!******************************************************!*\
  !*** ./node_modules/codemirror/src/display/focus.js ***!
  \******************************************************/
/*! exports provided: ensureFocus, delayBlurEvent, onFocus, onBlur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureFocus", function() { return ensureFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayBlurEvent", function() { return delayBlurEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFocus", function() { return onFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBlur", function() { return onBlur; });
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection.js */ "./node_modules/codemirror/src/display/selection.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");





function ensureFocus(cm) {
  if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm) }
}

function delayBlurEvent(cm) {
  cm.state.delayingBlurEvent = true
  setTimeout(() => { if (cm.state.delayingBlurEvent) {
    cm.state.delayingBlurEvent = false
    onBlur(cm)
  } }, 100)
}

function onFocus(cm, e) {
  if (cm.state.delayingBlurEvent) cm.state.delayingBlurEvent = false

  if (cm.options.readOnly == "nocursor") return
  if (!cm.state.focused) {
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_3__["signal"])(cm, "focus", cm, e)
    cm.state.focused = true
    Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["addClass"])(cm.display.wrapper, "CodeMirror-focused")
    // This test prevents this from firing when a context
    // menu is closed (since the input reset would kill the
    // select-all detection hack)
    if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
      cm.display.input.reset()
      if (_util_browser_js__WEBPACK_IMPORTED_MODULE_1__["webkit"]) setTimeout(() => cm.display.input.reset(true), 20) // Issue #1730
    }
    cm.display.input.receivedFocus()
  }
  Object(_selection_js__WEBPACK_IMPORTED_MODULE_0__["restartBlink"])(cm)
}
function onBlur(cm, e) {
  if (cm.state.delayingBlurEvent) return

  if (cm.state.focused) {
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_3__["signal"])(cm, "blur", cm, e)
    cm.state.focused = false
    Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["rmClass"])(cm.display.wrapper, "CodeMirror-focused")
  }
  clearInterval(cm.display.blinker)
  setTimeout(() => { if (!cm.state.focused) cm.display.shift = false }, 150)
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/gutters.js":
/*!********************************************************!*\
  !*** ./node_modules/codemirror/src/display/gutters.js ***!
  \********************************************************/
/*! exports provided: updateGutters, setGuttersForLineNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGutters", function() { return updateGutters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGuttersForLineNumbers", function() { return setGuttersForLineNumbers; });
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _update_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update_display.js */ "./node_modules/codemirror/src/display/update_display.js");





// Rebuild the gutter elements, ensure the margin to the left of the
// code matches their width.
function updateGutters(cm) {
  let gutters = cm.display.gutters, specs = cm.options.gutters
  Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeChildren"])(gutters)
  let i = 0
  for (; i < specs.length; ++i) {
    let gutterClass = specs[i]
    let gElt = gutters.appendChild(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])("div", null, "CodeMirror-gutter " + gutterClass))
    if (gutterClass == "CodeMirror-linenumbers") {
      cm.display.lineGutter = gElt
      gElt.style.width = (cm.display.lineNumWidth || 1) + "px"
    }
  }
  gutters.style.display = i ? "" : "none"
  Object(_update_display_js__WEBPACK_IMPORTED_MODULE_2__["updateGutterSpace"])(cm)
}

// Make sure the gutters options contains the element
// "CodeMirror-linenumbers" when the lineNumbers option is true.
function setGuttersForLineNumbers(options) {
  let found = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(options.gutters, "CodeMirror-linenumbers")
  if (found == -1 && options.lineNumbers) {
    options.gutters = options.gutters.concat(["CodeMirror-linenumbers"])
  } else if (found > -1 && !options.lineNumbers) {
    options.gutters = options.gutters.slice(0)
    options.gutters.splice(found, 1)
  }
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/highlight_worker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/codemirror/src/display/highlight_worker.js ***!
  \*****************************************************************/
/*! exports provided: startWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startWorker", function() { return startWorker; });
/* harmony import */ var _line_highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/highlight.js */ "./node_modules/codemirror/src/line/highlight.js");
/* harmony import */ var _modes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modes.js */ "./node_modules/codemirror/src/modes.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _view_tracking_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view_tracking.js */ "./node_modules/codemirror/src/display/view_tracking.js");







// HIGHLIGHT WORKER

function startWorker(cm, time) {
  if (cm.doc.highlightFrontier < cm.display.viewTo)
    cm.state.highlight.set(time, Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_2__["bind"])(highlightWorker, cm))
}

function highlightWorker(cm) {
  let doc = cm.doc
  if (doc.highlightFrontier >= cm.display.viewTo) return
  let end = +new Date + cm.options.workTime
  let context = Object(_line_highlight_js__WEBPACK_IMPORTED_MODULE_0__["getContextBefore"])(cm, doc.highlightFrontier)
  let changedLines = []

  doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), line => {
    if (context.line >= cm.display.viewFrom) { // Visible
      let oldStyles = line.styles
      let resetState = line.text.length > cm.options.maxHighlightLength ? Object(_modes_js__WEBPACK_IMPORTED_MODULE_1__["copyState"])(doc.mode, context.state) : null
      let highlighted = Object(_line_highlight_js__WEBPACK_IMPORTED_MODULE_0__["highlightLine"])(cm, line, context, true)
      if (resetState) context.state = resetState
      line.styles = highlighted.styles
      let oldCls = line.styleClasses, newCls = highlighted.classes
      if (newCls) line.styleClasses = newCls
      else if (oldCls) line.styleClasses = null
      let ischange = !oldStyles || oldStyles.length != line.styles.length ||
        oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass)
      for (let i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i]
      if (ischange) changedLines.push(context.line)
      line.stateAfter = context.save()
      context.nextLine()
    } else {
      if (line.text.length <= cm.options.maxHighlightLength)
        Object(_line_highlight_js__WEBPACK_IMPORTED_MODULE_0__["processLine"])(cm, line.text, context)
      line.stateAfter = context.line % 5 == 0 ? context.save() : null
      context.nextLine()
    }
    if (+new Date > end) {
      startWorker(cm, cm.options.workDelay)
      return true
    }
  })
  doc.highlightFrontier = context.line
  doc.modeFrontier = Math.max(doc.modeFrontier, context.line)
  if (changedLines.length) Object(_operations_js__WEBPACK_IMPORTED_MODULE_3__["runInOp"])(cm, () => {
    for (let i = 0; i < changedLines.length; i++)
      Object(_view_tracking_js__WEBPACK_IMPORTED_MODULE_4__["regLineChange"])(cm, changedLines[i], "text")
  })
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/line_numbers.js":
/*!*************************************************************!*\
  !*** ./node_modules/codemirror/src/display/line_numbers.js ***!
  \*************************************************************/
/*! exports provided: alignHorizontally, maybeUpdateLineNumberWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignHorizontally", function() { return alignHorizontally; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeUpdateLineNumberWidth", function() { return maybeUpdateLineNumberWidth; });
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _update_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update_display.js */ "./node_modules/codemirror/src/display/update_display.js");






// Re-align line numbers and gutter marks to compensate for
// horizontal scrolling.
function alignHorizontally(cm) {
  let display = cm.display, view = display.view
  if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return
  let comp = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["compensateForHScroll"])(display) - display.scroller.scrollLeft + cm.doc.scrollLeft
  let gutterW = display.gutters.offsetWidth, left = comp + "px"
  for (let i = 0; i < view.length; i++) if (!view[i].hidden) {
    if (cm.options.fixedGutter) {
      if (view[i].gutter)
        view[i].gutter.style.left = left
      if (view[i].gutterBackground)
        view[i].gutterBackground.style.left = left
    }
    let align = view[i].alignable
    if (align) for (let j = 0; j < align.length; j++)
      align[j].style.left = left
  }
  if (cm.options.fixedGutter)
    display.gutters.style.left = (comp + gutterW) + "px"
}

// Used to ensure that the line number gutter is still the right
// size for the current document size. Returns true when an update
// is needed.
function maybeUpdateLineNumberWidth(cm) {
  if (!cm.options.lineNumbers) return false
  let doc = cm.doc, last = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_0__["lineNumberFor"])(cm.options, doc.first + doc.size - 1), display = cm.display
  if (last.length != display.lineNumChars) {
    let test = display.measure.appendChild(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["elt"])("div", [Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["elt"])("div", last)],
                                               "CodeMirror-linenumber CodeMirror-gutter-elt"))
    let innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW
    display.lineGutter.style.width = ""
    display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1
    display.lineNumWidth = display.lineNumInnerWidth + padding
    display.lineNumChars = display.lineNumInnerWidth ? last.length : -1
    display.lineGutter.style.width = display.lineNumWidth + "px"
    Object(_update_display_js__WEBPACK_IMPORTED_MODULE_3__["updateGutterSpace"])(cm)
    return true
  }
  return false
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/mode_state.js":
/*!***********************************************************!*\
  !*** ./node_modules/codemirror/src/display/mode_state.js ***!
  \***********************************************************/
/*! exports provided: loadMode, resetModeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMode", function() { return loadMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetModeState", function() { return resetModeState; });
/* harmony import */ var _modes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modes.js */ "./node_modules/codemirror/src/modes.js");
/* harmony import */ var _highlight_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlight_worker.js */ "./node_modules/codemirror/src/display/highlight_worker.js");
/* harmony import */ var _view_tracking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view_tracking.js */ "./node_modules/codemirror/src/display/view_tracking.js");





// Used to get the editor into a consistent state again when options change.

function loadMode(cm) {
  cm.doc.mode = Object(_modes_js__WEBPACK_IMPORTED_MODULE_0__["getMode"])(cm.options, cm.doc.modeOption)
  resetModeState(cm)
}

function resetModeState(cm) {
  cm.doc.iter(line => {
    if (line.stateAfter) line.stateAfter = null
    if (line.styles) line.styles = null
  })
  cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first
  Object(_highlight_worker_js__WEBPACK_IMPORTED_MODULE_1__["startWorker"])(cm, 100)
  cm.state.modeGen++
  if (cm.curOp) Object(_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__["regChange"])(cm)
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/operations.js":
/*!***********************************************************!*\
  !*** ./node_modules/codemirror/src/display/operations.js ***!
  \***********************************************************/
/*! exports provided: startOperation, endOperation, runInOp, operation, methodOp, docMethodOp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOperation", function() { return startOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endOperation", function() { return endOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInOp", function() { return runInOp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operation", function() { return operation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "methodOp", function() { return methodOp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docMethodOp", function() { return docMethodOp; });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/operation_group.js */ "./node_modules/codemirror/src/util/operation_group.js");
/* harmony import */ var _focus_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./focus.js */ "./node_modules/codemirror/src/display/focus.js");
/* harmony import */ var _scrollbars_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scrollbars.js */ "./node_modules/codemirror/src/display/scrollbars.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selection.js */ "./node_modules/codemirror/src/display/selection.js");
/* harmony import */ var _scrolling_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scrolling.js */ "./node_modules/codemirror/src/display/scrolling.js");
/* harmony import */ var _update_display_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update_display.js */ "./node_modules/codemirror/src/display/update_display.js");
/* harmony import */ var _update_lines_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update_lines.js */ "./node_modules/codemirror/src/display/update_lines.js");














// Operations are used to wrap a series of changes to the editor
// state in such a way that each change won't have to update the
// cursor and display (which would be awkward, slow, and
// error-prone). Instead, display updates are batched and then all
// combined and executed at once.

let nextOpId = 0
// Start a new operation.
function startOperation(cm) {
  cm.curOp = {
    cm: cm,
    viewChanged: false,      // Flag that indicates that lines might need to be redrawn
    startHeight: cm.doc.height, // Used to detect need to update scrollbar
    forceUpdate: false,      // Used to force a redraw
    updateInput: 0,       // Whether to reset the input textarea
    typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
    changeObjs: null,        // Accumulated changes, for firing change events
    cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
    cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
    selectionChanged: false, // Whether the selection needs to be redrawn
    updateMaxLine: false,    // Set when the widest line needs to be determined anew
    scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
    scrollToPos: null,       // Used to scroll to a specific position
    focus: false,
    id: ++nextOpId           // Unique ID
  }
  Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_5__["pushOperation"])(cm.curOp)
}

// Finish an operation, updating the display and signalling delayed events
function endOperation(cm) {
  let op = cm.curOp
  if (op) Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_5__["finishOperation"])(op, group => {
    for (let i = 0; i < group.ops.length; i++)
      group.ops[i].cm.curOp = null
    endOperations(group)
  })
}

// The DOM updates done when an operation finishes are batched so
// that the minimum number of relayouts are required.
function endOperations(group) {
  let ops = group.ops
  for (let i = 0; i < ops.length; i++) // Read DOM
    endOperation_R1(ops[i])
  for (let i = 0; i < ops.length; i++) // Write DOM (maybe)
    endOperation_W1(ops[i])
  for (let i = 0; i < ops.length; i++) // Read DOM
    endOperation_R2(ops[i])
  for (let i = 0; i < ops.length; i++) // Write DOM (maybe)
    endOperation_W2(ops[i])
  for (let i = 0; i < ops.length; i++) // Read DOM
    endOperation_finish(ops[i])
}

function endOperation_R1(op) {
  let cm = op.cm, display = cm.display
  Object(_update_display_js__WEBPACK_IMPORTED_MODULE_10__["maybeClipScrollbars"])(cm)
  if (op.updateMaxLine) Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_1__["findMaxLine"])(cm)

  op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
    op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                       op.scrollToPos.to.line >= display.viewTo) ||
    display.maxLineChanged && cm.options.lineWrapping
  op.update = op.mustUpdate &&
    new _update_display_js__WEBPACK_IMPORTED_MODULE_10__["DisplayUpdate"](cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate)
}

function endOperation_W1(op) {
  op.updatedDisplay = op.mustUpdate && Object(_update_display_js__WEBPACK_IMPORTED_MODULE_10__["updateDisplayIfNeeded"])(op.cm, op.update)
}

function endOperation_R2(op) {
  let cm = op.cm, display = cm.display
  if (op.updatedDisplay) Object(_update_lines_js__WEBPACK_IMPORTED_MODULE_11__["updateHeightsInViewport"])(cm)

  op.barMeasure = Object(_scrollbars_js__WEBPACK_IMPORTED_MODULE_7__["measureForScrollbars"])(cm)

  // If the max line changed since it was last measured, measure it,
  // and ensure the document's width matches it.
  // updateDisplay_W2 will use these properties to do the actual resizing
  if (display.maxLineChanged && !cm.options.lineWrapping) {
    op.adjustWidthTo = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__["measureChar"])(cm, display.maxLine, display.maxLine.text.length).left + 3
    cm.display.sizerWidth = op.adjustWidthTo
    op.barMeasure.scrollWidth =
      Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__["scrollGap"])(cm) + cm.display.barWidth)
    op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__["displayWidth"])(cm))
  }

  if (op.updatedDisplay || op.selectionChanged)
    op.preparedSelection = display.input.prepareSelection()
}

function endOperation_W2(op) {
  let cm = op.cm

  if (op.adjustWidthTo != null) {
    cm.display.sizer.style.minWidth = op.adjustWidthTo + "px"
    if (op.maxScrollLeft < cm.doc.scrollLeft)
      Object(_scrolling_js__WEBPACK_IMPORTED_MODULE_9__["setScrollLeft"])(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true)
    cm.display.maxLineChanged = false
  }

  let takeFocus = op.focus && op.focus == Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_4__["activeElt"])()
  if (op.preparedSelection)
    cm.display.input.showSelection(op.preparedSelection, takeFocus)
  if (op.updatedDisplay || op.startHeight != cm.doc.height)
    Object(_scrollbars_js__WEBPACK_IMPORTED_MODULE_7__["updateScrollbars"])(cm, op.barMeasure)
  if (op.updatedDisplay)
    Object(_update_display_js__WEBPACK_IMPORTED_MODULE_10__["setDocumentHeight"])(cm, op.barMeasure)

  if (op.selectionChanged) Object(_selection_js__WEBPACK_IMPORTED_MODULE_8__["restartBlink"])(cm)

  if (cm.state.focused && op.updateInput)
    cm.display.input.reset(op.typing)
  if (takeFocus) Object(_focus_js__WEBPACK_IMPORTED_MODULE_6__["ensureFocus"])(op.cm)
}

function endOperation_finish(op) {
  let cm = op.cm, display = cm.display, doc = cm.doc

  if (op.updatedDisplay) Object(_update_display_js__WEBPACK_IMPORTED_MODULE_10__["postUpdateDisplay"])(cm, op.update)

  // Abort mouse wheel delta measurement, when scrolling explicitly
  if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
    display.wheelStartX = display.wheelStartY = null

  // Propagate the scroll position to the actual DOM scroller
  if (op.scrollTop != null) Object(_scrolling_js__WEBPACK_IMPORTED_MODULE_9__["setScrollTop"])(cm, op.scrollTop, op.forceScroll)

  if (op.scrollLeft != null) Object(_scrolling_js__WEBPACK_IMPORTED_MODULE_9__["setScrollLeft"])(cm, op.scrollLeft, true, true)
  // If we need to scroll a specific position into view, do so.
  if (op.scrollToPos) {
    let rect = Object(_scrolling_js__WEBPACK_IMPORTED_MODULE_9__["scrollPosIntoView"])(cm, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["clipPos"])(doc, op.scrollToPos.from),
                                 Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["clipPos"])(doc, op.scrollToPos.to), op.scrollToPos.margin)
    Object(_scrolling_js__WEBPACK_IMPORTED_MODULE_9__["maybeScrollWindow"])(cm, rect)
  }

  // Fire events for markers that are hidden/unidden by editing or
  // undoing
  let hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers
  if (hidden) for (let i = 0; i < hidden.length; ++i)
    if (!hidden[i].lines.length) Object(_util_event_js__WEBPACK_IMPORTED_MODULE_3__["signal"])(hidden[i], "hide")
  if (unhidden) for (let i = 0; i < unhidden.length; ++i)
    if (unhidden[i].lines.length) Object(_util_event_js__WEBPACK_IMPORTED_MODULE_3__["signal"])(unhidden[i], "unhide")

  if (display.wrapper.offsetHeight)
    doc.scrollTop = cm.display.scroller.scrollTop

  // Fire change events, and delayed event handlers
  if (op.changeObjs)
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_3__["signal"])(cm, "changes", cm, op.changeObjs)
  if (op.update)
    op.update.finish()
}

// Run the given function in an operation
function runInOp(cm, f) {
  if (cm.curOp) return f()
  startOperation(cm)
  try { return f() }
  finally { endOperation(cm) }
}
// Wraps a function in an operation. Returns the wrapped function.
function operation(cm, f) {
  return function() {
    if (cm.curOp) return f.apply(cm, arguments)
    startOperation(cm)
    try { return f.apply(cm, arguments) }
    finally { endOperation(cm) }
  }
}
// Used to add methods to editor and doc instances, wrapping them in
// operations.
function methodOp(f) {
  return function() {
    if (this.curOp) return f.apply(this, arguments)
    startOperation(this)
    try { return f.apply(this, arguments) }
    finally { endOperation(this) }
  }
}
function docMethodOp(f) {
  return function() {
    let cm = this.cm
    if (!cm || cm.curOp) return f.apply(this, arguments)
    startOperation(cm)
    try { return f.apply(this, arguments) }
    finally { endOperation(cm) }
  }
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/scroll_events.js":
/*!**************************************************************!*\
  !*** ./node_modules/codemirror/src/display/scroll_events.js ***!
  \**************************************************************/
/*! exports provided: wheelEventPixels, onScrollWheel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wheelEventPixels", function() { return wheelEventPixels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onScrollWheel", function() { return onScrollWheel; });
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _update_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update_display.js */ "./node_modules/codemirror/src/display/update_display.js");
/* harmony import */ var _scrolling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrolling.js */ "./node_modules/codemirror/src/display/scrolling.js");






// Since the delta values reported on mouse wheel events are
// unstandardized between browsers and even browser versions, and
// generally horribly unpredictable, this code starts by measuring
// the scroll effect that the first few mouse wheel events have,
// and, from that, detects the way it can convert deltas to pixel
// offsets afterwards.
//
// The reason we want to know the amount a wheel event will scroll
// is that it gives us a chance to update the display before the
// actual scrolling happens, reducing flickering.

let wheelSamples = 0, wheelPixelsPerUnit = null
// Fill in a browser-detected starting value on browsers where we
// know one. These don't have to be accurate -- the result of them
// being wrong would just be a slight flicker on the first wheel
// scroll (if it is large enough).
if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__["ie"]) wheelPixelsPerUnit = -.53
else if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__["gecko"]) wheelPixelsPerUnit = 15
else if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__["chrome"]) wheelPixelsPerUnit = -.7
else if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__["safari"]) wheelPixelsPerUnit = -1/3

function wheelEventDelta(e) {
  let dx = e.wheelDeltaX, dy = e.wheelDeltaY
  if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail
  if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail
  else if (dy == null) dy = e.wheelDelta
  return {x: dx, y: dy}
}
function wheelEventPixels(e) {
  let delta = wheelEventDelta(e)
  delta.x *= wheelPixelsPerUnit
  delta.y *= wheelPixelsPerUnit
  return delta
}

function onScrollWheel(cm, e) {
  let delta = wheelEventDelta(e), dx = delta.x, dy = delta.y

  let display = cm.display, scroll = display.scroller
  // Quit if there's nothing to scroll here
  let canScrollX = scroll.scrollWidth > scroll.clientWidth
  let canScrollY = scroll.scrollHeight > scroll.clientHeight
  if (!(dx && canScrollX || dy && canScrollY)) return

  // Webkit browsers on OS X abort momentum scrolls when the target
  // of the scroll event is removed from the scrollable element.
  // This hack (see related code in patchDisplay) makes sure the
  // element is kept around.
  if (dy && _util_browser_js__WEBPACK_IMPORTED_MODULE_0__["mac"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_0__["webkit"]) {
    outer: for (let cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
      for (let i = 0; i < view.length; i++) {
        if (view[i].node == cur) {
          cm.display.currentWheelTarget = cur
          break outer
        }
      }
    }
  }

  // On some browsers, horizontal scrolling will cause redraws to
  // happen before the gutter has been realigned, causing it to
  // wriggle around in a most unseemly way. When we have an
  // estimated pixels/delta value, we just handle horizontal
  // scrolling entirely here. It'll be slightly off from native, but
  // better than glitching out.
  if (dx && !_util_browser_js__WEBPACK_IMPORTED_MODULE_0__["gecko"] && !_util_browser_js__WEBPACK_IMPORTED_MODULE_0__["presto"] && wheelPixelsPerUnit != null) {
    if (dy && canScrollY)
      Object(_scrolling_js__WEBPACK_IMPORTED_MODULE_3__["updateScrollTop"])(cm, Math.max(0, scroll.scrollTop + dy * wheelPixelsPerUnit))
    Object(_scrolling_js__WEBPACK_IMPORTED_MODULE_3__["setScrollLeft"])(cm, Math.max(0, scroll.scrollLeft + dx * wheelPixelsPerUnit))
    // Only prevent default scrolling if vertical scrolling is
    // actually possible. Otherwise, it causes vertical scroll
    // jitter on OSX trackpads when deltaX is small and deltaY
    // is large (issue #3579)
    if (!dy || (dy && canScrollY))
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_1__["e_preventDefault"])(e)
    display.wheelStartX = null // Abort measurement, if in progress
    return
  }

  // 'Project' the visible viewport to cover the area that is being
  // scrolled into view (if we know enough to estimate it).
  if (dy && wheelPixelsPerUnit != null) {
    let pixels = dy * wheelPixelsPerUnit
    let top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight
    if (pixels < 0) top = Math.max(0, top + pixels - 50)
    else bot = Math.min(cm.doc.height, bot + pixels + 50)
    Object(_update_display_js__WEBPACK_IMPORTED_MODULE_2__["updateDisplaySimple"])(cm, {top: top, bottom: bot})
  }

  if (wheelSamples < 20) {
    if (display.wheelStartX == null) {
      display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop
      display.wheelDX = dx; display.wheelDY = dy
      setTimeout(() => {
        if (display.wheelStartX == null) return
        let movedX = scroll.scrollLeft - display.wheelStartX
        let movedY = scroll.scrollTop - display.wheelStartY
        let sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
          (movedX && display.wheelDX && movedX / display.wheelDX)
        display.wheelStartX = display.wheelStartY = null
        if (!sample) return
        wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1)
        ++wheelSamples
      }, 200)
    } else {
      display.wheelDX += dx; display.wheelDY += dy
    }
  }
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/scrollbars.js":
/*!***********************************************************!*\
  !*** ./node_modules/codemirror/src/display/scrollbars.js ***!
  \***********************************************************/
/*! exports provided: measureForScrollbars, updateScrollbars, scrollbarModel, initScrollbars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureForScrollbars", function() { return measureForScrollbars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScrollbars", function() { return updateScrollbars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollbarModel", function() { return scrollbarModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initScrollbars", function() { return initScrollbars; });
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _update_lines_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update_lines.js */ "./node_modules/codemirror/src/display/update_lines.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _scrolling_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scrolling.js */ "./node_modules/codemirror/src/display/scrolling.js");









// SCROLLBARS

// Prepare DOM reads needed to update the scrollbars. Done in one
// shot to minimize update/measure roundtrips.
function measureForScrollbars(cm) {
  let d = cm.display, gutterW = d.gutters.offsetWidth
  let docH = Math.round(cm.doc.height + Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__["paddingVert"])(cm.display))
  return {
    clientHeight: d.scroller.clientHeight,
    viewHeight: d.wrapper.clientHeight,
    scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
    viewWidth: d.wrapper.clientWidth,
    barLeft: cm.options.fixedGutter ? gutterW : 0,
    docHeight: docH,
    scrollHeight: docH + Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__["scrollGap"])(cm) + d.barHeight,
    nativeBarWidth: d.nativeBarWidth,
    gutterWidth: gutterW
  }
}

class NativeScrollbars {
  constructor(place, scroll, cm) {
    this.cm = cm
    let vert = this.vert = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])("div", [Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
    let horiz = this.horiz = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])("div", [Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar")
    vert.tabIndex = horiz.tabIndex = -1
    place(vert); place(horiz)

    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_1__["on"])(vert, "scroll", () => {
      if (vert.clientHeight) scroll(vert.scrollTop, "vertical")
    })
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_1__["on"])(horiz, "scroll", () => {
      if (horiz.clientWidth) scroll(horiz.scrollLeft, "horizontal")
    })

    this.checkedZeroWidth = false
    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_3__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_3__["ie_version"] < 8) this.horiz.style.minHeight = this.vert.style.minWidth = "18px"
  }

  update(measure) {
    let needsH = measure.scrollWidth > measure.clientWidth + 1
    let needsV = measure.scrollHeight > measure.clientHeight + 1
    let sWidth = measure.nativeBarWidth

    if (needsV) {
      this.vert.style.display = "block"
      this.vert.style.bottom = needsH ? sWidth + "px" : "0"
      let totalHeight = measure.viewHeight - (needsH ? sWidth : 0)
      // A bug in IE8 can cause this value to be negative, so guard it.
      this.vert.firstChild.style.height =
        Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px"
    } else {
      this.vert.style.display = ""
      this.vert.firstChild.style.height = "0"
    }

    if (needsH) {
      this.horiz.style.display = "block"
      this.horiz.style.right = needsV ? sWidth + "px" : "0"
      this.horiz.style.left = measure.barLeft + "px"
      let totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0)
      this.horiz.firstChild.style.width =
        Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px"
    } else {
      this.horiz.style.display = ""
      this.horiz.firstChild.style.width = "0"
    }

    if (!this.checkedZeroWidth && measure.clientHeight > 0) {
      if (sWidth == 0) this.zeroWidthHack()
      this.checkedZeroWidth = true
    }

    return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
  }

  setScrollLeft(pos) {
    if (this.horiz.scrollLeft != pos) this.horiz.scrollLeft = pos
    if (this.disableHoriz) this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
  }

  setScrollTop(pos) {
    if (this.vert.scrollTop != pos) this.vert.scrollTop = pos
    if (this.disableVert) this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
  }

  zeroWidthHack() {
    let w = _util_browser_js__WEBPACK_IMPORTED_MODULE_3__["mac"] && !_util_browser_js__WEBPACK_IMPORTED_MODULE_3__["mac_geMountainLion"] ? "12px" : "18px"
    this.horiz.style.height = this.vert.style.width = w
    this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none"
    this.disableHoriz = new _util_misc_js__WEBPACK_IMPORTED_MODULE_5__["Delayed"]
    this.disableVert = new _util_misc_js__WEBPACK_IMPORTED_MODULE_5__["Delayed"]
  }

  enableZeroWidthBar(bar, delay, type) {
    bar.style.pointerEvents = "auto"
    function maybeDisable() {
      // To find out whether the scrollbar is still visible, we
      // check whether the element under the pixel in the bottom
      // right corner of the scrollbar box is the scrollbar box
      // itself (when the bar is still visible) or its filler child
      // (when the bar is hidden). If it is still visible, we keep
      // it enabled, if it's hidden, we disable pointer events.
      let box = bar.getBoundingClientRect()
      let elt = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2)
          : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1)
      if (elt != bar) bar.style.pointerEvents = "none"
      else delay.set(1000, maybeDisable)
    }
    delay.set(1000, maybeDisable)
  }

  clear() {
    let parent = this.horiz.parentNode
    parent.removeChild(this.horiz)
    parent.removeChild(this.vert)
  }
}

class NullScrollbars {
  update() { return {bottom: 0, right: 0} }
  setScrollLeft() {}
  setScrollTop() {}
  clear() {}
}

function updateScrollbars(cm, measure) {
  if (!measure) measure = measureForScrollbars(cm)
  let startWidth = cm.display.barWidth, startHeight = cm.display.barHeight
  updateScrollbarsInner(cm, measure)
  for (let i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
    if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
      Object(_update_lines_js__WEBPACK_IMPORTED_MODULE_4__["updateHeightsInViewport"])(cm)
    updateScrollbarsInner(cm, measureForScrollbars(cm))
    startWidth = cm.display.barWidth; startHeight = cm.display.barHeight
  }
}

// Re-synchronize the fake scrollbars with the actual size of the
// content.
function updateScrollbarsInner(cm, measure) {
  let d = cm.display
  let sizes = d.scrollbars.update(measure)

  d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px"
  d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px"
  d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"

  if (sizes.right && sizes.bottom) {
    d.scrollbarFiller.style.display = "block"
    d.scrollbarFiller.style.height = sizes.bottom + "px"
    d.scrollbarFiller.style.width = sizes.right + "px"
  } else d.scrollbarFiller.style.display = ""
  if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
    d.gutterFiller.style.display = "block"
    d.gutterFiller.style.height = sizes.bottom + "px"
    d.gutterFiller.style.width = measure.gutterWidth + "px"
  } else d.gutterFiller.style.display = ""
}

let scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars}

function initScrollbars(cm) {
  if (cm.display.scrollbars) {
    cm.display.scrollbars.clear()
    if (cm.display.scrollbars.addClass)
      Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_0__["rmClass"])(cm.display.wrapper, cm.display.scrollbars.addClass)
  }

  cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](node => {
    cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller)
    // Prevent clicks in the scrollbars from killing focus
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_1__["on"])(node, "mousedown", () => {
      if (cm.state.focused) setTimeout(() => cm.display.input.focus(), 0)
    })
    node.setAttribute("cm-not-content", "true")
  }, (pos, axis) => {
    if (axis == "horizontal") Object(_scrolling_js__WEBPACK_IMPORTED_MODULE_6__["setScrollLeft"])(cm, pos)
    else Object(_scrolling_js__WEBPACK_IMPORTED_MODULE_6__["updateScrollTop"])(cm, pos)
  }, cm)
  if (cm.display.scrollbars.addClass)
    Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(cm.display.wrapper, cm.display.scrollbars.addClass)
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/scrolling.js":
/*!**********************************************************!*\
  !*** ./node_modules/codemirror/src/display/scrolling.js ***!
  \**********************************************************/
/*! exports provided: maybeScrollWindow, scrollPosIntoView, scrollIntoView, addToScrollTop, ensureCursorVisible, scrollToCoords, scrollToRange, scrollToCoordsRange, updateScrollTop, setScrollTop, setScrollLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeScrollWindow", function() { return maybeScrollWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollPosIntoView", function() { return scrollPosIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToScrollTop", function() { return addToScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureCursorVisible", function() { return ensureCursorVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToCoords", function() { return scrollToCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToRange", function() { return scrollToRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToCoordsRange", function() { return scrollToCoordsRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScrollTop", function() { return updateScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScrollTop", function() { return setScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScrollLeft", function() { return setScrollLeft; });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _highlight_worker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlight_worker.js */ "./node_modules/codemirror/src/display/highlight_worker.js");
/* harmony import */ var _line_numbers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line_numbers.js */ "./node_modules/codemirror/src/display/line_numbers.js");
/* harmony import */ var _update_display_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update_display.js */ "./node_modules/codemirror/src/display/update_display.js");










// SCROLLING THINGS INTO VIEW

// If an editor sits on the top or bottom of the window, partially
// scrolled out of view, this ensures that the cursor is visible.
function maybeScrollWindow(cm, rect) {
  if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_4__["signalDOMEvent"])(cm, "scrollCursorIntoView")) return

  let display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null
  if (rect.top + box.top < 0) doScroll = true
  else if (rect.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false
  if (doScroll != null && !_util_browser_js__WEBPACK_IMPORTED_MODULE_2__["phantom"]) {
    let scrollNode = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_3__["elt"])("div", "\u200b", null, `position: absolute;
                         top: ${rect.top - display.viewOffset - Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["paddingTop"])(cm.display)}px;
                         height: ${rect.bottom - rect.top + Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["scrollGap"])(cm) + display.barHeight}px;
                         left: ${rect.left}px; width: ${Math.max(2, rect.right - rect.left)}px;`)
    cm.display.lineSpace.appendChild(scrollNode)
    scrollNode.scrollIntoView(doScroll)
    cm.display.lineSpace.removeChild(scrollNode)
  }
}

// Scroll a given position into view (immediately), verifying that
// it actually became visible (as line heights are accurately
// measured, the position of something may 'drift' during drawing).
function scrollPosIntoView(cm, pos, end, margin) {
  if (margin == null) margin = 0
  let rect
  if (!cm.options.lineWrapping && pos == end) {
    // Set pos and end to the cursor positions around the character pos sticks to
    // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
    // If pos == Pos(_, 0, "before"), pos and end are unchanged
    pos = pos.ch ? Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"])(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos
    end = pos.sticky == "before" ? Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"])(pos.line, pos.ch + 1, "before") : pos
  }
  for (let limit = 0; limit < 5; limit++) {
    let changed = false
    let coords = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["cursorCoords"])(cm, pos)
    let endCoords = !end || end == pos ? coords : Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["cursorCoords"])(cm, end)
    rect = {left: Math.min(coords.left, endCoords.left),
            top: Math.min(coords.top, endCoords.top) - margin,
            right: Math.max(coords.left, endCoords.left),
            bottom: Math.max(coords.bottom, endCoords.bottom) + margin}
    let scrollPos = calculateScrollPos(cm, rect)
    let startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft
    if (scrollPos.scrollTop != null) {
      updateScrollTop(cm, scrollPos.scrollTop)
      if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true
    }
    if (scrollPos.scrollLeft != null) {
      setScrollLeft(cm, scrollPos.scrollLeft)
      if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true
    }
    if (!changed) break
  }
  return rect
}

// Scroll a given set of coordinates into view (immediately).
function scrollIntoView(cm, rect) {
  let scrollPos = calculateScrollPos(cm, rect)
  if (scrollPos.scrollTop != null) updateScrollTop(cm, scrollPos.scrollTop)
  if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft)
}

// Calculate a new scroll position needed to scroll the given
// rectangle into view. Returns an object with scrollTop and
// scrollLeft properties. When these are undefined, the
// vertical/horizontal position does not need to be adjusted.
function calculateScrollPos(cm, rect) {
  let display = cm.display, snapMargin = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["textHeight"])(cm.display)
  if (rect.top < 0) rect.top = 0
  let screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop
  let screen = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["displayHeight"])(cm), result = {}
  if (rect.bottom - rect.top > screen) rect.bottom = rect.top + screen
  let docBottom = cm.doc.height + Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["paddingVert"])(display)
  let atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin
  if (rect.top < screentop) {
    result.scrollTop = atTop ? 0 : rect.top
  } else if (rect.bottom > screentop + screen) {
    let newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen)
    if (newTop != screentop) result.scrollTop = newTop
  }

  let screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft
  let screenw = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["displayWidth"])(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0)
  let tooWide = rect.right - rect.left > screenw
  if (tooWide) rect.right = rect.left + screenw
  if (rect.left < 10)
    result.scrollLeft = 0
  else if (rect.left < screenleft)
    result.scrollLeft = Math.max(0, rect.left - (tooWide ? 0 : 10))
  else if (rect.right > screenw + screenleft - 3)
    result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw
  return result
}

// Store a relative adjustment to the scroll position in the current
// operation (to be applied when the operation finishes).
function addToScrollTop(cm, top) {
  if (top == null) return
  resolveScrollToPos(cm)
  cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top
}

// Make sure that at the end of the operation the current cursor is
// shown.
function ensureCursorVisible(cm) {
  resolveScrollToPos(cm)
  let cur = cm.getCursor()
  cm.curOp.scrollToPos = {from: cur, to: cur, margin: cm.options.cursorScrollMargin}
}

function scrollToCoords(cm, x, y) {
  if (x != null || y != null) resolveScrollToPos(cm)
  if (x != null) cm.curOp.scrollLeft = x
  if (y != null) cm.curOp.scrollTop = y
}

function scrollToRange(cm, range) {
  resolveScrollToPos(cm)
  cm.curOp.scrollToPos = range
}

// When an operation has its scrollToPos property set, and another
// scroll action is applied before the end of the operation, this
// 'simulates' scrolling that position into view in a cheap way, so
// that the effect of intermediate scroll commands is not ignored.
function resolveScrollToPos(cm) {
  let range = cm.curOp.scrollToPos
  if (range) {
    cm.curOp.scrollToPos = null
    let from = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["estimateCoords"])(cm, range.from), to = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["estimateCoords"])(cm, range.to)
    scrollToCoordsRange(cm, from, to, range.margin)
  }
}

function scrollToCoordsRange(cm, from, to, margin) {
  let sPos = calculateScrollPos(cm, {
    left: Math.min(from.left, to.left),
    top: Math.min(from.top, to.top) - margin,
    right: Math.max(from.right, to.right),
    bottom: Math.max(from.bottom, to.bottom) + margin
  })
  scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop)
}

// Sync the scrollable area and scrollbars, ensure the viewport
// covers the visible area.
function updateScrollTop(cm, val) {
  if (Math.abs(cm.doc.scrollTop - val) < 2) return
  if (!_util_browser_js__WEBPACK_IMPORTED_MODULE_2__["gecko"]) Object(_update_display_js__WEBPACK_IMPORTED_MODULE_7__["updateDisplaySimple"])(cm, {top: val})
  setScrollTop(cm, val, true)
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_2__["gecko"]) Object(_update_display_js__WEBPACK_IMPORTED_MODULE_7__["updateDisplaySimple"])(cm)
  Object(_highlight_worker_js__WEBPACK_IMPORTED_MODULE_5__["startWorker"])(cm, 100)
}

function setScrollTop(cm, val, forceScroll) {
  val = Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val)
  if (cm.display.scroller.scrollTop == val && !forceScroll) return
  cm.doc.scrollTop = val
  cm.display.scrollbars.setScrollTop(val)
  if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val
}

// Sync scroller and scrollbar, ensure the gutter elements are
// aligned.
function setScrollLeft(cm, val, isScroller, forceScroll) {
  val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth)
  if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) return
  cm.doc.scrollLeft = val
  Object(_line_numbers_js__WEBPACK_IMPORTED_MODULE_6__["alignHorizontally"])(cm)
  if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val
  cm.display.scrollbars.setScrollLeft(val)
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/selection.js":
/*!**********************************************************!*\
  !*** ./node_modules/codemirror/src/display/selection.js ***!
  \**********************************************************/
/*! exports provided: updateSelection, prepareSelection, drawSelectionCursor, restartBlink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSelection", function() { return updateSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareSelection", function() { return prepareSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSelectionCursor", function() { return drawSelectionCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartBlink", function() { return restartBlink; });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _util_bidi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/bidi.js */ "./node_modules/codemirror/src/util/bidi.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");







function updateSelection(cm) {
  cm.display.input.showSelection(cm.display.input.prepareSelection())
}

function prepareSelection(cm, primary = true) {
  let doc = cm.doc, result = {}
  let curFragment = result.cursors = document.createDocumentFragment()
  let selFragment = result.selection = document.createDocumentFragment()

  for (let i = 0; i < doc.sel.ranges.length; i++) {
    if (!primary && i == doc.sel.primIndex) continue
    let range = doc.sel.ranges[i]
    if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) continue
    let collapsed = range.empty()
    if (collapsed || cm.options.showCursorWhenSelecting)
      drawSelectionCursor(cm, range.head, curFragment)
    if (!collapsed)
      drawSelectionRange(cm, range, selFragment)
  }
  return result
}

// Draws a cursor for the given range
function drawSelectionCursor(cm, head, output) {
  let pos = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["cursorCoords"])(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine)

  let cursor = output.appendChild(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["elt"])("div", "\u00a0", "CodeMirror-cursor"))
  cursor.style.left = pos.left + "px"
  cursor.style.top = pos.top + "px"
  cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px"

  if (pos.other) {
    // Secondary cursor, shown when on a 'jump' in bi-directional text
    let otherCursor = output.appendChild(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["elt"])("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"))
    otherCursor.style.display = ""
    otherCursor.style.left = pos.other.left + "px"
    otherCursor.style.top = pos.other.top + "px"
    otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px"
  }
}

function cmpCoords(a, b) { return a.top - b.top || a.left - b.left }

// Draws the given range as a highlighted selection
function drawSelectionRange(cm, range, output) {
  let display = cm.display, doc = cm.doc
  let fragment = document.createDocumentFragment()
  let padding = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["paddingH"])(cm.display), leftSide = padding.left
  let rightSide = Math.max(display.sizerWidth, Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["displayWidth"])(cm) - display.sizer.offsetLeft) - padding.right
  let docLTR = doc.direction == "ltr"

  function add(left, top, width, bottom) {
    if (top < 0) top = 0
    top = Math.round(top)
    bottom = Math.round(bottom)
    fragment.appendChild(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["elt"])("div", null, "CodeMirror-selected", `position: absolute; left: ${left}px;
                             top: ${top}px; width: ${width == null ? rightSide - left : width}px;
                             height: ${bottom - top}px`))
  }

  function drawForLine(line, fromArg, toArg) {
    let lineObj = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__["getLine"])(doc, line)
    let lineLen = lineObj.text.length
    let start, end
    function coords(ch, bias) {
      return Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["charCoords"])(cm, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"])(line, ch), "div", lineObj, bias)
    }

    function wrapX(pos, dir, side) {
      let extent = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["wrappedLineExtentChar"])(cm, lineObj, null, pos)
      let prop = (dir == "ltr") == (side == "after") ? "left" : "right"
      let ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1)
      return coords(ch, prop)[prop]
    }

    let order = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_4__["getOrder"])(lineObj, doc.direction)
    Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_4__["iterateBidiSections"])(order, fromArg || 0, toArg == null ? lineLen : toArg, (from, to, dir, i) => {
      let ltr = dir == "ltr"
      let fromPos = coords(from, ltr ? "left" : "right")
      let toPos = coords(to - 1, ltr ? "right" : "left")

      let openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen
      let first = i == 0, last = !order || i == order.length - 1
      if (toPos.top - fromPos.top <= 3) { // Single line
        let openLeft = (docLTR ? openStart : openEnd) && first
        let openRight = (docLTR ? openEnd : openStart) && last
        let left = openLeft ? leftSide : (ltr ? fromPos : toPos).left
        let right = openRight ? rightSide : (ltr ? toPos : fromPos).right
        add(left, fromPos.top, right - left, fromPos.bottom)
      } else { // Multiple lines
        let topLeft, topRight, botLeft, botRight
        if (ltr) {
          topLeft = docLTR && openStart && first ? leftSide : fromPos.left
          topRight = docLTR ? rightSide : wrapX(from, dir, "before")
          botLeft = docLTR ? leftSide : wrapX(to, dir, "after")
          botRight = docLTR && openEnd && last ? rightSide : toPos.right
        } else {
          topLeft = !docLTR ? leftSide : wrapX(from, dir, "before")
          topRight = !docLTR && openStart && first ? rightSide : fromPos.right
          botLeft = !docLTR && openEnd && last ? leftSide : toPos.left
          botRight = !docLTR ? rightSide : wrapX(to, dir, "after")
        }
        add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom)
        if (fromPos.bottom < toPos.top) add(leftSide, fromPos.bottom, null, toPos.top)
        add(botLeft, toPos.top, botRight - botLeft, toPos.bottom)
      }

      if (!start || cmpCoords(fromPos, start) < 0) start = fromPos
      if (cmpCoords(toPos, start) < 0) start = toPos
      if (!end || cmpCoords(fromPos, end) < 0) end = fromPos
      if (cmpCoords(toPos, end) < 0) end = toPos
    })
    return {start: start, end: end}
  }

  let sFrom = range.from(), sTo = range.to()
  if (sFrom.line == sTo.line) {
    drawForLine(sFrom.line, sFrom.ch, sTo.ch)
  } else {
    let fromLine = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__["getLine"])(doc, sFrom.line), toLine = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__["getLine"])(doc, sTo.line)
    let singleVLine = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_1__["visualLine"])(fromLine) == Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_1__["visualLine"])(toLine)
    let leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end
    let rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start
    if (singleVLine) {
      if (leftEnd.top < rightStart.top - 2) {
        add(leftEnd.right, leftEnd.top, null, leftEnd.bottom)
        add(leftSide, rightStart.top, rightStart.left, rightStart.bottom)
      } else {
        add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom)
      }
    }
    if (leftEnd.bottom < rightStart.top)
      add(leftSide, leftEnd.bottom, null, rightStart.top)
  }

  output.appendChild(fragment)
}

// Cursor-blinking
function restartBlink(cm) {
  if (!cm.state.focused) return
  let display = cm.display
  clearInterval(display.blinker)
  let on = true
  display.cursorDiv.style.visibility = ""
  if (cm.options.cursorBlinkRate > 0)
    display.blinker = setInterval(() => display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden",
      cm.options.cursorBlinkRate)
  else if (cm.options.cursorBlinkRate < 0)
    display.cursorDiv.style.visibility = "hidden"
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/update_display.js":
/*!***************************************************************!*\
  !*** ./node_modules/codemirror/src/display/update_display.js ***!
  \***************************************************************/
/*! exports provided: DisplayUpdate, maybeClipScrollbars, updateDisplayIfNeeded, postUpdateDisplay, updateDisplaySimple, updateGutterSpace, setDocumentHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayUpdate", function() { return DisplayUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeClipScrollbars", function() { return maybeClipScrollbars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDisplayIfNeeded", function() { return updateDisplayIfNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postUpdateDisplay", function() { return postUpdateDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDisplaySimple", function() { return updateDisplaySimple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGutterSpace", function() { return updateGutterSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDocumentHeight", function() { return setDocumentHeight; });
/* harmony import */ var _line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/saw_special_spans.js */ "./node_modules/codemirror/src/line/saw_special_spans.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _update_line_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update_line.js */ "./node_modules/codemirror/src/display/update_line.js");
/* harmony import */ var _highlight_worker_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./highlight_worker.js */ "./node_modules/codemirror/src/display/highlight_worker.js");
/* harmony import */ var _line_numbers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./line_numbers.js */ "./node_modules/codemirror/src/display/line_numbers.js");
/* harmony import */ var _scrollbars_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scrollbars.js */ "./node_modules/codemirror/src/display/scrollbars.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selection.js */ "./node_modules/codemirror/src/display/selection.js");
/* harmony import */ var _update_lines_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update_lines.js */ "./node_modules/codemirror/src/display/update_lines.js");
/* harmony import */ var _view_tracking_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view_tracking.js */ "./node_modules/codemirror/src/display/view_tracking.js");

















// DISPLAY DRAWING

class DisplayUpdate {
  constructor(cm, viewport, force) {
    let display = cm.display

    this.viewport = viewport
    // Store some values that we'll need later (but don't want to force a relayout for)
    this.visible = Object(_update_lines_js__WEBPACK_IMPORTED_MODULE_13__["visibleLines"])(display, cm.doc, viewport)
    this.editorIsHidden = !display.wrapper.offsetWidth
    this.wrapperHeight = display.wrapper.clientHeight
    this.wrapperWidth = display.wrapper.clientWidth
    this.oldDisplayWidth = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["displayWidth"])(cm)
    this.force = force
    this.dims = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["getDimensions"])(cm)
    this.events = []
  }

  signal(emitter, type) {
    if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_6__["hasHandler"])(emitter, type))
      this.events.push(arguments)
  }
  finish() {
    for (let i = 0; i < this.events.length; i++)
      _util_event_js__WEBPACK_IMPORTED_MODULE_6__["signal"].apply(null, this.events[i])
  }
}

function maybeClipScrollbars(cm) {
  let display = cm.display
  if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
    display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth
    display.heightForcer.style.height = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["scrollGap"])(cm) + "px"
    display.sizer.style.marginBottom = -display.nativeBarWidth + "px"
    display.sizer.style.borderRightWidth = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["scrollGap"])(cm) + "px"
    display.scrollbarsClipped = true
  }
}

function selectionSnapshot(cm) {
  if (cm.hasFocus()) return null
  let active = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["activeElt"])()
  if (!active || !Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["contains"])(cm.display.lineDiv, active)) return null
  let result = {activeElt: active}
  if (window.getSelection) {
    let sel = window.getSelection()
    if (sel.anchorNode && sel.extend && Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["contains"])(cm.display.lineDiv, sel.anchorNode)) {
      result.anchorNode = sel.anchorNode
      result.anchorOffset = sel.anchorOffset
      result.focusNode = sel.focusNode
      result.focusOffset = sel.focusOffset
    }
  }
  return result
}

function restoreSelection(snapshot) {
  if (!snapshot || !snapshot.activeElt || snapshot.activeElt == Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["activeElt"])()) return
  snapshot.activeElt.focus()
  if (snapshot.anchorNode && Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["contains"])(document.body, snapshot.anchorNode) && Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["contains"])(document.body, snapshot.focusNode)) {
    let sel = window.getSelection(), range = document.createRange()
    range.setEnd(snapshot.anchorNode, snapshot.anchorOffset)
    range.collapse(false)
    sel.removeAllRanges()
    sel.addRange(range)
    sel.extend(snapshot.focusNode, snapshot.focusOffset)
  }
}

// Does the actual updating of the line display. Bails out
// (returning false) when there is nothing to be done and forced is
// false.
function updateDisplayIfNeeded(cm, update) {
  let display = cm.display, doc = cm.doc

  if (update.editorIsHidden) {
    Object(_view_tracking_js__WEBPACK_IMPORTED_MODULE_14__["resetView"])(cm)
    return false
  }

  // Bail out if the visible area is already rendered and nothing changed.
  if (!update.force &&
      update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
      display.renderedView == display.view && Object(_view_tracking_js__WEBPACK_IMPORTED_MODULE_14__["countDirtyView"])(cm) == 0)
    return false

  if (Object(_line_numbers_js__WEBPACK_IMPORTED_MODULE_10__["maybeUpdateLineNumberWidth"])(cm)) {
    Object(_view_tracking_js__WEBPACK_IMPORTED_MODULE_14__["resetView"])(cm)
    update.dims = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["getDimensions"])(cm)
  }

  // Compute a suitable new viewport (from & to)
  let end = doc.first + doc.size
  let from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first)
  let to = Math.min(end, update.visible.to + cm.options.viewportMargin)
  if (display.viewFrom < from && from - display.viewFrom < 20) from = Math.max(doc.first, display.viewFrom)
  if (display.viewTo > to && display.viewTo - to < 20) to = Math.min(end, display.viewTo)
  if (_line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_0__["sawCollapsedSpans"]) {
    from = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_1__["visualLineNo"])(cm.doc, from)
    to = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_1__["visualLineEndNo"])(cm.doc, to)
  }

  let different = from != display.viewFrom || to != display.viewTo ||
    display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth
  Object(_view_tracking_js__WEBPACK_IMPORTED_MODULE_14__["adjustView"])(cm, from, to)

  display.viewOffset = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_1__["heightAtLine"])(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__["getLine"])(cm.doc, display.viewFrom))
  // Position the mover div to align with the current scroll position
  cm.display.mover.style.top = display.viewOffset + "px"

  let toUpdate = Object(_view_tracking_js__WEBPACK_IMPORTED_MODULE_14__["countDirtyView"])(cm)
  if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
    return false

  // For big changes, we hide the enclosing element during the
  // update, since that speeds up the operations on most browsers.
  let selSnapshot = selectionSnapshot(cm)
  if (toUpdate > 4) display.lineDiv.style.display = "none"
  patchDisplay(cm, display.updateLineNumbers, update.dims)
  if (toUpdate > 4) display.lineDiv.style.display = ""
  display.renderedView = display.view
  // There might have been a widget with a focused element that got
  // hidden or updated, if so re-focus it.
  restoreSelection(selSnapshot)

  // Prevent selection and cursors from interfering with the scroll
  // width and height.
  Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["removeChildren"])(display.cursorDiv)
  Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["removeChildren"])(display.selectionDiv)
  display.gutters.style.height = display.sizer.style.minHeight = 0

  if (different) {
    display.lastWrapHeight = update.wrapperHeight
    display.lastWrapWidth = update.wrapperWidth
    Object(_highlight_worker_js__WEBPACK_IMPORTED_MODULE_9__["startWorker"])(cm, 400)
  }

  display.updateLineNumbers = null

  return true
}

function postUpdateDisplay(cm, update) {
  let viewport = update.viewport

  for (let first = true;; first = false) {
    if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["displayWidth"])(cm)) {
      // Clip forced viewport to actual scrollable area.
      if (viewport && viewport.top != null)
        viewport = {top: Math.min(cm.doc.height + Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["paddingVert"])(cm.display) - Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["displayHeight"])(cm), viewport.top)}
      // Updated line heights might result in the drawn area not
      // actually covering the viewport. Keep looping until it does.
      update.visible = Object(_update_lines_js__WEBPACK_IMPORTED_MODULE_13__["visibleLines"])(cm.display, cm.doc, viewport)
      if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
        break
    }
    if (!updateDisplayIfNeeded(cm, update)) break
    Object(_update_lines_js__WEBPACK_IMPORTED_MODULE_13__["updateHeightsInViewport"])(cm)
    let barMeasure = Object(_scrollbars_js__WEBPACK_IMPORTED_MODULE_11__["measureForScrollbars"])(cm)
    Object(_selection_js__WEBPACK_IMPORTED_MODULE_12__["updateSelection"])(cm)
    Object(_scrollbars_js__WEBPACK_IMPORTED_MODULE_11__["updateScrollbars"])(cm, barMeasure)
    setDocumentHeight(cm, barMeasure)
    update.force = false
  }

  update.signal(cm, "update", cm)
  if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
    update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo)
    cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo
  }
}

function updateDisplaySimple(cm, viewport) {
  let update = new DisplayUpdate(cm, viewport)
  if (updateDisplayIfNeeded(cm, update)) {
    Object(_update_lines_js__WEBPACK_IMPORTED_MODULE_13__["updateHeightsInViewport"])(cm)
    postUpdateDisplay(cm, update)
    let barMeasure = Object(_scrollbars_js__WEBPACK_IMPORTED_MODULE_11__["measureForScrollbars"])(cm)
    Object(_selection_js__WEBPACK_IMPORTED_MODULE_12__["updateSelection"])(cm)
    Object(_scrollbars_js__WEBPACK_IMPORTED_MODULE_11__["updateScrollbars"])(cm, barMeasure)
    setDocumentHeight(cm, barMeasure)
    update.finish()
  }
}

// Sync the actual display DOM structure with display.view, removing
// nodes for lines that are no longer in view, and creating the ones
// that are not there yet, and updating the ones that are out of
// date.
function patchDisplay(cm, updateNumbersFrom, dims) {
  let display = cm.display, lineNumbers = cm.options.lineNumbers
  let container = display.lineDiv, cur = container.firstChild

  function rm(node) {
    let next = node.nextSibling
    // Works around a throw-scroll bug in OS X Webkit
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_4__["webkit"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_4__["mac"] && cm.display.currentWheelTarget == node)
      node.style.display = "none"
    else
      node.parentNode.removeChild(node)
    return next
  }

  let view = display.view, lineN = display.viewFrom
  // Loop over the elements in the view, syncing cur (the DOM nodes
  // in display.lineDiv) with the view as we go.
  for (let i = 0; i < view.length; i++) {
    let lineView = view[i]
    if (lineView.hidden) {
    } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
      let node = Object(_update_line_js__WEBPACK_IMPORTED_MODULE_8__["buildLineElement"])(cm, lineView, lineN, dims)
      container.insertBefore(node, cur)
    } else { // Already drawn
      while (cur != lineView.node) cur = rm(cur)
      let updateNumber = lineNumbers && updateNumbersFrom != null &&
        updateNumbersFrom <= lineN && lineView.lineNumber
      if (lineView.changes) {
        if (Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_7__["indexOf"])(lineView.changes, "gutter") > -1) updateNumber = false
        Object(_update_line_js__WEBPACK_IMPORTED_MODULE_8__["updateLineForChanges"])(cm, lineView, lineN, dims)
      }
      if (updateNumber) {
        Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["removeChildren"])(lineView.lineNumber)
        lineView.lineNumber.appendChild(document.createTextNode(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__["lineNumberFor"])(cm.options, lineN)))
      }
      cur = lineView.node.nextSibling
    }
    lineN += lineView.size
  }
  while (cur) cur = rm(cur)
}

function updateGutterSpace(cm) {
  let width = cm.display.gutters.offsetWidth
  cm.display.sizer.style.marginLeft = width + "px"
}

function setDocumentHeight(cm, measure) {
  cm.display.sizer.style.minHeight = measure.docHeight + "px"
  cm.display.heightForcer.style.top = measure.docHeight + "px"
  cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["scrollGap"])(cm)) + "px"
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/update_line.js":
/*!************************************************************!*\
  !*** ./node_modules/codemirror/src/display/update_line.js ***!
  \************************************************************/
/*! exports provided: updateLineForChanges, buildLineElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLineForChanges", function() { return updateLineForChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLineElement", function() { return buildLineElement; });
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/line_data.js */ "./node_modules/codemirror/src/line/line_data.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/operation_group.js */ "./node_modules/codemirror/src/util/operation_group.js");






// When an aspect of a line changes, a string is added to
// lineView.changes. This updates the relevant part of the line's
// DOM structure.
function updateLineForChanges(cm, lineView, lineN, dims) {
  for (let j = 0; j < lineView.changes.length; j++) {
    let type = lineView.changes[j]
    if (type == "text") updateLineText(cm, lineView)
    else if (type == "gutter") updateLineGutter(cm, lineView, lineN, dims)
    else if (type == "class") updateLineClasses(cm, lineView)
    else if (type == "widget") updateLineWidgets(cm, lineView, dims)
  }
  lineView.changes = null
}

// Lines with gutter elements, widgets or a background class need to
// be wrapped, and have the extra elements added to the wrapper div
function ensureLineWrapped(lineView) {
  if (lineView.node == lineView.text) {
    lineView.node = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_3__["elt"])("div", null, null, "position: relative")
    if (lineView.text.parentNode)
      lineView.text.parentNode.replaceChild(lineView.node, lineView.text)
    lineView.node.appendChild(lineView.text)
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_2__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_2__["ie_version"] < 8) lineView.node.style.zIndex = 2
  }
  return lineView.node
}

function updateLineBackground(cm, lineView) {
  let cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass
  if (cls) cls += " CodeMirror-linebackground"
  if (lineView.background) {
    if (cls) lineView.background.className = cls
    else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null }
  } else if (cls) {
    let wrap = ensureLineWrapped(lineView)
    lineView.background = wrap.insertBefore(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_3__["elt"])("div", null, cls), wrap.firstChild)
    cm.display.input.setUneditable(lineView.background)
  }
}

// Wrapper around buildLineContent which will reuse the structure
// in display.externalMeasured when possible.
function getLineContent(cm, lineView) {
  let ext = cm.display.externalMeasured
  if (ext && ext.line == lineView.line) {
    cm.display.externalMeasured = null
    lineView.measure = ext.measure
    return ext.built
  }
  return Object(_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__["buildLineContent"])(cm, lineView)
}

// Redraw the line's text. Interacts with the background and text
// classes because the mode may output tokens that influence these
// classes.
function updateLineText(cm, lineView) {
  let cls = lineView.text.className
  let built = getLineContent(cm, lineView)
  if (lineView.text == lineView.node) lineView.node = built.pre
  lineView.text.parentNode.replaceChild(built.pre, lineView.text)
  lineView.text = built.pre
  if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
    lineView.bgClass = built.bgClass
    lineView.textClass = built.textClass
    updateLineClasses(cm, lineView)
  } else if (cls) {
    lineView.text.className = cls
  }
}

function updateLineClasses(cm, lineView) {
  updateLineBackground(cm, lineView)
  if (lineView.line.wrapClass)
    ensureLineWrapped(lineView).className = lineView.line.wrapClass
  else if (lineView.node != lineView.text)
    lineView.node.className = ""
  let textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass
  lineView.text.className = textClass || ""
}

function updateLineGutter(cm, lineView, lineN, dims) {
  if (lineView.gutter) {
    lineView.node.removeChild(lineView.gutter)
    lineView.gutter = null
  }
  if (lineView.gutterBackground) {
    lineView.node.removeChild(lineView.gutterBackground)
    lineView.gutterBackground = null
  }
  if (lineView.line.gutterClass) {
    let wrap = ensureLineWrapped(lineView)
    lineView.gutterBackground = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_3__["elt"])("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                    `left: ${cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth}px; width: ${dims.gutterTotalWidth}px`)
    cm.display.input.setUneditable(lineView.gutterBackground)
    wrap.insertBefore(lineView.gutterBackground, lineView.text)
  }
  let markers = lineView.line.gutterMarkers
  if (cm.options.lineNumbers || markers) {
    let wrap = ensureLineWrapped(lineView)
    let gutterWrap = lineView.gutter = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_3__["elt"])("div", null, "CodeMirror-gutter-wrapper", `left: ${cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth}px`)
    cm.display.input.setUneditable(gutterWrap)
    wrap.insertBefore(gutterWrap, lineView.text)
    if (lineView.line.gutterClass)
      gutterWrap.className += " " + lineView.line.gutterClass
    if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
      lineView.lineNumber = gutterWrap.appendChild(
        Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_3__["elt"])("div", Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__["lineNumberFor"])(cm.options, lineN),
            "CodeMirror-linenumber CodeMirror-gutter-elt",
            `left: ${dims.gutterLeft["CodeMirror-linenumbers"]}px; width: ${cm.display.lineNumInnerWidth}px`))
    if (markers) for (let k = 0; k < cm.options.gutters.length; ++k) {
      let id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id]
      if (found)
        gutterWrap.appendChild(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_3__["elt"])("div", [found], "CodeMirror-gutter-elt",
                                   `left: ${dims.gutterLeft[id]}px; width: ${dims.gutterWidth[id]}px`))
    }
  }
}

function updateLineWidgets(cm, lineView, dims) {
  if (lineView.alignable) lineView.alignable = null
  for (let node = lineView.node.firstChild, next; node; node = next) {
    next = node.nextSibling
    if (node.className == "CodeMirror-linewidget")
      lineView.node.removeChild(node)
  }
  insertLineWidgets(cm, lineView, dims)
}

// Build a line's DOM representation from scratch
function buildLineElement(cm, lineView, lineN, dims) {
  let built = getLineContent(cm, lineView)
  lineView.text = lineView.node = built.pre
  if (built.bgClass) lineView.bgClass = built.bgClass
  if (built.textClass) lineView.textClass = built.textClass

  updateLineClasses(cm, lineView)
  updateLineGutter(cm, lineView, lineN, dims)
  insertLineWidgets(cm, lineView, dims)
  return lineView.node
}

// A lineView may contain multiple logical lines (when merged by
// collapsed spans). The widgets for all of them need to be drawn.
function insertLineWidgets(cm, lineView, dims) {
  insertLineWidgetsFor(cm, lineView.line, lineView, dims, true)
  if (lineView.rest) for (let i = 0; i < lineView.rest.length; i++)
    insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false)
}

function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
  if (!line.widgets) return
  let wrap = ensureLineWrapped(lineView)
  for (let i = 0, ws = line.widgets; i < ws.length; ++i) {
    let widget = ws[i], node = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_3__["elt"])("div", [widget.node], "CodeMirror-linewidget")
    if (!widget.handleMouseEvents) node.setAttribute("cm-ignore-events", "true")
    positionLineWidget(widget, node, lineView, dims)
    cm.display.input.setUneditable(node)
    if (allowAbove && widget.above)
      wrap.insertBefore(node, lineView.gutter || lineView.text)
    else
      wrap.appendChild(node)
    Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_4__["signalLater"])(widget, "redraw")
  }
}

function positionLineWidget(widget, node, lineView, dims) {
  if (widget.noHScroll) {
    ;(lineView.alignable || (lineView.alignable = [])).push(node)
    let width = dims.wrapperWidth
    node.style.left = dims.fixedPos + "px"
    if (!widget.coverGutter) {
      width -= dims.gutterTotalWidth
      node.style.paddingLeft = dims.gutterTotalWidth + "px"
    }
    node.style.width = width + "px"
  }
  if (widget.coverGutter) {
    node.style.zIndex = 5
    node.style.position = "relative"
    if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px"
  }
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/update_lines.js":
/*!*************************************************************!*\
  !*** ./node_modules/codemirror/src/display/update_lines.js ***!
  \*************************************************************/
/*! exports provided: updateHeightsInViewport, visibleLines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHeightsInViewport", function() { return updateHeightsInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibleLines", function() { return visibleLines; });
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");





// Read the actual heights of the rendered lines, and update their
// stored heights to match.
function updateHeightsInViewport(cm) {
  let display = cm.display
  let prevBottom = display.lineDiv.offsetTop
  for (let i = 0; i < display.view.length; i++) {
    let cur = display.view[i], wrapping = cm.options.lineWrapping
    let height, width = 0
    if (cur.hidden) continue
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_3__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_3__["ie_version"] < 8) {
      let bot = cur.node.offsetTop + cur.node.offsetHeight
      height = bot - prevBottom
      prevBottom = bot
    } else {
      let box = cur.node.getBoundingClientRect()
      height = box.bottom - box.top
      // Check that lines don't extend past the right of the current
      // editor width
      if (!wrapping && cur.text.firstChild)
        width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1
    }
    let diff = cur.line.height - height
    if (height < 2) height = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__["textHeight"])(display)
    if (diff > .005 || diff < -.005) {
      Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__["updateLineHeight"])(cur.line, height)
      updateWidgetHeight(cur.line)
      if (cur.rest) for (let j = 0; j < cur.rest.length; j++)
        updateWidgetHeight(cur.rest[j])
    }
    if (width > cm.display.sizerWidth) {
      let chWidth = Math.ceil(width / Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__["charWidth"])(cm.display))
      if (chWidth > cm.display.maxLineLength) {
        cm.display.maxLineLength = chWidth
        cm.display.maxLine = cur.line
        cm.display.maxLineChanged = true
      }
    }
  }
}

// Read and store the height of line widgets associated with the
// given line.
function updateWidgetHeight(line) {
  if (line.widgets) for (let i = 0; i < line.widgets.length; ++i) {
    let w = line.widgets[i], parent = w.node.parentNode
    if (parent) w.height = parent.offsetHeight
  }
}

// Compute the lines that are visible in a given viewport (defaults
// the the current scroll position). viewport may contain top,
// height, and ensure (see op.scrollToPos) properties.
function visibleLines(display, doc, viewport) {
  let top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop
  top = Math.floor(top - Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__["paddingTop"])(display))
  let bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight

  let from = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__["lineAtHeight"])(doc, top), to = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__["lineAtHeight"])(doc, bottom)
  // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
  // forces those lines into the viewport (if possible).
  if (viewport && viewport.ensure) {
    let ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line
    if (ensureFrom < from) {
      from = ensureFrom
      to = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__["lineAtHeight"])(doc, Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_0__["heightAtLine"])(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__["getLine"])(doc, ensureFrom)) + display.wrapper.clientHeight)
    } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
      from = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__["lineAtHeight"])(doc, Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_0__["heightAtLine"])(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__["getLine"])(doc, ensureTo)) - display.wrapper.clientHeight)
      to = ensureTo
    }
  }
  return {from: from, to: Math.max(to, from + 1)}
}


/***/ }),

/***/ "./node_modules/codemirror/src/display/view_tracking.js":
/*!**************************************************************!*\
  !*** ./node_modules/codemirror/src/display/view_tracking.js ***!
  \**************************************************************/
/*! exports provided: regChange, regLineChange, resetView, adjustView, countDirtyView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regChange", function() { return regChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regLineChange", function() { return regLineChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetView", function() { return resetView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustView", function() { return adjustView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countDirtyView", function() { return countDirtyView; });
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/line_data.js */ "./node_modules/codemirror/src/line/line_data.js");
/* harmony import */ var _line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/saw_special_spans.js */ "./node_modules/codemirror/src/line/saw_special_spans.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");






// Updates the display.view data structure for a given change to the
// document. From and to are in pre-change coordinates. Lendiff is
// the amount of lines added or subtracted by the change. This is
// used for changes that span multiple lines, or change the way
// lines are divided into visual lines. regLineChange (below)
// registers single-line changes.
function regChange(cm, from, to, lendiff) {
  if (from == null) from = cm.doc.first
  if (to == null) to = cm.doc.first + cm.doc.size
  if (!lendiff) lendiff = 0

  let display = cm.display
  if (lendiff && to < display.viewTo &&
      (display.updateLineNumbers == null || display.updateLineNumbers > from))
    display.updateLineNumbers = from

  cm.curOp.viewChanged = true

  if (from >= display.viewTo) { // Change after
    if (_line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_1__["sawCollapsedSpans"] && Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_2__["visualLineNo"])(cm.doc, from) < display.viewTo)
      resetView(cm)
  } else if (to <= display.viewFrom) { // Change before
    if (_line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_1__["sawCollapsedSpans"] && Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_2__["visualLineEndNo"])(cm.doc, to + lendiff) > display.viewFrom) {
      resetView(cm)
    } else {
      display.viewFrom += lendiff
      display.viewTo += lendiff
    }
  } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
    resetView(cm)
  } else if (from <= display.viewFrom) { // Top overlap
    let cut = viewCuttingPoint(cm, to, to + lendiff, 1)
    if (cut) {
      display.view = display.view.slice(cut.index)
      display.viewFrom = cut.lineN
      display.viewTo += lendiff
    } else {
      resetView(cm)
    }
  } else if (to >= display.viewTo) { // Bottom overlap
    let cut = viewCuttingPoint(cm, from, from, -1)
    if (cut) {
      display.view = display.view.slice(0, cut.index)
      display.viewTo = cut.lineN
    } else {
      resetView(cm)
    }
  } else { // Gap in the middle
    let cutTop = viewCuttingPoint(cm, from, from, -1)
    let cutBot = viewCuttingPoint(cm, to, to + lendiff, 1)
    if (cutTop && cutBot) {
      display.view = display.view.slice(0, cutTop.index)
        .concat(Object(_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__["buildViewArray"])(cm, cutTop.lineN, cutBot.lineN))
        .concat(display.view.slice(cutBot.index))
      display.viewTo += lendiff
    } else {
      resetView(cm)
    }
  }

  let ext = display.externalMeasured
  if (ext) {
    if (to < ext.lineN)
      ext.lineN += lendiff
    else if (from < ext.lineN + ext.size)
      display.externalMeasured = null
  }
}

// Register a change to a single line. Type must be one of "text",
// "gutter", "class", "widget"
function regLineChange(cm, line, type) {
  cm.curOp.viewChanged = true
  let display = cm.display, ext = cm.display.externalMeasured
  if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
    display.externalMeasured = null

  if (line < display.viewFrom || line >= display.viewTo) return
  let lineView = display.view[Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["findViewIndex"])(cm, line)]
  if (lineView.node == null) return
  let arr = lineView.changes || (lineView.changes = [])
  if (Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["indexOf"])(arr, type) == -1) arr.push(type)
}

// Clear the view.
function resetView(cm) {
  cm.display.viewFrom = cm.display.viewTo = cm.doc.first
  cm.display.view = []
  cm.display.viewOffset = 0
}

function viewCuttingPoint(cm, oldN, newN, dir) {
  let index = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["findViewIndex"])(cm, oldN), diff, view = cm.display.view
  if (!_line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_1__["sawCollapsedSpans"] || newN == cm.doc.first + cm.doc.size)
    return {index: index, lineN: newN}
  let n = cm.display.viewFrom
  for (let i = 0; i < index; i++)
    n += view[i].size
  if (n != oldN) {
    if (dir > 0) {
      if (index == view.length - 1) return null
      diff = (n + view[index].size) - oldN
      index++
    } else {
      diff = n - oldN
    }
    oldN += diff; newN += diff
  }
  while (Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_2__["visualLineNo"])(cm.doc, newN) != newN) {
    if (index == (dir < 0 ? 0 : view.length - 1)) return null
    newN += dir * view[index - (dir < 0 ? 1 : 0)].size
    index += dir
  }
  return {index: index, lineN: newN}
}

// Force the view to cover a given range, adding empty view element
// or clipping off existing ones as needed.
function adjustView(cm, from, to) {
  let display = cm.display, view = display.view
  if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
    display.view = Object(_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__["buildViewArray"])(cm, from, to)
    display.viewFrom = from
  } else {
    if (display.viewFrom > from)
      display.view = Object(_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__["buildViewArray"])(cm, from, display.viewFrom).concat(display.view)
    else if (display.viewFrom < from)
      display.view = display.view.slice(Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["findViewIndex"])(cm, from))
    display.viewFrom = from
    if (display.viewTo < to)
      display.view = display.view.concat(Object(_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__["buildViewArray"])(cm, display.viewTo, to))
    else if (display.viewTo > to)
      display.view = display.view.slice(0, Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["findViewIndex"])(cm, to))
  }
  display.viewTo = to
}

// Count the number of lines in the view whose DOM representation is
// out of date (or nonexistent).
function countDirtyView(cm) {
  let view = cm.display.view, dirty = 0
  for (let i = 0; i < view.length; i++) {
    let lineView = view[i]
    if (!lineView.hidden && (!lineView.node || lineView.changes)) ++dirty
  }
  return dirty
}


/***/ }),

/***/ "./node_modules/codemirror/src/edit/CodeMirror.js":
/*!********************************************************!*\
  !*** ./node_modules/codemirror/src/edit/CodeMirror.js ***!
  \********************************************************/
/*! exports provided: CodeMirror, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeMirror", function() { return CodeMirror; });
/* harmony import */ var _display_Display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/Display.js */ "./node_modules/codemirror/src/display/Display.js");
/* harmony import */ var _display_focus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/focus.js */ "./node_modules/codemirror/src/display/focus.js");
/* harmony import */ var _display_gutters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/gutters.js */ "./node_modules/codemirror/src/display/gutters.js");
/* harmony import */ var _display_line_numbers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display/line_numbers.js */ "./node_modules/codemirror/src/display/line_numbers.js");
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _display_scrollbars_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../display/scrollbars.js */ "./node_modules/codemirror/src/display/scrollbars.js");
/* harmony import */ var _display_scroll_events_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../display/scroll_events.js */ "./node_modules/codemirror/src/display/scroll_events.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../display/scrolling.js */ "./node_modules/codemirror/src/display/scrolling.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../measurement/widgets.js */ "./node_modules/codemirror/src/measurement/widgets.js");
/* harmony import */ var _model_Doc_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../model/Doc.js */ "./node_modules/codemirror/src/model/Doc.js");
/* harmony import */ var _model_document_data_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../model/document_data.js */ "./node_modules/codemirror/src/model/document_data.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../model/selection.js */ "./node_modules/codemirror/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../model/selection_updates.js */ "./node_modules/codemirror/src/model/selection_updates.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _drop_events_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./drop_events.js */ "./node_modules/codemirror/src/edit/drop_events.js");
/* harmony import */ var _global_events_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./global_events.js */ "./node_modules/codemirror/src/edit/global_events.js");
/* harmony import */ var _key_events_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./key_events.js */ "./node_modules/codemirror/src/edit/key_events.js");
/* harmony import */ var _mouse_events_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mouse_events.js */ "./node_modules/codemirror/src/edit/mouse_events.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils.js */ "./node_modules/codemirror/src/edit/utils.js");
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./options.js */ "./node_modules/codemirror/src/edit/options.js");


























// A CodeMirror instance represents an editor. This is the object
// that user code is usually dealing with.

function CodeMirror(place, options) {
  if (!(this instanceof CodeMirror)) return new CodeMirror(place, options)

  this.options = options = options ? Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_17__["copyObj"])(options) : {}
  // Determine effective options based on given values and defaults.
  Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_17__["copyObj"])(_options_js__WEBPACK_IMPORTED_MODULE_23__["defaults"], options, false)
  Object(_display_gutters_js__WEBPACK_IMPORTED_MODULE_2__["setGuttersForLineNumbers"])(options)

  let doc = options.value
  if (typeof doc == "string") doc = new _model_Doc_js__WEBPACK_IMPORTED_MODULE_11__["default"](doc, options.mode, null, options.lineSeparator, options.direction)
  else if (options.mode) doc.modeOption = options.mode
  this.doc = doc

  let input = new CodeMirror.inputStyles[options.inputStyle](this)
  let display = this.display = new _display_Display_js__WEBPACK_IMPORTED_MODULE_0__["Display"](place, doc, input)
  display.wrapper.CodeMirror = this
  Object(_display_gutters_js__WEBPACK_IMPORTED_MODULE_2__["updateGutters"])(this)
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_22__["themeChanged"])(this)
  if (options.lineWrapping)
    this.display.wrapper.className += " CodeMirror-wrap"
  Object(_display_scrollbars_js__WEBPACK_IMPORTED_MODULE_5__["initScrollbars"])(this)

  this.state = {
    keyMaps: [],  // stores maps added by addKeyMap
    overlays: [], // highlighting overlays, as added by addOverlay
    modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
    overwrite: false,
    delayingBlurEvent: false,
    focused: false,
    suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
    pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
    selectingText: false,
    draggingText: false,
    highlight: new _util_misc_js__WEBPACK_IMPORTED_MODULE_17__["Delayed"](), // stores highlight worker timeout
    keySeq: null,  // Unfinished key sequence
    specialChars: null
  }

  if (options.autofocus && !_util_browser_js__WEBPACK_IMPORTED_MODULE_15__["mobile"]) display.input.focus()

  // Override magic textarea content restore that IE sometimes does
  // on our hidden textarea on reload
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_15__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_15__["ie_version"] < 11) setTimeout(() => this.display.input.reset(true), 20)

  registerEventHandlers(this)
  Object(_global_events_js__WEBPACK_IMPORTED_MODULE_19__["ensureGlobalHandlers"])()

  Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_4__["startOperation"])(this)
  this.curOp.forceUpdate = true
  Object(_model_document_data_js__WEBPACK_IMPORTED_MODULE_12__["attachDoc"])(this, doc)

  if ((options.autofocus && !_util_browser_js__WEBPACK_IMPORTED_MODULE_15__["mobile"]) || this.hasFocus())
    setTimeout(Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_17__["bind"])(_display_focus_js__WEBPACK_IMPORTED_MODULE_1__["onFocus"], this), 20)
  else
    Object(_display_focus_js__WEBPACK_IMPORTED_MODULE_1__["onBlur"])(this)

  for (let opt in _options_js__WEBPACK_IMPORTED_MODULE_23__["optionHandlers"]) if (_options_js__WEBPACK_IMPORTED_MODULE_23__["optionHandlers"].hasOwnProperty(opt))
    _options_js__WEBPACK_IMPORTED_MODULE_23__["optionHandlers"][opt](this, options[opt], _options_js__WEBPACK_IMPORTED_MODULE_23__["Init"])
  Object(_display_line_numbers_js__WEBPACK_IMPORTED_MODULE_3__["maybeUpdateLineNumberWidth"])(this)
  if (options.finishInit) options.finishInit(this)
  for (let i = 0; i < initHooks.length; ++i) initHooks[i](this)
  Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_4__["endOperation"])(this)
  // Suppress optimizelegibility in Webkit, since it breaks text
  // measuring on line wrapping boundaries.
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_15__["webkit"] && options.lineWrapping &&
      getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
    display.lineDiv.style.textRendering = "auto"
}

// The default configuration options.
CodeMirror.defaults = _options_js__WEBPACK_IMPORTED_MODULE_23__["defaults"]
// Functions to run when options are changed.
CodeMirror.optionHandlers = _options_js__WEBPACK_IMPORTED_MODULE_23__["optionHandlers"]

/* harmony default export */ __webpack_exports__["default"] = (CodeMirror);

// Attach the necessary event handlers when initializing the editor
function registerEventHandlers(cm) {
  let d = cm.display
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(d.scroller, "mousedown", Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_4__["operation"])(cm, _mouse_events_js__WEBPACK_IMPORTED_MODULE_21__["onMouseDown"]))
  // Older IE's will not fire a second mousedown for a double click
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_15__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_15__["ie_version"] < 11)
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(d.scroller, "dblclick", Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_4__["operation"])(cm, e => {
      if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["signalDOMEvent"])(cm, e)) return
      let pos = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_9__["posFromMouse"])(cm, e)
      if (!pos || Object(_mouse_events_js__WEBPACK_IMPORTED_MODULE_21__["clickInGutter"])(cm, e) || Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_10__["eventInWidget"])(cm.display, e)) return
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["e_preventDefault"])(e)
      let word = cm.findWordAt(pos)
      Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_14__["extendSelection"])(cm.doc, word.anchor, word.head)
    }))
  else
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(d.scroller, "dblclick", e => Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["signalDOMEvent"])(cm, e) || Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["e_preventDefault"])(e))
  // Some browsers fire contextmenu *after* opening the menu, at
  // which point we can't mess with it anymore. Context menu is
  // handled in onMouseDown for these browsers.
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(d.scroller, "contextmenu", e => Object(_mouse_events_js__WEBPACK_IMPORTED_MODULE_21__["onContextMenu"])(cm, e))

  // Used to suppress mouse event handling when a touch happens
  let touchFinished, prevTouch = {end: 0}
  function finishTouch() {
    if (d.activeTouch) {
      touchFinished = setTimeout(() => d.activeTouch = null, 1000)
      prevTouch = d.activeTouch
      prevTouch.end = +new Date
    }
  }
  function isMouseLikeTouchEvent(e) {
    if (e.touches.length != 1) return false
    let touch = e.touches[0]
    return touch.radiusX <= 1 && touch.radiusY <= 1
  }
  function farAway(touch, other) {
    if (other.left == null) return true
    let dx = other.left - touch.left, dy = other.top - touch.top
    return dx * dx + dy * dy > 20 * 20
  }
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(d.scroller, "touchstart", e => {
    if (!Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["signalDOMEvent"])(cm, e) && !isMouseLikeTouchEvent(e) && !Object(_mouse_events_js__WEBPACK_IMPORTED_MODULE_21__["clickInGutter"])(cm, e)) {
      d.input.ensurePolled()
      clearTimeout(touchFinished)
      let now = +new Date
      d.activeTouch = {start: now, moved: false,
                       prev: now - prevTouch.end <= 300 ? prevTouch : null}
      if (e.touches.length == 1) {
        d.activeTouch.left = e.touches[0].pageX
        d.activeTouch.top = e.touches[0].pageY
      }
    }
  })
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(d.scroller, "touchmove", () => {
    if (d.activeTouch) d.activeTouch.moved = true
  })
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(d.scroller, "touchend", e => {
    let touch = d.activeTouch
    if (touch && !Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_10__["eventInWidget"])(d, e) && touch.left != null &&
        !touch.moved && new Date - touch.start < 300) {
      let pos = cm.coordsChar(d.activeTouch, "page"), range
      if (!touch.prev || farAway(touch, touch.prev)) // Single tap
        range = new _model_selection_js__WEBPACK_IMPORTED_MODULE_13__["Range"](pos, pos)
      else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
        range = cm.findWordAt(pos)
      else // Triple tap
        range = new _model_selection_js__WEBPACK_IMPORTED_MODULE_13__["Range"](Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_8__["Pos"])(pos.line, 0), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_8__["clipPos"])(cm.doc, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_8__["Pos"])(pos.line + 1, 0)))
      cm.setSelection(range.anchor, range.head)
      cm.focus()
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["e_preventDefault"])(e)
    }
    finishTouch()
  })
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(d.scroller, "touchcancel", finishTouch)

  // Sync scrolling between fake scrollbars and real scrollable
  // area, ensure viewport is updated when scrolling.
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(d.scroller, "scroll", () => {
    if (d.scroller.clientHeight) {
      Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_7__["updateScrollTop"])(cm, d.scroller.scrollTop)
      Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_7__["setScrollLeft"])(cm, d.scroller.scrollLeft, true)
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["signal"])(cm, "scroll", cm)
    }
  })

  // Listen to wheel events in order to try and update the viewport on time.
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(d.scroller, "mousewheel", e => Object(_display_scroll_events_js__WEBPACK_IMPORTED_MODULE_6__["onScrollWheel"])(cm, e))
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(d.scroller, "DOMMouseScroll", e => Object(_display_scroll_events_js__WEBPACK_IMPORTED_MODULE_6__["onScrollWheel"])(cm, e))

  // Prevent wrapper from ever scrolling
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(d.wrapper, "scroll", () => d.wrapper.scrollTop = d.wrapper.scrollLeft = 0)

  d.dragFunctions = {
    enter: e => {if (!Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["signalDOMEvent"])(cm, e)) Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["e_stop"])(e)},
    over: e => {if (!Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["signalDOMEvent"])(cm, e)) { Object(_drop_events_js__WEBPACK_IMPORTED_MODULE_18__["onDragOver"])(cm, e); Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["e_stop"])(e) }},
    start: e => Object(_drop_events_js__WEBPACK_IMPORTED_MODULE_18__["onDragStart"])(cm, e),
    drop: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_4__["operation"])(cm, _drop_events_js__WEBPACK_IMPORTED_MODULE_18__["onDrop"]),
    leave: e => {if (!Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["signalDOMEvent"])(cm, e)) { Object(_drop_events_js__WEBPACK_IMPORTED_MODULE_18__["clearDragCursor"])(cm) }}
  }

  let inp = d.input.getField()
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(inp, "keyup", e => _key_events_js__WEBPACK_IMPORTED_MODULE_20__["onKeyUp"].call(cm, e))
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(inp, "keydown", Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_4__["operation"])(cm, _key_events_js__WEBPACK_IMPORTED_MODULE_20__["onKeyDown"]))
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(inp, "keypress", Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_4__["operation"])(cm, _key_events_js__WEBPACK_IMPORTED_MODULE_20__["onKeyPress"]))
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(inp, "focus", e => Object(_display_focus_js__WEBPACK_IMPORTED_MODULE_1__["onFocus"])(cm, e))
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_16__["on"])(inp, "blur", e => Object(_display_focus_js__WEBPACK_IMPORTED_MODULE_1__["onBlur"])(cm, e))
}

let initHooks = []
CodeMirror.defineInitHook = f => initHooks.push(f)


/***/ }),

/***/ "./node_modules/codemirror/src/edit/commands.js":
/*!******************************************************!*\
  !*** ./node_modules/codemirror/src/edit/commands.js ***!
  \******************************************************/
/*! exports provided: commands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commands", function() { return commands; });
/* harmony import */ var _deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteNearSelection.js */ "./node_modules/codemirror/src/edit/deleteNearSelection.js");
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/scrolling.js */ "./node_modules/codemirror/src/display/scrolling.js");
/* harmony import */ var _input_movement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/movement.js */ "./node_modules/codemirror/src/input/movement.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/selection.js */ "./node_modules/codemirror/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/selection_updates.js */ "./node_modules/codemirror/src/model/selection_updates.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _util_bidi_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/bidi.js */ "./node_modules/codemirror/src/util/bidi.js");












// Commands are parameter-less actions that can be performed on an
// editor, mostly used for keybindings.
let commands = {
  selectAll: _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__["selectAll"],
  singleSelection: cm => cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), _util_misc_js__WEBPACK_IMPORTED_MODULE_9__["sel_dontScroll"]),
  killLine: cm => Object(_deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_0__["deleteNearSelection"])(cm, range => {
    if (range.empty()) {
      let len = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__["getLine"])(cm.doc, range.head.line).text.length
      if (range.head.ch == len && range.head.line < cm.lastLine())
        return {from: range.head, to: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(range.head.line + 1, 0)}
      else
        return {from: range.head, to: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(range.head.line, len)}
    } else {
      return {from: range.from(), to: range.to()}
    }
  }),
  deleteLine: cm => Object(_deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_0__["deleteNearSelection"])(cm, range => ({
    from: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(range.from().line, 0),
    to: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["clipPos"])(cm.doc, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(range.to().line + 1, 0))
  })),
  delLineLeft: cm => Object(_deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_0__["deleteNearSelection"])(cm, range => ({
    from: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(range.from().line, 0), to: range.from()
  })),
  delWrappedLineLeft: cm => Object(_deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_0__["deleteNearSelection"])(cm, range => {
    let top = cm.charCoords(range.head, "div").top + 5
    let leftPos = cm.coordsChar({left: 0, top: top}, "div")
    return {from: leftPos, to: range.from()}
  }),
  delWrappedLineRight: cm => Object(_deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_0__["deleteNearSelection"])(cm, range => {
    let top = cm.charCoords(range.head, "div").top + 5
    let rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
    return {from: range.from(), to: rightPos }
  }),
  undo: cm => cm.undo(),
  redo: cm => cm.redo(),
  undoSelection: cm => cm.undoSelection(),
  redoSelection: cm => cm.redoSelection(),
  goDocStart: cm => cm.extendSelection(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(cm.firstLine(), 0)),
  goDocEnd: cm => cm.extendSelection(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(cm.lastLine())),
  goLineStart: cm => cm.extendSelectionsBy(range => lineStart(cm, range.head.line),
    {origin: "+move", bias: 1}
  ),
  goLineStartSmart: cm => cm.extendSelectionsBy(range => lineStartSmart(cm, range.head),
    {origin: "+move", bias: 1}
  ),
  goLineEnd: cm => cm.extendSelectionsBy(range => lineEnd(cm, range.head.line),
    {origin: "+move", bias: -1}
  ),
  goLineRight: cm => cm.extendSelectionsBy(range => {
    let top = cm.cursorCoords(range.head, "div").top + 5
    return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
  }, _util_misc_js__WEBPACK_IMPORTED_MODULE_9__["sel_move"]),
  goLineLeft: cm => cm.extendSelectionsBy(range => {
    let top = cm.cursorCoords(range.head, "div").top + 5
    return cm.coordsChar({left: 0, top: top}, "div")
  }, _util_misc_js__WEBPACK_IMPORTED_MODULE_9__["sel_move"]),
  goLineLeftSmart: cm => cm.extendSelectionsBy(range => {
    let top = cm.cursorCoords(range.head, "div").top + 5
    let pos = cm.coordsChar({left: 0, top: top}, "div")
    if (pos.ch < cm.getLine(pos.line).search(/\S/)) return lineStartSmart(cm, range.head)
    return pos
  }, _util_misc_js__WEBPACK_IMPORTED_MODULE_9__["sel_move"]),
  goLineUp: cm => cm.moveV(-1, "line"),
  goLineDown: cm => cm.moveV(1, "line"),
  goPageUp: cm => cm.moveV(-1, "page"),
  goPageDown: cm => cm.moveV(1, "page"),
  goCharLeft: cm => cm.moveH(-1, "char"),
  goCharRight: cm => cm.moveH(1, "char"),
  goColumnLeft: cm => cm.moveH(-1, "column"),
  goColumnRight: cm => cm.moveH(1, "column"),
  goWordLeft: cm => cm.moveH(-1, "word"),
  goGroupRight: cm => cm.moveH(1, "group"),
  goGroupLeft: cm => cm.moveH(-1, "group"),
  goWordRight: cm => cm.moveH(1, "word"),
  delCharBefore: cm => cm.deleteH(-1, "char"),
  delCharAfter: cm => cm.deleteH(1, "char"),
  delWordBefore: cm => cm.deleteH(-1, "word"),
  delWordAfter: cm => cm.deleteH(1, "word"),
  delGroupBefore: cm => cm.deleteH(-1, "group"),
  delGroupAfter: cm => cm.deleteH(1, "group"),
  indentAuto: cm => cm.indentSelection("smart"),
  indentMore: cm => cm.indentSelection("add"),
  indentLess: cm => cm.indentSelection("subtract"),
  insertTab: cm => cm.replaceSelection("\t"),
  insertSoftTab: cm => {
    let spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize
    for (let i = 0; i < ranges.length; i++) {
      let pos = ranges[i].from()
      let col = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_9__["countColumn"])(cm.getLine(pos.line), pos.ch, tabSize)
      spaces.push(Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_9__["spaceStr"])(tabSize - col % tabSize))
    }
    cm.replaceSelections(spaces)
  },
  defaultTab: cm => {
    if (cm.somethingSelected()) cm.indentSelection("add")
    else cm.execCommand("insertTab")
  },
  // Swap the two chars left and right of each selection's head.
  // Move cursor behind the two swapped characters afterwards.
  //
  // Doesn't consider line feeds a character.
  // Doesn't scan more than one line above to find a character.
  // Doesn't do anything on an empty line.
  // Doesn't do anything with non-empty selections.
  transposeChars: cm => Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["runInOp"])(cm, () => {
    let ranges = cm.listSelections(), newSel = []
    for (let i = 0; i < ranges.length; i++) {
      if (!ranges[i].empty()) continue
      let cur = ranges[i].head, line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__["getLine"])(cm.doc, cur.line).text
      if (line) {
        if (cur.ch == line.length) cur = new _line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"](cur.line, cur.ch - 1)
        if (cur.ch > 0) {
          cur = new _line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"](cur.line, cur.ch + 1)
          cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                          Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(cur.line, cur.ch - 2), cur, "+transpose")
        } else if (cur.line > cm.doc.first) {
          let prev = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__["getLine"])(cm.doc, cur.line - 1).text
          if (prev) {
            cur = new _line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"](cur.line, 1)
            cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
                            prev.charAt(prev.length - 1),
                            Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(cur.line - 1, prev.length - 1), cur, "+transpose")
          }
        }
      }
      newSel.push(new _model_selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](cur, cur))
    }
    cm.setSelections(newSel)
  }),
  newlineAndIndent: cm => Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["runInOp"])(cm, () => {
    let sels = cm.listSelections()
    for (let i = sels.length - 1; i >= 0; i--)
      cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input")
    sels = cm.listSelections()
    for (let i = 0; i < sels.length; i++)
      cm.indentLine(sels[i].from().line, null, true)
    Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_2__["ensureCursorVisible"])(cm)
  }),
  openLine: cm => cm.replaceSelection("\n", "start"),
  toggleOverwrite: cm => cm.toggleOverwrite()
}


function lineStart(cm, lineN) {
  let line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__["getLine"])(cm.doc, lineN)
  let visual = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_5__["visualLine"])(line)
  if (visual != line) lineN = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__["lineNo"])(visual)
  return Object(_input_movement_js__WEBPACK_IMPORTED_MODULE_3__["endOfLine"])(true, cm, visual, lineN, 1)
}
function lineEnd(cm, lineN) {
  let line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__["getLine"])(cm.doc, lineN)
  let visual = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_5__["visualLineEnd"])(line)
  if (visual != line) lineN = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__["lineNo"])(visual)
  return Object(_input_movement_js__WEBPACK_IMPORTED_MODULE_3__["endOfLine"])(true, cm, line, lineN, -1)
}
function lineStartSmart(cm, pos) {
  let start = lineStart(cm, pos.line)
  let line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__["getLine"])(cm.doc, start.line)
  let order = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_10__["getOrder"])(line, cm.doc.direction)
  if (!order || order[0].level == 0) {
    let firstNonWS = Math.max(0, line.text.search(/\S/))
    let inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch
    return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(start.line, inWS ? 0 : firstNonWS, start.sticky)
  }
  return start
}


/***/ }),

/***/ "./node_modules/codemirror/src/edit/deleteNearSelection.js":
/*!*****************************************************************!*\
  !*** ./node_modules/codemirror/src/edit/deleteNearSelection.js ***!
  \*****************************************************************/
/*! exports provided: deleteNearSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNearSelection", function() { return deleteNearSelection; });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrolling.js */ "./node_modules/codemirror/src/display/scrolling.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/changes.js */ "./node_modules/codemirror/src/model/changes.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");






// Helper for deleting text near the selection(s), used to implement
// backspace, delete, and similar functionality.
function deleteNearSelection(cm, compute) {
  let ranges = cm.doc.sel.ranges, kill = []
  // Build up a set of ranges to kill first, merging overlapping
  // ranges.
  for (let i = 0; i < ranges.length; i++) {
    let toKill = compute(ranges[i])
    while (kill.length && Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["cmp"])(toKill.from, Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["lst"])(kill).to) <= 0) {
      let replaced = kill.pop()
      if (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["cmp"])(replaced.from, toKill.from) < 0) {
        toKill.from = replaced.from
        break
      }
    }
    kill.push(toKill)
  }
  // Next, remove those actual ranges.
  Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_0__["runInOp"])(cm, () => {
    for (let i = kill.length - 1; i >= 0; i--)
      Object(_model_changes_js__WEBPACK_IMPORTED_MODULE_3__["replaceRange"])(cm.doc, "", kill[i].from, kill[i].to, "+delete")
    Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__["ensureCursorVisible"])(cm)
  })
}


/***/ }),

/***/ "./node_modules/codemirror/src/edit/drop_events.js":
/*!*********************************************************!*\
  !*** ./node_modules/codemirror/src/edit/drop_events.js ***!
  \*********************************************************/
/*! exports provided: onDrop, onDragStart, onDragOver, clearDragCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDrop", function() { return onDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDragStart", function() { return onDragStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDragOver", function() { return onDragOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDragCursor", function() { return clearDragCursor; });
/* harmony import */ var _display_selection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/selection.js */ "./node_modules/codemirror/src/display/selection.js");
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../measurement/widgets.js */ "./node_modules/codemirror/src/measurement/widgets.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/changes.js */ "./node_modules/codemirror/src/model/changes.js");
/* harmony import */ var _model_change_measurement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/change_measurement.js */ "./node_modules/codemirror/src/model/change_measurement.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/selection.js */ "./node_modules/codemirror/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/selection_updates.js */ "./node_modules/codemirror/src/model/selection_updates.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");














// Kludge to work around strange IE behavior where it'll sometimes
// re-fire a series of drag-related events right after the drop (#1551)
let lastDrop = 0

function onDrop(e) {
  let cm = this
  clearDragCursor(cm)
  if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_11__["signalDOMEvent"])(cm, e) || Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_4__["eventInWidget"])(cm.display, e))
    return
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_11__["e_preventDefault"])(e)
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["ie"]) lastDrop = +new Date
  let pos = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["posFromMouse"])(cm, e, true), files = e.dataTransfer.files
  if (!pos || cm.isReadOnly()) return
  // Might be a file drop, in which case we simply extract the text
  // and insert it.
  if (files && files.length && window.FileReader && window.File) {
    let n = files.length, text = Array(n), read = 0
    let loadFile = (file, i) => {
      if (cm.options.allowDropFileTypes &&
          Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_12__["indexOf"])(cm.options.allowDropFileTypes, file.type) == -1)
        return

      let reader = new FileReader
      reader.onload = Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["operation"])(cm, () => {
        let content = reader.result
        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) content = ""
        text[i] = content
        if (++read == n) {
          pos = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["clipPos"])(cm.doc, pos)
          let change = {from: pos, to: pos,
                        text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
                        origin: "paste"}
          Object(_model_changes_js__WEBPACK_IMPORTED_MODULE_5__["makeChange"])(cm.doc, change)
          Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__["setSelectionReplaceHistory"])(cm.doc, Object(_model_selection_js__WEBPACK_IMPORTED_MODULE_7__["simpleSelection"])(pos, Object(_model_change_measurement_js__WEBPACK_IMPORTED_MODULE_6__["changeEnd"])(change)))
        }
      })
      reader.readAsText(file)
    }
    for (let i = 0; i < n; ++i) loadFile(files[i], i)
  } else { // Normal drop
    // Don't do a replace if the drop happened inside of the selected text.
    if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
      cm.state.draggingText(e)
      // Ensure the editor is re-focused
      setTimeout(() => cm.display.input.focus(), 20)
      return
    }
    try {
      let text = e.dataTransfer.getData("Text")
      if (text) {
        let selected
        if (cm.state.draggingText && !cm.state.draggingText.copy)
          selected = cm.listSelections()
        Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__["setSelectionNoUndo"])(cm.doc, Object(_model_selection_js__WEBPACK_IMPORTED_MODULE_7__["simpleSelection"])(pos, pos))
        if (selected) for (let i = 0; i < selected.length; ++i)
          Object(_model_changes_js__WEBPACK_IMPORTED_MODULE_5__["replaceRange"])(cm.doc, "", selected[i].anchor, selected[i].head, "drag")
        cm.replaceSelection(text, "around", "paste")
        cm.display.input.focus()
      }
    }
    catch(e){}
  }
}

function onDragStart(cm, e) {
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["ie"] && (!cm.state.draggingText || +new Date - lastDrop < 100)) { Object(_util_event_js__WEBPACK_IMPORTED_MODULE_11__["e_stop"])(e); return }
  if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_11__["signalDOMEvent"])(cm, e) || Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_4__["eventInWidget"])(cm.display, e)) return

  e.dataTransfer.setData("Text", cm.getSelection())
  e.dataTransfer.effectAllowed = "copyMove"

  // Use dummy image instead of default browsers image.
  // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
  if (e.dataTransfer.setDragImage && !_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["safari"]) {
    let img = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_10__["elt"])("img", null, null, "position: fixed; left: 0; top: 0;")
    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["presto"]) {
      img.width = img.height = 1
      cm.display.wrapper.appendChild(img)
      // Force a relayout, or Opera won't use our image for some obscure reason
      img._top = img.offsetTop
    }
    e.dataTransfer.setDragImage(img, 0, 0)
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["presto"]) img.parentNode.removeChild(img)
  }
}

function onDragOver(cm, e) {
  let pos = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["posFromMouse"])(cm, e)
  if (!pos) return
  let frag = document.createDocumentFragment()
  Object(_display_selection_js__WEBPACK_IMPORTED_MODULE_0__["drawSelectionCursor"])(cm, pos, frag)
  if (!cm.display.dragCursor) {
    cm.display.dragCursor = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_10__["elt"])("div", null, "CodeMirror-cursors CodeMirror-dragcursors")
    cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv)
  }
  Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_10__["removeChildrenAndAdd"])(cm.display.dragCursor, frag)
}

function clearDragCursor(cm) {
  if (cm.display.dragCursor) {
    cm.display.lineSpace.removeChild(cm.display.dragCursor)
    cm.display.dragCursor = null
  }
}


/***/ }),

/***/ "./node_modules/codemirror/src/edit/fromTextArea.js":
/*!**********************************************************!*\
  !*** ./node_modules/codemirror/src/edit/fromTextArea.js ***!
  \**********************************************************/
/*! exports provided: fromTextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTextArea", function() { return fromTextArea; });
/* harmony import */ var _CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeMirror.js */ "./node_modules/codemirror/src/edit/CodeMirror.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");





function fromTextArea(textarea, options) {
  options = options ? Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_3__["copyObj"])(options) : {}
  options.value = textarea.value
  if (!options.tabindex && textarea.tabIndex)
    options.tabindex = textarea.tabIndex
  if (!options.placeholder && textarea.placeholder)
    options.placeholder = textarea.placeholder
  // Set autofocus to true if this textarea is focused, or if it has
  // autofocus and no other element is focused.
  if (options.autofocus == null) {
    let hasFocus = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_1__["activeElt"])()
    options.autofocus = hasFocus == textarea ||
      textarea.getAttribute("autofocus") != null && hasFocus == document.body
  }

  function save() {textarea.value = cm.getValue()}

  let realSubmit
  if (textarea.form) {
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_2__["on"])(textarea.form, "submit", save)
    // Deplorable hack to make the submit method do the right thing.
    if (!options.leaveSubmitMethodAlone) {
      let form = textarea.form
      realSubmit = form.submit
      try {
        let wrappedSubmit = form.submit = () => {
          save()
          form.submit = realSubmit
          form.submit()
          form.submit = wrappedSubmit
        }
      } catch(e) {}
    }
  }

  options.finishInit = cm => {
    cm.save = save
    cm.getTextArea = () => textarea
    cm.toTextArea = () => {
      cm.toTextArea = isNaN // Prevent this from being ran twice
      save()
      textarea.parentNode.removeChild(cm.getWrapperElement())
      textarea.style.display = ""
      if (textarea.form) {
        Object(_util_event_js__WEBPACK_IMPORTED_MODULE_2__["off"])(textarea.form, "submit", save)
        if (typeof textarea.form.submit == "function")
          textarea.form.submit = realSubmit
      }
    }
  }

  textarea.style.display = "none"
  let cm = Object(_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"])(node => textarea.parentNode.insertBefore(node, textarea.nextSibling),
    options)
  return cm
}


/***/ }),

/***/ "./node_modules/codemirror/src/edit/global_events.js":
/*!***********************************************************!*\
  !*** ./node_modules/codemirror/src/edit/global_events.js ***!
  \***********************************************************/
/*! exports provided: ensureGlobalHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureGlobalHandlers", function() { return ensureGlobalHandlers; });
/* harmony import */ var _display_focus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/focus.js */ "./node_modules/codemirror/src/display/focus.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");



// These must be handled carefully, because naively registering a
// handler for each editor will cause the editors to never be
// garbage collected.

function forEachCodeMirror(f) {
  if (!document.getElementsByClassName) return
  let byClass = document.getElementsByClassName("CodeMirror"), editors = []
  for (let i = 0; i < byClass.length; i++) {
    let cm = byClass[i].CodeMirror
    if (cm) editors.push(cm)
  }
  if (editors.length) editors[0].operation(() => {
    for (let i = 0; i < editors.length; i++) f(editors[i])
  })
}

let globalsRegistered = false
function ensureGlobalHandlers() {
  if (globalsRegistered) return
  registerGlobalHandlers()
  globalsRegistered = true
}
function registerGlobalHandlers() {
  // When the window resizes, we need to refresh active editors.
  let resizeTimer
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_1__["on"])(window, "resize", () => {
    if (resizeTimer == null) resizeTimer = setTimeout(() => {
      resizeTimer = null
      forEachCodeMirror(onResize)
    }, 100)
  })
  // When the window loses focus, we want to show the editor as blurred
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_1__["on"])(window, "blur", () => forEachCodeMirror(_display_focus_js__WEBPACK_IMPORTED_MODULE_0__["onBlur"]))
}
// Called when the window resizes
function onResize(cm) {
  let d = cm.display
  // Might be a text scaling operation, clear size caches.
  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null
  d.scrollbarsClipped = false
  cm.setSize()
}


/***/ }),

/***/ "./node_modules/codemirror/src/edit/key_events.js":
/*!********************************************************!*\
  !*** ./node_modules/codemirror/src/edit/key_events.js ***!
  \********************************************************/
/*! exports provided: dispatchKey, onKeyDown, onKeyUp, onKeyPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchKey", function() { return dispatchKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyDown", function() { return onKeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyUp", function() { return onKeyUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyPress", function() { return onKeyPress; });
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/operation_group.js */ "./node_modules/codemirror/src/util/operation_group.js");
/* harmony import */ var _display_selection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/selection.js */ "./node_modules/codemirror/src/display/selection.js");
/* harmony import */ var _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/keymap.js */ "./node_modules/codemirror/src/input/keymap.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../measurement/widgets.js */ "./node_modules/codemirror/src/measurement/widgets.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/feature_detection.js */ "./node_modules/codemirror/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commands.js */ "./node_modules/codemirror/src/edit/commands.js");












// Run a handler that was bound to a key.
function doHandleBinding(cm, bound, dropShift) {
  if (typeof bound == "string") {
    bound = _commands_js__WEBPACK_IMPORTED_MODULE_9__["commands"][bound]
    if (!bound) return false
  }
  // Ensure previous input has been read, so that the handler sees a
  // consistent view of the document
  cm.display.input.ensurePolled()
  let prevShift = cm.display.shift, done = false
  try {
    if (cm.isReadOnly()) cm.state.suppressEdits = true
    if (dropShift) cm.display.shift = false
    done = bound(cm) != _util_misc_js__WEBPACK_IMPORTED_MODULE_8__["Pass"]
  } finally {
    cm.display.shift = prevShift
    cm.state.suppressEdits = false
  }
  return done
}

function lookupKeyForEditor(cm, name, handle) {
  for (let i = 0; i < cm.state.keyMaps.length; i++) {
    let result = Object(_input_keymap_js__WEBPACK_IMPORTED_MODULE_2__["lookupKey"])(name, cm.state.keyMaps[i], handle, cm)
    if (result) return result
  }
  return (cm.options.extraKeys && Object(_input_keymap_js__WEBPACK_IMPORTED_MODULE_2__["lookupKey"])(name, cm.options.extraKeys, handle, cm))
    || Object(_input_keymap_js__WEBPACK_IMPORTED_MODULE_2__["lookupKey"])(name, cm.options.keyMap, handle, cm)
}

// Note that, despite the name, this function is also used to check
// for bound mouse clicks.

let stopSeq = new _util_misc_js__WEBPACK_IMPORTED_MODULE_8__["Delayed"]

function dispatchKey(cm, name, e, handle) {
  let seq = cm.state.keySeq
  if (seq) {
    if (Object(_input_keymap_js__WEBPACK_IMPORTED_MODULE_2__["isModifierKey"])(name)) return "handled"
    if (/\'$/.test(name))
      cm.state.keySeq = null
    else
      stopSeq.set(50, () => {
        if (cm.state.keySeq == seq) {
          cm.state.keySeq = null
          cm.display.input.reset()
        }
      })
    if (dispatchKeyInner(cm, seq + " " + name, e, handle)) return true
  }
  return dispatchKeyInner(cm, name, e, handle)
}

function dispatchKeyInner(cm, name, e, handle) {
  let result = lookupKeyForEditor(cm, name, handle)

  if (result == "multi")
    cm.state.keySeq = name
  if (result == "handled")
    Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_0__["signalLater"])(cm, "keyHandled", cm, name, e)

  if (result == "handled" || result == "multi") {
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_6__["e_preventDefault"])(e)
    Object(_display_selection_js__WEBPACK_IMPORTED_MODULE_1__["restartBlink"])(cm)
  }

  return !!result
}

// Handle a key from the keydown event.
function handleKeyBinding(cm, e) {
  let name = Object(_input_keymap_js__WEBPACK_IMPORTED_MODULE_2__["keyName"])(e, true)
  if (!name) return false

  if (e.shiftKey && !cm.state.keySeq) {
    // First try to resolve full name (including 'Shift-'). Failing
    // that, see if there is a cursor-motion command (starting with
    // 'go') bound to the keyname without 'Shift-'.
    return dispatchKey(cm, "Shift-" + name, e, b => doHandleBinding(cm, b, true))
        || dispatchKey(cm, name, e, b => {
             if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
               return doHandleBinding(cm, b)
           })
  } else {
    return dispatchKey(cm, name, e, b => doHandleBinding(cm, b))
  }
}

// Handle a key from the keypress event
function handleCharBinding(cm, e, ch) {
  return dispatchKey(cm, "'" + ch + "'", e, b => doHandleBinding(cm, b, true))
}

let lastStoppedKey = null
function onKeyDown(e) {
  let cm = this
  cm.curOp.focus = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["activeElt"])()
  if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_6__["signalDOMEvent"])(cm, e)) return
  // IE does strange things with escape.
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_4__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_4__["ie_version"] < 11 && e.keyCode == 27) e.returnValue = false
  let code = e.keyCode
  cm.display.shift = code == 16 || e.shiftKey
  let handled = handleKeyBinding(cm, e)
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_4__["presto"]) {
    lastStoppedKey = handled ? code : null
    // Opera has no cut event... we try to at least catch the key combo
    if (!handled && code == 88 && !_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_7__["hasCopyEvent"] && (_util_browser_js__WEBPACK_IMPORTED_MODULE_4__["mac"] ? e.metaKey : e.ctrlKey))
      cm.replaceSelection("", null, "cut")
  }

  // Turn mouse into crosshair when Alt is held on Mac.
  if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
    showCrossHair(cm)
}

function showCrossHair(cm) {
  let lineDiv = cm.display.lineDiv
  Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["addClass"])(lineDiv, "CodeMirror-crosshair")

  function up(e) {
    if (e.keyCode == 18 || !e.altKey) {
      Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_5__["rmClass"])(lineDiv, "CodeMirror-crosshair")
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_6__["off"])(document, "keyup", up)
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_6__["off"])(document, "mouseover", up)
    }
  }
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_6__["on"])(document, "keyup", up)
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_6__["on"])(document, "mouseover", up)
}

function onKeyUp(e) {
  if (e.keyCode == 16) this.doc.sel.shift = false
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_6__["signalDOMEvent"])(this, e)
}

function onKeyPress(e) {
  let cm = this
  if (Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_3__["eventInWidget"])(cm.display, e) || Object(_util_event_js__WEBPACK_IMPORTED_MODULE_6__["signalDOMEvent"])(cm, e) || e.ctrlKey && !e.altKey || _util_browser_js__WEBPACK_IMPORTED_MODULE_4__["mac"] && e.metaKey) return
  let keyCode = e.keyCode, charCode = e.charCode
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_4__["presto"] && keyCode == lastStoppedKey) {lastStoppedKey = null; Object(_util_event_js__WEBPACK_IMPORTED_MODULE_6__["e_preventDefault"])(e); return}
  if ((_util_browser_js__WEBPACK_IMPORTED_MODULE_4__["presto"] && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) return
  let ch = String.fromCharCode(charCode == null ? keyCode : charCode)
  // Some browsers fire keypress events for backspace
  if (ch == "\x08") return
  if (handleCharBinding(cm, e, ch)) return
  cm.display.input.onKeyPress(e)
}


/***/ }),

/***/ "./node_modules/codemirror/src/edit/legacy.js":
/*!****************************************************!*\
  !*** ./node_modules/codemirror/src/edit/legacy.js ***!
  \****************************************************/
/*! exports provided: addLegacyProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLegacyProps", function() { return addLegacyProps; });
/* harmony import */ var _display_scrollbars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/scrollbars.js */ "./node_modules/codemirror/src/display/scrollbars.js");
/* harmony import */ var _display_scroll_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scroll_events.js */ "./node_modules/codemirror/src/display/scroll_events.js");
/* harmony import */ var _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/keymap.js */ "./node_modules/codemirror/src/input/keymap.js");
/* harmony import */ var _input_keynames_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/keynames.js */ "./node_modules/codemirror/src/input/keynames.js");
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/line_data.js */ "./node_modules/codemirror/src/line/line_data.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _model_change_measurement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/change_measurement.js */ "./node_modules/codemirror/src/model/change_measurement.js");
/* harmony import */ var _model_Doc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/Doc.js */ "./node_modules/codemirror/src/model/Doc.js");
/* harmony import */ var _model_line_widget_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/line_widget.js */ "./node_modules/codemirror/src/model/line_widget.js");
/* harmony import */ var _model_mark_text_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/mark_text.js */ "./node_modules/codemirror/src/model/mark_text.js");
/* harmony import */ var _modes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modes.js */ "./node_modules/codemirror/src/modes.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../util/feature_detection.js */ "./node_modules/codemirror/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _util_StringStream_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../util/StringStream.js */ "./node_modules/codemirror/src/util/StringStream.js");
/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./commands.js */ "./node_modules/codemirror/src/edit/commands.js");



















function addLegacyProps(CodeMirror) {
  CodeMirror.off = _util_event_js__WEBPACK_IMPORTED_MODULE_12__["off"]
  CodeMirror.on = _util_event_js__WEBPACK_IMPORTED_MODULE_12__["on"]
  CodeMirror.wheelEventPixels = _display_scroll_events_js__WEBPACK_IMPORTED_MODULE_1__["wheelEventPixels"]
  CodeMirror.Doc = _model_Doc_js__WEBPACK_IMPORTED_MODULE_7__["default"]
  CodeMirror.splitLines = _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_13__["splitLinesAuto"]
  CodeMirror.countColumn = _util_misc_js__WEBPACK_IMPORTED_MODULE_14__["countColumn"]
  CodeMirror.findColumn = _util_misc_js__WEBPACK_IMPORTED_MODULE_14__["findColumn"]
  CodeMirror.isWordChar = _util_misc_js__WEBPACK_IMPORTED_MODULE_14__["isWordCharBasic"]
  CodeMirror.Pass = _util_misc_js__WEBPACK_IMPORTED_MODULE_14__["Pass"]
  CodeMirror.signal = _util_event_js__WEBPACK_IMPORTED_MODULE_12__["signal"]
  CodeMirror.Line = _line_line_data_js__WEBPACK_IMPORTED_MODULE_4__["Line"]
  CodeMirror.changeEnd = _model_change_measurement_js__WEBPACK_IMPORTED_MODULE_6__["changeEnd"]
  CodeMirror.scrollbarModel = _display_scrollbars_js__WEBPACK_IMPORTED_MODULE_0__["scrollbarModel"]
  CodeMirror.Pos = _line_pos_js__WEBPACK_IMPORTED_MODULE_5__["Pos"]
  CodeMirror.cmpPos = _line_pos_js__WEBPACK_IMPORTED_MODULE_5__["cmp"]
  CodeMirror.modes = _modes_js__WEBPACK_IMPORTED_MODULE_10__["modes"]
  CodeMirror.mimeModes = _modes_js__WEBPACK_IMPORTED_MODULE_10__["mimeModes"]
  CodeMirror.resolveMode = _modes_js__WEBPACK_IMPORTED_MODULE_10__["resolveMode"]
  CodeMirror.getMode = _modes_js__WEBPACK_IMPORTED_MODULE_10__["getMode"]
  CodeMirror.modeExtensions = _modes_js__WEBPACK_IMPORTED_MODULE_10__["modeExtensions"]
  CodeMirror.extendMode = _modes_js__WEBPACK_IMPORTED_MODULE_10__["extendMode"]
  CodeMirror.copyState = _modes_js__WEBPACK_IMPORTED_MODULE_10__["copyState"]
  CodeMirror.startState = _modes_js__WEBPACK_IMPORTED_MODULE_10__["startState"]
  CodeMirror.innerMode = _modes_js__WEBPACK_IMPORTED_MODULE_10__["innerMode"]
  CodeMirror.commands = _commands_js__WEBPACK_IMPORTED_MODULE_16__["commands"]
  CodeMirror.keyMap = _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__["keyMap"]
  CodeMirror.keyName = _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__["keyName"]
  CodeMirror.isModifierKey = _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__["isModifierKey"]
  CodeMirror.lookupKey = _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__["lookupKey"]
  CodeMirror.normalizeKeyMap = _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__["normalizeKeyMap"]
  CodeMirror.StringStream = _util_StringStream_js__WEBPACK_IMPORTED_MODULE_15__["default"]
  CodeMirror.SharedTextMarker = _model_mark_text_js__WEBPACK_IMPORTED_MODULE_9__["SharedTextMarker"]
  CodeMirror.TextMarker = _model_mark_text_js__WEBPACK_IMPORTED_MODULE_9__["TextMarker"]
  CodeMirror.LineWidget = _model_line_widget_js__WEBPACK_IMPORTED_MODULE_8__["LineWidget"]
  CodeMirror.e_preventDefault = _util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_preventDefault"]
  CodeMirror.e_stopPropagation = _util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_stopPropagation"]
  CodeMirror.e_stop = _util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_stop"]
  CodeMirror.addClass = _util_dom_js__WEBPACK_IMPORTED_MODULE_11__["addClass"]
  CodeMirror.contains = _util_dom_js__WEBPACK_IMPORTED_MODULE_11__["contains"]
  CodeMirror.rmClass = _util_dom_js__WEBPACK_IMPORTED_MODULE_11__["rmClass"]
  CodeMirror.keyNames = _input_keynames_js__WEBPACK_IMPORTED_MODULE_3__["keyNames"]
}


/***/ }),

/***/ "./node_modules/codemirror/src/edit/main.js":
/*!**************************************************!*\
  !*** ./node_modules/codemirror/src/edit/main.js ***!
  \**************************************************/
/*! exports provided: CodeMirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeMirror.js */ "./node_modules/codemirror/src/edit/CodeMirror.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeMirror", function() { return _CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"]; });

/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options.js */ "./node_modules/codemirror/src/edit/options.js");
/* harmony import */ var _methods_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods.js */ "./node_modules/codemirror/src/edit/methods.js");
/* harmony import */ var _model_Doc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/Doc.js */ "./node_modules/codemirror/src/model/Doc.js");
/* harmony import */ var _input_ContentEditableInput_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input/ContentEditableInput.js */ "./node_modules/codemirror/src/input/ContentEditableInput.js");
/* harmony import */ var _input_TextareaInput_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../input/TextareaInput.js */ "./node_modules/codemirror/src/input/TextareaInput.js");
/* harmony import */ var _modes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modes.js */ "./node_modules/codemirror/src/modes.js");
/* harmony import */ var _fromTextArea_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fromTextArea.js */ "./node_modules/codemirror/src/edit/fromTextArea.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./legacy.js */ "./node_modules/codemirror/src/edit/legacy.js");
// EDITOR CONSTRUCTOR









Object(_options_js__WEBPACK_IMPORTED_MODULE_3__["defineOptions"])(_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"])



Object(_methods_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"])



// Set up methods on CodeMirror's prototype to redirect to the editor's document.
let dontDelegate = "iter insert remove copy getEditor constructor".split(" ")
for (let prop in _model_Doc_js__WEBPACK_IMPORTED_MODULE_5__["default"].prototype) if (_model_Doc_js__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.hasOwnProperty(prop) && Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_2__["indexOf"])(dontDelegate, prop) < 0)
  _CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].prototype[prop] = (function(method) {
    return function() {return method.apply(this.doc, arguments)}
  })(_model_Doc_js__WEBPACK_IMPORTED_MODULE_5__["default"].prototype[prop])

Object(_util_event_js__WEBPACK_IMPORTED_MODULE_1__["eventMixin"])(_model_Doc_js__WEBPACK_IMPORTED_MODULE_5__["default"])

// INPUT HANDLING



_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].inputStyles = {"textarea": _input_TextareaInput_js__WEBPACK_IMPORTED_MODULE_7__["default"], "contenteditable": _input_ContentEditableInput_js__WEBPACK_IMPORTED_MODULE_6__["default"]}

// MODE DEFINITION AND QUERYING



// Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)
_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].defineMode = function(name/*, mode, …*/) {
  if (!_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].defaults.mode && name != "null") _CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].defaults.mode = name
  _modes_js__WEBPACK_IMPORTED_MODULE_8__["defineMode"].apply(this, arguments)
}

_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].defineMIME = _modes_js__WEBPACK_IMPORTED_MODULE_8__["defineMIME"]

// Minimal default mode.
_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].defineMode("null", () => ({token: stream => stream.skipToEnd()}))
_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].defineMIME("text/plain", "null")

// EXTENSIONS

_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].defineExtension = (name, func) => {
  _CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].prototype[name] = func
}
_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].defineDocExtension = (name, func) => {
  _model_Doc_js__WEBPACK_IMPORTED_MODULE_5__["default"].prototype[name] = func
}



_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].fromTextArea = _fromTextArea_js__WEBPACK_IMPORTED_MODULE_9__["fromTextArea"]



Object(_legacy_js__WEBPACK_IMPORTED_MODULE_10__["addLegacyProps"])(_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"])

_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["CodeMirror"].version = "5.42.2"


/***/ }),

/***/ "./node_modules/codemirror/src/edit/methods.js":
/*!*****************************************************!*\
  !*** ./node_modules/codemirror/src/edit/methods.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteNearSelection.js */ "./node_modules/codemirror/src/edit/deleteNearSelection.js");
/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands.js */ "./node_modules/codemirror/src/edit/commands.js");
/* harmony import */ var _model_document_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/document_data.js */ "./node_modules/codemirror/src/model/document_data.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _line_highlight_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/highlight.js */ "./node_modules/codemirror/src/line/highlight.js");
/* harmony import */ var _input_indent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input/indent.js */ "./node_modules/codemirror/src/input/indent.js");
/* harmony import */ var _input_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../input/input.js */ "./node_modules/codemirror/src/input/input.js");
/* harmony import */ var _key_events_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./key_events.js */ "./node_modules/codemirror/src/edit/key_events.js");
/* harmony import */ var _mouse_events_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mouse_events.js */ "./node_modules/codemirror/src/edit/mouse_events.js");
/* harmony import */ var _input_keymap_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../input/keymap.js */ "./node_modules/codemirror/src/input/keymap.js");
/* harmony import */ var _input_movement_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../input/movement.js */ "./node_modules/codemirror/src/input/movement.js");
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../model/selection.js */ "./node_modules/codemirror/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../model/selection_updates.js */ "./node_modules/codemirror/src/model/selection_updates.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../display/scrolling.js */ "./node_modules/codemirror/src/display/scrolling.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _display_update_display_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../display/update_display.js */ "./node_modules/codemirror/src/display/update_display.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../util/operation_group.js */ "./node_modules/codemirror/src/util/operation_group.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../display/view_tracking.js */ "./node_modules/codemirror/src/display/view_tracking.js");

























// The publicly visible API. Note that methodOp(f) means
// 'wrap f in an operation, performed on its `this` parameter'.

// This is not the complete set of editor methods. Most of the
// methods defined on the Doc type are also injected into
// CodeMirror.prototype, for backwards compatibility and
// convenience.

/* harmony default export */ __webpack_exports__["default"] = (function(CodeMirror) {
  let optionHandlers = CodeMirror.optionHandlers

  let helpers = CodeMirror.helpers = {}

  CodeMirror.prototype = {
    constructor: CodeMirror,
    focus: function(){window.focus(); this.display.input.focus()},

    setOption: function(option, value) {
      let options = this.options, old = options[option]
      if (options[option] == value && option != "mode") return
      options[option] = value
      if (optionHandlers.hasOwnProperty(option))
        Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["operation"])(this, optionHandlers[option])(this, value, old)
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_4__["signal"])(this, "optionChange", this, option)
    },

    getOption: function(option) {return this.options[option]},
    getDoc: function() {return this.doc},

    addKeyMap: function(map, bottom) {
      this.state.keyMaps[bottom ? "push" : "unshift"](Object(_input_keymap_js__WEBPACK_IMPORTED_MODULE_10__["getKeyMap"])(map))
    },
    removeKeyMap: function(map) {
      let maps = this.state.keyMaps
      for (let i = 0; i < maps.length; ++i)
        if (maps[i] == map || maps[i].name == map) {
          maps.splice(i, 1)
          return true
        }
    },

    addOverlay: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function(spec, options) {
      let mode = spec.token ? spec : CodeMirror.getMode(this.options, spec)
      if (mode.startState) throw new Error("Overlays may not be stateful.")
      Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_20__["insertSorted"])(this.state.overlays,
                   {mode: mode, modeSpec: spec, opaque: options && options.opaque,
                    priority: (options && options.priority) || 0},
                   overlay => overlay.priority)
      this.state.modeGen++
      Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_23__["regChange"])(this)
    }),
    removeOverlay: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function(spec) {
      let overlays = this.state.overlays
      for (let i = 0; i < overlays.length; ++i) {
        let cur = overlays[i].modeSpec
        if (cur == spec || typeof spec == "string" && cur.name == spec) {
          overlays.splice(i, 1)
          this.state.modeGen++
          Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_23__["regChange"])(this)
          return
        }
      }
    }),

    indentLine: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function(n, dir, aggressive) {
      if (typeof dir != "string" && typeof dir != "number") {
        if (dir == null) dir = this.options.smartIndent ? "smart" : "prev"
        else dir = dir ? "add" : "subtract"
      }
      if (Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_22__["isLine"])(this.doc, n)) Object(_input_indent_js__WEBPACK_IMPORTED_MODULE_6__["indentLine"])(this, n, dir, aggressive)
    }),
    indentSelection: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function(how) {
      let ranges = this.doc.sel.ranges, end = -1
      for (let i = 0; i < ranges.length; i++) {
        let range = ranges[i]
        if (!range.empty()) {
          let from = range.from(), to = range.to()
          let start = Math.max(end, from.line)
          end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1
          for (let j = start; j < end; ++j)
            Object(_input_indent_js__WEBPACK_IMPORTED_MODULE_6__["indentLine"])(this, j, how)
          let newRanges = this.doc.sel.ranges
          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
            Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_16__["replaceOneSelection"])(this.doc, i, new _model_selection_js__WEBPACK_IMPORTED_MODULE_15__["Range"](from, newRanges[i].to()), _util_misc_js__WEBPACK_IMPORTED_MODULE_20__["sel_dontScroll"])
        } else if (range.head.line > end) {
          Object(_input_indent_js__WEBPACK_IMPORTED_MODULE_6__["indentLine"])(this, range.head.line, how, true)
          end = range.head.line
          if (i == this.doc.sel.primIndex) Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_17__["ensureCursorVisible"])(this)
        }
      }
    }),

    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(pos, precise) {
      return Object(_line_highlight_js__WEBPACK_IMPORTED_MODULE_5__["takeToken"])(this, pos, precise)
    },

    getLineTokens: function(line, precise) {
      return Object(_line_highlight_js__WEBPACK_IMPORTED_MODULE_5__["takeToken"])(this, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_13__["Pos"])(line), precise, true)
    },

    getTokenTypeAt: function(pos) {
      pos = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_13__["clipPos"])(this.doc, pos)
      let styles = Object(_line_highlight_js__WEBPACK_IMPORTED_MODULE_5__["getLineStyles"])(this, Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_22__["getLine"])(this.doc, pos.line))
      let before = 0, after = (styles.length - 1) / 2, ch = pos.ch
      let type
      if (ch == 0) type = styles[2]
      else for (;;) {
        let mid = (before + after) >> 1
        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid
        else if (styles[mid * 2 + 1] < ch) before = mid + 1
        else { type = styles[mid * 2 + 2]; break }
      }
      let cut = type ? type.indexOf("overlay ") : -1
      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
    },

    getModeAt: function(pos) {
      let mode = this.doc.mode
      if (!mode.innerMode) return mode
      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
    },

    getHelper: function(pos, type) {
      return this.getHelpers(pos, type)[0]
    },

    getHelpers: function(pos, type) {
      let found = []
      if (!helpers.hasOwnProperty(type)) return found
      let help = helpers[type], mode = this.getModeAt(pos)
      if (typeof mode[type] == "string") {
        if (help[mode[type]]) found.push(help[mode[type]])
      } else if (mode[type]) {
        for (let i = 0; i < mode[type].length; i++) {
          let val = help[mode[type][i]]
          if (val) found.push(val)
        }
      } else if (mode.helperType && help[mode.helperType]) {
        found.push(help[mode.helperType])
      } else if (help[mode.name]) {
        found.push(help[mode.name])
      }
      for (let i = 0; i < help._global.length; i++) {
        let cur = help._global[i]
        if (cur.pred(mode, this) && Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_20__["indexOf"])(found, cur.val) == -1)
          found.push(cur.val)
      }
      return found
    },

    getStateAfter: function(line, precise) {
      let doc = this.doc
      line = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_13__["clipLine"])(doc, line == null ? doc.first + doc.size - 1: line)
      return Object(_line_highlight_js__WEBPACK_IMPORTED_MODULE_5__["getContextBefore"])(this, line + 1, precise).state
    },

    cursorCoords: function(start, mode) {
      let pos, range = this.doc.sel.primary()
      if (start == null) pos = range.head
      else if (typeof start == "object") pos = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_13__["clipPos"])(this.doc, start)
      else pos = start ? range.from() : range.to()
      return Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["cursorCoords"])(this, pos, mode || "page")
    },

    charCoords: function(pos, mode) {
      return Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["charCoords"])(this, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_13__["clipPos"])(this.doc, pos), mode || "page")
    },

    coordsChar: function(coords, mode) {
      coords = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["fromCoordSystem"])(this, coords, mode || "page")
      return Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["coordsChar"])(this, coords.left, coords.top)
    },

    lineAtHeight: function(height, mode) {
      height = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["fromCoordSystem"])(this, {top: height, left: 0}, mode || "page").top
      return Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_22__["lineAtHeight"])(this.doc, height + this.display.viewOffset)
    },
    heightAtLine: function(line, mode, includeWidgets) {
      let end = false, lineObj
      if (typeof line == "number") {
        let last = this.doc.first + this.doc.size - 1
        if (line < this.doc.first) line = this.doc.first
        else if (line > last) { line = last; end = true }
        lineObj = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_22__["getLine"])(this.doc, line)
      } else {
        lineObj = line
      }
      return Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["intoCoordSystem"])(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets || end).top +
        (end ? this.doc.height - Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_18__["heightAtLine"])(lineObj) : 0)
    },

    defaultTextHeight: function() { return Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["textHeight"])(this.display) },
    defaultCharWidth: function() { return Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["charWidth"])(this.display) },

    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

    addWidget: function(pos, node, scroll, vert, horiz) {
      let display = this.display
      pos = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["cursorCoords"])(this, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_13__["clipPos"])(this.doc, pos))
      let top = pos.bottom, left = pos.left
      node.style.position = "absolute"
      node.setAttribute("cm-ignore-events", "true")
      this.display.input.setUneditable(node)
      display.sizer.appendChild(node)
      if (vert == "over") {
        top = pos.top
      } else if (vert == "above" || vert == "near") {
        let vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth)
        // Default to positioning above (if specified and possible); otherwise default to positioning below
        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
          top = pos.top - node.offsetHeight
        else if (pos.bottom + node.offsetHeight <= vspace)
          top = pos.bottom
        if (left + node.offsetWidth > hspace)
          left = hspace - node.offsetWidth
      }
      node.style.top = top + "px"
      node.style.left = node.style.right = ""
      if (horiz == "right") {
        left = display.sizer.clientWidth - node.offsetWidth
        node.style.right = "0px"
      } else {
        if (horiz == "left") left = 0
        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2
        node.style.left = left + "px"
      }
      if (scroll)
        Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_17__["scrollIntoView"])(this, {left, top, right: left + node.offsetWidth, bottom: top + node.offsetHeight})
    },

    triggerOnKeyDown: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(_key_events_js__WEBPACK_IMPORTED_MODULE_8__["onKeyDown"]),
    triggerOnKeyPress: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(_key_events_js__WEBPACK_IMPORTED_MODULE_8__["onKeyPress"]),
    triggerOnKeyUp: _key_events_js__WEBPACK_IMPORTED_MODULE_8__["onKeyUp"],
    triggerOnMouseDown: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(_mouse_events_js__WEBPACK_IMPORTED_MODULE_9__["onMouseDown"]),

    execCommand: function(cmd) {
      if (_commands_js__WEBPACK_IMPORTED_MODULE_1__["commands"].hasOwnProperty(cmd))
        return _commands_js__WEBPACK_IMPORTED_MODULE_1__["commands"][cmd].call(null, this)
    },

    triggerElectric: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function(text) { Object(_input_input_js__WEBPACK_IMPORTED_MODULE_7__["triggerElectric"])(this, text) }),

    findPosH: function(from, amount, unit, visually) {
      let dir = 1
      if (amount < 0) { dir = -1; amount = -amount }
      let cur = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_13__["clipPos"])(this.doc, from)
      for (let i = 0; i < amount; ++i) {
        cur = findPosH(this.doc, cur, dir, unit, visually)
        if (cur.hitSide) break
      }
      return cur
    },

    moveH: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function(dir, unit) {
      this.extendSelectionsBy(range => {
        if (this.display.shift || this.doc.extend || range.empty())
          return findPosH(this.doc, range.head, dir, unit, this.options.rtlMoveVisually)
        else
          return dir < 0 ? range.from() : range.to()
      }, _util_misc_js__WEBPACK_IMPORTED_MODULE_20__["sel_move"])
    }),

    deleteH: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function(dir, unit) {
      let sel = this.doc.sel, doc = this.doc
      if (sel.somethingSelected())
        doc.replaceSelection("", null, "+delete")
      else
        Object(_deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_0__["deleteNearSelection"])(this, range => {
          let other = findPosH(doc, range.head, dir, unit, false)
          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
        })
    }),

    findPosV: function(from, amount, unit, goalColumn) {
      let dir = 1, x = goalColumn
      if (amount < 0) { dir = -1; amount = -amount }
      let cur = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_13__["clipPos"])(this.doc, from)
      for (let i = 0; i < amount; ++i) {
        let coords = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["cursorCoords"])(this, cur, "div")
        if (x == null) x = coords.left
        else coords.left = x
        cur = findPosV(this, coords, dir, unit)
        if (cur.hitSide) break
      }
      return cur
    },

    moveV: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function(dir, unit) {
      let doc = this.doc, goals = []
      let collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected()
      doc.extendSelectionsBy(range => {
        if (collapse)
          return dir < 0 ? range.from() : range.to()
        let headPos = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["cursorCoords"])(this, range.head, "div")
        if (range.goalColumn != null) headPos.left = range.goalColumn
        goals.push(headPos.left)
        let pos = findPosV(this, headPos, dir, unit)
        if (unit == "page" && range == doc.sel.primary())
          Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_17__["addToScrollTop"])(this, Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["charCoords"])(this, pos, "div").top - headPos.top)
        return pos
      }, _util_misc_js__WEBPACK_IMPORTED_MODULE_20__["sel_move"])
      if (goals.length) for (let i = 0; i < doc.sel.ranges.length; i++)
        doc.sel.ranges[i].goalColumn = goals[i]
    }),

    // Find the word at the given position (as returned by coordsChar).
    findWordAt: function(pos) {
      let doc = this.doc, line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_22__["getLine"])(doc, pos.line).text
      let start = pos.ch, end = pos.ch
      if (line) {
        let helper = this.getHelper(pos, "wordChars")
        if ((pos.sticky == "before" || end == line.length) && start) --start; else ++end
        let startChar = line.charAt(start)
        let check = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_20__["isWordChar"])(startChar, helper)
          ? ch => Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_20__["isWordChar"])(ch, helper)
          : /\s/.test(startChar) ? ch => /\s/.test(ch)
          : ch => (!/\s/.test(ch) && !Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_20__["isWordChar"])(ch))
        while (start > 0 && check(line.charAt(start - 1))) --start
        while (end < line.length && check(line.charAt(end))) ++end
      }
      return new _model_selection_js__WEBPACK_IMPORTED_MODULE_15__["Range"](Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_13__["Pos"])(pos.line, start), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_13__["Pos"])(pos.line, end))
    },

    toggleOverwrite: function(value) {
      if (value != null && value == this.state.overwrite) return
      if (this.state.overwrite = !this.state.overwrite)
        Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_3__["addClass"])(this.display.cursorDiv, "CodeMirror-overwrite")
      else
        Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_3__["rmClass"])(this.display.cursorDiv, "CodeMirror-overwrite")

      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_4__["signal"])(this, "overwriteToggle", this, this.state.overwrite)
    },
    hasFocus: function() { return this.display.input.getField() == Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_3__["activeElt"])() },
    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

    scrollTo: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function (x, y) { Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_17__["scrollToCoords"])(this, x, y) }),
    getScrollInfo: function() {
      let scroller = this.display.scroller
      return {left: scroller.scrollLeft, top: scroller.scrollTop,
              height: scroller.scrollHeight - Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["scrollGap"])(this) - this.display.barHeight,
              width: scroller.scrollWidth - Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["scrollGap"])(this) - this.display.barWidth,
              clientHeight: Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["displayHeight"])(this), clientWidth: Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["displayWidth"])(this)}
    },

    scrollIntoView: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function(range, margin) {
      if (range == null) {
        range = {from: this.doc.sel.primary().head, to: null}
        if (margin == null) margin = this.options.cursorScrollMargin
      } else if (typeof range == "number") {
        range = {from: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_13__["Pos"])(range, 0), to: null}
      } else if (range.from == null) {
        range = {from: range, to: null}
      }
      if (!range.to) range.to = range.from
      range.margin = margin || 0

      if (range.from.line != null) {
        Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_17__["scrollToRange"])(this, range)
      } else {
        Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_17__["scrollToCoordsRange"])(this, range.from, range.to, range.margin)
      }
    }),

    setSize: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function(width, height) {
      let interpret = val => typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val
      if (width != null) this.display.wrapper.style.width = interpret(width)
      if (height != null) this.display.wrapper.style.height = interpret(height)
      if (this.options.lineWrapping) Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["clearLineMeasurementCache"])(this)
      let lineNo = this.display.viewFrom
      this.doc.iter(lineNo, this.display.viewTo, line => {
        if (line.widgets) for (let i = 0; i < line.widgets.length; i++)
          if (line.widgets[i].noHScroll) { Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_23__["regLineChange"])(this, lineNo, "widget"); break }
        ++lineNo
      })
      this.curOp.forceUpdate = true
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_4__["signal"])(this, "refresh", this)
    }),

    operation: function(f){return Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["runInOp"])(this, f)},
    startOperation: function(){return Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["startOperation"])(this)},
    endOperation: function(){return Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["endOperation"])(this)},

    refresh: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function() {
      let oldHeight = this.display.cachedTextHeight
      Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_23__["regChange"])(this)
      this.curOp.forceUpdate = true
      Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["clearCaches"])(this)
      Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_17__["scrollToCoords"])(this, this.doc.scrollLeft, this.doc.scrollTop)
      Object(_display_update_display_js__WEBPACK_IMPORTED_MODULE_19__["updateGutterSpace"])(this)
      if (oldHeight == null || Math.abs(oldHeight - Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["textHeight"])(this.display)) > .5)
        Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["estimateLineHeights"])(this)
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_4__["signal"])(this, "refresh", this)
    }),

    swapDoc: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_12__["methodOp"])(function(doc) {
      let old = this.doc
      old.cm = null
      Object(_model_document_data_js__WEBPACK_IMPORTED_MODULE_2__["attachDoc"])(this, doc)
      Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["clearCaches"])(this)
      this.display.input.reset()
      Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_17__["scrollToCoords"])(this, doc.scrollLeft, doc.scrollTop)
      this.curOp.forceScroll = true
      Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_21__["signalLater"])(this, "swapDoc", this, old)
      return old
    }),

    phrase: function(phraseText) {
      let phrases = this.options.phrases
      return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText
    },

    getInputField: function(){return this.display.input.getField()},
    getWrapperElement: function(){return this.display.wrapper},
    getScrollerElement: function(){return this.display.scroller},
    getGutterElement: function(){return this.display.gutters}
  }
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_4__["eventMixin"])(CodeMirror)

  CodeMirror.registerHelper = function(type, name, value) {
    if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {_global: []}
    helpers[type][name] = value
  }
  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
    CodeMirror.registerHelper(type, name, value)
    helpers[type]._global.push({pred: predicate, val: value})
  }
});

// Used for horizontal relative motion. Dir is -1 or 1 (left or
// right), unit can be "char", "column" (like char, but doesn't
// cross line boundaries), "word" (across next word), or "group" (to
// the start of next group of word or non-word-non-whitespace
// chars). The visually param controls whether, in right-to-left
// text, direction 1 means to move towards the next index in the
// string, or towards the character to the right of the current
// position. The resulting position will have a hitSide=true
// property if it reached the end of the document.
function findPosH(doc, pos, dir, unit, visually) {
  let oldPos = pos
  let origDir = dir
  let lineObj = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_22__["getLine"])(doc, pos.line)
  function findNextLine() {
    let l = pos.line + dir
    if (l < doc.first || l >= doc.first + doc.size) return false
    pos = new _line_pos_js__WEBPACK_IMPORTED_MODULE_13__["Pos"](l, pos.ch, pos.sticky)
    return lineObj = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_22__["getLine"])(doc, l)
  }
  function moveOnce(boundToLine) {
    let next
    if (visually) {
      next = Object(_input_movement_js__WEBPACK_IMPORTED_MODULE_11__["moveVisually"])(doc.cm, lineObj, pos, dir)
    } else {
      next = Object(_input_movement_js__WEBPACK_IMPORTED_MODULE_11__["moveLogically"])(lineObj, pos, dir)
    }
    if (next == null) {
      if (!boundToLine && findNextLine())
        pos = Object(_input_movement_js__WEBPACK_IMPORTED_MODULE_11__["endOfLine"])(visually, doc.cm, lineObj, pos.line, dir)
      else
        return false
    } else {
      pos = next
    }
    return true
  }

  if (unit == "char") {
    moveOnce()
  } else if (unit == "column") {
    moveOnce(true)
  } else if (unit == "word" || unit == "group") {
    let sawType = null, group = unit == "group"
    let helper = doc.cm && doc.cm.getHelper(pos, "wordChars")
    for (let first = true;; first = false) {
      if (dir < 0 && !moveOnce(!first)) break
      let cur = lineObj.text.charAt(pos.ch) || "\n"
      let type = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_20__["isWordChar"])(cur, helper) ? "w"
        : group && cur == "\n" ? "n"
        : !group || /\s/.test(cur) ? null
        : "p"
      if (group && !first && !type) type = "s"
      if (sawType && sawType != type) {
        if (dir < 0) {dir = 1; moveOnce(); pos.sticky = "after"}
        break
      }

      if (type) sawType = type
      if (dir > 0 && !moveOnce(!first)) break
    }
  }
  let result = Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_16__["skipAtomic"])(doc, pos, oldPos, origDir, true)
  if (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_13__["equalCursorPos"])(oldPos, result)) result.hitSide = true
  return result
}

// For relative vertical movement. Dir may be -1 or 1. Unit can be
// "page" or "line". The resulting position will have a hitSide=true
// property if it reached the end of the document.
function findPosV(cm, pos, dir, unit) {
  let doc = cm.doc, x = pos.left, y
  if (unit == "page") {
    let pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
    let moveAmount = Math.max(pageSize - .5 * Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["textHeight"])(cm.display), 3)
    y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount

  } else if (unit == "line") {
    y = dir > 0 ? pos.bottom + 3 : pos.top - 3
  }
  let target
  for (;;) {
    target = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_14__["coordsChar"])(cm, x, y)
    if (!target.outside) break
    if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
    y += dir * 5
  }
  return target
}


/***/ }),

/***/ "./node_modules/codemirror/src/edit/mouse_events.js":
/*!**********************************************************!*\
  !*** ./node_modules/codemirror/src/edit/mouse_events.js ***!
  \**********************************************************/
/*! exports provided: onMouseDown, clickInGutter, onContextMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMouseDown", function() { return onMouseDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickInGutter", function() { return clickInGutter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onContextMenu", function() { return onContextMenu; });
/* harmony import */ var _display_focus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/focus.js */ "./node_modules/codemirror/src/display/focus.js");
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _display_update_lines_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/update_lines.js */ "./node_modules/codemirror/src/display/update_lines.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../measurement/widgets.js */ "./node_modules/codemirror/src/measurement/widgets.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/selection.js */ "./node_modules/codemirror/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/selection_updates.js */ "./node_modules/codemirror/src/model/selection_updates.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_bidi_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/bidi.js */ "./node_modules/codemirror/src/util/bidi.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../util/feature_detection.js */ "./node_modules/codemirror/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _input_keymap_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../input/keymap.js */ "./node_modules/codemirror/src/input/keymap.js");
/* harmony import */ var _key_events_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./key_events.js */ "./node_modules/codemirror/src/edit/key_events.js");
/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./commands.js */ "./node_modules/codemirror/src/edit/commands.js");





















const DOUBLECLICK_DELAY = 400

class PastClick {
  constructor(time, pos, button) {
    this.time = time
    this.pos = pos
    this.button = button
  }

  compare(time, pos, button) {
    return this.time + DOUBLECLICK_DELAY > time &&
      Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["cmp"])(pos, this.pos) == 0 && button == this.button
  }
}

let lastClick, lastDoubleClick
function clickRepeat(pos, button) {
  let now = +new Date
  if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
    lastClick = lastDoubleClick = null
    return "triple"
  } else if (lastClick && lastClick.compare(now, pos, button)) {
    lastDoubleClick = new PastClick(now, pos, button)
    lastClick = null
    return "double"
  } else {
    lastClick = new PastClick(now, pos, button)
    lastDoubleClick = null
    return "single"
  }
}

// A mouse down can be a single click, double click, triple click,
// start of selection drag, start of text drag, new cursor
// (ctrl-click), rectangle drag (alt-drag), or xwin
// middle-click-paste. Or it might be a click on something we should
// not interfere with, such as a scrollbar or widget.
function onMouseDown(e) {
  let cm = this, display = cm.display
  if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["signalDOMEvent"])(cm, e) || display.activeTouch && display.input.supportsTouch()) return
  display.input.ensurePolled()
  display.shift = e.shiftKey

  if (Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_6__["eventInWidget"])(display, e)) {
    if (!_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["webkit"]) {
      // Briefly turn off draggability, to allow widgets to do
      // normal dragging things.
      display.scroller.draggable = false
      setTimeout(() => display.scroller.draggable = true, 100)
    }
    return
  }
  if (clickInGutter(cm, e)) return
  let pos = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__["posFromMouse"])(cm, e), button = Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_button"])(e), repeat = pos ? clickRepeat(pos, button) : "single"
  window.focus()

  // #3261: make sure, that we're not starting a second selection
  if (button == 1 && cm.state.selectingText)
    cm.state.selectingText(e)

  if (pos && handleMappedButton(cm, button, pos, repeat, e)) return

  if (button == 1) {
    if (pos) leftButtonDown(cm, pos, repeat, e)
    else if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_target"])(e) == display.scroller) Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_preventDefault"])(e)
  } else if (button == 2) {
    if (pos) Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__["extendSelection"])(cm.doc, pos)
    setTimeout(() => display.input.focus(), 20)
  } else if (button == 3) {
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["captureRightClick"]) cm.display.input.onContextMenu(e)
    else Object(_display_focus_js__WEBPACK_IMPORTED_MODULE_0__["delayBlurEvent"])(cm)
  }
}

function handleMappedButton(cm, button, pos, repeat, event) {
  let name = "Click"
  if (repeat == "double") name = "Double" + name
  else if (repeat == "triple") name = "Triple" + name
  name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name

  return Object(_key_events_js__WEBPACK_IMPORTED_MODULE_16__["dispatchKey"])(cm,  Object(_input_keymap_js__WEBPACK_IMPORTED_MODULE_15__["addModifierNames"])(name, event), event, bound => {
    if (typeof bound == "string") bound = _commands_js__WEBPACK_IMPORTED_MODULE_17__["commands"][bound]
    if (!bound) return false
    let done = false
    try {
      if (cm.isReadOnly()) cm.state.suppressEdits = true
      done = bound(cm, pos) != _util_misc_js__WEBPACK_IMPORTED_MODULE_14__["Pass"]
    } finally {
      cm.state.suppressEdits = false
    }
    return done
  })
}

function configureMouse(cm, repeat, event) {
  let option = cm.getOption("configureMouse")
  let value = option ? option(cm, repeat, event) : {}
  if (value.unit == null) {
    let rect = _util_browser_js__WEBPACK_IMPORTED_MODULE_9__["chromeOS"] ? event.shiftKey && event.metaKey : event.altKey
    value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line"
  }
  if (value.extend == null || cm.doc.extend) value.extend = cm.doc.extend || event.shiftKey
  if (value.addNew == null) value.addNew = _util_browser_js__WEBPACK_IMPORTED_MODULE_9__["mac"] ? event.metaKey : event.ctrlKey
  if (value.moveOnDrag == null) value.moveOnDrag = !(_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["mac"] ? event.altKey : event.ctrlKey)
  return value
}

function leftButtonDown(cm, pos, repeat, event) {
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["ie"]) setTimeout(Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_14__["bind"])(_display_focus_js__WEBPACK_IMPORTED_MODULE_0__["ensureFocus"], cm), 0)
  else cm.curOp.focus = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_11__["activeElt"])()

  let behavior = configureMouse(cm, repeat, event)

  let sel = cm.doc.sel, contained
  if (cm.options.dragDrop && _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_13__["dragAndDrop"] && !cm.isReadOnly() &&
      repeat == "single" && (contained = sel.contains(pos)) > -1 &&
      (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["cmp"])((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) &&
      (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["cmp"])(contained.to(), pos) > 0 || pos.xRel < 0))
    leftButtonStartDrag(cm, event, pos, behavior)
  else
    leftButtonSelect(cm, event, pos, behavior)
}

// Start a text drag. When it ends, see if any dragging actually
// happen, and treat as a click if it didn't.
function leftButtonStartDrag(cm, event, pos, behavior) {
  let display = cm.display, moved = false
  let dragEnd = Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["operation"])(cm, e => {
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["webkit"]) display.scroller.draggable = false
    cm.state.draggingText = false
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["off"])(display.wrapper.ownerDocument, "mouseup", dragEnd)
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["off"])(display.wrapper.ownerDocument, "mousemove", mouseMove)
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["off"])(display.scroller, "dragstart", dragStart)
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["off"])(display.scroller, "drop", dragEnd)
    if (!moved) {
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_preventDefault"])(e)
      if (!behavior.addNew)
        Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__["extendSelection"])(cm.doc, pos, null, null, behavior.extend)
      // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
      if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["webkit"] || _util_browser_js__WEBPACK_IMPORTED_MODULE_9__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_9__["ie_version"] == 9)
        setTimeout(() => {display.wrapper.ownerDocument.body.focus(); display.input.focus()}, 20)
      else
        display.input.focus()
    }
  })
  let mouseMove = function(e2) {
    moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10
  }
  let dragStart = () => moved = true
  // Let the drag handler handle this.
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["webkit"]) display.scroller.draggable = true
  cm.state.draggingText = dragEnd
  dragEnd.copy = !behavior.moveOnDrag
  // IE's approach to draggable
  if (display.scroller.dragDrop) display.scroller.dragDrop()
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["on"])(display.wrapper.ownerDocument, "mouseup", dragEnd)
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["on"])(display.wrapper.ownerDocument, "mousemove", mouseMove)
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["on"])(display.scroller, "dragstart", dragStart)
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["on"])(display.scroller, "drop", dragEnd)

  Object(_display_focus_js__WEBPACK_IMPORTED_MODULE_0__["delayBlurEvent"])(cm)
  setTimeout(() => display.input.focus(), 20)
}

function rangeForUnit(cm, pos, unit) {
  if (unit == "char") return new _model_selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](pos, pos)
  if (unit == "word") return cm.findWordAt(pos)
  if (unit == "line") return new _model_selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(pos.line, 0), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(cm.doc, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(pos.line + 1, 0)))
  let result = unit(cm, pos)
  return new _model_selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](result.from, result.to)
}

// Normal selection, as opposed to text dragging.
function leftButtonSelect(cm, event, start, behavior) {
  let display = cm.display, doc = cm.doc
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_preventDefault"])(event)

  let ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges
  if (behavior.addNew && !behavior.extend) {
    ourIndex = doc.sel.contains(start)
    if (ourIndex > -1)
      ourRange = ranges[ourIndex]
    else
      ourRange = new _model_selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](start, start)
  } else {
    ourRange = doc.sel.primary()
    ourIndex = doc.sel.primIndex
  }

  if (behavior.unit == "rectangle") {
    if (!behavior.addNew) ourRange = new _model_selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](start, start)
    start = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__["posFromMouse"])(cm, event, true, true)
    ourIndex = -1
  } else {
    let range = rangeForUnit(cm, start, behavior.unit)
    if (behavior.extend)
      ourRange = Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__["extendRange"])(ourRange, range.anchor, range.head, behavior.extend)
    else
      ourRange = range
  }

  if (!behavior.addNew) {
    ourIndex = 0
    Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__["setSelection"])(doc, new _model_selection_js__WEBPACK_IMPORTED_MODULE_7__["Selection"]([ourRange], 0), _util_misc_js__WEBPACK_IMPORTED_MODULE_14__["sel_mouse"])
    startSel = doc.sel
  } else if (ourIndex == -1) {
    ourIndex = ranges.length
    Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__["setSelection"])(doc, Object(_model_selection_js__WEBPACK_IMPORTED_MODULE_7__["normalizeSelection"])(cm, ranges.concat([ourRange]), ourIndex),
                 {scroll: false, origin: "*mouse"})
  } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
    Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__["setSelection"])(doc, Object(_model_selection_js__WEBPACK_IMPORTED_MODULE_7__["normalizeSelection"])(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
                 {scroll: false, origin: "*mouse"})
    startSel = doc.sel
  } else {
    Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__["replaceOneSelection"])(doc, ourIndex, ourRange, _util_misc_js__WEBPACK_IMPORTED_MODULE_14__["sel_mouse"])
  }

  let lastPos = start
  function extendTo(pos) {
    if (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["cmp"])(lastPos, pos) == 0) return
    lastPos = pos

    if (behavior.unit == "rectangle") {
      let ranges = [], tabSize = cm.options.tabSize
      let startCol = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_14__["countColumn"])(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["getLine"])(doc, start.line).text, start.ch, tabSize)
      let posCol = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_14__["countColumn"])(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["getLine"])(doc, pos.line).text, pos.ch, tabSize)
      let left = Math.min(startCol, posCol), right = Math.max(startCol, posCol)
      for (let line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
           line <= end; line++) {
        let text = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["getLine"])(doc, line).text, leftPos = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_14__["findColumn"])(text, left, tabSize)
        if (left == right)
          ranges.push(new _model_selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(line, leftPos), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(line, leftPos)))
        else if (text.length > leftPos)
          ranges.push(new _model_selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(line, leftPos), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(line, Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_14__["findColumn"])(text, right, tabSize))))
      }
      if (!ranges.length) ranges.push(new _model_selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](start, start))
      Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__["setSelection"])(doc, Object(_model_selection_js__WEBPACK_IMPORTED_MODULE_7__["normalizeSelection"])(cm, startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
                   {origin: "*mouse", scroll: false})
      cm.scrollIntoView(pos)
    } else {
      let oldRange = ourRange
      let range = rangeForUnit(cm, pos, behavior.unit)
      let anchor = oldRange.anchor, head
      if (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["cmp"])(range.anchor, anchor) > 0) {
        head = range.head
        anchor = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["minPos"])(oldRange.from(), range.anchor)
      } else {
        head = range.anchor
        anchor = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["maxPos"])(oldRange.to(), range.head)
      }
      let ranges = startSel.ranges.slice(0)
      ranges[ourIndex] = bidiSimplify(cm, new _model_selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(doc, anchor), head))
      Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__["setSelection"])(doc, Object(_model_selection_js__WEBPACK_IMPORTED_MODULE_7__["normalizeSelection"])(cm, ranges, ourIndex), _util_misc_js__WEBPACK_IMPORTED_MODULE_14__["sel_mouse"])
    }
  }

  let editorSize = display.wrapper.getBoundingClientRect()
  // Used to ensure timeout re-tries don't fire when another extend
  // happened in the meantime (clearTimeout isn't reliable -- at
  // least on Chrome, the timeouts still happen even when cleared,
  // if the clear happens after their scheduled firing time).
  let counter = 0

  function extend(e) {
    let curCount = ++counter
    let cur = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__["posFromMouse"])(cm, e, true, behavior.unit == "rectangle")
    if (!cur) return
    if (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["cmp"])(cur, lastPos) != 0) {
      cm.curOp.focus = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_11__["activeElt"])()
      extendTo(cur)
      let visible = Object(_display_update_lines_js__WEBPACK_IMPORTED_MODULE_2__["visibleLines"])(display, doc)
      if (cur.line >= visible.to || cur.line < visible.from)
        setTimeout(Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["operation"])(cm, () => {if (counter == curCount) extend(e)}), 150)
    } else {
      let outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0
      if (outside) setTimeout(Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["operation"])(cm, () => {
        if (counter != curCount) return
        display.scroller.scrollTop += outside
        extend(e)
      }), 50)
    }
  }

  function done(e) {
    cm.state.selectingText = false
    counter = Infinity
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_preventDefault"])(e)
    display.input.focus()
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["off"])(display.wrapper.ownerDocument, "mousemove", move)
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["off"])(display.wrapper.ownerDocument, "mouseup", up)
    doc.history.lastSelOrigin = null
  }

  let move = Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["operation"])(cm, e => {
    if (e.buttons === 0 || !Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_button"])(e)) done(e)
    else extend(e)
  })
  let up = Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["operation"])(cm, done)
  cm.state.selectingText = up
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["on"])(display.wrapper.ownerDocument, "mousemove", move)
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["on"])(display.wrapper.ownerDocument, "mouseup", up)
}

// Used when mouse-selecting to adjust the anchor to the proper side
// of a bidi jump depending on the visual position of the head.
function bidiSimplify(cm, range) {
  let {anchor, head} = range, anchorLine = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["getLine"])(cm.doc, anchor.line)
  if (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["cmp"])(anchor, head) == 0 && anchor.sticky == head.sticky) return range
  let order = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_10__["getOrder"])(anchorLine)
  if (!order) return range
  let index = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_10__["getBidiPartAt"])(order, anchor.ch, anchor.sticky), part = order[index]
  if (part.from != anchor.ch && part.to != anchor.ch) return range
  let boundary = index + ((part.from == anchor.ch) == (part.level != 1) ? 0 : 1)
  if (boundary == 0 || boundary == order.length) return range

  // Compute the relative visual position of the head compared to the
  // anchor (<0 is to the left, >0 to the right)
  let leftSide
  if (head.line != anchor.line) {
    leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0
  } else {
    let headIndex = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_10__["getBidiPartAt"])(order, head.ch, head.sticky)
    let dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1)
    if (headIndex == boundary - 1 || headIndex == boundary)
      leftSide = dir < 0
    else
      leftSide = dir > 0
  }

  let usePart = order[boundary + (leftSide ? -1 : 0)]
  let from = leftSide == (usePart.level == 1)
  let ch = from ? usePart.from : usePart.to, sticky = from ? "after" : "before"
  return anchor.ch == ch && anchor.sticky == sticky ? range : new _model_selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](new _line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"](anchor.line, ch, sticky), head)
}


// Determines whether an event happened in the gutter, and fires the
// handlers for the corresponding event.
function gutterEvent(cm, e, type, prevent) {
  let mX, mY
  if (e.touches) {
    mX = e.touches[0].clientX
    mY = e.touches[0].clientY
  } else {
    try { mX = e.clientX; mY = e.clientY }
    catch(e) { return false }
  }
  if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return false
  if (prevent) Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_preventDefault"])(e)

  let display = cm.display
  let lineBox = display.lineDiv.getBoundingClientRect()

  if (mY > lineBox.bottom || !Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["hasHandler"])(cm, type)) return Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_defaultPrevented"])(e)
  mY -= lineBox.top - display.viewOffset

  for (let i = 0; i < cm.options.gutters.length; ++i) {
    let g = display.gutters.childNodes[i]
    if (g && g.getBoundingClientRect().right >= mX) {
      let line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["lineAtHeight"])(cm.doc, mY)
      let gutter = cm.options.gutters[i]
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["signal"])(cm, type, cm, line, gutter, e)
      return Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["e_defaultPrevented"])(e)
    }
  }
}

function clickInGutter(cm, e) {
  return gutterEvent(cm, e, "gutterClick", true)
}

// CONTEXT MENU HANDLING

// To make the context menu work, we need to briefly unhide the
// textarea (making it as unobtrusive as possible) to let the
// right-click take effect on it.
function onContextMenu(cm, e) {
  if (Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_6__["eventInWidget"])(cm.display, e) || contextMenuInGutter(cm, e)) return
  if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["signalDOMEvent"])(cm, e, "contextmenu")) return
  if (!_util_browser_js__WEBPACK_IMPORTED_MODULE_9__["captureRightClick"]) cm.display.input.onContextMenu(e)
}

function contextMenuInGutter(cm, e) {
  if (!Object(_util_event_js__WEBPACK_IMPORTED_MODULE_12__["hasHandler"])(cm, "gutterContextMenu")) return false
  return gutterEvent(cm, e, "gutterContextMenu", false)
}


/***/ }),

/***/ "./node_modules/codemirror/src/edit/options.js":
/*!*****************************************************!*\
  !*** ./node_modules/codemirror/src/edit/options.js ***!
  \*****************************************************/
/*! exports provided: Init, defaults, optionHandlers, defineOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Init", function() { return Init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionHandlers", function() { return optionHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineOptions", function() { return defineOptions; });
/* harmony import */ var _display_focus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/focus.js */ "./node_modules/codemirror/src/display/focus.js");
/* harmony import */ var _display_gutters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/gutters.js */ "./node_modules/codemirror/src/display/gutters.js");
/* harmony import */ var _display_line_numbers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/line_numbers.js */ "./node_modules/codemirror/src/display/line_numbers.js");
/* harmony import */ var _display_mode_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display/mode_state.js */ "./node_modules/codemirror/src/display/mode_state.js");
/* harmony import */ var _display_scrollbars_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../display/scrollbars.js */ "./node_modules/codemirror/src/display/scrollbars.js");
/* harmony import */ var _display_selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../display/selection.js */ "./node_modules/codemirror/src/display/selection.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../display/view_tracking.js */ "./node_modules/codemirror/src/display/view_tracking.js");
/* harmony import */ var _input_keymap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../input/keymap.js */ "./node_modules/codemirror/src/input/keymap.js");
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../line/line_data.js */ "./node_modules/codemirror/src/line/line_data.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../model/changes.js */ "./node_modules/codemirror/src/model/changes.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils.js */ "./node_modules/codemirror/src/edit/utils.js");



















let Init = {toString: function(){return "CodeMirror.Init"}}

let defaults = {}
let optionHandlers = {}

function defineOptions(CodeMirror) {
  let optionHandlers = CodeMirror.optionHandlers

  function option(name, deflt, handle, notOnInit) {
    CodeMirror.defaults[name] = deflt
    if (handle) optionHandlers[name] =
      notOnInit ? (cm, val, old) => {if (old != Init) handle(cm, val, old)} : handle
  }

  CodeMirror.defineOption = option

  // Passed to option handlers when there is no old value.
  CodeMirror.Init = Init

  // These two are, on init, called from the constructor because they
  // have to be initialized before the editor can start at all.
  option("value", "", (cm, val) => cm.setValue(val), true)
  option("mode", null, (cm, val) => {
    cm.doc.modeOption = val
    Object(_display_mode_state_js__WEBPACK_IMPORTED_MODULE_3__["loadMode"])(cm)
  }, true)

  option("indentUnit", 2, _display_mode_state_js__WEBPACK_IMPORTED_MODULE_3__["loadMode"], true)
  option("indentWithTabs", false)
  option("smartIndent", true)
  option("tabSize", 4, cm => {
    Object(_display_mode_state_js__WEBPACK_IMPORTED_MODULE_3__["resetModeState"])(cm)
    Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_11__["clearCaches"])(cm)
    Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_6__["regChange"])(cm)
  }, true)

  option("lineSeparator", null, (cm, val) => {
    cm.doc.lineSep = val
    if (!val) return
    let newBreaks = [], lineNo = cm.doc.first
    cm.doc.iter(line => {
      for (let pos = 0;;) {
        let found = line.text.indexOf(val, pos)
        if (found == -1) break
        pos = found + val.length
        newBreaks.push(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_9__["Pos"])(lineNo, found))
      }
      lineNo++
    })
    for (let i = newBreaks.length - 1; i >= 0; i--)
      Object(_model_changes_js__WEBPACK_IMPORTED_MODULE_12__["replaceRange"])(cm.doc, val, newBreaks[i], Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_9__["Pos"])(newBreaks[i].line, newBreaks[i].ch + val.length))
  })
  option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, (cm, val, old) => {
    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g")
    if (old != Init) cm.refresh()
  })
  option("specialCharPlaceholder", _line_line_data_js__WEBPACK_IMPORTED_MODULE_8__["defaultSpecialCharPlaceholder"], cm => cm.refresh(), true)
  option("electricChars", true)
  option("inputStyle", _util_browser_js__WEBPACK_IMPORTED_MODULE_13__["mobile"] ? "contenteditable" : "textarea", () => {
    throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
  }, true)
  option("spellcheck", false, (cm, val) => cm.getInputField().spellcheck = val, true)
  option("rtlMoveVisually", !_util_browser_js__WEBPACK_IMPORTED_MODULE_13__["windows"])
  option("wholeLineUpdateBefore", true)

  option("theme", "default", cm => {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["themeChanged"])(cm)
    guttersChanged(cm)
  }, true)
  option("keyMap", "default", (cm, val, old) => {
    let next = Object(_input_keymap_js__WEBPACK_IMPORTED_MODULE_7__["getKeyMap"])(val)
    let prev = old != Init && Object(_input_keymap_js__WEBPACK_IMPORTED_MODULE_7__["getKeyMap"])(old)
    if (prev && prev.detach) prev.detach(cm, next)
    if (next.attach) next.attach(cm, prev || null)
  })
  option("extraKeys", null)
  option("configureMouse", null)

  option("lineWrapping", false, wrappingChanged, true)
  option("gutters", [], cm => {
    Object(_display_gutters_js__WEBPACK_IMPORTED_MODULE_1__["setGuttersForLineNumbers"])(cm.options)
    guttersChanged(cm)
  }, true)
  option("fixedGutter", true, (cm, val) => {
    cm.display.gutters.style.left = val ? Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_11__["compensateForHScroll"])(cm.display) + "px" : "0"
    cm.refresh()
  }, true)
  option("coverGutterNextToScrollbar", false, cm => Object(_display_scrollbars_js__WEBPACK_IMPORTED_MODULE_4__["updateScrollbars"])(cm), true)
  option("scrollbarStyle", "native", cm => {
    Object(_display_scrollbars_js__WEBPACK_IMPORTED_MODULE_4__["initScrollbars"])(cm)
    Object(_display_scrollbars_js__WEBPACK_IMPORTED_MODULE_4__["updateScrollbars"])(cm)
    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop)
    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft)
  }, true)
  option("lineNumbers", false, cm => {
    Object(_display_gutters_js__WEBPACK_IMPORTED_MODULE_1__["setGuttersForLineNumbers"])(cm.options)
    guttersChanged(cm)
  }, true)
  option("firstLineNumber", 1, guttersChanged, true)
  option("lineNumberFormatter", integer => integer, guttersChanged, true)
  option("showCursorWhenSelecting", false, _display_selection_js__WEBPACK_IMPORTED_MODULE_5__["updateSelection"], true)

  option("resetSelectionOnContextMenu", true)
  option("lineWiseCopyCut", true)
  option("pasteLinesPerSelection", true)
  option("selectionsMayTouch", false)

  option("readOnly", false, (cm, val) => {
    if (val == "nocursor") {
      Object(_display_focus_js__WEBPACK_IMPORTED_MODULE_0__["onBlur"])(cm)
      cm.display.input.blur()
    }
    cm.display.input.readOnlyChanged(val)
  })
  option("disableInput", false, (cm, val) => {if (!val) cm.display.input.reset()}, true)
  option("dragDrop", true, dragDropChanged)
  option("allowDropFileTypes", null)

  option("cursorBlinkRate", 530)
  option("cursorScrollMargin", 0)
  option("cursorHeight", 1, _display_selection_js__WEBPACK_IMPORTED_MODULE_5__["updateSelection"], true)
  option("singleCursorHeightPerLine", true, _display_selection_js__WEBPACK_IMPORTED_MODULE_5__["updateSelection"], true)
  option("workTime", 100)
  option("workDelay", 100)
  option("flattenSpans", true, _display_mode_state_js__WEBPACK_IMPORTED_MODULE_3__["resetModeState"], true)
  option("addModeClass", false, _display_mode_state_js__WEBPACK_IMPORTED_MODULE_3__["resetModeState"], true)
  option("pollInterval", 100)
  option("undoDepth", 200, (cm, val) => cm.doc.history.undoDepth = val)
  option("historyEventDelay", 1250)
  option("viewportMargin", 10, cm => cm.refresh(), true)
  option("maxHighlightLength", 10000, _display_mode_state_js__WEBPACK_IMPORTED_MODULE_3__["resetModeState"], true)
  option("moveInputWithCursor", true, (cm, val) => {
    if (!val) cm.display.input.resetPosition()
  })

  option("tabindex", null, (cm, val) => cm.display.input.getField().tabIndex = val || "")
  option("autofocus", null)
  option("direction", "ltr", (cm, val) => cm.doc.setDirection(val), true)
  option("phrases", null)
}

function guttersChanged(cm) {
  Object(_display_gutters_js__WEBPACK_IMPORTED_MODULE_1__["updateGutters"])(cm)
  Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_6__["regChange"])(cm)
  Object(_display_line_numbers_js__WEBPACK_IMPORTED_MODULE_2__["alignHorizontally"])(cm)
}

function dragDropChanged(cm, value, old) {
  let wasOn = old && old != Init
  if (!value != !wasOn) {
    let funcs = cm.display.dragFunctions
    let toggle = value ? _util_event_js__WEBPACK_IMPORTED_MODULE_15__["on"] : _util_event_js__WEBPACK_IMPORTED_MODULE_15__["off"]
    toggle(cm.display.scroller, "dragstart", funcs.start)
    toggle(cm.display.scroller, "dragenter", funcs.enter)
    toggle(cm.display.scroller, "dragover", funcs.over)
    toggle(cm.display.scroller, "dragleave", funcs.leave)
    toggle(cm.display.scroller, "drop", funcs.drop)
  }
}

function wrappingChanged(cm) {
  if (cm.options.lineWrapping) {
    Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_14__["addClass"])(cm.display.wrapper, "CodeMirror-wrap")
    cm.display.sizer.style.minWidth = ""
    cm.display.sizerWidth = null
  } else {
    Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_14__["rmClass"])(cm.display.wrapper, "CodeMirror-wrap")
    Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_10__["findMaxLine"])(cm)
  }
  Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_11__["estimateLineHeights"])(cm)
  Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_6__["regChange"])(cm)
  Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_11__["clearCaches"])(cm)
  setTimeout(() => Object(_display_scrollbars_js__WEBPACK_IMPORTED_MODULE_4__["updateScrollbars"])(cm), 100)
}


/***/ }),

/***/ "./node_modules/codemirror/src/edit/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/codemirror/src/edit/utils.js ***!
  \***************************************************/
/*! exports provided: themeChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeChanged", function() { return themeChanged; });
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");


function themeChanged(cm) {
  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
    cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-")
  Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_0__["clearCaches"])(cm)
}


/***/ }),

/***/ "./node_modules/codemirror/src/input/ContentEditableInput.js":
/*!*******************************************************************!*\
  !*** ./node_modules/codemirror/src/input/ContentEditableInput.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentEditableInput; });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _display_selection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/selection.js */ "./node_modules/codemirror/src/display/selection.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/view_tracking.js */ "./node_modules/codemirror/src/display/view_tracking.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.js */ "./node_modules/codemirror/src/input/input.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/changes.js */ "./node_modules/codemirror/src/model/changes.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/selection.js */ "./node_modules/codemirror/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/selection_updates.js */ "./node_modules/codemirror/src/model/selection_updates.js");
/* harmony import */ var _util_bidi_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/bidi.js */ "./node_modules/codemirror/src/util/bidi.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
















// CONTENTEDITABLE INPUT STYLE

class ContentEditableInput {
  constructor(cm) {
    this.cm = cm
    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null
    this.polling = new _util_misc_js__WEBPACK_IMPORTED_MODULE_14__["Delayed"]()
    this.composing = null
    this.gracePeriod = false
    this.readDOMTimeout = null
  }

  init(display) {
    let input = this, cm = input.cm
    let div = input.div = display.lineDiv
    Object(_input_js__WEBPACK_IMPORTED_MODULE_3__["disableBrowserMagic"])(div, cm.options.spellcheck)

    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_13__["on"])(div, "paste", e => {
      if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_13__["signalDOMEvent"])(cm, e) || Object(_input_js__WEBPACK_IMPORTED_MODULE_3__["handlePaste"])(e, cm)) return
      // IE doesn't fire input events, so we schedule a read for the pasted content in this way
      if (_util_browser_js__WEBPACK_IMPORTED_MODULE_11__["ie_version"] <= 11) setTimeout(Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_0__["operation"])(cm, () => this.updateFromDOM()), 20)
    })

    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_13__["on"])(div, "compositionstart", e => {
      this.composing = {data: e.data, done: false}
    })
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_13__["on"])(div, "compositionupdate", e => {
      if (!this.composing) this.composing = {data: e.data, done: false}
    })
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_13__["on"])(div, "compositionend", e => {
      if (this.composing) {
        if (e.data != this.composing.data) this.readFromDOMSoon()
        this.composing.done = true
      }
    })

    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_13__["on"])(div, "touchstart", () => input.forceCompositionEnd())

    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_13__["on"])(div, "input", () => {
      if (!this.composing) this.readFromDOMSoon()
    })

    function onCopyCut(e) {
      if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_13__["signalDOMEvent"])(cm, e)) return
      if (cm.somethingSelected()) {
        Object(_input_js__WEBPACK_IMPORTED_MODULE_3__["setLastCopied"])({lineWise: false, text: cm.getSelections()})
        if (e.type == "cut") cm.replaceSelection("", null, "cut")
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        let ranges = Object(_input_js__WEBPACK_IMPORTED_MODULE_3__["copyableRanges"])(cm)
        Object(_input_js__WEBPACK_IMPORTED_MODULE_3__["setLastCopied"])({lineWise: true, text: ranges.text})
        if (e.type == "cut") {
          cm.operation(() => {
            cm.setSelections(ranges.ranges, 0, _util_misc_js__WEBPACK_IMPORTED_MODULE_14__["sel_dontScroll"])
            cm.replaceSelection("", null, "cut")
          })
        }
      }
      if (e.clipboardData) {
        e.clipboardData.clearData()
        let content = _input_js__WEBPACK_IMPORTED_MODULE_3__["lastCopied"].text.join("\n")
        // iOS exposes the clipboard API, but seems to discard content inserted into it
        e.clipboardData.setData("Text", content)
        if (e.clipboardData.getData("Text") == content) {
          e.preventDefault()
          return
        }
      }
      // Old-fashioned briefly-focus-a-textarea hack
      let kludge = Object(_input_js__WEBPACK_IMPORTED_MODULE_3__["hiddenTextarea"])(), te = kludge.firstChild
      cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild)
      te.value = _input_js__WEBPACK_IMPORTED_MODULE_3__["lastCopied"].text.join("\n")
      let hadFocus = document.activeElement
      Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_12__["selectInput"])(te)
      setTimeout(() => {
        cm.display.lineSpace.removeChild(kludge)
        hadFocus.focus()
        if (hadFocus == div) input.showPrimarySelection()
      }, 50)
    }
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_13__["on"])(div, "copy", onCopyCut)
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_13__["on"])(div, "cut", onCopyCut)
  }

  prepareSelection() {
    let result = Object(_display_selection_js__WEBPACK_IMPORTED_MODULE_1__["prepareSelection"])(this.cm, false)
    result.focus = this.cm.state.focused
    return result
  }

  showSelection(info, takeFocus) {
    if (!info || !this.cm.display.view.length) return
    if (info.focus || takeFocus) this.showPrimarySelection()
    this.showMultipleSelections(info)
  }

  getSelection() {
    return this.cm.display.wrapper.ownerDocument.getSelection()
  }

  showPrimarySelection() {
    let sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary()
    let from = prim.from(), to = prim.to()

    if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
      sel.removeAllRanges()
      return
    }

    let curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset)
    let curFocus = domToPos(cm, sel.focusNode, sel.focusOffset)
    if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
        Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["cmp"])(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["minPos"])(curAnchor, curFocus), from) == 0 &&
        Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["cmp"])(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["maxPos"])(curAnchor, curFocus), to) == 0)
      return

    let view = cm.display.view
    let start = (from.line >= cm.display.viewFrom && posToDOM(cm, from)) ||
        {node: view[0].measure.map[2], offset: 0}
    let end = to.line < cm.display.viewTo && posToDOM(cm, to)
    if (!end) {
      let measure = view[view.length - 1].measure
      let map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map
      end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]}
    }

    if (!start || !end) {
      sel.removeAllRanges()
      return
    }

    let old = sel.rangeCount && sel.getRangeAt(0), rng
    try { rng = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_12__["range"])(start.node, start.offset, end.offset, end.node) }
    catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
    if (rng) {
      if (!_util_browser_js__WEBPACK_IMPORTED_MODULE_11__["gecko"] && cm.state.focused) {
        sel.collapse(start.node, start.offset)
        if (!rng.collapsed) {
          sel.removeAllRanges()
          sel.addRange(rng)
        }
      } else {
        sel.removeAllRanges()
        sel.addRange(rng)
      }
      if (old && sel.anchorNode == null) sel.addRange(old)
      else if (_util_browser_js__WEBPACK_IMPORTED_MODULE_11__["gecko"]) this.startGracePeriod()
    }
    this.rememberSelection()
  }

  startGracePeriod() {
    clearTimeout(this.gracePeriod)
    this.gracePeriod = setTimeout(() => {
      this.gracePeriod = false
      if (this.selectionChanged())
        this.cm.operation(() => this.cm.curOp.selectionChanged = true)
    }, 20)
  }

  showMultipleSelections(info) {
    Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_12__["removeChildrenAndAdd"])(this.cm.display.cursorDiv, info.cursors)
    Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_12__["removeChildrenAndAdd"])(this.cm.display.selectionDiv, info.selection)
  }

  rememberSelection() {
    let sel = this.getSelection()
    this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset
    this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset
  }

  selectionInEditor() {
    let sel = this.getSelection()
    if (!sel.rangeCount) return false
    let node = sel.getRangeAt(0).commonAncestorContainer
    return Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_12__["contains"])(this.div, node)
  }

  focus() {
    if (this.cm.options.readOnly != "nocursor") {
      if (!this.selectionInEditor())
        this.showSelection(this.prepareSelection(), true)
      this.div.focus()
    }
  }
  blur() { this.div.blur() }
  getField() { return this.div }

  supportsTouch() { return true }

  receivedFocus() {
    let input = this
    if (this.selectionInEditor())
      this.pollSelection()
    else
      Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_0__["runInOp"])(this.cm, () => input.cm.curOp.selectionChanged = true)

    function poll() {
      if (input.cm.state.focused) {
        input.pollSelection()
        input.polling.set(input.cm.options.pollInterval, poll)
      }
    }
    this.polling.set(this.cm.options.pollInterval, poll)
  }

  selectionChanged() {
    let sel = this.getSelection()
    return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
      sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
  }

  pollSelection() {
    if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) return
    let sel = this.getSelection(), cm = this.cm
    // On Android Chrome (version 56, at least), backspacing into an
    // uneditable block element will put the cursor in that element,
    // and then, because it's not editable, hide the virtual keyboard.
    // Because Android doesn't allow us to actually detect backspace
    // presses in a sane way, this code checks for when that happens
    // and simulates a backspace press in this case.
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_11__["android"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_11__["chrome"] && this.cm.options.gutters.length && isInGutter(sel.anchorNode)) {
      this.cm.triggerOnKeyDown({type: "keydown", keyCode: 8, preventDefault: Math.abs})
      this.blur()
      this.focus()
      return
    }
    if (this.composing) return
    this.rememberSelection()
    let anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset)
    let head = domToPos(cm, sel.focusNode, sel.focusOffset)
    if (anchor && head) Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_0__["runInOp"])(cm, () => {
      Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_9__["setSelection"])(cm.doc, Object(_model_selection_js__WEBPACK_IMPORTED_MODULE_8__["simpleSelection"])(anchor, head), _util_misc_js__WEBPACK_IMPORTED_MODULE_14__["sel_dontScroll"])
      if (anchor.bad || head.bad) cm.curOp.selectionChanged = true
    })
  }

  pollContent() {
    if (this.readDOMTimeout != null) {
      clearTimeout(this.readDOMTimeout)
      this.readDOMTimeout = null
    }

    let cm = this.cm, display = cm.display, sel = cm.doc.sel.primary()
    let from = sel.from(), to = sel.to()
    if (from.ch == 0 && from.line > cm.firstLine())
      from = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(from.line - 1, Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLine"])(cm.doc, from.line - 1).length)
    if (to.ch == Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLine"])(cm.doc, to.line).text.length && to.line < cm.lastLine())
      to = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(to.line + 1, 0)
    if (from.line < display.viewFrom || to.line > display.viewTo - 1) return false

    let fromIndex, fromLine, fromNode
    if (from.line == display.viewFrom || (fromIndex = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__["findViewIndex"])(cm, from.line)) == 0) {
      fromLine = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["lineNo"])(display.view[0].line)
      fromNode = display.view[0].node
    } else {
      fromLine = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["lineNo"])(display.view[fromIndex].line)
      fromNode = display.view[fromIndex - 1].node.nextSibling
    }
    let toIndex = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__["findViewIndex"])(cm, to.line)
    let toLine, toNode
    if (toIndex == display.view.length - 1) {
      toLine = display.viewTo - 1
      toNode = display.lineDiv.lastChild
    } else {
      toLine = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["lineNo"])(display.view[toIndex + 1].line) - 1
      toNode = display.view[toIndex + 1].node.previousSibling
    }

    if (!fromNode) return false
    let newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine))
    let oldText = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getBetween"])(cm.doc, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(fromLine, 0), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(toLine, Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLine"])(cm.doc, toLine).text.length))
    while (newText.length > 1 && oldText.length > 1) {
      if (Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_14__["lst"])(newText) == Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_14__["lst"])(oldText)) { newText.pop(); oldText.pop(); toLine-- }
      else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++ }
      else break
    }

    let cutFront = 0, cutEnd = 0
    let newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length)
    while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
      ++cutFront
    let newBot = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_14__["lst"])(newText), oldBot = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_14__["lst"])(oldText)
    let maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
                             oldBot.length - (oldText.length == 1 ? cutFront : 0))
    while (cutEnd < maxCutEnd &&
           newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
      ++cutEnd
    // Try to move start of change to start of selection if ambiguous
    if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
      while (cutFront && cutFront > from.ch &&
             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
        cutFront--
        cutEnd++
      }
    }

    newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "")
    newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "")

    let chFrom = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(fromLine, cutFront)
    let chTo = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(toLine, oldText.length ? Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_14__["lst"])(oldText).length - cutEnd : 0)
    if (newText.length > 1 || newText[0] || Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["cmp"])(chFrom, chTo)) {
      Object(_model_changes_js__WEBPACK_IMPORTED_MODULE_7__["replaceRange"])(cm.doc, newText, chFrom, chTo, "+input")
      return true
    }
  }

  ensurePolled() {
    this.forceCompositionEnd()
  }
  reset() {
    this.forceCompositionEnd()
  }
  forceCompositionEnd() {
    if (!this.composing) return
    clearTimeout(this.readDOMTimeout)
    this.composing = null
    this.updateFromDOM()
    this.div.blur()
    this.div.focus()
  }
  readFromDOMSoon() {
    if (this.readDOMTimeout != null) return
    this.readDOMTimeout = setTimeout(() => {
      this.readDOMTimeout = null
      if (this.composing) {
        if (this.composing.done) this.composing = null
        else return
      }
      this.updateFromDOM()
    }, 80)
  }

  updateFromDOM() {
    if (this.cm.isReadOnly() || !this.pollContent())
      Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_0__["runInOp"])(this.cm, () => Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__["regChange"])(this.cm))
  }

  setUneditable(node) {
    node.contentEditable = "false"
  }

  onKeyPress(e) {
    if (e.charCode == 0 || this.composing) return
    e.preventDefault()
    if (!this.cm.isReadOnly())
      Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_0__["operation"])(this.cm, _input_js__WEBPACK_IMPORTED_MODULE_3__["applyTextInput"])(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0)
  }

  readOnlyChanged(val) {
    this.div.contentEditable = String(val != "nocursor")
  }

  onContextMenu() {}
  resetPosition() {}
}

ContentEditableInput.prototype.needsContentAttribute = true

function posToDOM(cm, pos) {
  let view = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__["findViewForLine"])(cm, pos.line)
  if (!view || view.hidden) return null
  let line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLine"])(cm.doc, pos.line)
  let info = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__["mapFromLineView"])(view, line, pos.line)

  let order = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_10__["getOrder"])(line, cm.doc.direction), side = "left"
  if (order) {
    let partPos = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_10__["getBidiPartAt"])(order, pos.ch)
    side = partPos % 2 ? "right" : "left"
  }
  let result = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__["nodeAndOffsetInLineMap"])(info.map, pos.ch, side)
  result.offset = result.collapse == "right" ? result.end : result.start
  return result
}

function isInGutter(node) {
  for (let scan = node; scan; scan = scan.parentNode)
    if (/CodeMirror-gutter-wrapper/.test(scan.className)) return true
  return false
}

function badPos(pos, bad) { if (bad) pos.bad = true; return pos }

function domTextBetween(cm, from, to, fromLine, toLine) {
  let text = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false
  function recognizeMarker(id) { return marker => marker.id == id }
  function close() {
    if (closing) {
      text += lineSep
      if (extraLinebreak) text += lineSep
      closing = extraLinebreak = false
    }
  }
  function addText(str) {
    if (str) {
      close()
      text += str
    }
  }
  function walk(node) {
    if (node.nodeType == 1) {
      let cmText = node.getAttribute("cm-text")
      if (cmText) {
        addText(cmText)
        return
      }
      let markerID = node.getAttribute("cm-marker"), range
      if (markerID) {
        let found = cm.findMarks(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(fromLine, 0), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(toLine + 1, 0), recognizeMarker(+markerID))
        if (found.length && (range = found[0].find(0)))
          addText(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getBetween"])(cm.doc, range.from, range.to).join(lineSep))
        return
      }
      if (node.getAttribute("contenteditable") == "false") return
      let isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName)
      if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) return

      if (isBlock) close()
      for (let i = 0; i < node.childNodes.length; i++)
        walk(node.childNodes[i])

      if (/^(pre|p)$/i.test(node.nodeName)) extraLinebreak = true
      if (isBlock) closing = true
    } else if (node.nodeType == 3) {
      addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "))
    }
  }
  for (;;) {
    walk(from)
    if (from == to) break
    from = from.nextSibling
    extraLinebreak = false
  }
  return text
}

function domToPos(cm, node, offset) {
  let lineNode
  if (node == cm.display.lineDiv) {
    lineNode = cm.display.lineDiv.childNodes[offset]
    if (!lineNode) return badPos(cm.clipPos(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(cm.display.viewTo - 1)), true)
    node = null; offset = 0
  } else {
    for (lineNode = node;; lineNode = lineNode.parentNode) {
      if (!lineNode || lineNode == cm.display.lineDiv) return null
      if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) break
    }
  }
  for (let i = 0; i < cm.display.view.length; i++) {
    let lineView = cm.display.view[i]
    if (lineView.node == lineNode)
      return locateNodeInLineView(lineView, node, offset)
  }
}

function locateNodeInLineView(lineView, node, offset) {
  let wrapper = lineView.text.firstChild, bad = false
  if (!node || !Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_12__["contains"])(wrapper, node)) return badPos(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["lineNo"])(lineView.line), 0), true)
  if (node == wrapper) {
    bad = true
    node = wrapper.childNodes[offset]
    offset = 0
    if (!node) {
      let line = lineView.rest ? Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_14__["lst"])(lineView.rest) : lineView.line
      return badPos(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["lineNo"])(line), line.text.length), bad)
    }
  }

  let textNode = node.nodeType == 3 ? node : null, topNode = node
  if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
    textNode = node.firstChild
    if (offset) offset = textNode.nodeValue.length
  }
  while (topNode.parentNode != wrapper) topNode = topNode.parentNode
  let measure = lineView.measure, maps = measure.maps

  function find(textNode, topNode, offset) {
    for (let i = -1; i < (maps ? maps.length : 0); i++) {
      let map = i < 0 ? measure.map : maps[i]
      for (let j = 0; j < map.length; j += 3) {
        let curNode = map[j + 2]
        if (curNode == textNode || curNode == topNode) {
          let line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["lineNo"])(i < 0 ? lineView.line : lineView.rest[i])
          let ch = map[j] + offset
          if (offset < 0 || curNode != textNode) ch = map[j + (offset ? 1 : 0)]
          return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(line, ch)
        }
      }
    }
  }
  let found = find(textNode, topNode, offset)
  if (found) return badPos(found, bad)

  // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
  for (let after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
    found = find(after, after.firstChild, 0)
    if (found)
      return badPos(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(found.line, found.ch - dist), bad)
    else
      dist += after.textContent.length
  }
  for (let before = topNode.previousSibling, dist = offset; before; before = before.previousSibling) {
    found = find(before, before.firstChild, -1)
    if (found)
      return badPos(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(found.line, found.ch + dist), bad)
    else
      dist += before.textContent.length
  }
}


/***/ }),

/***/ "./node_modules/codemirror/src/input/TextareaInput.js":
/*!************************************************************!*\
  !*** ./node_modules/codemirror/src/input/TextareaInput.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextareaInput; });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _display_selection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/selection.js */ "./node_modules/codemirror/src/display/selection.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.js */ "./node_modules/codemirror/src/input/input.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../measurement/widgets.js */ "./node_modules/codemirror/src/measurement/widgets.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/selection.js */ "./node_modules/codemirror/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/selection_updates.js */ "./node_modules/codemirror/src/model/selection_updates.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/feature_detection.js */ "./node_modules/codemirror/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");













// TEXTAREA INPUT STYLE

class TextareaInput {
  constructor(cm) {
    this.cm = cm
    // See input.poll and input.reset
    this.prevInput = ""

    // Flag that indicates whether we expect input to appear real soon
    // now (after some event like 'keypress' or 'input') and are
    // polling intensively.
    this.pollingFast = false
    // Self-resetting timeout for the poller
    this.polling = new _util_misc_js__WEBPACK_IMPORTED_MODULE_11__["Delayed"]()
    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
    this.hasSelection = false
    this.composing = null
  }

  init(display) {
    let input = this, cm = this.cm
    this.createField(display)
    const te = this.textarea

    display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild)

    // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ios"]) te.style.width = "0px"

    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["on"])(te, "input", () => {
      if (_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie_version"] >= 9 && this.hasSelection) this.hasSelection = null
      input.poll()
    })

    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["on"])(te, "paste", e => {
      if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["signalDOMEvent"])(cm, e) || Object(_input_js__WEBPACK_IMPORTED_MODULE_2__["handlePaste"])(e, cm)) return

      cm.state.pasteIncoming = true
      input.fastPoll()
    })

    function prepareCopyCut(e) {
      if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["signalDOMEvent"])(cm, e)) return
      if (cm.somethingSelected()) {
        Object(_input_js__WEBPACK_IMPORTED_MODULE_2__["setLastCopied"])({lineWise: false, text: cm.getSelections()})
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        let ranges = Object(_input_js__WEBPACK_IMPORTED_MODULE_2__["copyableRanges"])(cm)
        Object(_input_js__WEBPACK_IMPORTED_MODULE_2__["setLastCopied"])({lineWise: true, text: ranges.text})
        if (e.type == "cut") {
          cm.setSelections(ranges.ranges, null, _util_misc_js__WEBPACK_IMPORTED_MODULE_11__["sel_dontScroll"])
        } else {
          input.prevInput = ""
          te.value = ranges.text.join("\n")
          Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_8__["selectInput"])(te)
        }
      }
      if (e.type == "cut") cm.state.cutIncoming = true
    }
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["on"])(te, "cut", prepareCopyCut)
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["on"])(te, "copy", prepareCopyCut)

    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["on"])(display.scroller, "paste", e => {
      if (Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_4__["eventInWidget"])(display, e) || Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["signalDOMEvent"])(cm, e)) return
      cm.state.pasteIncoming = true
      input.focus()
    })

    // Prevent normal selection in the editor (we handle our own)
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["on"])(display.lineSpace, "selectstart", e => {
      if (!Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_4__["eventInWidget"])(display, e)) Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["e_preventDefault"])(e)
    })

    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["on"])(te, "compositionstart", () => {
      let start = cm.getCursor("from")
      if (input.composing) input.composing.range.clear()
      input.composing = {
        start: start,
        range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
      }
    })
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["on"])(te, "compositionend", () => {
      if (input.composing) {
        input.poll()
        input.composing.range.clear()
        input.composing = null
      }
    })
  }

  createField(_display) {
    // Wraps and hides input textarea
    this.wrapper = Object(_input_js__WEBPACK_IMPORTED_MODULE_2__["hiddenTextarea"])()
    // The semihidden textarea that is focused when the editor is
    // focused, and receives input.
    this.textarea = this.wrapper.firstChild
  }

  prepareSelection() {
    // Redraw the selection and/or cursor
    let cm = this.cm, display = cm.display, doc = cm.doc
    let result = Object(_display_selection_js__WEBPACK_IMPORTED_MODULE_1__["prepareSelection"])(cm)

    // Move the hidden textarea near the cursor to prevent scrolling artifacts
    if (cm.options.moveInputWithCursor) {
      let headPos = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["cursorCoords"])(cm, doc.sel.primary().head, "div")
      let wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect()
      result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                          headPos.top + lineOff.top - wrapOff.top))
      result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                           headPos.left + lineOff.left - wrapOff.left))
    }

    return result
  }

  showSelection(drawn) {
    let cm = this.cm, display = cm.display
    Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_8__["removeChildrenAndAdd"])(display.cursorDiv, drawn.cursors)
    Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_8__["removeChildrenAndAdd"])(display.selectionDiv, drawn.selection)
    if (drawn.teTop != null) {
      this.wrapper.style.top = drawn.teTop + "px"
      this.wrapper.style.left = drawn.teLeft + "px"
    }
  }

  // Reset the input to correspond to the selection (or to be empty,
  // when not typing and nothing is selected)
  reset(typing) {
    if (this.contextMenuPending || this.composing) return
    let cm = this.cm
    if (cm.somethingSelected()) {
      this.prevInput = ""
      let content = cm.getSelection()
      this.textarea.value = content
      if (cm.state.focused) Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_8__["selectInput"])(this.textarea)
      if (_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie_version"] >= 9) this.hasSelection = content
    } else if (!typing) {
      this.prevInput = this.textarea.value = ""
      if (_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie_version"] >= 9) this.hasSelection = null
    }
  }

  getField() { return this.textarea }

  supportsTouch() { return false }

  focus() {
    if (this.cm.options.readOnly != "nocursor" && (!_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["mobile"] || Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_8__["activeElt"])() != this.textarea)) {
      try { this.textarea.focus() }
      catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
    }
  }

  blur() { this.textarea.blur() }

  resetPosition() {
    this.wrapper.style.top = this.wrapper.style.left = 0
  }

  receivedFocus() { this.slowPoll() }

  // Poll for input changes, using the normal rate of polling. This
  // runs as long as the editor is focused.
  slowPoll() {
    if (this.pollingFast) return
    this.polling.set(this.cm.options.pollInterval, () => {
      this.poll()
      if (this.cm.state.focused) this.slowPoll()
    })
  }

  // When an event has just come in that is likely to add or change
  // something in the input textarea, we poll faster, to ensure that
  // the change appears on the screen quickly.
  fastPoll() {
    let missed = false, input = this
    input.pollingFast = true
    function p() {
      let changed = input.poll()
      if (!changed && !missed) {missed = true; input.polling.set(60, p)}
      else {input.pollingFast = false; input.slowPoll()}
    }
    input.polling.set(20, p)
  }

  // Read input from the textarea, and update the document to match.
  // When something is selected, it is present in the textarea, and
  // selected (unless it is huge, in which case a placeholder is
  // used). When nothing is selected, the cursor sits after previously
  // seen text (can be empty), which is stored in prevInput (we must
  // not reset the textarea when typing, because that breaks IME).
  poll() {
    let cm = this.cm, input = this.textarea, prevInput = this.prevInput
    // Since this is called a *lot*, try to bail out as cheaply as
    // possible when it is clear that nothing happened. hasSelection
    // will be the case when there is a lot of text in the textarea,
    // in which case reading its value would be expensive.
    if (this.contextMenuPending || !cm.state.focused ||
        (Object(_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_10__["hasSelection"])(input) && !prevInput && !this.composing) ||
        cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
      return false

    let text = input.value
    // If nothing changed, bail.
    if (text == prevInput && !cm.somethingSelected()) return false
    // Work around nonsensical selection resetting in IE9/10, and
    // inexplicable appearance of private area unicode characters on
    // some key combos in Mac (#2689).
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie_version"] >= 9 && this.hasSelection === text ||
        _util_browser_js__WEBPACK_IMPORTED_MODULE_7__["mac"] && /[\uf700-\uf7ff]/.test(text)) {
      cm.display.input.reset()
      return false
    }

    if (cm.doc.sel == cm.display.selForContextMenu) {
      let first = text.charCodeAt(0)
      if (first == 0x200b && !prevInput) prevInput = "\u200b"
      if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
    }
    // Find the part of the input that is actually new
    let same = 0, l = Math.min(prevInput.length, text.length)
    while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same

    Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_0__["runInOp"])(cm, () => {
      Object(_input_js__WEBPACK_IMPORTED_MODULE_2__["applyTextInput"])(cm, text.slice(same), prevInput.length - same,
                     null, this.composing ? "*compose" : null)

      // Don't leave long text in the textarea, since it makes further polling slow
      if (text.length > 1000 || text.indexOf("\n") > -1) input.value = this.prevInput = ""
      else this.prevInput = text

      if (this.composing) {
        this.composing.range.clear()
        this.composing.range = cm.markText(this.composing.start, cm.getCursor("to"),
                                           {className: "CodeMirror-composing"})
      }
    })
    return true
  }

  ensurePolled() {
    if (this.pollingFast && this.poll()) this.pollingFast = false
  }

  onKeyPress() {
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie_version"] >= 9) this.hasSelection = null
    this.fastPoll()
  }

  onContextMenu(e) {
    let input = this, cm = input.cm, display = cm.display, te = input.textarea
    if (input.contextMenuPending) input.contextMenuPending()
    let pos = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__["posFromMouse"])(cm, e), scrollPos = display.scroller.scrollTop
    if (!pos || _util_browser_js__WEBPACK_IMPORTED_MODULE_7__["presto"]) return // Opera is difficult.

    // Reset the current text selection only if the click is done outside of the selection
    // and 'resetSelectionOnContextMenu' option is true.
    let reset = cm.options.resetSelectionOnContextMenu
    if (reset && cm.doc.sel.contains(pos) == -1)
      Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_0__["operation"])(cm, _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_6__["setSelection"])(cm.doc, Object(_model_selection_js__WEBPACK_IMPORTED_MODULE_5__["simpleSelection"])(pos), _util_misc_js__WEBPACK_IMPORTED_MODULE_11__["sel_dontScroll"])

    let oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText
    let wrapperBox = input.wrapper.offsetParent.getBoundingClientRect()
    input.wrapper.style.cssText = "position: static"
    te.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ${e.clientY - wrapperBox.top - 5}px; left: ${e.clientX - wrapperBox.left - 5}px;
      z-index: 1000; background: ${_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie"] ? "rgba(255, 255, 255, .05)" : "transparent"};
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`
    let oldScrollY
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["webkit"]) oldScrollY = window.scrollY // Work around Chrome issue (#2712)
    display.input.focus()
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["webkit"]) window.scrollTo(null, oldScrollY)
    display.input.reset()
    // Adds "Select all" to context menu in FF
    if (!cm.somethingSelected()) te.value = input.prevInput = " "
    input.contextMenuPending = rehide
    display.selForContextMenu = cm.doc.sel
    clearTimeout(display.detectingSelectAll)

    // Select-all will be greyed out if there's nothing to select, so
    // this adds a zero-width space so that we can later check whether
    // it got selected.
    function prepareSelectAllHack() {
      if (te.selectionStart != null) {
        let selected = cm.somethingSelected()
        let extval = "\u200b" + (selected ? te.value : "")
        te.value = "\u21da" // Used to catch context-menu undo
        te.value = extval
        input.prevInput = selected ? "" : "\u200b"
        te.selectionStart = 1; te.selectionEnd = extval.length
        // Re-set this, in case some other handler touched the
        // selection in the meantime.
        display.selForContextMenu = cm.doc.sel
      }
    }
    function rehide() {
      if (input.contextMenuPending != rehide) return
      input.contextMenuPending = false
      input.wrapper.style.cssText = oldWrapperCSS
      te.style.cssText = oldCSS
      if (_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie_version"] < 9) display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos)

      // Try to detect the user choosing select-all
      if (te.selectionStart != null) {
        if (!_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie"] || (_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie_version"] < 9)) prepareSelectAllHack()
        let i = 0, poll = () => {
          if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
              te.selectionEnd > 0 && input.prevInput == "\u200b") {
            Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_0__["operation"])(cm, _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_6__["selectAll"])(cm)
          } else if (i++ < 10) {
            display.detectingSelectAll = setTimeout(poll, 500)
          } else {
            display.selForContextMenu = null
            display.input.reset()
          }
        }
        display.detectingSelectAll = setTimeout(poll, 200)
      }
    }

    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_7__["ie_version"] >= 9) prepareSelectAllHack()
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_7__["captureRightClick"]) {
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["e_stop"])(e)
      let mouseup = () => {
        Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["off"])(window, "mouseup", mouseup)
        setTimeout(rehide, 20)
      }
      Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["on"])(window, "mouseup", mouseup)
    } else {
      setTimeout(rehide, 50)
    }
  }

  readOnlyChanged(val) {
    if (!val) this.reset()
    this.textarea.disabled = val == "nocursor"
  }

  setUneditable() {}
}

TextareaInput.prototype.needsContentAttribute = false


/***/ }),

/***/ "./node_modules/codemirror/src/input/indent.js":
/*!*****************************************************!*\
  !*** ./node_modules/codemirror/src/input/indent.js ***!
  \*****************************************************/
/*! exports provided: indentLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indentLine", function() { return indentLine; });
/* harmony import */ var _line_highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/highlight.js */ "./node_modules/codemirror/src/line/highlight.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/changes.js */ "./node_modules/codemirror/src/model/changes.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/selection.js */ "./node_modules/codemirror/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/selection_updates.js */ "./node_modules/codemirror/src/model/selection_updates.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");








// Indent the given line. The how parameter can be "smart",
// "add"/null, "subtract", or "prev". When aggressive is false
// (typically set to true for forced single-line indents), empty
// lines are not indented, and places where the mode returns Pass
// are left alone.
function indentLine(cm, n, how, aggressive) {
  let doc = cm.doc, state
  if (how == null) how = "add"
  if (how == "smart") {
    // Fall back to "prev" when the mode doesn't have an indentation
    // method.
    if (!doc.mode.indent) how = "prev"
    else state = Object(_line_highlight_js__WEBPACK_IMPORTED_MODULE_0__["getContextBefore"])(cm, n).state
  }

  let tabSize = cm.options.tabSize
  let line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__["getLine"])(doc, n), curSpace = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_6__["countColumn"])(line.text, null, tabSize)
  if (line.stateAfter) line.stateAfter = null
  let curSpaceString = line.text.match(/^\s*/)[0], indentation
  if (!aggressive && !/\S/.test(line.text)) {
    indentation = 0
    how = "not"
  } else if (how == "smart") {
    indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text)
    if (indentation == _util_misc_js__WEBPACK_IMPORTED_MODULE_6__["Pass"] || indentation > 150) {
      if (!aggressive) return
      how = "prev"
    }
  }
  if (how == "prev") {
    if (n > doc.first) indentation = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_6__["countColumn"])(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__["getLine"])(doc, n-1).text, null, tabSize)
    else indentation = 0
  } else if (how == "add") {
    indentation = curSpace + cm.options.indentUnit
  } else if (how == "subtract") {
    indentation = curSpace - cm.options.indentUnit
  } else if (typeof how == "number") {
    indentation = curSpace + how
  }
  indentation = Math.max(0, indentation)

  let indentString = "", pos = 0
  if (cm.options.indentWithTabs)
    for (let i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t"}
  if (pos < indentation) indentString += Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_6__["spaceStr"])(indentation - pos)

  if (indentString != curSpaceString) {
    Object(_model_changes_js__WEBPACK_IMPORTED_MODULE_3__["replaceRange"])(doc, indentString, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_1__["Pos"])(n, 0), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_1__["Pos"])(n, curSpaceString.length), "+input")
    line.stateAfter = null
    return true
  } else {
    // Ensure that, if the cursor was in the whitespace at the start
    // of the line, it is moved to the end of that space.
    for (let i = 0; i < doc.sel.ranges.length; i++) {
      let range = doc.sel.ranges[i]
      if (range.head.line == n && range.head.ch < curSpaceString.length) {
        let pos = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_1__["Pos"])(n, curSpaceString.length)
        Object(_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_5__["replaceOneSelection"])(doc, i, new _model_selection_js__WEBPACK_IMPORTED_MODULE_4__["Range"](pos, pos))
        break
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/codemirror/src/input/input.js":
/*!****************************************************!*\
  !*** ./node_modules/codemirror/src/input/input.js ***!
  \****************************************************/
/*! exports provided: lastCopied, setLastCopied, applyTextInput, handlePaste, triggerElectric, copyableRanges, disableBrowserMagic, hiddenTextarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastCopied", function() { return lastCopied; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLastCopied", function() { return setLastCopied; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyTextInput", function() { return applyTextInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePaste", function() { return handlePaste; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerElectric", function() { return triggerElectric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyableRanges", function() { return copyableRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableBrowserMagic", function() { return disableBrowserMagic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenTextarea", function() { return hiddenTextarea; });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrolling.js */ "./node_modules/codemirror/src/display/scrolling.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/changes.js */ "./node_modules/codemirror/src/model/changes.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/operation_group.js */ "./node_modules/codemirror/src/util/operation_group.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/feature_detection.js */ "./node_modules/codemirror/src/util/feature_detection.js");
/* harmony import */ var _indent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./indent.js */ "./node_modules/codemirror/src/input/indent.js");













// This will be set to a {lineWise: bool, text: [string]} object, so
// that, when pasting, we know what kind of selections the copied
// text was made out of.
let lastCopied = null

function setLastCopied(newLastCopied) {
  lastCopied = newLastCopied
}

function applyTextInput(cm, inserted, deleted, sel, origin) {
  let doc = cm.doc
  cm.display.shift = false
  if (!sel) sel = doc.sel

  let paste = cm.state.pasteIncoming || origin == "paste"
  let textLines = Object(_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_9__["splitLinesAuto"])(inserted), multiPaste = null
  // When pasting N lines into N selections, insert one line per selection
  if (paste && sel.ranges.length > 1) {
    if (lastCopied && lastCopied.text.join("\n") == inserted) {
      if (sel.ranges.length % lastCopied.text.length == 0) {
        multiPaste = []
        for (let i = 0; i < lastCopied.text.length; i++)
          multiPaste.push(doc.splitLines(lastCopied.text[i]))
      }
    } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
      multiPaste = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_7__["map"])(textLines, l => [l])
    }
  }

  let updateInput = cm.curOp.updateInput
  // Normal behavior is to insert the new text into every selection
  for (let i = sel.ranges.length - 1; i >= 0; i--) {
    let range = sel.ranges[i]
    let from = range.from(), to = range.to()
    if (range.empty()) {
      if (deleted && deleted > 0) // Handle deletion
        from = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["Pos"])(from.line, from.ch - deleted)
      else if (cm.state.overwrite && !paste) // Handle overwrite
        to = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["Pos"])(to.line, Math.min(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, to.line).text.length, to.ch + Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_7__["lst"])(textLines).length))
      else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted)
        from = to = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["Pos"])(from.line, 0)
    }
    let changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
                       origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")}
    Object(_model_changes_js__WEBPACK_IMPORTED_MODULE_4__["makeChange"])(cm.doc, changeEvent)
    Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_8__["signalLater"])(cm, "inputRead", cm, changeEvent)
  }
  if (inserted && !paste)
    triggerElectric(cm, inserted)

  Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__["ensureCursorVisible"])(cm)
  if (cm.curOp.updateInput < 2) cm.curOp.updateInput = updateInput
  cm.curOp.typing = true
  cm.state.pasteIncoming = cm.state.cutIncoming = false
}

function handlePaste(e, cm) {
  let pasted = e.clipboardData && e.clipboardData.getData("Text")
  if (pasted) {
    e.preventDefault()
    if (!cm.isReadOnly() && !cm.options.disableInput)
      Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_0__["runInOp"])(cm, () => applyTextInput(cm, pasted, 0, null, "paste"))
    return true
  }
}

function triggerElectric(cm, inserted) {
  // When an 'electric' character is inserted, immediately trigger a reindent
  if (!cm.options.electricChars || !cm.options.smartIndent) return
  let sel = cm.doc.sel

  for (let i = sel.ranges.length - 1; i >= 0; i--) {
    let range = sel.ranges[i]
    if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) continue
    let mode = cm.getModeAt(range.head)
    let indented = false
    if (mode.electricChars) {
      for (let j = 0; j < mode.electricChars.length; j++)
        if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
          indented = Object(_indent_js__WEBPACK_IMPORTED_MODULE_10__["indentLine"])(cm, range.head.line, "smart")
          break
        }
    } else if (mode.electricInput) {
      if (mode.electricInput.test(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(cm.doc, range.head.line).text.slice(0, range.head.ch)))
        indented = Object(_indent_js__WEBPACK_IMPORTED_MODULE_10__["indentLine"])(cm, range.head.line, "smart")
    }
    if (indented) Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_8__["signalLater"])(cm, "electricInput", cm, range.head.line)
  }
}

function copyableRanges(cm) {
  let text = [], ranges = []
  for (let i = 0; i < cm.doc.sel.ranges.length; i++) {
    let line = cm.doc.sel.ranges[i].head.line
    let lineRange = {anchor: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["Pos"])(line, 0), head: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["Pos"])(line + 1, 0)}
    ranges.push(lineRange)
    text.push(cm.getRange(lineRange.anchor, lineRange.head))
  }
  return {text: text, ranges: ranges}
}

function disableBrowserMagic(field, spellcheck) {
  field.setAttribute("autocorrect", "off")
  field.setAttribute("autocapitalize", "off")
  field.setAttribute("spellcheck", !!spellcheck)
}

function hiddenTextarea() {
  let te = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["elt"])("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
  let div = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["elt"])("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;")
  // The textarea is kept positioned near the cursor to prevent the
  // fact that it'll be scrolled into view on input from scrolling
  // our fake cursor out of view. On webkit, when wrap=off, paste is
  // very slow. So make the area wide instead.
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_5__["webkit"]) te.style.width = "1000px"
  else te.setAttribute("wrap", "off")
  // If border: 0; -- iOS fails to open keyboard (issue #1287)
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_5__["ios"]) te.style.border = "1px solid black"
  disableBrowserMagic(te)
  return div
}


/***/ }),

/***/ "./node_modules/codemirror/src/input/keymap.js":
/*!*****************************************************!*\
  !*** ./node_modules/codemirror/src/input/keymap.js ***!
  \*****************************************************/
/*! exports provided: keyMap, normalizeKeyMap, lookupKey, isModifierKey, addModifierNames, keyName, getKeyMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyMap", function() { return keyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeKeyMap", function() { return normalizeKeyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookupKey", function() { return lookupKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModifierKey", function() { return isModifierKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addModifierNames", function() { return addModifierNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyName", function() { return keyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyMap", function() { return getKeyMap; });
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _keynames_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keynames.js */ "./node_modules/codemirror/src/input/keynames.js");





let keyMap = {}

keyMap.basic = {
  "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
  "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
  "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
  "Tab": "defaultTab", "Shift-Tab": "indentAuto",
  "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
  "Esc": "singleSelection"
}
// Note that the save and find-related commands aren't defined by
// default. User code or addons can define them. Unknown commands
// are simply ignored.
keyMap.pcDefault = {
  "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
  "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
  "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
  "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
  "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
  "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
  "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
  "fallthrough": "basic"
}
// Very basic readline/emacs-style bindings, which are standard on Mac.
keyMap.emacsy = {
  "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
  "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
  "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
  "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
  "Ctrl-O": "openLine"
}
keyMap.macDefault = {
  "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
  "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
  "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
  "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
  "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
  "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
  "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
  "fallthrough": ["basic", "emacsy"]
}
keyMap["default"] = _util_browser_js__WEBPACK_IMPORTED_MODULE_0__["mac"] ? keyMap.macDefault : keyMap.pcDefault

// KEYMAP DISPATCH

function normalizeKeyName(name) {
  let parts = name.split(/-(?!$)/)
  name = parts[parts.length - 1]
  let alt, ctrl, shift, cmd
  for (let i = 0; i < parts.length - 1; i++) {
    let mod = parts[i]
    if (/^(cmd|meta|m)$/i.test(mod)) cmd = true
    else if (/^a(lt)?$/i.test(mod)) alt = true
    else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true
    else if (/^s(hift)?$/i.test(mod)) shift = true
    else throw new Error("Unrecognized modifier name: " + mod)
  }
  if (alt) name = "Alt-" + name
  if (ctrl) name = "Ctrl-" + name
  if (cmd) name = "Cmd-" + name
  if (shift) name = "Shift-" + name
  return name
}

// This is a kludge to keep keymaps mostly working as raw objects
// (backwards compatibility) while at the same time support features
// like normalization and multi-stroke key bindings. It compiles a
// new normalized keymap, and then updates the old object to reflect
// this.
function normalizeKeyMap(keymap) {
  let copy = {}
  for (let keyname in keymap) if (keymap.hasOwnProperty(keyname)) {
    let value = keymap[keyname]
    if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) continue
    if (value == "...") { delete keymap[keyname]; continue }

    let keys = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_1__["map"])(keyname.split(" "), normalizeKeyName)
    for (let i = 0; i < keys.length; i++) {
      let val, name
      if (i == keys.length - 1) {
        name = keys.join(" ")
        val = value
      } else {
        name = keys.slice(0, i + 1).join(" ")
        val = "..."
      }
      let prev = copy[name]
      if (!prev) copy[name] = val
      else if (prev != val) throw new Error("Inconsistent bindings for " + name)
    }
    delete keymap[keyname]
  }
  for (let prop in copy) keymap[prop] = copy[prop]
  return keymap
}

function lookupKey(key, map, handle, context) {
  map = getKeyMap(map)
  let found = map.call ? map.call(key, context) : map[key]
  if (found === false) return "nothing"
  if (found === "...") return "multi"
  if (found != null && handle(found)) return "handled"

  if (map.fallthrough) {
    if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
      return lookupKey(key, map.fallthrough, handle, context)
    for (let i = 0; i < map.fallthrough.length; i++) {
      let result = lookupKey(key, map.fallthrough[i], handle, context)
      if (result) return result
    }
  }
}

// Modifier key presses don't count as 'real' key presses for the
// purpose of keymap fallthrough.
function isModifierKey(value) {
  let name = typeof value == "string" ? value : _keynames_js__WEBPACK_IMPORTED_MODULE_2__["keyNames"][value.keyCode]
  return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
}

function addModifierNames(name, event, noShift) {
  let base = name
  if (event.altKey && base != "Alt") name = "Alt-" + name
  if ((_util_browser_js__WEBPACK_IMPORTED_MODULE_0__["flipCtrlCmd"] ? event.metaKey : event.ctrlKey) && base != "Ctrl") name = "Ctrl-" + name
  if ((_util_browser_js__WEBPACK_IMPORTED_MODULE_0__["flipCtrlCmd"] ? event.ctrlKey : event.metaKey) && base != "Cmd") name = "Cmd-" + name
  if (!noShift && event.shiftKey && base != "Shift") name = "Shift-" + name
  return name
}

// Look up the name of a key as indicated by an event object.
function keyName(event, noShift) {
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__["presto"] && event.keyCode == 34 && event["char"]) return false
  let name = _keynames_js__WEBPACK_IMPORTED_MODULE_2__["keyNames"][event.keyCode]
  if (name == null || event.altGraphKey) return false
  // Ctrl-ScrollLock has keyCode 3, same as Ctrl-Pause,
  // so we'll use event.code when available (Chrome 48+, FF 38+, Safari 10.1+)
  if (event.keyCode == 3 && event.code) name = event.code
  return addModifierNames(name, event, noShift)
}

function getKeyMap(val) {
  return typeof val == "string" ? keyMap[val] : val
}


/***/ }),

/***/ "./node_modules/codemirror/src/input/keynames.js":
/*!*******************************************************!*\
  !*** ./node_modules/codemirror/src/input/keynames.js ***!
  \*******************************************************/
/*! exports provided: keyNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyNames", function() { return keyNames; });
let keyNames = {
  3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
  106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete", 145: "ScrollLock",
  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
  221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
}

// Number keys
for (let i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i)
// Alphabetic keys
for (let i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i)
// Function keys
for (let i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i


/***/ }),

/***/ "./node_modules/codemirror/src/input/movement.js":
/*!*******************************************************!*\
  !*** ./node_modules/codemirror/src/input/movement.js ***!
  \*******************************************************/
/*! exports provided: moveLogically, endOfLine, moveVisually */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveLogically", function() { return moveLogically; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endOfLine", function() { return endOfLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveVisually", function() { return moveVisually; });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _util_bidi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/bidi.js */ "./node_modules/codemirror/src/util/bidi.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");





function moveCharLogically(line, ch, dir) {
  let target = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_3__["skipExtendingChars"])(line.text, ch + dir, dir)
  return target < 0 || target > line.text.length ? null : target
}

function moveLogically(line, start, dir) {
  let ch = moveCharLogically(line, start.ch, dir)
  return ch == null ? null : new _line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"](start.line, ch, dir < 0 ? "after" : "before")
}

function endOfLine(visually, cm, lineObj, lineNo, dir) {
  if (visually) {
    let order = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_2__["getOrder"])(lineObj, cm.doc.direction)
    if (order) {
      let part = dir < 0 ? Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_3__["lst"])(order) : order[0]
      let moveInStorageOrder = (dir < 0) == (part.level == 1)
      let sticky = moveInStorageOrder ? "after" : "before"
      let ch
      // With a wrapped rtl chunk (possibly spanning multiple bidi parts),
      // it could be that the last bidi part is not on the last visual line,
      // since visual lines contain content order-consecutive chunks.
      // Thus, in rtl, we are looking for the first (content-order) character
      // in the rtl chunk that is on the last line (that is, the same line
      // as the last (content-order) character).
      if (part.level > 0 || cm.doc.direction == "rtl") {
        let prep = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["prepareMeasureForLine"])(cm, lineObj)
        ch = dir < 0 ? lineObj.text.length - 1 : 0
        let targetTop = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["measureCharPrepared"])(cm, prep, ch).top
        ch = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_3__["findFirst"])(ch => Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["measureCharPrepared"])(cm, prep, ch).top == targetTop, (dir < 0) == (part.level == 1) ? part.from : part.to - 1, ch)
        if (sticky == "before") ch = moveCharLogically(lineObj, ch, 1)
      } else ch = dir < 0 ? part.to : part.from
      return new _line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"](lineNo, ch, sticky)
    }
  }
  return new _line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"](lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after")
}

function moveVisually(cm, line, start, dir) {
  let bidi = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_2__["getOrder"])(line, cm.doc.direction)
  if (!bidi) return moveLogically(line, start, dir)
  if (start.ch >= line.text.length) {
    start.ch = line.text.length
    start.sticky = "before"
  } else if (start.ch <= 0) {
    start.ch = 0
    start.sticky = "after"
  }
  let partPos = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_2__["getBidiPartAt"])(bidi, start.ch, start.sticky), part = bidi[partPos]
  if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
    // Case 1: We move within an ltr part in an ltr editor. Even with wrapped lines,
    // nothing interesting happens.
    return moveLogically(line, start, dir)
  }

  let mv = (pos, dir) => moveCharLogically(line, pos instanceof _line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"] ? pos.ch : pos, dir)
  let prep
  let getWrappedLineExtent = ch => {
    if (!cm.options.lineWrapping) return {begin: 0, end: line.text.length}
    prep = prep || Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["prepareMeasureForLine"])(cm, line)
    return Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__["wrappedLineExtentChar"])(cm, line, prep, ch)
  }
  let wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch)

  if (cm.doc.direction == "rtl" || part.level == 1) {
    let moveInStorageOrder = (part.level == 1) == (dir < 0)
    let ch = mv(start, moveInStorageOrder ? 1 : -1)
    if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
      // Case 2: We move within an rtl part or in an rtl editor on the same visual line
      let sticky = moveInStorageOrder ? "before" : "after"
      return new _line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"](start.line, ch, sticky)
    }
  }

  // Case 3: Could not move within this bidi part in this visual line, so leave
  // the current bidi part

  let searchInVisualLine = (partPos, dir, wrappedLineExtent) => {
    let getRes = (ch, moveInStorageOrder) => moveInStorageOrder
      ? new _line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"](start.line, mv(ch, 1), "before")
      : new _line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"](start.line, ch, "after")

    for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
      let part = bidi[partPos]
      let moveInStorageOrder = (dir > 0) == (part.level != 1)
      let ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1)
      if (part.from <= ch && ch < part.to) return getRes(ch, moveInStorageOrder)
      ch = moveInStorageOrder ? part.from : mv(part.to, -1)
      if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) return getRes(ch, moveInStorageOrder)
    }
  }

  // Case 3a: Look for other bidi parts on the same visual line
  let res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent)
  if (res) return res

  // Case 3b: Look for other bidi parts on the next visual line
  let nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1)
  if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
    res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh))
    if (res) return res
  }

  // Case 4: Nowhere to move
  return null
}


/***/ }),

/***/ "./node_modules/codemirror/src/line/highlight.js":
/*!*******************************************************!*\
  !*** ./node_modules/codemirror/src/line/highlight.js ***!
  \*******************************************************/
/*! exports provided: highlightLine, getLineStyles, getContextBefore, processLine, takeToken, retreatFrontier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightLine", function() { return highlightLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineStyles", function() { return getLineStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContextBefore", function() { return getContextBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processLine", function() { return processLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeToken", function() { return takeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retreatFrontier", function() { return retreatFrontier; });
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _modes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modes.js */ "./node_modules/codemirror/src/modes.js");
/* harmony import */ var _util_StringStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/StringStream.js */ "./node_modules/codemirror/src/util/StringStream.js");
/* harmony import */ var _utils_line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _pos_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pos.js */ "./node_modules/codemirror/src/line/pos.js");







class SavedContext {
  constructor(state, lookAhead) {
    this.state = state
    this.lookAhead = lookAhead
  }
}

class Context {
  constructor(doc, state, line, lookAhead) {
    this.state = state
    this.doc = doc
    this.line = line
    this.maxLookAhead = lookAhead || 0
    this.baseTokens = null
    this.baseTokenPos = 1
  }

  lookAhead(n) {
    let line = this.doc.getLine(this.line + n)
    if (line != null && n > this.maxLookAhead) this.maxLookAhead = n
    return line
  }

  baseToken(n) {
    if (!this.baseTokens) return null
    while (this.baseTokens[this.baseTokenPos] <= n)
      this.baseTokenPos += 2
    let type = this.baseTokens[this.baseTokenPos + 1]
    return {type: type && type.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - n}
  }

  nextLine() {
    this.line++
    if (this.maxLookAhead > 0) this.maxLookAhead--
  }

  static fromSaved(doc, saved, line) {
    if (saved instanceof SavedContext)
      return new Context(doc, Object(_modes_js__WEBPACK_IMPORTED_MODULE_1__["copyState"])(doc.mode, saved.state), line, saved.lookAhead)
    else
      return new Context(doc, Object(_modes_js__WEBPACK_IMPORTED_MODULE_1__["copyState"])(doc.mode, saved), line)
  }

  save(copy) {
    let state = copy !== false ? Object(_modes_js__WEBPACK_IMPORTED_MODULE_1__["copyState"])(this.doc.mode, this.state) : this.state
    return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state
  }
}


// Compute a style array (an array starting with a mode generation
// -- for invalidation -- followed by pairs of end positions and
// style strings), which is used to highlight the tokens on the
// line.
function highlightLine(cm, line, context, forceToEnd) {
  // A styles array always starts with a number identifying the
  // mode/overlays that it is based on (for easy invalidation).
  let st = [cm.state.modeGen], lineClasses = {}
  // Compute the base array of styles
  runMode(cm, line.text, cm.doc.mode, context, (end, style) => st.push(end, style),
          lineClasses, forceToEnd)
  let state = context.state

  // Run overlays, adjust style array.
  for (let o = 0; o < cm.state.overlays.length; ++o) {
    context.baseTokens = st
    let overlay = cm.state.overlays[o], i = 1, at = 0
    context.state = true
    runMode(cm, line.text, overlay.mode, context, (end, style) => {
      let start = i
      // Ensure there's a token end at the current position, and that i points at it
      while (at < end) {
        let i_end = st[i]
        if (i_end > end)
          st.splice(i, 1, end, st[i+1], i_end)
        i += 2
        at = Math.min(end, i_end)
      }
      if (!style) return
      if (overlay.opaque) {
        st.splice(start, i - start, end, "overlay " + style)
        i = start + 2
      } else {
        for (; start < i; start += 2) {
          let cur = st[start+1]
          st[start+1] = (cur ? cur + " " : "") + "overlay " + style
        }
      }
    }, lineClasses)
    context.state = state
    context.baseTokens = null
    context.baseTokenPos = 1
  }

  return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
}

function getLineStyles(cm, line, updateFrontier) {
  if (!line.styles || line.styles[0] != cm.state.modeGen) {
    let context = getContextBefore(cm, Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["lineNo"])(line))
    let resetState = line.text.length > cm.options.maxHighlightLength && Object(_modes_js__WEBPACK_IMPORTED_MODULE_1__["copyState"])(cm.doc.mode, context.state)
    let result = highlightLine(cm, line, context)
    if (resetState) context.state = resetState
    line.stateAfter = context.save(!resetState)
    line.styles = result.styles
    if (result.classes) line.styleClasses = result.classes
    else if (line.styleClasses) line.styleClasses = null
    if (updateFrontier === cm.doc.highlightFrontier)
      cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier)
  }
  return line.styles
}

function getContextBefore(cm, n, precise) {
  let doc = cm.doc, display = cm.display
  if (!doc.mode.startState) return new Context(doc, true, n)
  let start = findStartLine(cm, n, precise)
  let saved = start > doc.first && Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, start - 1).stateAfter
  let context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, Object(_modes_js__WEBPACK_IMPORTED_MODULE_1__["startState"])(doc.mode), start)

  doc.iter(start, n, line => {
    processLine(cm, line.text, context)
    let pos = context.line
    line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null
    context.nextLine()
  })
  if (precise) doc.modeFrontier = context.line
  return context
}

// Lightweight form of highlight -- proceed over this line and
// update state, but don't save a style array. Used for lines that
// aren't currently visible.
function processLine(cm, text, context, startAt) {
  let mode = cm.doc.mode
  let stream = new _util_StringStream_js__WEBPACK_IMPORTED_MODULE_2__["default"](text, cm.options.tabSize, context)
  stream.start = stream.pos = startAt || 0
  if (text == "") callBlankLine(mode, context.state)
  while (!stream.eol()) {
    readToken(mode, stream, context.state)
    stream.start = stream.pos
  }
}

function callBlankLine(mode, state) {
  if (mode.blankLine) return mode.blankLine(state)
  if (!mode.innerMode) return
  let inner = Object(_modes_js__WEBPACK_IMPORTED_MODULE_1__["innerMode"])(mode, state)
  if (inner.mode.blankLine) return inner.mode.blankLine(inner.state)
}

function readToken(mode, stream, state, inner) {
  for (let i = 0; i < 10; i++) {
    if (inner) inner[0] = Object(_modes_js__WEBPACK_IMPORTED_MODULE_1__["innerMode"])(mode, state).mode
    let style = mode.token(stream, state)
    if (stream.pos > stream.start) return style
  }
  throw new Error("Mode " + mode.name + " failed to advance stream.")
}

class Token {
  constructor(stream, type, state) {
    this.start = stream.start; this.end = stream.pos
    this.string = stream.current()
    this.type = type || null
    this.state = state
  }
}

// Utility for getTokenAt and getLineTokens
function takeToken(cm, pos, precise, asArray) {
  let doc = cm.doc, mode = doc.mode, style
  pos = Object(_pos_js__WEBPACK_IMPORTED_MODULE_4__["clipPos"])(doc, pos)
  let line = Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, pos.line), context = getContextBefore(cm, pos.line, precise)
  let stream = new _util_StringStream_js__WEBPACK_IMPORTED_MODULE_2__["default"](line.text, cm.options.tabSize, context), tokens
  if (asArray) tokens = []
  while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
    stream.start = stream.pos
    style = readToken(mode, stream, context.state)
    if (asArray) tokens.push(new Token(stream, style, Object(_modes_js__WEBPACK_IMPORTED_MODULE_1__["copyState"])(doc.mode, context.state)))
  }
  return asArray ? tokens : new Token(stream, style, context.state)
}

function extractLineClasses(type, output) {
  if (type) for (;;) {
    let lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/)
    if (!lineClass) break
    type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length)
    let prop = lineClass[1] ? "bgClass" : "textClass"
    if (output[prop] == null)
      output[prop] = lineClass[2]
    else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
      output[prop] += " " + lineClass[2]
  }
  return type
}

// Run the given mode's parser over a line, calling f for each token.
function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
  let flattenSpans = mode.flattenSpans
  if (flattenSpans == null) flattenSpans = cm.options.flattenSpans
  let curStart = 0, curStyle = null
  let stream = new _util_StringStream_js__WEBPACK_IMPORTED_MODULE_2__["default"](text, cm.options.tabSize, context), style
  let inner = cm.options.addModeClass && [null]
  if (text == "") extractLineClasses(callBlankLine(mode, context.state), lineClasses)
  while (!stream.eol()) {
    if (stream.pos > cm.options.maxHighlightLength) {
      flattenSpans = false
      if (forceToEnd) processLine(cm, text, context, stream.pos)
      stream.pos = text.length
      style = null
    } else {
      style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses)
    }
    if (inner) {
      let mName = inner[0].name
      if (mName) style = "m-" + (style ? mName + " " + style : mName)
    }
    if (!flattenSpans || curStyle != style) {
      while (curStart < stream.start) {
        curStart = Math.min(stream.start, curStart + 5000)
        f(curStart, curStyle)
      }
      curStyle = style
    }
    stream.start = stream.pos
  }
  while (curStart < stream.pos) {
    // Webkit seems to refuse to render text nodes longer than 57444
    // characters, and returns inaccurate measurements in nodes
    // starting around 5000 chars.
    let pos = Math.min(stream.pos, curStart + 5000)
    f(pos, curStyle)
    curStart = pos
  }
}

// Finds the line to start with when starting a parse. Tries to
// find a line with a stateAfter, so that it can start with a
// valid state. If that fails, it returns the line with the
// smallest indentation, which tends to need the least context to
// parse correctly.
function findStartLine(cm, n, precise) {
  let minindent, minline, doc = cm.doc
  let lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100)
  for (let search = n; search > lim; --search) {
    if (search <= doc.first) return doc.first
    let line = Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, search - 1), after = line.stateAfter
    if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier))
      return search
    let indented = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_0__["countColumn"])(line.text, null, cm.options.tabSize)
    if (minline == null || minindent > indented) {
      minline = search - 1
      minindent = indented
    }
  }
  return minline
}

function retreatFrontier(doc, n) {
  doc.modeFrontier = Math.min(doc.modeFrontier, n)
  if (doc.highlightFrontier < n - 10) return
  let start = doc.first
  for (let line = n - 1; line > start; line--) {
    let saved = Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, line).stateAfter
    // change is on 3
    // state on line 1 looked ahead 2 -- so saw 3
    // test 1 + 2 < 3 should cover this
    if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
      start = line + 1
      break
    }
  }
  doc.highlightFrontier = Math.min(doc.highlightFrontier, start)
}


/***/ }),

/***/ "./node_modules/codemirror/src/line/line_data.js":
/*!*******************************************************!*\
  !*** ./node_modules/codemirror/src/line/line_data.js ***!
  \*******************************************************/
/*! exports provided: Line, updateLine, cleanUpLine, buildLineContent, defaultSpecialCharPlaceholder, LineView, buildViewArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLine", function() { return updateLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUpLine", function() { return cleanUpLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLineContent", function() { return buildLineContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSpecialCharPlaceholder", function() { return defaultSpecialCharPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineView", function() { return LineView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildViewArray", function() { return buildViewArray; });
/* harmony import */ var _util_bidi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/bidi.js */ "./node_modules/codemirror/src/util/bidi.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/feature_detection.js */ "./node_modules/codemirror/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _highlight_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./highlight.js */ "./node_modules/codemirror/src/line/highlight.js");
/* harmony import */ var _spans_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _utils_line_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");











// LINE DATA STRUCTURE

// Line objects. These hold state related to a line, including
// highlighting info (the styles array).
class Line {
  constructor(text, markedSpans, estimateHeight) {
    this.text = text
    Object(_spans_js__WEBPACK_IMPORTED_MODULE_7__["attachMarkedSpans"])(this, markedSpans)
    this.height = estimateHeight ? estimateHeight(this) : 1
  }

  lineNo() { return Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_8__["lineNo"])(this) }
}
Object(_util_event_js__WEBPACK_IMPORTED_MODULE_3__["eventMixin"])(Line)

// Change the content (text, markers) of a line. Automatically
// invalidates cached information and tries to re-estimate the
// line's height.
function updateLine(line, text, markedSpans, estimateHeight) {
  line.text = text
  if (line.stateAfter) line.stateAfter = null
  if (line.styles) line.styles = null
  if (line.order != null) line.order = null
  Object(_spans_js__WEBPACK_IMPORTED_MODULE_7__["detachMarkedSpans"])(line)
  Object(_spans_js__WEBPACK_IMPORTED_MODULE_7__["attachMarkedSpans"])(line, markedSpans)
  let estHeight = estimateHeight ? estimateHeight(line) : 1
  if (estHeight != line.height) Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_8__["updateLineHeight"])(line, estHeight)
}

// Detach a line from the document tree and its markers.
function cleanUpLine(line) {
  line.parent = null
  Object(_spans_js__WEBPACK_IMPORTED_MODULE_7__["detachMarkedSpans"])(line)
}

// Convert a style as returned by a mode (either null, or a string
// containing one or more styles) to a CSS style. This is cached,
// and also looks for line-wide styles.
let styleToClassCache = {}, styleToClassCacheWithMode = {}
function interpretTokenStyle(style, options) {
  if (!style || /^\s*$/.test(style)) return null
  let cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache
  return cache[style] ||
    (cache[style] = style.replace(/\S+/g, "cm-$&"))
}

// Render the DOM representation of the text of a line. Also builds
// up a 'line map', which points at the DOM nodes that represent
// specific stretches of text, and is used by the measuring code.
// The returned object contains the DOM node, this map, and
// information about line-wide styles that were set by the mode.
function buildLineContent(cm, lineView) {
  // The padding-right forces the element to have a 'border', which
  // is needed on Webkit to be able to get line-level bounding
  // rectangles for it (in measureChar).
  let content = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["eltP"])("span", null, null, _util_browser_js__WEBPACK_IMPORTED_MODULE_1__["webkit"] ? "padding-right: .1px" : null)
  let builder = {pre: Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["eltP"])("pre", [content], "CodeMirror-line"), content: content,
                 col: 0, pos: 0, cm: cm,
                 trailingSpace: false,
                 splitSpaces: cm.getOption("lineWrapping")}
  lineView.measure = {}

  // Iterate over the logical lines that make up this visual line.
  for (let i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
    let line = i ? lineView.rest[i - 1] : lineView.line, order
    builder.pos = 0
    builder.addToken = buildToken
    // Optionally wire in some hacks into the token-rendering
    // algorithm, to deal with browser quirks.
    if (Object(_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_4__["hasBadBidiRects"])(cm.display.measure) && (order = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_0__["getOrder"])(line, cm.doc.direction)))
      builder.addToken = buildTokenBadBidi(builder.addToken, order)
    builder.map = []
    let allowFrontierUpdate = lineView != cm.display.externalMeasured && Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_8__["lineNo"])(line)
    insertLineContent(line, builder, Object(_highlight_js__WEBPACK_IMPORTED_MODULE_6__["getLineStyles"])(cm, line, allowFrontierUpdate))
    if (line.styleClasses) {
      if (line.styleClasses.bgClass)
        builder.bgClass = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["joinClasses"])(line.styleClasses.bgClass, builder.bgClass || "")
      if (line.styleClasses.textClass)
        builder.textClass = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["joinClasses"])(line.styleClasses.textClass, builder.textClass || "")
    }

    // Ensure at least a single node is present, for measuring.
    if (builder.map.length == 0)
      builder.map.push(0, 0, builder.content.appendChild(Object(_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_4__["zeroWidthElement"])(cm.display.measure)))

    // Store the map and a cache object for the current logical line
    if (i == 0) {
      lineView.measure.map = builder.map
      lineView.measure.cache = {}
    } else {
      ;(lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
      ;(lineView.measure.caches || (lineView.measure.caches = [])).push({})
    }
  }

  // See issue #2901
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_1__["webkit"]) {
    let last = builder.content.lastChild
    if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
      builder.content.className = "cm-tab-wrap-hack"
  }

  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_3__["signal"])(cm, "renderLine", cm, lineView.line, builder.pre)
  if (builder.pre.className)
    builder.textClass = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["joinClasses"])(builder.pre.className, builder.textClass || "")

  return builder
}

function defaultSpecialCharPlaceholder(ch) {
  let token = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["elt"])("span", "\u2022", "cm-invalidchar")
  token.title = "\\u" + ch.charCodeAt(0).toString(16)
  token.setAttribute("aria-label", token.title)
  return token
}

// Build up the DOM representation for a single token, and add it to
// the line map. Takes care to render special characters separately.
function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
  if (!text) return
  let displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text
  let special = builder.cm.state.specialChars, mustWrap = false
  let content
  if (!special.test(text)) {
    builder.col += text.length
    content = document.createTextNode(displayText)
    builder.map.push(builder.pos, builder.pos + text.length, content)
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_1__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_1__["ie_version"] < 9) mustWrap = true
    builder.pos += text.length
  } else {
    content = document.createDocumentFragment()
    let pos = 0
    while (true) {
      special.lastIndex = pos
      let m = special.exec(text)
      let skipped = m ? m.index - pos : text.length - pos
      if (skipped) {
        let txt = document.createTextNode(displayText.slice(pos, pos + skipped))
        if (_util_browser_js__WEBPACK_IMPORTED_MODULE_1__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_1__["ie_version"] < 9) content.appendChild(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["elt"])("span", [txt]))
        else content.appendChild(txt)
        builder.map.push(builder.pos, builder.pos + skipped, txt)
        builder.col += skipped
        builder.pos += skipped
      }
      if (!m) break
      pos += skipped + 1
      let txt
      if (m[0] == "\t") {
        let tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize
        txt = content.appendChild(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["elt"])("span", Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_5__["spaceStr"])(tabWidth), "cm-tab"))
        txt.setAttribute("role", "presentation")
        txt.setAttribute("cm-text", "\t")
        builder.col += tabWidth
      } else if (m[0] == "\r" || m[0] == "\n") {
        txt = content.appendChild(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["elt"])("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"))
        txt.setAttribute("cm-text", m[0])
        builder.col += 1
      } else {
        txt = builder.cm.options.specialCharPlaceholder(m[0])
        txt.setAttribute("cm-text", m[0])
        if (_util_browser_js__WEBPACK_IMPORTED_MODULE_1__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_1__["ie_version"] < 9) content.appendChild(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["elt"])("span", [txt]))
        else content.appendChild(txt)
        builder.col += 1
      }
      builder.map.push(builder.pos, builder.pos + 1, txt)
      builder.pos++
    }
  }
  builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32
  if (style || startStyle || endStyle || mustWrap || css) {
    let fullStyle = style || ""
    if (startStyle) fullStyle += startStyle
    if (endStyle) fullStyle += endStyle
    let token = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_2__["elt"])("span", [content], fullStyle, css)
    if (attributes) {
      for (let attr in attributes) if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class")
        token.setAttribute(attr, attributes[attr])
    }
    return builder.content.appendChild(token)
  }
  builder.content.appendChild(content)
}

// Change some spaces to NBSP to prevent the browser from collapsing
// trailing spaces at the end of a line when rendering text (issue #1362).
function splitSpaces(text, trailingBefore) {
  if (text.length > 1 && !/  /.test(text)) return text
  let spaceBefore = trailingBefore, result = ""
  for (let i = 0; i < text.length; i++) {
    let ch = text.charAt(i)
    if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
      ch = "\u00a0"
    result += ch
    spaceBefore = ch == " "
  }
  return result
}

// Work around nonsense dimensions being reported for stretches of
// right-to-left text.
function buildTokenBadBidi(inner, order) {
  return (builder, text, style, startStyle, endStyle, css, attributes) => {
    style = style ? style + " cm-force-border" : "cm-force-border"
    let start = builder.pos, end = start + text.length
    for (;;) {
      // Find the part that overlaps with the start of this text
      let part
      for (let i = 0; i < order.length; i++) {
        part = order[i]
        if (part.to > start && part.from <= start) break
      }
      if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, css, attributes)
      inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes)
      startStyle = null
      text = text.slice(part.to - start)
      start = part.to
    }
  }
}

function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
  let widget = !ignoreWidget && marker.widgetNode
  if (widget) builder.map.push(builder.pos, builder.pos + size, widget)
  if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
    if (!widget)
      widget = builder.content.appendChild(document.createElement("span"))
    widget.setAttribute("cm-marker", marker.id)
  }
  if (widget) {
    builder.cm.display.input.setUneditable(widget)
    builder.content.appendChild(widget)
  }
  builder.pos += size
  builder.trailingSpace = false
}

// Outputs a number of spans to make up a line, taking highlighting
// and marked text into account.
function insertLineContent(line, builder, styles) {
  let spans = line.markedSpans, allText = line.text, at = 0
  if (!spans) {
    for (let i = 1; i < styles.length; i+=2)
      builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i+1], builder.cm.options))
    return
  }

  let len = allText.length, pos = 0, i = 1, text = "", style, css
  let nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes
  for (;;) {
    if (nextChange == pos) { // Update current marker set
      spanStyle = spanEndStyle = spanStartStyle = css = ""
      attributes = null
      collapsed = null; nextChange = Infinity
      let foundBookmarks = [], endStyles
      for (let j = 0; j < spans.length; ++j) {
        let sp = spans[j], m = sp.marker
        if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
          foundBookmarks.push(m)
        } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
          if (sp.to != null && sp.to != pos && nextChange > sp.to) {
            nextChange = sp.to
            spanEndStyle = ""
          }
          if (m.className) spanStyle += " " + m.className
          if (m.css) css = (css ? css + ";" : "") + m.css
          if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle
          if (m.endStyle && sp.to == nextChange) (endStyles || (endStyles = [])).push(m.endStyle, sp.to)
          // support for the old title property
          // https://github.com/codemirror/CodeMirror/pull/5673
          if (m.title) (attributes || (attributes = {})).title = m.title
          if (m.attributes) {
            for (let attr in m.attributes)
              (attributes || (attributes = {}))[attr] = m.attributes[attr]
          }
          if (m.collapsed && (!collapsed || Object(_spans_js__WEBPACK_IMPORTED_MODULE_7__["compareCollapsedMarkers"])(collapsed.marker, m) < 0))
            collapsed = sp
        } else if (sp.from > pos && nextChange > sp.from) {
          nextChange = sp.from
        }
      }
      if (endStyles) for (let j = 0; j < endStyles.length; j += 2)
        if (endStyles[j + 1] == nextChange) spanEndStyle += " " + endStyles[j]

      if (!collapsed || collapsed.from == pos) for (let j = 0; j < foundBookmarks.length; ++j)
        buildCollapsedSpan(builder, 0, foundBookmarks[j])
      if (collapsed && (collapsed.from || 0) == pos) {
        buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                           collapsed.marker, collapsed.from == null)
        if (collapsed.to == null) return
        if (collapsed.to == pos) collapsed = false
      }
    }
    if (pos >= len) break

    let upto = Math.min(len, nextChange)
    while (true) {
      if (text) {
        let end = pos + text.length
        if (!collapsed) {
          let tokenText = end > upto ? text.slice(0, upto - pos) : text
          builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                           spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css, attributes)
        }
        if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
        pos = end
        spanStartStyle = ""
      }
      text = allText.slice(at, at = styles[i++])
      style = interpretTokenStyle(styles[i++], builder.cm.options)
    }
  }
}


// These objects are used to represent the visible (currently drawn)
// part of the document. A LineView may correspond to multiple
// logical lines, if those are connected by collapsed ranges.
function LineView(doc, line, lineN) {
  // The starting line
  this.line = line
  // Continuing lines, if any
  this.rest = Object(_spans_js__WEBPACK_IMPORTED_MODULE_7__["visualLineContinued"])(line)
  // Number of logical lines in this visual line
  this.size = this.rest ? Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_8__["lineNo"])(Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_5__["lst"])(this.rest)) - lineN + 1 : 1
  this.node = this.text = null
  this.hidden = Object(_spans_js__WEBPACK_IMPORTED_MODULE_7__["lineIsHidden"])(doc, line)
}

// Create a range of LineView objects for the given lines.
function buildViewArray(cm, from, to) {
  let array = [], nextPos
  for (let pos = from; pos < to; pos = nextPos) {
    let view = new LineView(cm.doc, Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_8__["getLine"])(cm.doc, pos), pos)
    nextPos = pos + view.size
    array.push(view)
  }
  return array
}


/***/ }),

/***/ "./node_modules/codemirror/src/line/pos.js":
/*!*************************************************!*\
  !*** ./node_modules/codemirror/src/line/pos.js ***!
  \*************************************************/
/*! exports provided: Pos, cmp, equalCursorPos, copyPos, maxPos, minPos, clipLine, clipPos, clipPosArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos", function() { return Pos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cmp", function() { return cmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalCursorPos", function() { return equalCursorPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyPos", function() { return copyPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPos", function() { return maxPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minPos", function() { return minPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipLine", function() { return clipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipPos", function() { return clipPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipPosArray", function() { return clipPosArray; });
/* harmony import */ var _utils_line_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");


// A Pos instance represents a position within the text.
function Pos(line, ch, sticky = null) {
  if (!(this instanceof Pos)) return new Pos(line, ch, sticky)
  this.line = line
  this.ch = ch
  this.sticky = sticky
}

// Compare two positions, return 0 if they are the same, a negative
// number when a is less, and a positive number otherwise.
function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }

function copyPos(x) {return Pos(x.line, x.ch)}
function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

// Most of the external API clips given positions to make sure they
// actually exist within the document.
function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
function clipPos(doc, pos) {
  if (pos.line < doc.first) return Pos(doc.first, 0)
  let last = doc.first + doc.size - 1
  if (pos.line > last) return Pos(last, Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_0__["getLine"])(doc, last).text.length)
  return clipToLen(pos, Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_0__["getLine"])(doc, pos.line).text.length)
}
function clipToLen(pos, linelen) {
  let ch = pos.ch
  if (ch == null || ch > linelen) return Pos(pos.line, linelen)
  else if (ch < 0) return Pos(pos.line, 0)
  else return pos
}
function clipPosArray(doc, array) {
  let out = []
  for (let i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i])
  return out
}


/***/ }),

/***/ "./node_modules/codemirror/src/line/saw_special_spans.js":
/*!***************************************************************!*\
  !*** ./node_modules/codemirror/src/line/saw_special_spans.js ***!
  \***************************************************************/
/*! exports provided: sawReadOnlySpans, sawCollapsedSpans, seeReadOnlySpans, seeCollapsedSpans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sawReadOnlySpans", function() { return sawReadOnlySpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sawCollapsedSpans", function() { return sawCollapsedSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeReadOnlySpans", function() { return seeReadOnlySpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeCollapsedSpans", function() { return seeCollapsedSpans; });
// Optimize some code when these features are not used.
let sawReadOnlySpans = false, sawCollapsedSpans = false

function seeReadOnlySpans() {
  sawReadOnlySpans = true
}

function seeCollapsedSpans() {
  sawCollapsedSpans = true
}


/***/ }),

/***/ "./node_modules/codemirror/src/line/spans.js":
/*!***************************************************!*\
  !*** ./node_modules/codemirror/src/line/spans.js ***!
  \***************************************************/
/*! exports provided: MarkedSpan, getMarkedSpanFor, removeMarkedSpan, addMarkedSpan, stretchSpansOverChange, removeReadOnlyRanges, detachMarkedSpans, attachMarkedSpans, compareCollapsedMarkers, collapsedSpanAtStart, collapsedSpanAtEnd, collapsedSpanAround, conflictingCollapsedRange, visualLine, visualLineEnd, visualLineContinued, visualLineNo, visualLineEndNo, lineIsHidden, heightAtLine, lineLength, findMaxLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedSpan", function() { return MarkedSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkedSpanFor", function() { return getMarkedSpanFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMarkedSpan", function() { return removeMarkedSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMarkedSpan", function() { return addMarkedSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stretchSpansOverChange", function() { return stretchSpansOverChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeReadOnlyRanges", function() { return removeReadOnlyRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachMarkedSpans", function() { return detachMarkedSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachMarkedSpans", function() { return attachMarkedSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareCollapsedMarkers", function() { return compareCollapsedMarkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapsedSpanAtStart", function() { return collapsedSpanAtStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapsedSpanAtEnd", function() { return collapsedSpanAtEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapsedSpanAround", function() { return collapsedSpanAround; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conflictingCollapsedRange", function() { return conflictingCollapsedRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualLine", function() { return visualLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualLineEnd", function() { return visualLineEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualLineContinued", function() { return visualLineContinued; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualLineNo", function() { return visualLineNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualLineEndNo", function() { return visualLineEndNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineIsHidden", function() { return lineIsHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heightAtLine", function() { return heightAtLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineLength", function() { return lineLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMaxLine", function() { return findMaxLine; });
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _pos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _saw_special_spans_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saw_special_spans.js */ "./node_modules/codemirror/src/line/saw_special_spans.js");
/* harmony import */ var _utils_line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");






// TEXTMARKER SPANS

function MarkedSpan(marker, from, to) {
  this.marker = marker
  this.from = from; this.to = to
}

// Search an array of spans for a span matching the given marker.
function getMarkedSpanFor(spans, marker) {
  if (spans) for (let i = 0; i < spans.length; ++i) {
    let span = spans[i]
    if (span.marker == marker) return span
  }
}
// Remove a span from an array, returning undefined if no spans are
// left (we don't store arrays for lines without spans).
function removeMarkedSpan(spans, span) {
  let r
  for (let i = 0; i < spans.length; ++i)
    if (spans[i] != span) (r || (r = [])).push(spans[i])
  return r
}
// Add a span to a line.
function addMarkedSpan(line, span) {
  line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span]
  span.marker.attachLine(line)
}

// Used for the algorithm that adjusts markers for a change in the
// document. These functions cut an array of spans at a given
// character position, returning an array of remaining chunks (or
// undefined if nothing remains).
function markedSpansBefore(old, startCh, isInsert) {
  let nw
  if (old) for (let i = 0; i < old.length; ++i) {
    let span = old[i], marker = span.marker
    let startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh)
    if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
      let endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
      ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to))
    }
  }
  return nw
}
function markedSpansAfter(old, endCh, isInsert) {
  let nw
  if (old) for (let i = 0; i < old.length; ++i) {
    let span = old[i], marker = span.marker
    let endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh)
    if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
      let startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
      ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                            span.to == null ? null : span.to - endCh))
    }
  }
  return nw
}

// Given a change object, compute the new set of marker spans that
// cover the line in which the change took place. Removes spans
// entirely within the change, reconnects spans belonging to the
// same marker that appear on both sides of the change, and cuts off
// spans partially within the change. Returns an array of span
// arrays with one element for each line in (after) the change.
function stretchSpansOverChange(doc, change) {
  if (change.full) return null
  let oldFirst = Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["isLine"])(doc, change.from.line) && Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, change.from.line).markedSpans
  let oldLast = Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["isLine"])(doc, change.to.line) && Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, change.to.line).markedSpans
  if (!oldFirst && !oldLast) return null

  let startCh = change.from.ch, endCh = change.to.ch, isInsert = Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(change.from, change.to) == 0
  // Get the spans that 'stick out' on both sides
  let first = markedSpansBefore(oldFirst, startCh, isInsert)
  let last = markedSpansAfter(oldLast, endCh, isInsert)

  // Next, merge those two ends
  let sameLine = change.text.length == 1, offset = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_0__["lst"])(change.text).length + (sameLine ? startCh : 0)
  if (first) {
    // Fix up .to properties of first
    for (let i = 0; i < first.length; ++i) {
      let span = first[i]
      if (span.to == null) {
        let found = getMarkedSpanFor(last, span.marker)
        if (!found) span.to = startCh
        else if (sameLine) span.to = found.to == null ? null : found.to + offset
      }
    }
  }
  if (last) {
    // Fix up .from in last (or move them into first in case of sameLine)
    for (let i = 0; i < last.length; ++i) {
      let span = last[i]
      if (span.to != null) span.to += offset
      if (span.from == null) {
        let found = getMarkedSpanFor(first, span.marker)
        if (!found) {
          span.from = offset
          if (sameLine) (first || (first = [])).push(span)
        }
      } else {
        span.from += offset
        if (sameLine) (first || (first = [])).push(span)
      }
    }
  }
  // Make sure we didn't create any zero-length spans
  if (first) first = clearEmptySpans(first)
  if (last && last != first) last = clearEmptySpans(last)

  let newMarkers = [first]
  if (!sameLine) {
    // Fill gap with whole-line-spans
    let gap = change.text.length - 2, gapMarkers
    if (gap > 0 && first)
      for (let i = 0; i < first.length; ++i)
        if (first[i].to == null)
          (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null))
    for (let i = 0; i < gap; ++i)
      newMarkers.push(gapMarkers)
    newMarkers.push(last)
  }
  return newMarkers
}

// Remove spans that are empty and don't have a clearWhenEmpty
// option of false.
function clearEmptySpans(spans) {
  for (let i = 0; i < spans.length; ++i) {
    let span = spans[i]
    if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
      spans.splice(i--, 1)
  }
  if (!spans.length) return null
  return spans
}

// Used to 'clip' out readOnly ranges when making a change.
function removeReadOnlyRanges(doc, from, to) {
  let markers = null
  doc.iter(from.line, to.line + 1, line => {
    if (line.markedSpans) for (let i = 0; i < line.markedSpans.length; ++i) {
      let mark = line.markedSpans[i].marker
      if (mark.readOnly && (!markers || Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(markers, mark) == -1))
        (markers || (markers = [])).push(mark)
    }
  })
  if (!markers) return null
  let parts = [{from: from, to: to}]
  for (let i = 0; i < markers.length; ++i) {
    let mk = markers[i], m = mk.find(0)
    for (let j = 0; j < parts.length; ++j) {
      let p = parts[j]
      if (Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(p.to, m.from) < 0 || Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(p.from, m.to) > 0) continue
      let newParts = [j, 1], dfrom = Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(p.from, m.from), dto = Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(p.to, m.to)
      if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
        newParts.push({from: p.from, to: m.from})
      if (dto > 0 || !mk.inclusiveRight && !dto)
        newParts.push({from: m.to, to: p.to})
      parts.splice.apply(parts, newParts)
      j += newParts.length - 3
    }
  }
  return parts
}

// Connect or disconnect spans from a line.
function detachMarkedSpans(line) {
  let spans = line.markedSpans
  if (!spans) return
  for (let i = 0; i < spans.length; ++i)
    spans[i].marker.detachLine(line)
  line.markedSpans = null
}
function attachMarkedSpans(line, spans) {
  if (!spans) return
  for (let i = 0; i < spans.length; ++i)
    spans[i].marker.attachLine(line)
  line.markedSpans = spans
}

// Helpers used when computing which overlapping collapsed span
// counts as the larger one.
function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

// Returns a number indicating which of two overlapping collapsed
// spans is larger (and thus includes the other). Falls back to
// comparing ids when the spans cover exactly the same range.
function compareCollapsedMarkers(a, b) {
  let lenDiff = a.lines.length - b.lines.length
  if (lenDiff != 0) return lenDiff
  let aPos = a.find(), bPos = b.find()
  let fromCmp = Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b)
  if (fromCmp) return -fromCmp
  let toCmp = Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(aPos.to, bPos.to) || extraRight(a) - extraRight(b)
  if (toCmp) return toCmp
  return b.id - a.id
}

// Find out whether a line ends or starts in a collapsed span. If
// so, return the marker for that span.
function collapsedSpanAtSide(line, start) {
  let sps = _saw_special_spans_js__WEBPACK_IMPORTED_MODULE_2__["sawCollapsedSpans"] && line.markedSpans, found
  if (sps) for (let sp, i = 0; i < sps.length; ++i) {
    sp = sps[i]
    if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
        (!found || compareCollapsedMarkers(found, sp.marker) < 0))
      found = sp.marker
  }
  return found
}
function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

function collapsedSpanAround(line, ch) {
  let sps = _saw_special_spans_js__WEBPACK_IMPORTED_MODULE_2__["sawCollapsedSpans"] && line.markedSpans, found
  if (sps) for (let i = 0; i < sps.length; ++i) {
    let sp = sps[i]
    if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) &&
        (!found || compareCollapsedMarkers(found, sp.marker) < 0)) found = sp.marker
  }
  return found
}

// Test whether there exists a collapsed span that partially
// overlaps (covers the start or end, but not both) of a new span.
// Such overlap is not allowed.
function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
  let line = Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, lineNo)
  let sps = _saw_special_spans_js__WEBPACK_IMPORTED_MODULE_2__["sawCollapsedSpans"] && line.markedSpans
  if (sps) for (let i = 0; i < sps.length; ++i) {
    let sp = sps[i]
    if (!sp.marker.collapsed) continue
    let found = sp.marker.find(0)
    let fromCmp = Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(found.from, from) || extraLeft(sp.marker) - extraLeft(marker)
    let toCmp = Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(found.to, to) || extraRight(sp.marker) - extraRight(marker)
    if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) continue
    if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(found.to, from) >= 0 : Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(found.to, from) > 0) ||
        fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(found.from, to) <= 0 : Object(_pos_js__WEBPACK_IMPORTED_MODULE_1__["cmp"])(found.from, to) < 0))
      return true
  }
}

// A visual line is a line as drawn on the screen. Folding, for
// example, can cause multiple logical lines to appear on the same
// visual line. This finds the start of the visual line that the
// given line is part of (usually that is the line itself).
function visualLine(line) {
  let merged
  while (merged = collapsedSpanAtStart(line))
    line = merged.find(-1, true).line
  return line
}

function visualLineEnd(line) {
  let merged
  while (merged = collapsedSpanAtEnd(line))
    line = merged.find(1, true).line
  return line
}

// Returns an array of logical lines that continue the visual line
// started by the argument, or undefined if there are no such lines.
function visualLineContinued(line) {
  let merged, lines
  while (merged = collapsedSpanAtEnd(line)) {
    line = merged.find(1, true).line
    ;(lines || (lines = [])).push(line)
  }
  return lines
}

// Get the line number of the start of the visual line that the
// given line number is part of.
function visualLineNo(doc, lineN) {
  let line = Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, lineN), vis = visualLine(line)
  if (line == vis) return lineN
  return Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["lineNo"])(vis)
}

// Get the line number of the start of the next visual line after
// the given line.
function visualLineEndNo(doc, lineN) {
  if (lineN > doc.lastLine()) return lineN
  let line = Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, lineN), merged
  if (!lineIsHidden(doc, line)) return lineN
  while (merged = collapsedSpanAtEnd(line))
    line = merged.find(1, true).line
  return Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["lineNo"])(line) + 1
}

// Compute whether a line is hidden. Lines count as hidden when they
// are part of a visual line that starts with another line, or when
// they are entirely covered by collapsed, non-widget span.
function lineIsHidden(doc, line) {
  let sps = _saw_special_spans_js__WEBPACK_IMPORTED_MODULE_2__["sawCollapsedSpans"] && line.markedSpans
  if (sps) for (let sp, i = 0; i < sps.length; ++i) {
    sp = sps[i]
    if (!sp.marker.collapsed) continue
    if (sp.from == null) return true
    if (sp.marker.widgetNode) continue
    if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
      return true
  }
}
function lineIsHiddenInner(doc, line, span) {
  if (span.to == null) {
    let end = span.marker.find(1, true)
    return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
  }
  if (span.marker.inclusiveRight && span.to == line.text.length)
    return true
  for (let sp, i = 0; i < line.markedSpans.length; ++i) {
    sp = line.markedSpans[i]
    if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
        (sp.to == null || sp.to != span.from) &&
        (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
        lineIsHiddenInner(doc, line, sp)) return true
  }
}

// Find the height above the given line.
function heightAtLine(lineObj) {
  lineObj = visualLine(lineObj)

  let h = 0, chunk = lineObj.parent
  for (let i = 0; i < chunk.lines.length; ++i) {
    let line = chunk.lines[i]
    if (line == lineObj) break
    else h += line.height
  }
  for (let p = chunk.parent; p; chunk = p, p = chunk.parent) {
    for (let i = 0; i < p.children.length; ++i) {
      let cur = p.children[i]
      if (cur == chunk) break
      else h += cur.height
    }
  }
  return h
}

// Compute the character length of a line, taking into account
// collapsed ranges (see markText) that might hide parts, and join
// other lines onto it.
function lineLength(line) {
  if (line.height == 0) return 0
  let len = line.text.length, merged, cur = line
  while (merged = collapsedSpanAtStart(cur)) {
    let found = merged.find(0, true)
    cur = found.from.line
    len += found.from.ch - found.to.ch
  }
  cur = line
  while (merged = collapsedSpanAtEnd(cur)) {
    let found = merged.find(0, true)
    len -= cur.text.length - found.from.ch
    cur = found.to.line
    len += cur.text.length - found.to.ch
  }
  return len
}

// Find the longest line in the document.
function findMaxLine(cm) {
  let d = cm.display, doc = cm.doc
  d.maxLine = Object(_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, doc.first)
  d.maxLineLength = lineLength(d.maxLine)
  d.maxLineChanged = true
  doc.iter(line => {
    let len = lineLength(line)
    if (len > d.maxLineLength) {
      d.maxLineLength = len
      d.maxLine = line
    }
  })
}


/***/ }),

/***/ "./node_modules/codemirror/src/line/utils_line.js":
/*!********************************************************!*\
  !*** ./node_modules/codemirror/src/line/utils_line.js ***!
  \********************************************************/
/*! exports provided: getLine, getBetween, getLines, updateLineHeight, lineNo, lineAtHeight, isLine, lineNumberFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLine", function() { return getLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBetween", function() { return getBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLines", function() { return getLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLineHeight", function() { return updateLineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineNo", function() { return lineNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineAtHeight", function() { return lineAtHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLine", function() { return isLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineNumberFor", function() { return lineNumberFor; });
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");


// Find the line object corresponding to the given line number.
function getLine(doc, n) {
  n -= doc.first
  if (n < 0 || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.")
  let chunk = doc
  while (!chunk.lines) {
    for (let i = 0;; ++i) {
      let child = chunk.children[i], sz = child.chunkSize()
      if (n < sz) { chunk = child; break }
      n -= sz
    }
  }
  return chunk.lines[n]
}

// Get the part of a document between two positions, as an array of
// strings.
function getBetween(doc, start, end) {
  let out = [], n = start.line
  doc.iter(start.line, end.line + 1, line => {
    let text = line.text
    if (n == end.line) text = text.slice(0, end.ch)
    if (n == start.line) text = text.slice(start.ch)
    out.push(text)
    ++n
  })
  return out
}
// Get the lines between from and to, as array of strings.
function getLines(doc, from, to) {
  let out = []
  doc.iter(from, to, line => { out.push(line.text) }) // iter aborts when callback returns truthy value
  return out
}

// Update the height of a line, propagating the height change
// upwards to parent nodes.
function updateLineHeight(line, height) {
  let diff = height - line.height
  if (diff) for (let n = line; n; n = n.parent) n.height += diff
}

// Given a line object, find its line number by walking up through
// its parent links.
function lineNo(line) {
  if (line.parent == null) return null
  let cur = line.parent, no = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(cur.lines, line)
  for (let chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
    for (let i = 0;; ++i) {
      if (chunk.children[i] == cur) break
      no += chunk.children[i].chunkSize()
    }
  }
  return no + cur.first
}

// Find the line at the given vertical position, using the height
// information in the document tree.
function lineAtHeight(chunk, h) {
  let n = chunk.first
  outer: do {
    for (let i = 0; i < chunk.children.length; ++i) {
      let child = chunk.children[i], ch = child.height
      if (h < ch) { chunk = child; continue outer }
      h -= ch
      n += child.chunkSize()
    }
    return n
  } while (!chunk.lines)
  let i = 0
  for (; i < chunk.lines.length; ++i) {
    let line = chunk.lines[i], lh = line.height
    if (h < lh) break
    h -= lh
  }
  return n + i
}

function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

function lineNumberFor(options, i) {
  return String(options.lineNumberFormatter(i + options.firstLineNumber))
}


/***/ }),

/***/ "./node_modules/codemirror/src/measurement/position_measurement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/codemirror/src/measurement/position_measurement.js ***!
  \*************************************************************************/
/*! exports provided: paddingTop, paddingVert, paddingH, scrollGap, displayWidth, displayHeight, mapFromLineView, measureChar, findViewForLine, prepareMeasureForLine, measureCharPrepared, nodeAndOffsetInLineMap, clearLineMeasurementCacheFor, clearLineMeasurementCache, clearCaches, intoCoordSystem, fromCoordSystem, charCoords, cursorCoords, estimateCoords, coordsChar, wrappedLineExtentChar, textHeight, charWidth, getDimensions, compensateForHScroll, estimateHeight, estimateLineHeights, posFromMouse, findViewIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingTop", function() { return paddingTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingVert", function() { return paddingVert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingH", function() { return paddingH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollGap", function() { return scrollGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayWidth", function() { return displayWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayHeight", function() { return displayHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFromLineView", function() { return mapFromLineView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureChar", function() { return measureChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findViewForLine", function() { return findViewForLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareMeasureForLine", function() { return prepareMeasureForLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureCharPrepared", function() { return measureCharPrepared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeAndOffsetInLineMap", function() { return nodeAndOffsetInLineMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearLineMeasurementCacheFor", function() { return clearLineMeasurementCacheFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearLineMeasurementCache", function() { return clearLineMeasurementCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCaches", function() { return clearCaches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intoCoordSystem", function() { return intoCoordSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCoordSystem", function() { return fromCoordSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charCoords", function() { return charCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cursorCoords", function() { return cursorCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateCoords", function() { return estimateCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordsChar", function() { return coordsChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrappedLineExtentChar", function() { return wrappedLineExtentChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textHeight", function() { return textHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charWidth", function() { return charWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDimensions", function() { return getDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compensateForHScroll", function() { return compensateForHScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateHeight", function() { return estimateHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateLineHeights", function() { return estimateLineHeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posFromMouse", function() { return posFromMouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findViewIndex", function() { return findViewIndex; });
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/line_data.js */ "./node_modules/codemirror/src/line/line_data.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _util_bidi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/bidi.js */ "./node_modules/codemirror/src/util/bidi.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/feature_detection.js */ "./node_modules/codemirror/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _display_update_line_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../display/update_line.js */ "./node_modules/codemirror/src/display/update_line.js");
/* harmony import */ var _widgets_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets.js */ "./node_modules/codemirror/src/measurement/widgets.js");














// POSITION MEASUREMENT

function paddingTop(display) {return display.lineSpace.offsetTop}
function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
function paddingH(display) {
  if (display.cachedPaddingH) return display.cachedPaddingH
  let e = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["removeChildrenAndAdd"])(display.measure, Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["elt"])("pre", "x"))
  let style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
  let data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)}
  if (!isNaN(data.left) && !isNaN(data.right)) display.cachedPaddingH = data
  return data
}

function scrollGap(cm) { return _util_misc_js__WEBPACK_IMPORTED_MODULE_9__["scrollerGap"] - cm.display.nativeBarWidth }
function displayWidth(cm) {
  return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
}
function displayHeight(cm) {
  return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
}

// Ensure the lineView.wrapping.heights array is populated. This is
// an array of bottom offsets for the lines that make up a drawn
// line. When lineWrapping is on, there might be more than one
// height.
function ensureLineHeights(cm, lineView, rect) {
  let wrapping = cm.options.lineWrapping
  let curWidth = wrapping && displayWidth(cm)
  if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
    let heights = lineView.measure.heights = []
    if (wrapping) {
      lineView.measure.width = curWidth
      let rects = lineView.text.firstChild.getClientRects()
      for (let i = 0; i < rects.length - 1; i++) {
        let cur = rects[i], next = rects[i + 1]
        if (Math.abs(cur.bottom - next.bottom) > 2)
          heights.push((cur.bottom + next.top) / 2 - rect.top)
      }
    }
    heights.push(rect.bottom - rect.top)
  }
}

// Find a line map (mapping character offsets to text nodes) and a
// measurement cache for the given line number. (A line view might
// contain multiple lines when collapsed ranges are present.)
function mapFromLineView(lineView, line, lineN) {
  if (lineView.line == line)
    return {map: lineView.measure.map, cache: lineView.measure.cache}
  for (let i = 0; i < lineView.rest.length; i++)
    if (lineView.rest[i] == line)
      return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]}
  for (let i = 0; i < lineView.rest.length; i++)
    if (Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["lineNo"])(lineView.rest[i]) > lineN)
      return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i], before: true}
}

// Render a line into the hidden node display.externalMeasured. Used
// when measurement is needed for a line that's not in the viewport.
function updateExternalMeasurement(cm, line) {
  line = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_2__["visualLine"])(line)
  let lineN = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["lineNo"])(line)
  let view = cm.display.externalMeasured = new _line_line_data_js__WEBPACK_IMPORTED_MODULE_0__["LineView"](cm.doc, line, lineN)
  view.lineN = lineN
  let built = view.built = Object(_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__["buildLineContent"])(cm, view)
  view.text = built.pre
  Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["removeChildrenAndAdd"])(cm.display.lineMeasure, built.pre)
  return view
}

// Get a {top, bottom, left, right} box (in line-local coordinates)
// for a given character.
function measureChar(cm, line, ch, bias) {
  return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
}

// Find a line view that corresponds to the given line number.
function findViewForLine(cm, lineN) {
  if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
    return cm.display.view[findViewIndex(cm, lineN)]
  let ext = cm.display.externalMeasured
  if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
    return ext
}

// Measurement can be split in two steps, the set-up work that
// applies to the whole line, and the measurement of the actual
// character. Functions like coordsChar, that need to do a lot of
// measurements in a row, can thus ensure that the set-up work is
// only done once.
function prepareMeasureForLine(cm, line) {
  let lineN = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["lineNo"])(line)
  let view = findViewForLine(cm, lineN)
  if (view && !view.text) {
    view = null
  } else if (view && view.changes) {
    Object(_display_update_line_js__WEBPACK_IMPORTED_MODULE_10__["updateLineForChanges"])(cm, view, lineN, getDimensions(cm))
    cm.curOp.forceUpdate = true
  }
  if (!view)
    view = updateExternalMeasurement(cm, line)

  let info = mapFromLineView(view, line, lineN)
  return {
    line: line, view: view, rect: null,
    map: info.map, cache: info.cache, before: info.before,
    hasHeights: false
  }
}

// Given a prepared measurement object, measures the position of an
// actual character (or fetches it from the cache).
function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
  if (prepared.before) ch = -1
  let key = ch + (bias || ""), found
  if (prepared.cache.hasOwnProperty(key)) {
    found = prepared.cache[key]
  } else {
    if (!prepared.rect)
      prepared.rect = prepared.view.text.getBoundingClientRect()
    if (!prepared.hasHeights) {
      ensureLineHeights(cm, prepared.view, prepared.rect)
      prepared.hasHeights = true
    }
    found = measureCharInner(cm, prepared, ch, bias)
    if (!found.bogus) prepared.cache[key] = found
  }
  return {left: found.left, right: found.right,
          top: varHeight ? found.rtop : found.top,
          bottom: varHeight ? found.rbottom : found.bottom}
}

let nullRect = {left: 0, right: 0, top: 0, bottom: 0}

function nodeAndOffsetInLineMap(map, ch, bias) {
  let node, start, end, collapse, mStart, mEnd
  // First, search the line map for the text node corresponding to,
  // or closest to, the target character.
  for (let i = 0; i < map.length; i += 3) {
    mStart = map[i]
    mEnd = map[i + 1]
    if (ch < mStart) {
      start = 0; end = 1
      collapse = "left"
    } else if (ch < mEnd) {
      start = ch - mStart
      end = start + 1
    } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
      end = mEnd - mStart
      start = end - 1
      if (ch >= mEnd) collapse = "right"
    }
    if (start != null) {
      node = map[i + 2]
      if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
        collapse = bias
      if (bias == "left" && start == 0)
        while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
          node = map[(i -= 3) + 2]
          collapse = "left"
        }
      if (bias == "right" && start == mEnd - mStart)
        while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
          node = map[(i += 3) + 2]
          collapse = "right"
        }
      break
    }
  }
  return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
}

function getUsefulRect(rects, bias) {
  let rect = nullRect
  if (bias == "left") for (let i = 0; i < rects.length; i++) {
    if ((rect = rects[i]).left != rect.right) break
  } else for (let i = rects.length - 1; i >= 0; i--) {
    if ((rect = rects[i]).left != rect.right) break
  }
  return rect
}

function measureCharInner(cm, prepared, ch, bias) {
  let place = nodeAndOffsetInLineMap(prepared.map, ch, bias)
  let node = place.node, start = place.start, end = place.end, collapse = place.collapse

  let rect
  if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
    for (let i = 0; i < 4; i++) { // Retry a maximum of 4 times when nonsense rectangles are returned
      while (start && Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_9__["isExtendingChar"])(prepared.line.text.charAt(place.coverStart + start))) --start
      while (place.coverStart + end < place.coverEnd && Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_9__["isExtendingChar"])(prepared.line.text.charAt(place.coverStart + end))) ++end
      if (_util_browser_js__WEBPACK_IMPORTED_MODULE_5__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_5__["ie_version"] < 9 && start == 0 && end == place.coverEnd - place.coverStart)
        rect = node.parentNode.getBoundingClientRect()
      else
        rect = getUsefulRect(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["range"])(node, start, end).getClientRects(), bias)
      if (rect.left || rect.right || start == 0) break
      end = start
      start = start - 1
      collapse = "right"
    }
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_5__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_5__["ie_version"] < 11) rect = maybeUpdateRectForZooming(cm.display.measure, rect)
  } else { // If it is a widget, simply get the box for the whole widget.
    if (start > 0) collapse = bias = "right"
    let rects
    if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
      rect = rects[bias == "right" ? rects.length - 1 : 0]
    else
      rect = node.getBoundingClientRect()
  }
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_5__["ie"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_5__["ie_version"] < 9 && !start && (!rect || !rect.left && !rect.right)) {
    let rSpan = node.parentNode.getClientRects()[0]
    if (rSpan)
      rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom}
    else
      rect = nullRect
  }

  let rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top
  let mid = (rtop + rbot) / 2
  let heights = prepared.view.measure.heights
  let i = 0
  for (; i < heights.length - 1; i++)
    if (mid < heights[i]) break
  let top = i ? heights[i - 1] : 0, bot = heights[i]
  let result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                top: top, bottom: bot}
  if (!rect.left && !rect.right) result.bogus = true
  if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot }

  return result
}

// Work around problem with bounding client rects on ranges being
// returned incorrectly when zoomed on IE10 and below.
function maybeUpdateRectForZooming(measure, rect) {
  if (!window.screen || screen.logicalXDPI == null ||
      screen.logicalXDPI == screen.deviceXDPI || !Object(_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_8__["hasBadZoomedRects"])(measure))
    return rect
  let scaleX = screen.logicalXDPI / screen.deviceXDPI
  let scaleY = screen.logicalYDPI / screen.deviceYDPI
  return {left: rect.left * scaleX, right: rect.right * scaleX,
          top: rect.top * scaleY, bottom: rect.bottom * scaleY}
}

function clearLineMeasurementCacheFor(lineView) {
  if (lineView.measure) {
    lineView.measure.cache = {}
    lineView.measure.heights = null
    if (lineView.rest) for (let i = 0; i < lineView.rest.length; i++)
      lineView.measure.caches[i] = {}
  }
}

function clearLineMeasurementCache(cm) {
  cm.display.externalMeasure = null
  Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["removeChildren"])(cm.display.lineMeasure)
  for (let i = 0; i < cm.display.view.length; i++)
    clearLineMeasurementCacheFor(cm.display.view[i])
}

function clearCaches(cm) {
  clearLineMeasurementCache(cm)
  cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null
  if (!cm.options.lineWrapping) cm.display.maxLineChanged = true
  cm.display.lineNumChars = null
}

function pageScrollX() {
  // Work around https://bugs.chromium.org/p/chromium/issues/detail?id=489206
  // which causes page_Offset and bounding client rects to use
  // different reference viewports and invalidate our calculations.
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_5__["chrome"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_5__["android"]) return -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft))
  return window.pageXOffset || (document.documentElement || document.body).scrollLeft
}
function pageScrollY() {
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_5__["chrome"] && _util_browser_js__WEBPACK_IMPORTED_MODULE_5__["android"]) return -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop))
  return window.pageYOffset || (document.documentElement || document.body).scrollTop
}

function widgetTopHeight(lineObj) {
  let height = 0
  if (lineObj.widgets) for (let i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above)
    height += Object(_widgets_js__WEBPACK_IMPORTED_MODULE_11__["widgetHeight"])(lineObj.widgets[i])
  return height
}

// Converts a {top, bottom, left, right} box from line-local
// coordinates into another coordinate system. Context may be one of
// "line", "div" (display.lineDiv), "local"./null (editor), "window",
// or "page".
function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
  if (!includeWidgets) {
    let height = widgetTopHeight(lineObj)
    rect.top += height; rect.bottom += height
  }
  if (context == "line") return rect
  if (!context) context = "local"
  let yOff = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_2__["heightAtLine"])(lineObj)
  if (context == "local") yOff += paddingTop(cm.display)
  else yOff -= cm.display.viewOffset
  if (context == "page" || context == "window") {
    let lOff = cm.display.lineSpace.getBoundingClientRect()
    yOff += lOff.top + (context == "window" ? 0 : pageScrollY())
    let xOff = lOff.left + (context == "window" ? 0 : pageScrollX())
    rect.left += xOff; rect.right += xOff
  }
  rect.top += yOff; rect.bottom += yOff
  return rect
}

// Coverts a box from "div" coords to another coordinate system.
// Context may be "window", "page", "div", or "local"./null.
function fromCoordSystem(cm, coords, context) {
  if (context == "div") return coords
  let left = coords.left, top = coords.top
  // First move into "page" coordinate system
  if (context == "page") {
    left -= pageScrollX()
    top -= pageScrollY()
  } else if (context == "local" || !context) {
    let localBox = cm.display.sizer.getBoundingClientRect()
    left += localBox.left
    top += localBox.top
  }

  let lineSpaceBox = cm.display.lineSpace.getBoundingClientRect()
  return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
}

function charCoords(cm, pos, context, lineObj, bias) {
  if (!lineObj) lineObj = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(cm.doc, pos.line)
  return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
}

// Returns a box for a given cursor position, which may have an
// 'other' property containing the position of the secondary cursor
// on a bidi boundary.
// A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
// and after `char - 1` in writing order of `char - 1`
// A cursor Pos(line, char, "after") is on the same visual line as `char`
// and before `char` in writing order of `char`
// Examples (upper-case letters are RTL, lower-case are LTR):
//     Pos(0, 1, ...)
//     before   after
// ab     a|b     a|b
// aB     a|B     aB|
// Ab     |Ab     A|b
// AB     B|A     B|A
// Every position after the last character on a line is considered to stick
// to the last character on the line.
function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
  lineObj = lineObj || Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(cm.doc, pos.line)
  if (!preparedMeasure) preparedMeasure = prepareMeasureForLine(cm, lineObj)
  function get(ch, right) {
    let m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight)
    if (right) m.left = m.right; else m.right = m.left
    return intoCoordSystem(cm, lineObj, m, context)
  }
  let order = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_4__["getOrder"])(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky
  if (ch >= lineObj.text.length) {
    ch = lineObj.text.length
    sticky = "before"
  } else if (ch <= 0) {
    ch = 0
    sticky = "after"
  }
  if (!order) return get(sticky == "before" ? ch - 1 : ch, sticky == "before")

  function getBidi(ch, partPos, invert) {
    let part = order[partPos], right = part.level == 1
    return get(invert ? ch - 1 : ch, right != invert)
  }
  let partPos = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_4__["getBidiPartAt"])(order, ch, sticky)
  let other = _util_bidi_js__WEBPACK_IMPORTED_MODULE_4__["bidiOther"]
  let val = getBidi(ch, partPos, sticky == "before")
  if (other != null) val.other = getBidi(ch, other, sticky != "before")
  return val
}

// Used to cheaply estimate the coordinates for a position. Used for
// intermediate scroll updates.
function estimateCoords(cm, pos) {
  let left = 0
  pos = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_1__["clipPos"])(cm.doc, pos)
  if (!cm.options.lineWrapping) left = charWidth(cm.display) * pos.ch
  let lineObj = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(cm.doc, pos.line)
  let top = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_2__["heightAtLine"])(lineObj) + paddingTop(cm.display)
  return {left: left, right: left, top: top, bottom: top + lineObj.height}
}

// Positions returned by coordsChar contain some extra information.
// xRel is the relative x position of the input coordinates compared
// to the found position (so xRel > 0 means the coordinates are to
// the right of the character position, for example). When outside
// is true, that means the coordinates lie outside the line's
// vertical range.
function PosWithInfo(line, ch, sticky, outside, xRel) {
  let pos = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_1__["Pos"])(line, ch, sticky)
  pos.xRel = xRel
  if (outside) pos.outside = true
  return pos
}

// Compute the character position closest to the given coordinates.
// Input must be lineSpace-local ("div" coordinate system).
function coordsChar(cm, x, y) {
  let doc = cm.doc
  y += cm.display.viewOffset
  if (y < 0) return PosWithInfo(doc.first, 0, null, true, -1)
  let lineN = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["lineAtHeight"])(doc, y), last = doc.first + doc.size - 1
  if (lineN > last)
    return PosWithInfo(doc.first + doc.size - 1, Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, last).text.length, null, true, 1)
  if (x < 0) x = 0

  let lineObj = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, lineN)
  for (;;) {
    let found = coordsCharInner(cm, lineObj, lineN, x, y)
    let collapsed = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_2__["collapsedSpanAround"])(lineObj, found.ch + (found.xRel > 0 ? 1 : 0))
    if (!collapsed) return found
    let rangeEnd = collapsed.find(1)
    if (rangeEnd.line == lineN) return rangeEnd
    lineObj = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, lineN = rangeEnd.line)
  }
}

function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
  y -= widgetTopHeight(lineObj)
  let end = lineObj.text.length
  let begin = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_9__["findFirst"])(ch => measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y, end, 0)
  end = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_9__["findFirst"])(ch => measureCharPrepared(cm, preparedMeasure, ch).top > y, begin, end)
  return {begin, end}
}

function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
  if (!preparedMeasure) preparedMeasure = prepareMeasureForLine(cm, lineObj)
  let targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top
  return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop)
}

// Returns true if the given side of a box is after the given
// coordinates, in top-to-bottom, left-to-right order.
function boxIsAfter(box, x, y, left) {
  return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x
}

function coordsCharInner(cm, lineObj, lineNo, x, y) {
  // Move y into line-local coordinate space
  y -= Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_2__["heightAtLine"])(lineObj)
  let preparedMeasure = prepareMeasureForLine(cm, lineObj)
  // When directly calling `measureCharPrepared`, we have to adjust
  // for the widgets at this line.
  let widgetHeight = widgetTopHeight(lineObj)
  let begin = 0, end = lineObj.text.length, ltr = true

  let order = Object(_util_bidi_js__WEBPACK_IMPORTED_MODULE_4__["getOrder"])(lineObj, cm.doc.direction)
  // If the line isn't plain left-to-right text, first figure out
  // which bidi section the coordinates fall into.
  if (order) {
    let part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)
                 (cm, lineObj, lineNo, preparedMeasure, order, x, y)
    ltr = part.level != 1
    // The awkward -1 offsets are needed because findFirst (called
    // on these below) will treat its first bound as inclusive,
    // second as exclusive, but we want to actually address the
    // characters in the part's range
    begin = ltr ? part.from : part.to - 1
    end = ltr ? part.to : part.from - 1
  }

  // A binary search to find the first character whose bounding box
  // starts after the coordinates. If we run across any whose box wrap
  // the coordinates, store that.
  let chAround = null, boxAround = null
  let ch = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_9__["findFirst"])(ch => {
    let box = measureCharPrepared(cm, preparedMeasure, ch)
    box.top += widgetHeight; box.bottom += widgetHeight
    if (!boxIsAfter(box, x, y, false)) return false
    if (box.top <= y && box.left <= x) {
      chAround = ch
      boxAround = box
    }
    return true
  }, begin, end)

  let baseX, sticky, outside = false
  // If a box around the coordinates was found, use that
  if (boxAround) {
    // Distinguish coordinates nearer to the left or right side of the box
    let atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr
    ch = chAround + (atStart ? 0 : 1)
    sticky = atStart ? "after" : "before"
    baseX = atLeft ? boxAround.left : boxAround.right
  } else {
    // (Adjust for extended bound, if necessary.)
    if (!ltr && (ch == end || ch == begin)) ch++
    // To determine which side to associate with, get the box to the
    // left of the character and compare it's vertical position to the
    // coordinates
    sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" :
      (measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight <= y) == ltr ?
      "after" : "before"
    // Now get accurate coordinates for this place, in order to get a
    // base X position
    let coords = cursorCoords(cm, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_1__["Pos"])(lineNo, ch, sticky), "line", lineObj, preparedMeasure)
    baseX = coords.left
    outside = y < coords.top || y >= coords.bottom
  }

  ch = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_9__["skipExtendingChars"])(lineObj.text, ch, 1)
  return PosWithInfo(lineNo, ch, sticky, outside, x - baseX)
}

function coordsBidiPart(cm, lineObj, lineNo, preparedMeasure, order, x, y) {
  // Bidi parts are sorted left-to-right, and in a non-line-wrapping
  // situation, we can take this ordering to correspond to the visual
  // ordering. This finds the first part whose end is after the given
  // coordinates.
  let index = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_9__["findFirst"])(i => {
    let part = order[i], ltr = part.level != 1
    return boxIsAfter(cursorCoords(cm, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_1__["Pos"])(lineNo, ltr ? part.to : part.from, ltr ? "before" : "after"),
                                   "line", lineObj, preparedMeasure), x, y, true)
  }, 0, order.length - 1)
  let part = order[index]
  // If this isn't the first part, the part's start is also after
  // the coordinates, and the coordinates aren't on the same line as
  // that start, move one part back.
  if (index > 0) {
    let ltr = part.level != 1
    let start = cursorCoords(cm, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_1__["Pos"])(lineNo, ltr ? part.from : part.to, ltr ? "after" : "before"),
                             "line", lineObj, preparedMeasure)
    if (boxIsAfter(start, x, y, true) && start.top > y)
      part = order[index - 1]
  }
  return part
}

function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
  // In a wrapped line, rtl text on wrapping boundaries can do things
  // that don't correspond to the ordering in our `order` array at
  // all, so a binary search doesn't work, and we want to return a
  // part that only spans one line so that the binary search in
  // coordsCharInner is safe. As such, we first find the extent of the
  // wrapped line, and then do a flat search in which we discard any
  // spans that aren't on the line.
  let {begin, end} = wrappedLineExtent(cm, lineObj, preparedMeasure, y)
  if (/\s/.test(lineObj.text.charAt(end - 1))) end--
  let part = null, closestDist = null
  for (let i = 0; i < order.length; i++) {
    let p = order[i]
    if (p.from >= end || p.to <= begin) continue
    let ltr = p.level != 1
    let endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right
    // Weigh against spans ending before this, so that they are only
    // picked if nothing ends after
    let dist = endX < x ? x - endX + 1e9 : endX - x
    if (!part || closestDist > dist) {
      part = p
      closestDist = dist
    }
  }
  if (!part) part = order[order.length - 1]
  // Clip the part to the wrapped line.
  if (part.from < begin) part = {from: begin, to: part.to, level: part.level}
  if (part.to > end) part = {from: part.from, to: end, level: part.level}
  return part
}

let measureText
// Compute the default text height.
function textHeight(display) {
  if (display.cachedTextHeight != null) return display.cachedTextHeight
  if (measureText == null) {
    measureText = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["elt"])("pre")
    // Measure a bunch of lines, for browsers that compute
    // fractional heights.
    for (let i = 0; i < 49; ++i) {
      measureText.appendChild(document.createTextNode("x"))
      measureText.appendChild(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["elt"])("br"))
    }
    measureText.appendChild(document.createTextNode("x"))
  }
  Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["removeChildrenAndAdd"])(display.measure, measureText)
  let height = measureText.offsetHeight / 50
  if (height > 3) display.cachedTextHeight = height
  Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["removeChildren"])(display.measure)
  return height || 1
}

// Compute the default character width.
function charWidth(display) {
  if (display.cachedCharWidth != null) return display.cachedCharWidth
  let anchor = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["elt"])("span", "xxxxxxxxxx")
  let pre = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["elt"])("pre", [anchor])
  Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["removeChildrenAndAdd"])(display.measure, pre)
  let rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10
  if (width > 2) display.cachedCharWidth = width
  return width || 10
}

// Do a bulk-read of the DOM positions and sizes needed to draw the
// view, so that we don't interleave reading and writing to the DOM.
function getDimensions(cm) {
  let d = cm.display, left = {}, width = {}
  let gutterLeft = d.gutters.clientLeft
  for (let n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
    left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft
    width[cm.options.gutters[i]] = n.clientWidth
  }
  return {fixedPos: compensateForHScroll(d),
          gutterTotalWidth: d.gutters.offsetWidth,
          gutterLeft: left,
          gutterWidth: width,
          wrapperWidth: d.wrapper.clientWidth}
}

// Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
// but using getBoundingClientRect to get a sub-pixel-accurate
// result.
function compensateForHScroll(display) {
  return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
}

// Returns a function that estimates the height of a line, to use as
// first approximation until the line becomes visible (and is thus
// properly measurable).
function estimateHeight(cm) {
  let th = textHeight(cm.display), wrapping = cm.options.lineWrapping
  let perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3)
  return line => {
    if (Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_2__["lineIsHidden"])(cm.doc, line)) return 0

    let widgetsHeight = 0
    if (line.widgets) for (let i = 0; i < line.widgets.length; i++) {
      if (line.widgets[i].height) widgetsHeight += line.widgets[i].height
    }

    if (wrapping)
      return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th
    else
      return widgetsHeight + th
  }
}

function estimateLineHeights(cm) {
  let doc = cm.doc, est = estimateHeight(cm)
  doc.iter(line => {
    let estHeight = est(line)
    if (estHeight != line.height) Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["updateLineHeight"])(line, estHeight)
  })
}

// Given a mouse event, find the corresponding position. If liberal
// is false, it checks whether a gutter or scrollbar was clicked,
// and returns null if it was. forRect is used by rectangular
// selections, and tries to estimate a character position even for
// coordinates beyond the right of the text.
function posFromMouse(cm, e, liberal, forRect) {
  let display = cm.display
  if (!liberal && Object(_util_event_js__WEBPACK_IMPORTED_MODULE_7__["e_target"])(e).getAttribute("cm-not-content") == "true") return null

  let x, y, space = display.lineSpace.getBoundingClientRect()
  // Fails unpredictably on IE[67] when mouse is dragged around quickly.
  try { x = e.clientX - space.left; y = e.clientY - space.top }
  catch (e) { return null }
  let coords = coordsChar(cm, x, y), line
  if (forRect && coords.xRel == 1 && (line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(cm.doc, coords.line).text).length == coords.ch) {
    let colDiff = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_9__["countColumn"])(line, line.length, cm.options.tabSize) - line.length
    coords = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_1__["Pos"])(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff))
  }
  return coords
}

// Find the view element corresponding to a given line. Return null
// when the line isn't visible.
function findViewIndex(cm, n) {
  if (n >= cm.display.viewTo) return null
  n -= cm.display.viewFrom
  if (n < 0) return null
  let view = cm.display.view
  for (let i = 0; i < view.length; i++) {
    n -= view[i].size
    if (n < 0) return i
  }
}


/***/ }),

/***/ "./node_modules/codemirror/src/measurement/widgets.js":
/*!************************************************************!*\
  !*** ./node_modules/codemirror/src/measurement/widgets.js ***!
  \************************************************************/
/*! exports provided: widgetHeight, eventInWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgetHeight", function() { return widgetHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventInWidget", function() { return eventInWidget; });
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");



function widgetHeight(widget) {
  if (widget.height != null) return widget.height
  let cm = widget.doc.cm
  if (!cm) return 0
  if (!Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_0__["contains"])(document.body, widget.node)) {
    let parentStyle = "position: relative;"
    if (widget.coverGutter)
      parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;"
    if (widget.noHScroll)
      parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;"
    Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeChildrenAndAdd"])(cm.display.measure, Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])("div", [widget.node], null, parentStyle))
  }
  return widget.height = widget.node.parentNode.offsetHeight
}

// Return true when the given mouse event happened in a widget
function eventInWidget(display, e) {
  for (let n = Object(_util_event_js__WEBPACK_IMPORTED_MODULE_1__["e_target"])(e); n != display.wrapper; n = n.parentNode) {
    if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
        (n.parentNode == display.sizer && n != display.mover))
      return true
  }
}


/***/ }),

/***/ "./node_modules/codemirror/src/model/Doc.js":
/*!**************************************************!*\
  !*** ./node_modules/codemirror/src/model/Doc.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../edit/CodeMirror.js */ "./node_modules/codemirror/src/edit/CodeMirror.js");
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/line_data.js */ "./node_modules/codemirror/src/line/line_data.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/feature_detection.js */ "./node_modules/codemirror/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../display/scrolling.js */ "./node_modules/codemirror/src/display/scrolling.js");
/* harmony import */ var _changes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./changes.js */ "./node_modules/codemirror/src/model/changes.js");
/* harmony import */ var _change_measurement_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./change_measurement.js */ "./node_modules/codemirror/src/model/change_measurement.js");
/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chunk.js */ "./node_modules/codemirror/src/model/chunk.js");
/* harmony import */ var _document_data_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./document_data.js */ "./node_modules/codemirror/src/model/document_data.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./history.js */ "./node_modules/codemirror/src/model/history.js");
/* harmony import */ var _line_widget_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./line_widget.js */ "./node_modules/codemirror/src/model/line_widget.js");
/* harmony import */ var _mark_text_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mark_text.js */ "./node_modules/codemirror/src/model/mark_text.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selection.js */ "./node_modules/codemirror/src/model/selection.js");
/* harmony import */ var _selection_updates_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./selection_updates.js */ "./node_modules/codemirror/src/model/selection_updates.js");





















let nextDocId = 0
let Doc = function(text, mode, firstLine, lineSep, direction) {
  if (!(this instanceof Doc)) return new Doc(text, mode, firstLine, lineSep, direction)
  if (firstLine == null) firstLine = 0

  _chunk_js__WEBPACK_IMPORTED_MODULE_12__["BranchChunk"].call(this, [new _chunk_js__WEBPACK_IMPORTED_MODULE_12__["LeafChunk"]([new _line_line_data_js__WEBPACK_IMPORTED_MODULE_2__["Line"]("", null)])])
  this.first = firstLine
  this.scrollTop = this.scrollLeft = 0
  this.cantEdit = false
  this.cleanGeneration = 1
  this.modeFrontier = this.highlightFrontier = firstLine
  let start = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(firstLine, 0)
  this.sel = Object(_selection_js__WEBPACK_IMPORTED_MODULE_17__["simpleSelection"])(start)
  this.history = new _history_js__WEBPACK_IMPORTED_MODULE_14__["History"](null)
  this.id = ++nextDocId
  this.modeOption = mode
  this.lineSep = lineSep
  this.direction = (direction == "rtl") ? "rtl" : "ltr"
  this.extend = false

  if (typeof text == "string") text = this.splitLines(text)
  Object(_document_data_js__WEBPACK_IMPORTED_MODULE_13__["updateDoc"])(this, {from: start, to: start, text: text})
  Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__["setSelection"])(this, Object(_selection_js__WEBPACK_IMPORTED_MODULE_17__["simpleSelection"])(start), _util_misc_js__WEBPACK_IMPORTED_MODULE_8__["sel_dontScroll"])
}

Doc.prototype = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_8__["createObj"])(_chunk_js__WEBPACK_IMPORTED_MODULE_12__["BranchChunk"].prototype, {
  constructor: Doc,
  // Iterate over the document. Supports two forms -- with only one
  // argument, it calls that for each line in the document. With
  // three, it iterates over the range given by the first two (with
  // the second being non-inclusive).
  iter: function(from, to, op) {
    if (op) this.iterN(from - this.first, to - from, op)
    else this.iterN(this.first, this.first + this.size, from)
  },

  // Non-public interface for adding and removing lines.
  insert: function(at, lines) {
    let height = 0
    for (let i = 0; i < lines.length; ++i) height += lines[i].height
    this.insertInner(at - this.first, lines, height)
  },
  remove: function(at, n) { this.removeInner(at - this.first, n) },

  // From here, the methods are part of the public interface. Most
  // are also available from CodeMirror (editor) instances.

  getValue: function(lineSep) {
    let lines = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLines"])(this, this.first, this.first + this.size)
    if (lineSep === false) return lines
    return lines.join(lineSep || this.lineSeparator())
  },
  setValue: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(code) {
    let top = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(this.first, 0), last = this.first + this.size - 1
    Object(_changes_js__WEBPACK_IMPORTED_MODULE_10__["makeChange"])(this, {from: top, to: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(last, Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLine"])(this, last).text.length),
                      text: this.splitLines(code), origin: "setValue", full: true}, true)
    if (this.cm) Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_9__["scrollToCoords"])(this.cm, 0, 0)
    Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__["setSelection"])(this, Object(_selection_js__WEBPACK_IMPORTED_MODULE_17__["simpleSelection"])(top), _util_misc_js__WEBPACK_IMPORTED_MODULE_8__["sel_dontScroll"])
  }),
  replaceRange: function(code, from, to, origin) {
    from = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, from)
    to = to ? Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, to) : from
    Object(_changes_js__WEBPACK_IMPORTED_MODULE_10__["replaceRange"])(this, code, from, to, origin)
  },
  getRange: function(from, to, lineSep) {
    let lines = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getBetween"])(this, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, from), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, to))
    if (lineSep === false) return lines
    return lines.join(lineSep || this.lineSeparator())
  },

  getLine: function(line) {let l = this.getLineHandle(line); return l && l.text},

  getLineHandle: function(line) {if (Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["isLine"])(this, line)) return Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLine"])(this, line)},
  getLineNumber: function(line) {return Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["lineNo"])(line)},

  getLineHandleVisualStart: function(line) {
    if (typeof line == "number") line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLine"])(this, line)
    return Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_4__["visualLine"])(line)
  },

  lineCount: function() {return this.size},
  firstLine: function() {return this.first},
  lastLine: function() {return this.first + this.size - 1},

  clipPos: function(pos) {return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, pos)},

  getCursor: function(start) {
    let range = this.sel.primary(), pos
    if (start == null || start == "head") pos = range.head
    else if (start == "anchor") pos = range.anchor
    else if (start == "end" || start == "to" || start === false) pos = range.to()
    else pos = range.from()
    return pos
  },
  listSelections: function() { return this.sel.ranges },
  somethingSelected: function() {return this.sel.somethingSelected()},

  setCursor: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(line, ch, options) {
    Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__["setSimpleSelection"])(this, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, typeof line == "number" ? Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(line, ch || 0) : line), null, options)
  }),
  setSelection: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(anchor, head, options) {
    Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__["setSimpleSelection"])(this, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, anchor), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, head || anchor), options)
  }),
  extendSelection: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(head, other, options) {
    Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__["extendSelection"])(this, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, head), other && Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, other), options)
  }),
  extendSelections: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(heads, options) {
    Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__["extendSelections"])(this, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPosArray"])(this, heads), options)
  }),
  extendSelectionsBy: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(f, options) {
    let heads = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_8__["map"])(this.sel.ranges, f)
    Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__["extendSelections"])(this, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPosArray"])(this, heads), options)
  }),
  setSelections: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(ranges, primary, options) {
    if (!ranges.length) return
    let out = []
    for (let i = 0; i < ranges.length; i++)
      out[i] = new _selection_js__WEBPACK_IMPORTED_MODULE_17__["Range"](Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, ranges[i].anchor),
                         Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, ranges[i].head))
    if (primary == null) primary = Math.min(ranges.length - 1, this.sel.primIndex)
    Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__["setSelection"])(this, Object(_selection_js__WEBPACK_IMPORTED_MODULE_17__["normalizeSelection"])(this.cm, out, primary), options)
  }),
  addSelection: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(anchor, head, options) {
    let ranges = this.sel.ranges.slice(0)
    ranges.push(new _selection_js__WEBPACK_IMPORTED_MODULE_17__["Range"](Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, anchor), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, head || anchor)))
    Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__["setSelection"])(this, Object(_selection_js__WEBPACK_IMPORTED_MODULE_17__["normalizeSelection"])(this.cm, ranges, ranges.length - 1), options)
  }),

  getSelection: function(lineSep) {
    let ranges = this.sel.ranges, lines
    for (let i = 0; i < ranges.length; i++) {
      let sel = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getBetween"])(this, ranges[i].from(), ranges[i].to())
      lines = lines ? lines.concat(sel) : sel
    }
    if (lineSep === false) return lines
    else return lines.join(lineSep || this.lineSeparator())
  },
  getSelections: function(lineSep) {
    let parts = [], ranges = this.sel.ranges
    for (let i = 0; i < ranges.length; i++) {
      let sel = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getBetween"])(this, ranges[i].from(), ranges[i].to())
      if (lineSep !== false) sel = sel.join(lineSep || this.lineSeparator())
      parts[i] = sel
    }
    return parts
  },
  replaceSelection: function(code, collapse, origin) {
    let dup = []
    for (let i = 0; i < this.sel.ranges.length; i++)
      dup[i] = code
    this.replaceSelections(dup, collapse, origin || "+input")
  },
  replaceSelections: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(code, collapse, origin) {
    let changes = [], sel = this.sel
    for (let i = 0; i < sel.ranges.length; i++) {
      let range = sel.ranges[i]
      changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin}
    }
    let newSel = collapse && collapse != "end" && Object(_change_measurement_js__WEBPACK_IMPORTED_MODULE_11__["computeReplacedSel"])(this, changes, collapse)
    for (let i = changes.length - 1; i >= 0; i--)
      Object(_changes_js__WEBPACK_IMPORTED_MODULE_10__["makeChange"])(this, changes[i])
    if (newSel) Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__["setSelectionReplaceHistory"])(this, newSel)
    else if (this.cm) Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_9__["ensureCursorVisible"])(this.cm)
  }),
  undo: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function() {Object(_changes_js__WEBPACK_IMPORTED_MODULE_10__["makeChangeFromHistory"])(this, "undo")}),
  redo: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function() {Object(_changes_js__WEBPACK_IMPORTED_MODULE_10__["makeChangeFromHistory"])(this, "redo")}),
  undoSelection: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function() {Object(_changes_js__WEBPACK_IMPORTED_MODULE_10__["makeChangeFromHistory"])(this, "undo", true)}),
  redoSelection: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function() {Object(_changes_js__WEBPACK_IMPORTED_MODULE_10__["makeChangeFromHistory"])(this, "redo", true)}),

  setExtending: function(val) {this.extend = val},
  getExtending: function() {return this.extend},

  historySize: function() {
    let hist = this.history, done = 0, undone = 0
    for (let i = 0; i < hist.done.length; i++) if (!hist.done[i].ranges) ++done
    for (let i = 0; i < hist.undone.length; i++) if (!hist.undone[i].ranges) ++undone
    return {undo: done, redo: undone}
  },
  clearHistory: function() {this.history = new _history_js__WEBPACK_IMPORTED_MODULE_14__["History"](this.history.maxGeneration)},

  markClean: function() {
    this.cleanGeneration = this.changeGeneration(true)
  },
  changeGeneration: function(forceSplit) {
    if (forceSplit)
      this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null
    return this.history.generation
  },
  isClean: function (gen) {
    return this.history.generation == (gen || this.cleanGeneration)
  },

  getHistory: function() {
    return {done: Object(_history_js__WEBPACK_IMPORTED_MODULE_14__["copyHistoryArray"])(this.history.done),
            undone: Object(_history_js__WEBPACK_IMPORTED_MODULE_14__["copyHistoryArray"])(this.history.undone)}
  },
  setHistory: function(histData) {
    let hist = this.history = new _history_js__WEBPACK_IMPORTED_MODULE_14__["History"](this.history.maxGeneration)
    hist.done = Object(_history_js__WEBPACK_IMPORTED_MODULE_14__["copyHistoryArray"])(histData.done.slice(0), null, true)
    hist.undone = Object(_history_js__WEBPACK_IMPORTED_MODULE_14__["copyHistoryArray"])(histData.undone.slice(0), null, true)
  },

  setGutterMarker: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(line, gutterID, value) {
    return Object(_changes_js__WEBPACK_IMPORTED_MODULE_10__["changeLine"])(this, line, "gutter", line => {
      let markers = line.gutterMarkers || (line.gutterMarkers = {})
      markers[gutterID] = value
      if (!value && Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(markers)) line.gutterMarkers = null
      return true
    })
  }),

  clearGutter: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(gutterID) {
    this.iter(line => {
      if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
        Object(_changes_js__WEBPACK_IMPORTED_MODULE_10__["changeLine"])(this, line, "gutter", () => {
          line.gutterMarkers[gutterID] = null
          if (Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(line.gutterMarkers)) line.gutterMarkers = null
          return true
        })
      }
    })
  }),

  lineInfo: function(line) {
    let n
    if (typeof line == "number") {
      if (!Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["isLine"])(this, line)) return null
      n = line
      line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLine"])(this, line)
      if (!line) return null
    } else {
      n = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["lineNo"])(line)
      if (n == null) return null
    }
    return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
            textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
            widgets: line.widgets}
  },

  addLineClass: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(handle, where, cls) {
    return Object(_changes_js__WEBPACK_IMPORTED_MODULE_10__["changeLine"])(this, handle, where == "gutter" ? "gutter" : "class", line => {
      let prop = where == "text" ? "textClass"
               : where == "background" ? "bgClass"
               : where == "gutter" ? "gutterClass" : "wrapClass"
      if (!line[prop]) line[prop] = cls
      else if (Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["classTest"])(cls).test(line[prop])) return false
      else line[prop] += " " + cls
      return true
    })
  }),
  removeLineClass: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(handle, where, cls) {
    return Object(_changes_js__WEBPACK_IMPORTED_MODULE_10__["changeLine"])(this, handle, where == "gutter" ? "gutter" : "class", line => {
      let prop = where == "text" ? "textClass"
               : where == "background" ? "bgClass"
               : where == "gutter" ? "gutterClass" : "wrapClass"
      let cur = line[prop]
      if (!cur) return false
      else if (cls == null) line[prop] = null
      else {
        let found = cur.match(Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_6__["classTest"])(cls))
        if (!found) return false
        let end = found.index + found[0].length
        line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null
      }
      return true
    })
  }),

  addLineWidget: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function(handle, node, options) {
    return Object(_line_widget_js__WEBPACK_IMPORTED_MODULE_15__["addLineWidget"])(this, handle, node, options)
  }),
  removeLineWidget: function(widget) { widget.clear() },

  markText: function(from, to, options) {
    return Object(_mark_text_js__WEBPACK_IMPORTED_MODULE_16__["markText"])(this, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, from), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, to), options, options && options.type || "range")
  },
  setBookmark: function(pos, options) {
    let realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                    insertLeft: options && options.insertLeft,
                    clearWhenEmpty: false, shared: options && options.shared,
                    handleMouseEvents: options && options.handleMouseEvents}
    pos = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, pos)
    return Object(_mark_text_js__WEBPACK_IMPORTED_MODULE_16__["markText"])(this, pos, pos, realOpts, "bookmark")
  },
  findMarksAt: function(pos) {
    pos = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, pos)
    let markers = [], spans = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLine"])(this, pos.line).markedSpans
    if (spans) for (let i = 0; i < spans.length; ++i) {
      let span = spans[i]
      if ((span.from == null || span.from <= pos.ch) &&
          (span.to == null || span.to >= pos.ch))
        markers.push(span.marker.parent || span.marker)
    }
    return markers
  },
  findMarks: function(from, to, filter) {
    from = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, from); to = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, to)
    let found = [], lineNo = from.line
    this.iter(from.line, to.line + 1, line => {
      let spans = line.markedSpans
      if (spans) for (let i = 0; i < spans.length; i++) {
        let span = spans[i]
        if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
              span.from == null && lineNo != from.line ||
              span.from != null && lineNo == to.line && span.from >= to.ch) &&
            (!filter || filter(span.marker)))
          found.push(span.marker.parent || span.marker)
      }
      ++lineNo
    })
    return found
  },
  getAllMarks: function() {
    let markers = []
    this.iter(line => {
      let sps = line.markedSpans
      if (sps) for (let i = 0; i < sps.length; ++i)
        if (sps[i].from != null) markers.push(sps[i].marker)
    })
    return markers
  },

  posFromIndex: function(off) {
    let ch, lineNo = this.first, sepSize = this.lineSeparator().length
    this.iter(line => {
      let sz = line.text.length + sepSize
      if (sz > off) { ch = off; return true }
      off -= sz
      ++lineNo
    })
    return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(lineNo, ch))
  },
  indexFromPos: function (coords) {
    coords = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(this, coords)
    let index = coords.ch
    if (coords.line < this.first || coords.ch < 0) return 0
    let sepSize = this.lineSeparator().length
    this.iter(this.first, coords.line, line => { // iter aborts when callback returns a truthy value
      index += line.text.length + sepSize
    })
    return index
  },

  copy: function(copyHistory) {
    let doc = new Doc(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLines"])(this, this.first, this.first + this.size),
                      this.modeOption, this.first, this.lineSep, this.direction)
    doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft
    doc.sel = this.sel
    doc.extend = false
    if (copyHistory) {
      doc.history.undoDepth = this.history.undoDepth
      doc.setHistory(this.getHistory())
    }
    return doc
  },

  linkedDoc: function(options) {
    if (!options) options = {}
    let from = this.first, to = this.first + this.size
    if (options.from != null && options.from > from) from = options.from
    if (options.to != null && options.to < to) to = options.to
    let copy = new Doc(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLines"])(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction)
    if (options.sharedHist) copy.history = this.history
    ;(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist})
    copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}]
    Object(_mark_text_js__WEBPACK_IMPORTED_MODULE_16__["copySharedMarkers"])(copy, Object(_mark_text_js__WEBPACK_IMPORTED_MODULE_16__["findSharedMarkers"])(this))
    return copy
  },
  unlinkDoc: function(other) {
    if (other instanceof _edit_CodeMirror_js__WEBPACK_IMPORTED_MODULE_0__["default"]) other = other.doc
    if (this.linked) for (let i = 0; i < this.linked.length; ++i) {
      let link = this.linked[i]
      if (link.doc != other) continue
      this.linked.splice(i, 1)
      other.unlinkDoc(this)
      Object(_mark_text_js__WEBPACK_IMPORTED_MODULE_16__["detachSharedMarkers"])(Object(_mark_text_js__WEBPACK_IMPORTED_MODULE_16__["findSharedMarkers"])(this))
      break
    }
    // If the histories were shared, split them again
    if (other.history == this.history) {
      let splitIds = [other.id]
      Object(_document_data_js__WEBPACK_IMPORTED_MODULE_13__["linkedDocs"])(other, doc => splitIds.push(doc.id), true)
      other.history = new _history_js__WEBPACK_IMPORTED_MODULE_14__["History"](null)
      other.history.done = Object(_history_js__WEBPACK_IMPORTED_MODULE_14__["copyHistoryArray"])(this.history.done, splitIds)
      other.history.undone = Object(_history_js__WEBPACK_IMPORTED_MODULE_14__["copyHistoryArray"])(this.history.undone, splitIds)
    }
  },
  iterLinkedDocs: function(f) {Object(_document_data_js__WEBPACK_IMPORTED_MODULE_13__["linkedDocs"])(this, f)},

  getMode: function() {return this.mode},
  getEditor: function() {return this.cm},

  splitLines: function(str) {
    if (this.lineSep) return str.split(this.lineSep)
    return Object(_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_7__["splitLinesAuto"])(str)
  },
  lineSeparator: function() { return this.lineSep || "\n" },

  setDirection: Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["docMethodOp"])(function (dir) {
    if (dir != "rtl") dir = "ltr"
    if (dir == this.direction) return
    this.direction = dir
    this.iter(line => line.order = null)
    if (this.cm) Object(_document_data_js__WEBPACK_IMPORTED_MODULE_13__["directionChanged"])(this.cm)
  })
})

// Public alias.
Doc.prototype.eachLine = Doc.prototype.iter

/* harmony default export */ __webpack_exports__["default"] = (Doc);


/***/ }),

/***/ "./node_modules/codemirror/src/model/change_measurement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/codemirror/src/model/change_measurement.js ***!
  \*****************************************************************/
/*! exports provided: changeEnd, computeSelAfterChange, computeReplacedSel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeEnd", function() { return changeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeSelAfterChange", function() { return computeSelAfterChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeReplacedSel", function() { return computeReplacedSel; });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selection.js */ "./node_modules/codemirror/src/model/selection.js");





// Compute the position of the end of a change (its 'to' property
// refers to the pre-change end).
function changeEnd(change) {
  if (!change.text) return change.to
  return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"])(change.from.line + change.text.length - 1,
             Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_1__["lst"])(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
}

// Adjust a position to refer to the post-change position of the
// same text, or the end of the change if the change covers it.
function adjustForChange(pos, change) {
  if (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["cmp"])(pos, change.from) < 0) return pos
  if (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["cmp"])(pos, change.to) <= 0) return changeEnd(change)

  let line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch
  if (pos.line == change.to.line) ch += changeEnd(change).ch - change.to.ch
  return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"])(line, ch)
}

function computeSelAfterChange(doc, change) {
  let out = []
  for (let i = 0; i < doc.sel.ranges.length; i++) {
    let range = doc.sel.ranges[i]
    out.push(new _selection_js__WEBPACK_IMPORTED_MODULE_2__["Range"](adjustForChange(range.anchor, change),
                       adjustForChange(range.head, change)))
  }
  return Object(_selection_js__WEBPACK_IMPORTED_MODULE_2__["normalizeSelection"])(doc.cm, out, doc.sel.primIndex)
}

function offsetPos(pos, old, nw) {
  if (pos.line == old.line)
    return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"])(nw.line, pos.ch - old.ch + nw.ch)
  else
    return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"])(nw.line + (pos.line - old.line), pos.ch)
}

// Used by replaceSelections to allow moving the selection to the
// start or around the replaced test. Hint may be "start" or "around".
function computeReplacedSel(doc, changes, hint) {
  let out = []
  let oldPrev = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["Pos"])(doc.first, 0), newPrev = oldPrev
  for (let i = 0; i < changes.length; i++) {
    let change = changes[i]
    let from = offsetPos(change.from, oldPrev, newPrev)
    let to = offsetPos(changeEnd(change), oldPrev, newPrev)
    oldPrev = change.to
    newPrev = to
    if (hint == "around") {
      let range = doc.sel.ranges[i], inv = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["cmp"])(range.head, range.anchor) < 0
      out[i] = new _selection_js__WEBPACK_IMPORTED_MODULE_2__["Range"](inv ? to : from, inv ? from : to)
    } else {
      out[i] = new _selection_js__WEBPACK_IMPORTED_MODULE_2__["Range"](from, from)
    }
  }
  return new _selection_js__WEBPACK_IMPORTED_MODULE_2__["Selection"](out, doc.sel.primIndex)
}


/***/ }),

/***/ "./node_modules/codemirror/src/model/changes.js":
/*!******************************************************!*\
  !*** ./node_modules/codemirror/src/model/changes.js ***!
  \******************************************************/
/*! exports provided: makeChange, makeChangeFromHistory, replaceRange, changeLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeChange", function() { return makeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeChangeFromHistory", function() { return makeChangeFromHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceRange", function() { return replaceRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLine", function() { return changeLine; });
/* harmony import */ var _line_highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/highlight.js */ "./node_modules/codemirror/src/line/highlight.js");
/* harmony import */ var _display_highlight_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/highlight_worker.js */ "./node_modules/codemirror/src/display/highlight_worker.js");
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display/view_tracking.js */ "./node_modules/codemirror/src/display/view_tracking.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/saw_special_spans.js */ "./node_modules/codemirror/src/line/saw_special_spans.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/operation_group.js */ "./node_modules/codemirror/src/util/operation_group.js");
/* harmony import */ var _change_measurement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./change_measurement.js */ "./node_modules/codemirror/src/model/change_measurement.js");
/* harmony import */ var _document_data_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./document_data.js */ "./node_modules/codemirror/src/model/document_data.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./history.js */ "./node_modules/codemirror/src/model/history.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./selection.js */ "./node_modules/codemirror/src/model/selection.js");
/* harmony import */ var _selection_updates_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./selection_updates.js */ "./node_modules/codemirror/src/model/selection_updates.js");



















// UPDATING

// Allow "beforeChange" event handlers to influence a change
function filterChange(doc, change, update) {
  let obj = {
    canceled: false,
    from: change.from,
    to: change.to,
    text: change.text,
    origin: change.origin,
    cancel: () => obj.canceled = true
  }
  if (update) obj.update = (from, to, text, origin) => {
    if (from) obj.from = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["clipPos"])(doc, from)
    if (to) obj.to = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["clipPos"])(doc, to)
    if (text) obj.text = text
    if (origin !== undefined) obj.origin = origin
  }
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["signal"])(doc, "beforeChange", doc, obj)
  if (doc.cm) Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["signal"])(doc.cm, "beforeChange", doc.cm, obj)

  if (obj.canceled) {
    if (doc.cm) doc.cm.curOp.updateInput = 2
    return null
  }
  return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
}

// Apply a change to a document, and add it to the document's
// history, and propagating it to all linked documents.
function makeChange(doc, change, ignoreReadOnly) {
  if (doc.cm) {
    if (!doc.cm.curOp) return Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_2__["operation"])(doc.cm, makeChange)(doc, change, ignoreReadOnly)
    if (doc.cm.state.suppressEdits) return
  }

  if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["hasHandler"])(doc, "beforeChange") || doc.cm && Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["hasHandler"])(doc.cm, "beforeChange")) {
    change = filterChange(doc, change, true)
    if (!change) return
  }

  // Possibly split or suppress the update based on the presence
  // of read-only spans in its range.
  let split = _line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_5__["sawReadOnlySpans"] && !ignoreReadOnly && Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_6__["removeReadOnlyRanges"])(doc, change.from, change.to)
  if (split) {
    for (let i = split.length - 1; i >= 0; --i)
      makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text, origin: change.origin})
  } else {
    makeChangeInner(doc, change)
  }
}

function makeChangeInner(doc, change) {
  if (change.text.length == 1 && change.text[0] == "" && Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["cmp"])(change.from, change.to) == 0) return
  let selAfter = Object(_change_measurement_js__WEBPACK_IMPORTED_MODULE_12__["computeSelAfterChange"])(doc, change)
  Object(_history_js__WEBPACK_IMPORTED_MODULE_14__["addChangeToHistory"])(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN)

  makeChangeSingleDoc(doc, change, selAfter, Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_6__["stretchSpansOverChange"])(doc, change))
  let rebased = []

  Object(_document_data_js__WEBPACK_IMPORTED_MODULE_13__["linkedDocs"])(doc, (doc, sharedHist) => {
    if (!sharedHist && Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_10__["indexOf"])(rebased, doc.history) == -1) {
      rebaseHist(doc.history, change)
      rebased.push(doc.history)
    }
    makeChangeSingleDoc(doc, change, null, Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_6__["stretchSpansOverChange"])(doc, change))
  })
}

// Revert a change stored in a document's history.
function makeChangeFromHistory(doc, type, allowSelectionOnly) {
  let suppress = doc.cm && doc.cm.state.suppressEdits
  if (suppress && !allowSelectionOnly) return

  let hist = doc.history, event, selAfter = doc.sel
  let source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done

  // Verify that there is a useable event (so that ctrl-z won't
  // needlessly clear selection events)
  let i = 0
  for (; i < source.length; i++) {
    event = source[i]
    if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
      break
  }
  if (i == source.length) return
  hist.lastOrigin = hist.lastSelOrigin = null

  for (;;) {
    event = source.pop()
    if (event.ranges) {
      Object(_history_js__WEBPACK_IMPORTED_MODULE_14__["pushSelectionToHistory"])(event, dest)
      if (allowSelectionOnly && !event.equals(doc.sel)) {
        Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_16__["setSelection"])(doc, event, {clearRedo: false})
        return
      }
      selAfter = event
    } else if (suppress) {
      source.push(event)
      return
    } else break
  }

  // Build up a reverse change object to add to the opposite history
  // stack (redo when undoing, and vice versa).
  let antiChanges = []
  Object(_history_js__WEBPACK_IMPORTED_MODULE_14__["pushSelectionToHistory"])(selAfter, dest)
  dest.push({changes: antiChanges, generation: hist.generation})
  hist.generation = event.generation || ++hist.maxGeneration

  let filter = Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["hasHandler"])(doc, "beforeChange") || doc.cm && Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["hasHandler"])(doc.cm, "beforeChange")

  for (let i = event.changes.length - 1; i >= 0; --i) {
    let change = event.changes[i]
    change.origin = type
    if (filter && !filterChange(doc, change, false)) {
      source.length = 0
      return
    }

    antiChanges.push(Object(_history_js__WEBPACK_IMPORTED_MODULE_14__["historyChangeFromChange"])(doc, change))

    let after = i ? Object(_change_measurement_js__WEBPACK_IMPORTED_MODULE_12__["computeSelAfterChange"])(doc, change) : Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_10__["lst"])(source)
    makeChangeSingleDoc(doc, change, after, Object(_history_js__WEBPACK_IMPORTED_MODULE_14__["mergeOldSpans"])(doc, change))
    if (!i && doc.cm) doc.cm.scrollIntoView({from: change.from, to: Object(_change_measurement_js__WEBPACK_IMPORTED_MODULE_12__["changeEnd"])(change)})
    let rebased = []

    // Propagate to the linked documents
    Object(_document_data_js__WEBPACK_IMPORTED_MODULE_13__["linkedDocs"])(doc, (doc, sharedHist) => {
      if (!sharedHist && Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_10__["indexOf"])(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change)
        rebased.push(doc.history)
      }
      makeChangeSingleDoc(doc, change, null, Object(_history_js__WEBPACK_IMPORTED_MODULE_14__["mergeOldSpans"])(doc, change))
    })
  }
}

// Sub-views need their line numbers shifted when text is added
// above or below them in the parent document.
function shiftDoc(doc, distance) {
  if (distance == 0) return
  doc.first += distance
  doc.sel = new _selection_js__WEBPACK_IMPORTED_MODULE_15__["Selection"](Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_10__["map"])(doc.sel.ranges, range => new _selection_js__WEBPACK_IMPORTED_MODULE_15__["Range"](
    Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(range.anchor.line + distance, range.anchor.ch),
    Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(range.head.line + distance, range.head.ch)
  )), doc.sel.primIndex)
  if (doc.cm) {
    Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__["regChange"])(doc.cm, doc.first, doc.first - distance, distance)
    for (let d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
      Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__["regLineChange"])(doc.cm, l, "gutter")
  }
}

// More lower-level change function, handling only a single document
// (not linked ones).
function makeChangeSingleDoc(doc, change, selAfter, spans) {
  if (doc.cm && !doc.cm.curOp)
    return Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_2__["operation"])(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans)

  if (change.to.line < doc.first) {
    shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line))
    return
  }
  if (change.from.line > doc.lastLine()) return

  // Clip the change to the size of this doc
  if (change.from.line < doc.first) {
    let shift = change.text.length - 1 - (doc.first - change.from.line)
    shiftDoc(doc, shift)
    change = {from: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(doc.first, 0), to: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(change.to.line + shift, change.to.ch),
              text: [Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_10__["lst"])(change.text)], origin: change.origin}
  }
  let last = doc.lastLine()
  if (change.to.line > last) {
    change = {from: change.from, to: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(last, Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__["getLine"])(doc, last).text.length),
              text: [change.text[0]], origin: change.origin}
  }

  change.removed = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__["getBetween"])(doc, change.from, change.to)

  if (!selAfter) selAfter = Object(_change_measurement_js__WEBPACK_IMPORTED_MODULE_12__["computeSelAfterChange"])(doc, change)
  if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans)
  else Object(_document_data_js__WEBPACK_IMPORTED_MODULE_13__["updateDoc"])(doc, change, spans)
  Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_16__["setSelectionNoUndo"])(doc, selAfter, _util_misc_js__WEBPACK_IMPORTED_MODULE_10__["sel_dontScroll"])
}

// Handle the interaction of a change to a document with the editor
// that this document is part of.
function makeChangeSingleDocInEditor(cm, change, spans) {
  let doc = cm.doc, display = cm.display, from = change.from, to = change.to

  let recomputeMaxLength = false, checkWidthStart = from.line
  if (!cm.options.lineWrapping) {
    checkWidthStart = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__["lineNo"])(Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_6__["visualLine"])(Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__["getLine"])(doc, from.line)))
    doc.iter(checkWidthStart, to.line + 1, line => {
      if (line == display.maxLine) {
        recomputeMaxLength = true
        return true
      }
    })
  }

  if (doc.sel.contains(change.from, change.to) > -1)
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["signalCursorActivity"])(cm)

  Object(_document_data_js__WEBPACK_IMPORTED_MODULE_13__["updateDoc"])(doc, change, spans, Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_8__["estimateHeight"])(cm))

  if (!cm.options.lineWrapping) {
    doc.iter(checkWidthStart, from.line + change.text.length, line => {
      let len = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_6__["lineLength"])(line)
      if (len > display.maxLineLength) {
        display.maxLine = line
        display.maxLineLength = len
        display.maxLineChanged = true
        recomputeMaxLength = false
      }
    })
    if (recomputeMaxLength) cm.curOp.updateMaxLine = true
  }

  Object(_line_highlight_js__WEBPACK_IMPORTED_MODULE_0__["retreatFrontier"])(doc, from.line)
  Object(_display_highlight_worker_js__WEBPACK_IMPORTED_MODULE_1__["startWorker"])(cm, 400)

  let lendiff = change.text.length - (to.line - from.line) - 1
  // Remember that these lines changed, for updating the display
  if (change.full)
    Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__["regChange"])(cm)
  else if (from.line == to.line && change.text.length == 1 && !Object(_document_data_js__WEBPACK_IMPORTED_MODULE_13__["isWholeLineUpdate"])(cm.doc, change))
    Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__["regLineChange"])(cm, from.line, "text")
  else
    Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__["regChange"])(cm, from.line, to.line + 1, lendiff)

  let changesHandler = Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["hasHandler"])(cm, "changes"), changeHandler = Object(_util_event_js__WEBPACK_IMPORTED_MODULE_9__["hasHandler"])(cm, "change")
  if (changeHandler || changesHandler) {
    let obj = {
      from: from, to: to,
      text: change.text,
      removed: change.removed,
      origin: change.origin
    }
    if (changeHandler) Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_11__["signalLater"])(cm, "change", cm, obj)
    if (changesHandler) (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj)
  }
  cm.display.selForContextMenu = null
}

function replaceRange(doc, code, from, to, origin) {
  if (!to) to = from
  if (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["cmp"])(to, from) < 0) [from, to] = [to, from]
  if (typeof code == "string") code = doc.splitLines(code)
  makeChange(doc, {from, to, text: code, origin})
}

// Rebasing/resetting history to deal with externally-sourced changes

function rebaseHistSelSingle(pos, from, to, diff) {
  if (to < pos.line) {
    pos.line += diff
  } else if (from < pos.line) {
    pos.line = from
    pos.ch = 0
  }
}

// Tries to rebase an array of history events given a change in the
// document. If the change touches the same lines as the event, the
// event, and everything 'behind' it, is discarded. If the change is
// before the event, the event's positions are updated. Uses a
// copy-on-write scheme for the positions, to avoid having to
// reallocate them all on every rebase, but also avoid problems with
// shared position objects being unsafely updated.
function rebaseHistArray(array, from, to, diff) {
  for (let i = 0; i < array.length; ++i) {
    let sub = array[i], ok = true
    if (sub.ranges) {
      if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true }
      for (let j = 0; j < sub.ranges.length; j++) {
        rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff)
        rebaseHistSelSingle(sub.ranges[j].head, from, to, diff)
      }
      continue
    }
    for (let j = 0; j < sub.changes.length; ++j) {
      let cur = sub.changes[j]
      if (to < cur.from.line) {
        cur.from = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(cur.from.line + diff, cur.from.ch)
        cur.to = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["Pos"])(cur.to.line + diff, cur.to.ch)
      } else if (from <= cur.to.line) {
        ok = false
        break
      }
    }
    if (!ok) {
      array.splice(0, i + 1)
      i = 0
    }
  }
}

function rebaseHist(hist, change) {
  let from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1
  rebaseHistArray(hist.done, from, to, diff)
  rebaseHistArray(hist.undone, from, to, diff)
}

// Utility for applying a change to a line by handle or number,
// returning the number and optionally registering the line as
// changed.
function changeLine(doc, handle, changeType, op) {
  let no = handle, line = handle
  if (typeof handle == "number") line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__["getLine"])(doc, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_4__["clipLine"])(doc, handle))
  else no = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__["lineNo"])(handle)
  if (no == null) return null
  if (op(line, no) && doc.cm) Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__["regLineChange"])(doc.cm, no, changeType)
  return line
}


/***/ }),

/***/ "./node_modules/codemirror/src/model/chunk.js":
/*!****************************************************!*\
  !*** ./node_modules/codemirror/src/model/chunk.js ***!
  \****************************************************/
/*! exports provided: LeafChunk, BranchChunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafChunk", function() { return LeafChunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchChunk", function() { return BranchChunk; });
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/line_data.js */ "./node_modules/codemirror/src/line/line_data.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/operation_group.js */ "./node_modules/codemirror/src/util/operation_group.js");




// The document is represented as a BTree consisting of leaves, with
// chunk of lines in them, and branches, with up to ten leaves or
// other branch nodes below them. The top node is always a branch
// node, and is the document object itself (meaning it has
// additional methods and properties).
//
// All nodes have parent links. The tree is used both to go from
// line numbers to line objects, and to go from objects to numbers.
// It also indexes by height, and is used to convert between height
// and line object, and to find the total height of the document.
//
// See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

function LeafChunk(lines) {
  this.lines = lines
  this.parent = null
  let height = 0
  for (let i = 0; i < lines.length; ++i) {
    lines[i].parent = this
    height += lines[i].height
  }
  this.height = height
}

LeafChunk.prototype = {
  chunkSize() { return this.lines.length },

  // Remove the n lines at offset 'at'.
  removeInner(at, n) {
    for (let i = at, e = at + n; i < e; ++i) {
      let line = this.lines[i]
      this.height -= line.height
      Object(_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__["cleanUpLine"])(line)
      Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_2__["signalLater"])(line, "delete")
    }
    this.lines.splice(at, n)
  },

  // Helper used to collapse a small branch into a single leaf.
  collapse(lines) {
    lines.push.apply(lines, this.lines)
  },

  // Insert the given array of lines at offset 'at', count them as
  // having the given height.
  insertInner(at, lines, height) {
    this.height += height
    this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at))
    for (let i = 0; i < lines.length; ++i) lines[i].parent = this
  },

  // Used to iterate over a part of the tree.
  iterN(at, n, op) {
    for (let e = at + n; at < e; ++at)
      if (op(this.lines[at])) return true
  }
}

function BranchChunk(children) {
  this.children = children
  let size = 0, height = 0
  for (let i = 0; i < children.length; ++i) {
    let ch = children[i]
    size += ch.chunkSize(); height += ch.height
    ch.parent = this
  }
  this.size = size
  this.height = height
  this.parent = null
}

BranchChunk.prototype = {
  chunkSize() { return this.size },

  removeInner(at, n) {
    this.size -= n
    for (let i = 0; i < this.children.length; ++i) {
      let child = this.children[i], sz = child.chunkSize()
      if (at < sz) {
        let rm = Math.min(n, sz - at), oldHeight = child.height
        child.removeInner(at, rm)
        this.height -= oldHeight - child.height
        if (sz == rm) { this.children.splice(i--, 1); child.parent = null }
        if ((n -= rm) == 0) break
        at = 0
      } else at -= sz
    }
    // If the result is smaller than 25 lines, ensure that it is a
    // single leaf node.
    if (this.size - n < 25 &&
        (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
      let lines = []
      this.collapse(lines)
      this.children = [new LeafChunk(lines)]
      this.children[0].parent = this
    }
  },

  collapse(lines) {
    for (let i = 0; i < this.children.length; ++i) this.children[i].collapse(lines)
  },

  insertInner(at, lines, height) {
    this.size += lines.length
    this.height += height
    for (let i = 0; i < this.children.length; ++i) {
      let child = this.children[i], sz = child.chunkSize()
      if (at <= sz) {
        child.insertInner(at, lines, height)
        if (child.lines && child.lines.length > 50) {
          // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
          // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
          let remaining = child.lines.length % 25 + 25
          for (let pos = remaining; pos < child.lines.length;) {
            let leaf = new LeafChunk(child.lines.slice(pos, pos += 25))
            child.height -= leaf.height
            this.children.splice(++i, 0, leaf)
            leaf.parent = this
          }
          child.lines = child.lines.slice(0, remaining)
          this.maybeSpill()
        }
        break
      }
      at -= sz
    }
  },

  // When a node has grown, check whether it should be split.
  maybeSpill() {
    if (this.children.length <= 10) return
    let me = this
    do {
      let spilled = me.children.splice(me.children.length - 5, 5)
      let sibling = new BranchChunk(spilled)
      if (!me.parent) { // Become the parent node
        let copy = new BranchChunk(me.children)
        copy.parent = me
        me.children = [copy, sibling]
        me = copy
     } else {
        me.size -= sibling.size
        me.height -= sibling.height
        let myIndex = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(me.parent.children, me)
        me.parent.children.splice(myIndex + 1, 0, sibling)
      }
      sibling.parent = me.parent
    } while (me.children.length > 10)
    me.parent.maybeSpill()
  },

  iterN(at, n, op) {
    for (let i = 0; i < this.children.length; ++i) {
      let child = this.children[i], sz = child.chunkSize()
      if (at < sz) {
        let used = Math.min(n, sz - at)
        if (child.iterN(at, used, op)) return true
        if ((n -= used) == 0) break
        at = 0
      } else at -= sz
    }
  }
}


/***/ }),

/***/ "./node_modules/codemirror/src/model/document_data.js":
/*!************************************************************!*\
  !*** ./node_modules/codemirror/src/model/document_data.js ***!
  \************************************************************/
/*! exports provided: isWholeLineUpdate, updateDoc, linkedDocs, attachDoc, directionChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWholeLineUpdate", function() { return isWholeLineUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDoc", function() { return updateDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkedDocs", function() { return linkedDocs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachDoc", function() { return attachDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionChanged", function() { return directionChanged; });
/* harmony import */ var _display_mode_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/mode_state.js */ "./node_modules/codemirror/src/display/mode_state.js");
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/view_tracking.js */ "./node_modules/codemirror/src/display/view_tracking.js");
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/line_data.js */ "./node_modules/codemirror/src/line/line_data.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/operation_group.js */ "./node_modules/codemirror/src/util/operation_group.js");











// DOCUMENT DATA STRUCTURE

// By default, updates that start and end at the beginning of a line
// are treated specially, in order to make the association of line
// widgets and marker elements with the text behave more intuitive.
function isWholeLineUpdate(doc, change) {
  return change.from.ch == 0 && change.to.ch == 0 && Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_8__["lst"])(change.text) == "" &&
    (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
}

// Perform a change on the document data structure.
function updateDoc(doc, change, markedSpans, estimateHeight) {
  function spansFor(n) {return markedSpans ? markedSpans[n] : null}
  function update(line, text, spans) {
    Object(_line_line_data_js__WEBPACK_IMPORTED_MODULE_3__["updateLine"])(line, text, spans, estimateHeight)
    Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__["signalLater"])(line, "change", line, change)
  }
  function linesFor(start, end) {
    let result = []
    for (let i = start; i < end; ++i)
      result.push(new _line_line_data_js__WEBPACK_IMPORTED_MODULE_3__["Line"](text[i], spansFor(i), estimateHeight))
    return result
  }

  let from = change.from, to = change.to, text = change.text
  let firstLine = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLine"])(doc, from.line), lastLine = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__["getLine"])(doc, to.line)
  let lastText = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_8__["lst"])(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line

  // Adjust the line structure
  if (change.full) {
    doc.insert(0, linesFor(0, text.length))
    doc.remove(text.length, doc.size - text.length)
  } else if (isWholeLineUpdate(doc, change)) {
    // This is a whole-line replace. Treated specially to make
    // sure line objects move the way they are supposed to.
    let added = linesFor(0, text.length - 1)
    update(lastLine, lastLine.text, lastSpans)
    if (nlines) doc.remove(from.line, nlines)
    if (added.length) doc.insert(from.line, added)
  } else if (firstLine == lastLine) {
    if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans)
    } else {
      let added = linesFor(1, text.length - 1)
      added.push(new _line_line_data_js__WEBPACK_IMPORTED_MODULE_3__["Line"](lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight))
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
      doc.insert(from.line + 1, added)
    }
  } else if (text.length == 1) {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0))
    doc.remove(from.line + 1, nlines)
  } else {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
    update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans)
    let added = linesFor(1, text.length - 1)
    if (nlines > 1) doc.remove(from.line + 1, nlines - 1)
    doc.insert(from.line + 1, added)
  }

  Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__["signalLater"])(doc, "change", doc, change)
}

// Call f for all linked documents.
function linkedDocs(doc, f, sharedHistOnly) {
  function propagate(doc, skip, sharedHist) {
    if (doc.linked) for (let i = 0; i < doc.linked.length; ++i) {
      let rel = doc.linked[i]
      if (rel.doc == skip) continue
      let shared = sharedHist && rel.sharedHist
      if (sharedHistOnly && !shared) continue
      f(rel.doc, shared)
      propagate(rel.doc, doc, shared)
    }
  }
  propagate(doc, null, true)
}

// Attach a document to an editor.
function attachDoc(cm, doc) {
  if (doc.cm) throw new Error("This document is already in use.")
  cm.doc = doc
  doc.cm = cm
  Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__["estimateLineHeights"])(cm)
  Object(_display_mode_state_js__WEBPACK_IMPORTED_MODULE_0__["loadMode"])(cm)
  setDirectionClass(cm)
  if (!cm.options.lineWrapping) Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_4__["findMaxLine"])(cm)
  cm.options.mode = doc.modeOption
  Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__["regChange"])(cm)
}

function setDirectionClass(cm) {
  ;(cm.doc.direction == "rtl" ? _util_dom_js__WEBPACK_IMPORTED_MODULE_7__["addClass"] : _util_dom_js__WEBPACK_IMPORTED_MODULE_7__["rmClass"])(cm.display.lineDiv, "CodeMirror-rtl")
}

function directionChanged(cm) {
  Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_1__["runInOp"])(cm, () => {
    setDirectionClass(cm)
    Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__["regChange"])(cm)
  })
}


/***/ }),

/***/ "./node_modules/codemirror/src/model/history.js":
/*!******************************************************!*\
  !*** ./node_modules/codemirror/src/model/history.js ***!
  \******************************************************/
/*! exports provided: History, historyChangeFromChange, addChangeToHistory, addSelectionToHistory, pushSelectionToHistory, mergeOldSpans, copyHistoryArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "historyChangeFromChange", function() { return historyChangeFromChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addChangeToHistory", function() { return addChangeToHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSelectionToHistory", function() { return addSelectionToHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushSelectionToHistory", function() { return pushSelectionToHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOldSpans", function() { return mergeOldSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyHistoryArray", function() { return copyHistoryArray; });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _change_measurement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change_measurement.js */ "./node_modules/codemirror/src/model/change_measurement.js");
/* harmony import */ var _document_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./document_data.js */ "./node_modules/codemirror/src/model/document_data.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selection.js */ "./node_modules/codemirror/src/model/selection.js");










function History(startGen) {
  // Arrays of change events and selections. Doing something adds an
  // event to done and clears undo. Undoing moves events from done
  // to undone, redoing moves them in the other direction.
  this.done = []; this.undone = []
  this.undoDepth = Infinity
  // Used to track when changes can be merged into a single undo
  // event
  this.lastModTime = this.lastSelTime = 0
  this.lastOp = this.lastSelOp = null
  this.lastOrigin = this.lastSelOrigin = null
  // Used by the isClean() method
  this.generation = this.maxGeneration = startGen || 1
}

// Create a history change event from an updateDoc-style change
// object.
function historyChangeFromChange(doc, change) {
  let histChange = {from: Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["copyPos"])(change.from), to: Object(_change_measurement_js__WEBPACK_IMPORTED_MODULE_5__["changeEnd"])(change), text: Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__["getBetween"])(doc, change.from, change.to)}
  attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1)
  Object(_document_data_js__WEBPACK_IMPORTED_MODULE_6__["linkedDocs"])(doc, doc => attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1), true)
  return histChange
}

// Pop all selection events off the end of a history array. Stop at
// a change event.
function clearSelectionEvents(array) {
  while (array.length) {
    let last = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["lst"])(array)
    if (last.ranges) array.pop()
    else break
  }
}

// Find the top change event in the history. Pop off selection
// events that are in the way.
function lastChangeEvent(hist, force) {
  if (force) {
    clearSelectionEvents(hist.done)
    return Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["lst"])(hist.done)
  } else if (hist.done.length && !Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["lst"])(hist.done).ranges) {
    return Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["lst"])(hist.done)
  } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
    hist.done.pop()
    return Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["lst"])(hist.done)
  }
}

// Register a change in the history. Merges changes that are within
// a single operation, or are close together with an origin that
// allows merging (starting with "+") into a single event.
function addChangeToHistory(doc, change, selAfter, opId) {
  let hist = doc.history
  hist.undone.length = 0
  let time = +new Date, cur
  let last

  if ((hist.lastOp == opId ||
       hist.lastOrigin == change.origin && change.origin &&
       ((change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500)) ||
        change.origin.charAt(0) == "*")) &&
      (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
    // Merge this change into the last event
    last = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["lst"])(cur.changes)
    if (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["cmp"])(change.from, change.to) == 0 && Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["cmp"])(change.from, last.to) == 0) {
      // Optimized case for simple insertion -- don't want to add
      // new changesets for every character typed
      last.to = Object(_change_measurement_js__WEBPACK_IMPORTED_MODULE_5__["changeEnd"])(change)
    } else {
      // Add new sub-event
      cur.changes.push(historyChangeFromChange(doc, change))
    }
  } else {
    // Can not be merged, start a new event.
    let before = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["lst"])(hist.done)
    if (!before || !before.ranges)
      pushSelectionToHistory(doc.sel, hist.done)
    cur = {changes: [historyChangeFromChange(doc, change)],
           generation: hist.generation}
    hist.done.push(cur)
    while (hist.done.length > hist.undoDepth) {
      hist.done.shift()
      if (!hist.done[0].ranges) hist.done.shift()
    }
  }
  hist.done.push(selAfter)
  hist.generation = ++hist.maxGeneration
  hist.lastModTime = hist.lastSelTime = time
  hist.lastOp = hist.lastSelOp = opId
  hist.lastOrigin = hist.lastSelOrigin = change.origin

  if (!last) Object(_util_event_js__WEBPACK_IMPORTED_MODULE_3__["signal"])(doc, "historyAdded")
}

function selectionEventCanBeMerged(doc, origin, prev, sel) {
  let ch = origin.charAt(0)
  return ch == "*" ||
    ch == "+" &&
    prev.ranges.length == sel.ranges.length &&
    prev.somethingSelected() == sel.somethingSelected() &&
    new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
}

// Called whenever the selection changes, sets the new selection as
// the pending selection in the history, and pushes the old pending
// selection into the 'done' array when it was significantly
// different (in number of selected ranges, emptiness, or time).
function addSelectionToHistory(doc, sel, opId, options) {
  let hist = doc.history, origin = options && options.origin

  // A new event is started when the previous origin does not match
  // the current, or the origins don't allow matching. Origins
  // starting with * are always merged, those starting with + are
  // merged when similar and close together in time.
  if (opId == hist.lastSelOp ||
      (origin && hist.lastSelOrigin == origin &&
       (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
        selectionEventCanBeMerged(doc, origin, Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["lst"])(hist.done), sel))))
    hist.done[hist.done.length - 1] = sel
  else
    pushSelectionToHistory(sel, hist.done)

  hist.lastSelTime = +new Date
  hist.lastSelOrigin = origin
  hist.lastSelOp = opId
  if (options && options.clearRedo !== false)
    clearSelectionEvents(hist.undone)
}

function pushSelectionToHistory(sel, dest) {
  let top = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["lst"])(dest)
  if (!(top && top.ranges && top.equals(sel)))
    dest.push(sel)
}

// Used to store marked span information in the history.
function attachLocalSpans(doc, change, from, to) {
  let existing = change["spans_" + doc.id], n = 0
  doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), line => {
    if (line.markedSpans)
      (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans
    ++n
  })
}

// When un/re-doing restores text containing marked spans, those
// that have been explicitly cleared should not be restored.
function removeClearedSpans(spans) {
  if (!spans) return null
  let out
  for (let i = 0; i < spans.length; ++i) {
    if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i) }
    else if (out) out.push(spans[i])
  }
  return !out ? spans : out.length ? out : null
}

// Retrieve and filter the old marked spans stored in a change event.
function getOldSpans(doc, change) {
  let found = change["spans_" + doc.id]
  if (!found) return null
  let nw = []
  for (let i = 0; i < change.text.length; ++i)
    nw.push(removeClearedSpans(found[i]))
  return nw
}

// Used for un/re-doing changes from the history. Combines the
// result of computing the existing spans with the set of spans that
// existed in the history (so that deleting around a span and then
// undoing brings back the span).
function mergeOldSpans(doc, change) {
  let old = getOldSpans(doc, change)
  let stretched = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_1__["stretchSpansOverChange"])(doc, change)
  if (!old) return stretched
  if (!stretched) return old

  for (let i = 0; i < old.length; ++i) {
    let oldCur = old[i], stretchCur = stretched[i]
    if (oldCur && stretchCur) {
      spans: for (let j = 0; j < stretchCur.length; ++j) {
        let span = stretchCur[j]
        for (let k = 0; k < oldCur.length; ++k)
          if (oldCur[k].marker == span.marker) continue spans
        oldCur.push(span)
      }
    } else if (stretchCur) {
      old[i] = stretchCur
    }
  }
  return old
}

// Used both to provide a JSON-safe object in .getHistory, and, when
// detaching a document, to split the history in two
function copyHistoryArray(events, newGroup, instantiateSel) {
  let copy = []
  for (let i = 0; i < events.length; ++i) {
    let event = events[i]
    if (event.ranges) {
      copy.push(instantiateSel ? _selection_js__WEBPACK_IMPORTED_MODULE_7__["Selection"].prototype.deepCopy.call(event) : event)
      continue
    }
    let changes = event.changes, newChanges = []
    copy.push({changes: newChanges})
    for (let j = 0; j < changes.length; ++j) {
      let change = changes[j], m
      newChanges.push({from: change.from, to: change.to, text: change.text})
      if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
        if (Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["indexOf"])(newGroup, Number(m[1])) > -1) {
          Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_4__["lst"])(newChanges)[prop] = change[prop]
          delete change[prop]
        }
      }
    }
  }
  return copy
}


/***/ }),

/***/ "./node_modules/codemirror/src/model/line_widget.js":
/*!**********************************************************!*\
  !*** ./node_modules/codemirror/src/model/line_widget.js ***!
  \**********************************************************/
/*! exports provided: LineWidget, addLineWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineWidget", function() { return LineWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLineWidget", function() { return addLineWidget; });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrolling.js */ "./node_modules/codemirror/src/display/scrolling.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/view_tracking.js */ "./node_modules/codemirror/src/display/view_tracking.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../measurement/widgets.js */ "./node_modules/codemirror/src/measurement/widgets.js");
/* harmony import */ var _changes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changes.js */ "./node_modules/codemirror/src/model/changes.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/operation_group.js */ "./node_modules/codemirror/src/util/operation_group.js");










// Line widgets are block elements displayed above or below a line.

class LineWidget {
  constructor(doc, node, options) {
    if (options) for (let opt in options) if (options.hasOwnProperty(opt))
      this[opt] = options[opt]
    this.doc = doc
    this.node = node
  }

  clear() {
    let cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["lineNo"])(line)
    if (no == null || !ws) return
    for (let i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1)
    if (!ws.length) line.widgets = null
    let height = Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_5__["widgetHeight"])(this)
    Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["updateLineHeight"])(line, Math.max(0, line.height - height))
    if (cm) {
      Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_0__["runInOp"])(cm, () => {
        adjustScrollWhenAboveVisible(cm, line, -height)
        Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__["regLineChange"])(cm, no, "widget")
      })
      Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_8__["signalLater"])(cm, "lineWidgetCleared", cm, this, no)
    }
  }

  changed() {
    let oldH = this.height, cm = this.doc.cm, line = this.line
    this.height = null
    let diff = Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_5__["widgetHeight"])(this) - oldH
    if (!diff) return
    if (!Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_3__["lineIsHidden"])(this.doc, line)) Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["updateLineHeight"])(line, line.height + diff)
    if (cm) {
      Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_0__["runInOp"])(cm, () => {
        cm.curOp.forceUpdate = true
        adjustScrollWhenAboveVisible(cm, line, diff)
        Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_8__["signalLater"])(cm, "lineWidgetChanged", cm, this, Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["lineNo"])(line))
      })
    }
  }
}
Object(_util_event_js__WEBPACK_IMPORTED_MODULE_7__["eventMixin"])(LineWidget)

function adjustScrollWhenAboveVisible(cm, line, diff) {
  if (Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_3__["heightAtLine"])(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
    Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__["addToScrollTop"])(cm, diff)
}

function addLineWidget(doc, handle, node, options) {
  let widget = new LineWidget(doc, node, options)
  let cm = doc.cm
  if (cm && widget.noHScroll) cm.display.alignWidgets = true
  Object(_changes_js__WEBPACK_IMPORTED_MODULE_6__["changeLine"])(doc, handle, "widget", line => {
    let widgets = line.widgets || (line.widgets = [])
    if (widget.insertAt == null) widgets.push(widget)
    else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget)
    widget.line = line
    if (cm && !Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_3__["lineIsHidden"])(doc, line)) {
      let aboveVisible = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_3__["heightAtLine"])(line) < doc.scrollTop
      Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["updateLineHeight"])(line, line.height + Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_5__["widgetHeight"])(widget))
      if (aboveVisible) Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__["addToScrollTop"])(cm, widget.height)
      cm.curOp.forceUpdate = true
    }
    return true
  })
  if (cm) Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_8__["signalLater"])(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["lineNo"])(handle))
  return widget
}


/***/ }),

/***/ "./node_modules/codemirror/src/model/mark_text.js":
/*!********************************************************!*\
  !*** ./node_modules/codemirror/src/model/mark_text.js ***!
  \********************************************************/
/*! exports provided: TextMarker, markText, SharedTextMarker, findSharedMarkers, copySharedMarkers, detachSharedMarkers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMarker", function() { return TextMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markText", function() { return markText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedTextMarker", function() { return SharedTextMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSharedMarkers", function() { return findSharedMarkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copySharedMarkers", function() { return copySharedMarkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachSharedMarkers", function() { return detachSharedMarkers; });
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/operations.js */ "./node_modules/codemirror/src/display/operations.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./node_modules/codemirror/src/measurement/position_measurement.js");
/* harmony import */ var _line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../line/saw_special_spans.js */ "./node_modules/codemirror/src/line/saw_special_spans.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../line/spans.js */ "./node_modules/codemirror/src/line/spans.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/operation_group.js */ "./node_modules/codemirror/src/util/operation_group.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../measurement/widgets.js */ "./node_modules/codemirror/src/measurement/widgets.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../display/view_tracking.js */ "./node_modules/codemirror/src/display/view_tracking.js");
/* harmony import */ var _document_data_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./document_data.js */ "./node_modules/codemirror/src/model/document_data.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./history.js */ "./node_modules/codemirror/src/model/history.js");
/* harmony import */ var _selection_updates_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./selection_updates.js */ "./node_modules/codemirror/src/model/selection_updates.js");

















// TEXTMARKERS

// Created with markText and setBookmark methods. A TextMarker is a
// handle that can be used to clear or find a marked position in the
// document. Line objects hold arrays (markedSpans) containing
// {from, to, marker} object pointing to such marker objects, and
// indicating that such a marker is present on that line. Multiple
// lines may point to the same marker when it spans across lines.
// The spans will have null for their from/to properties when the
// marker continues beyond the start/end of the line. Markers have
// links back to the lines they currently touch.

// Collapsed markers have unique ids, in order to be able to order
// them, which is needed for uniquely determining an outer marker
// when they overlap (they may nest, but not partially overlap).
let nextMarkerId = 0

class TextMarker {
  constructor(doc, type) {
    this.lines = []
    this.type = type
    this.doc = doc
    this.id = ++nextMarkerId
  }

  // Clear the marker.
  clear() {
    if (this.explicitlyCleared) return
    let cm = this.doc.cm, withOp = cm && !cm.curOp
    if (withOp) Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_2__["startOperation"])(cm)
    if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_1__["hasHandler"])(this, "clear")) {
      let found = this.find()
      if (found) Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__["signalLater"])(this, "clear", found.from, found.to)
    }
    let min = null, max = null
    for (let i = 0; i < this.lines.length; ++i) {
      let line = this.lines[i]
      let span = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_7__["getMarkedSpanFor"])(line.markedSpans, this)
      if (cm && !this.collapsed) Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_11__["regLineChange"])(cm, Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["lineNo"])(line), "text")
      else if (cm) {
        if (span.to != null) max = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["lineNo"])(line)
        if (span.from != null) min = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["lineNo"])(line)
      }
      line.markedSpans = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_7__["removeMarkedSpan"])(line.markedSpans, span)
      if (span.from == null && this.collapsed && !Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_7__["lineIsHidden"])(this.doc, line) && cm)
        Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["updateLineHeight"])(line, Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__["textHeight"])(cm.display))
    }
    if (cm && this.collapsed && !cm.options.lineWrapping) for (let i = 0; i < this.lines.length; ++i) {
      let visual = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_7__["visualLine"])(this.lines[i]), len = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_7__["lineLength"])(visual)
      if (len > cm.display.maxLineLength) {
        cm.display.maxLine = visual
        cm.display.maxLineLength = len
        cm.display.maxLineChanged = true
      }
    }

    if (min != null && cm && this.collapsed) Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_11__["regChange"])(cm, min, max + 1)
    this.lines.length = 0
    this.explicitlyCleared = true
    if (this.atomic && this.doc.cantEdit) {
      this.doc.cantEdit = false
      if (cm) Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_14__["reCheckSelection"])(cm.doc)
    }
    if (cm) Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__["signalLater"])(cm, "markerCleared", cm, this, min, max)
    if (withOp) Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_2__["endOperation"])(cm)
    if (this.parent) this.parent.clear()
  }

  // Find the position of the marker in the document. Returns a {from,
  // to} object by default. Side can be passed to get a specific side
  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
  // Pos objects returned contain a line object, rather than a line
  // number (used to prevent looking up the same line twice).
  find(side, lineObj) {
    if (side == null && this.type == "bookmark") side = 1
    let from, to
    for (let i = 0; i < this.lines.length; ++i) {
      let line = this.lines[i]
      let span = Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_7__["getMarkedSpanFor"])(line.markedSpans, this)
      if (span.from != null) {
        from = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(lineObj ? line : Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["lineNo"])(line), span.from)
        if (side == -1) return from
      }
      if (span.to != null) {
        to = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(lineObj ? line : Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["lineNo"])(line), span.to)
        if (side == 1) return to
      }
    }
    return from && {from: from, to: to}
  }

  // Signals that the marker's widget changed, and surrounding layout
  // should be recomputed.
  changed() {
    let pos = this.find(-1, true), widget = this, cm = this.doc.cm
    if (!pos || !cm) return
    Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_2__["runInOp"])(cm, () => {
      let line = pos.line, lineN = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["lineNo"])(pos.line)
      let view = Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__["findViewForLine"])(cm, lineN)
      if (view) {
        Object(_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__["clearLineMeasurementCacheFor"])(view)
        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true
      }
      cm.curOp.updateMaxLine = true
      if (!Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_7__["lineIsHidden"])(widget.doc, line) && widget.height != null) {
        let oldHeight = widget.height
        widget.height = null
        let dHeight = Object(_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_10__["widgetHeight"])(widget) - oldHeight
        if (dHeight)
          Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["updateLineHeight"])(line, line.height + dHeight)
      }
      Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__["signalLater"])(cm, "markerChanged", cm, this)
    })
  }

  attachLine(line) {
    if (!this.lines.length && this.doc.cm) {
      let op = this.doc.cm.curOp
      if (!op.maybeHiddenMarkers || Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_8__["indexOf"])(op.maybeHiddenMarkers, this) == -1)
        (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this)
    }
    this.lines.push(line)
  }

  detachLine(line) {
    this.lines.splice(Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_8__["indexOf"])(this.lines, line), 1)
    if (!this.lines.length && this.doc.cm) {
      let op = this.doc.cm.curOp
      ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this)
    }
  }
}
Object(_util_event_js__WEBPACK_IMPORTED_MODULE_1__["eventMixin"])(TextMarker)

// Create a marker, wire it up to the right lines, and
function markText(doc, from, to, options, type) {
  // Shared markers (across linked documents) are handled separately
  // (markTextShared will call out to this again, once per
  // document).
  if (options && options.shared) return markTextShared(doc, from, to, options, type)
  // Ensure we are in an operation.
  if (doc.cm && !doc.cm.curOp) return Object(_display_operations_js__WEBPACK_IMPORTED_MODULE_2__["operation"])(doc.cm, markText)(doc, from, to, options, type)

  let marker = new TextMarker(doc, type), diff = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["cmp"])(from, to)
  if (options) Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_8__["copyObj"])(options, marker, false)
  // Don't connect empty markers unless clearWhenEmpty is false
  if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
    return marker
  if (marker.replacedWith) {
    // Showing up as a widget implies collapsed (widget replaces text)
    marker.collapsed = true
    marker.widgetNode = Object(_util_dom_js__WEBPACK_IMPORTED_MODULE_0__["eltP"])("span", [marker.replacedWith], "CodeMirror-widget")
    if (!options.handleMouseEvents) marker.widgetNode.setAttribute("cm-ignore-events", "true")
    if (options.insertLeft) marker.widgetNode.insertLeft = true
  }
  if (marker.collapsed) {
    if (Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_7__["conflictingCollapsedRange"])(doc, from.line, from, to, marker) ||
        from.line != to.line && Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_7__["conflictingCollapsedRange"])(doc, to.line, from, to, marker))
      throw new Error("Inserting collapsed marker partially overlapping an existing one")
    Object(_line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_6__["seeCollapsedSpans"])()
  }

  if (marker.addToHistory)
    Object(_history_js__WEBPACK_IMPORTED_MODULE_13__["addChangeToHistory"])(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN)

  let curLine = from.line, cm = doc.cm, updateMaxLine
  doc.iter(curLine, to.line + 1, line => {
    if (cm && marker.collapsed && !cm.options.lineWrapping && Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_7__["visualLine"])(line) == cm.display.maxLine)
      updateMaxLine = true
    if (marker.collapsed && curLine != from.line) Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["updateLineHeight"])(line, 0)
    Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_7__["addMarkedSpan"])(line, new _line_spans_js__WEBPACK_IMPORTED_MODULE_7__["MarkedSpan"](marker,
                                       curLine == from.line ? from.ch : null,
                                       curLine == to.line ? to.ch : null))
    ++curLine
  })
  // lineIsHidden depends on the presence of the spans, so needs a second pass
  if (marker.collapsed) doc.iter(from.line, to.line + 1, line => {
    if (Object(_line_spans_js__WEBPACK_IMPORTED_MODULE_7__["lineIsHidden"])(doc, line)) Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__["updateLineHeight"])(line, 0)
  })

  if (marker.clearOnEnter) Object(_util_event_js__WEBPACK_IMPORTED_MODULE_1__["on"])(marker, "beforeCursorEnter", () => marker.clear())

  if (marker.readOnly) {
    Object(_line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_6__["seeReadOnlySpans"])()
    if (doc.history.done.length || doc.history.undone.length)
      doc.clearHistory()
  }
  if (marker.collapsed) {
    marker.id = ++nextMarkerId
    marker.atomic = true
  }
  if (cm) {
    // Sync editor state
    if (updateMaxLine) cm.curOp.updateMaxLine = true
    if (marker.collapsed)
      Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_11__["regChange"])(cm, from.line, to.line + 1)
    else if (marker.className || marker.startStyle || marker.endStyle || marker.css ||
             marker.attributes || marker.title)
      for (let i = from.line; i <= to.line; i++) Object(_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_11__["regLineChange"])(cm, i, "text")
    if (marker.atomic) Object(_selection_updates_js__WEBPACK_IMPORTED_MODULE_14__["reCheckSelection"])(cm.doc)
    Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__["signalLater"])(cm, "markerAdded", cm, marker)
  }
  return marker
}

// SHARED TEXTMARKERS

// A shared marker spans multiple linked documents. It is
// implemented as a meta-marker-object controlling multiple normal
// markers.
class SharedTextMarker {
  constructor(markers, primary) {
    this.markers = markers
    this.primary = primary
    for (let i = 0; i < markers.length; ++i)
      markers[i].parent = this
  }

  clear() {
    if (this.explicitlyCleared) return
    this.explicitlyCleared = true
    for (let i = 0; i < this.markers.length; ++i)
      this.markers[i].clear()
    Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__["signalLater"])(this, "clear")
  }

  find(side, lineObj) {
    return this.primary.find(side, lineObj)
  }
}
Object(_util_event_js__WEBPACK_IMPORTED_MODULE_1__["eventMixin"])(SharedTextMarker)

function markTextShared(doc, from, to, options, type) {
  options = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_8__["copyObj"])(options)
  options.shared = false
  let markers = [markText(doc, from, to, options, type)], primary = markers[0]
  let widget = options.widgetNode
  Object(_document_data_js__WEBPACK_IMPORTED_MODULE_12__["linkedDocs"])(doc, doc => {
    if (widget) options.widgetNode = widget.cloneNode(true)
    markers.push(markText(doc, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(doc, from), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["clipPos"])(doc, to), options, type))
    for (let i = 0; i < doc.linked.length; ++i)
      if (doc.linked[i].isParent) return
    primary = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_8__["lst"])(markers)
  })
  return new SharedTextMarker(markers, primary)
}

function findSharedMarkers(doc) {
  return doc.findMarks(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(doc.first, 0), doc.clipPos(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["Pos"])(doc.lastLine())), m => m.parent)
}

function copySharedMarkers(doc, markers) {
  for (let i = 0; i < markers.length; i++) {
    let marker = markers[i], pos = marker.find()
    let mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to)
    if (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_3__["cmp"])(mFrom, mTo)) {
      let subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type)
      marker.markers.push(subMark)
      subMark.parent = marker
    }
  }
}

function detachSharedMarkers(markers) {
  for (let i = 0; i < markers.length; i++) {
    let marker = markers[i], linked = [marker.primary.doc]
    Object(_document_data_js__WEBPACK_IMPORTED_MODULE_12__["linkedDocs"])(marker.primary.doc, d => linked.push(d))
    for (let j = 0; j < marker.markers.length; j++) {
      let subMarker = marker.markers[j]
      if (Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_8__["indexOf"])(linked, subMarker.doc) == -1) {
        subMarker.parent = null
        marker.markers.splice(j--, 1)
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/codemirror/src/model/selection.js":
/*!********************************************************!*\
  !*** ./node_modules/codemirror/src/model/selection.js ***!
  \********************************************************/
/*! exports provided: Selection, Range, normalizeSelection, simpleSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeSelection", function() { return normalizeSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleSelection", function() { return simpleSelection; });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");



// Selection objects are immutable. A new one is created every time
// the selection changes. A selection is one or more non-overlapping
// (and non-touching) ranges, sorted, and an integer that indicates
// which one is the primary selection (the one that's scrolled into
// view, that getCursor returns, etc).
class Selection {
  constructor(ranges, primIndex) {
    this.ranges = ranges
    this.primIndex = primIndex
  }

  primary() { return this.ranges[this.primIndex] }

  equals(other) {
    if (other == this) return true
    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return false
    for (let i = 0; i < this.ranges.length; i++) {
      let here = this.ranges[i], there = other.ranges[i]
      if (!Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["equalCursorPos"])(here.anchor, there.anchor) || !Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["equalCursorPos"])(here.head, there.head)) return false
    }
    return true
  }

  deepCopy() {
    let out = []
    for (let i = 0; i < this.ranges.length; i++)
      out[i] = new Range(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["copyPos"])(this.ranges[i].anchor), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["copyPos"])(this.ranges[i].head))
    return new Selection(out, this.primIndex)
  }

  somethingSelected() {
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].empty()) return true
    return false
  }

  contains(pos, end) {
    if (!end) end = pos
    for (let i = 0; i < this.ranges.length; i++) {
      let range = this.ranges[i]
      if (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["cmp"])(end, range.from()) >= 0 && Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["cmp"])(pos, range.to()) <= 0)
        return i
    }
    return -1
  }
}

class Range {
  constructor(anchor, head) {
    this.anchor = anchor; this.head = head
  }

  from() { return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["minPos"])(this.anchor, this.head) }
  to() { return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["maxPos"])(this.anchor, this.head) }
  empty() { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch }
}

// Take an unsorted, potentially overlapping set of ranges, and
// build a selection out of it. 'Consumes' ranges array (modifying
// it).
function normalizeSelection(cm, ranges, primIndex) {
  let mayTouch = cm && cm.options.selectionsMayTouch
  let prim = ranges[primIndex]
  ranges.sort((a, b) => Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["cmp"])(a.from(), b.from()))
  primIndex = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(ranges, prim)
  for (let i = 1; i < ranges.length; i++) {
    let cur = ranges[i], prev = ranges[i - 1]
    let diff = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["cmp"])(prev.to(), cur.from())
    if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
      let from = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["minPos"])(prev.from(), cur.from()), to = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_0__["maxPos"])(prev.to(), cur.to())
      let inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head
      if (i <= primIndex) --primIndex
      ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to))
    }
  }
  return new Selection(ranges, primIndex)
}

function simpleSelection(anchor, head) {
  return new Selection([new Range(anchor, head || anchor)], 0)
}


/***/ }),

/***/ "./node_modules/codemirror/src/model/selection_updates.js":
/*!****************************************************************!*\
  !*** ./node_modules/codemirror/src/model/selection_updates.js ***!
  \****************************************************************/
/*! exports provided: extendRange, extendSelection, extendSelections, replaceOneSelection, setSimpleSelection, setSelectionReplaceHistory, setSelection, setSelectionNoUndo, reCheckSelection, skipAtomic, selectAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendRange", function() { return extendRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendSelection", function() { return extendSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendSelections", function() { return extendSelections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceOneSelection", function() { return replaceOneSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSimpleSelection", function() { return setSimpleSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectionReplaceHistory", function() { return setSelectionReplaceHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelection", function() { return setSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectionNoUndo", function() { return setSelectionNoUndo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reCheckSelection", function() { return reCheckSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipAtomic", function() { return skipAtomic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/operation_group.js */ "./node_modules/codemirror/src/util/operation_group.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrolling.js */ "./node_modules/codemirror/src/display/scrolling.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/pos.js */ "./node_modules/codemirror/src/line/pos.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/utils_line.js */ "./node_modules/codemirror/src/line/utils_line.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/event.js */ "./node_modules/codemirror/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/misc.js */ "./node_modules/codemirror/src/util/misc.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.js */ "./node_modules/codemirror/src/model/history.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selection.js */ "./node_modules/codemirror/src/model/selection.js");










// The 'scroll' parameter given to many of these indicated whether
// the new cursor position should be scrolled into view after
// modifying the selection.

// If shift is held or the extend flag is set, extends a range to
// include a given position (and optionally a second position).
// Otherwise, simply returns the range between the given positions.
// Used for cursor motion and such.
function extendRange(range, head, other, extend) {
  if (extend) {
    let anchor = range.anchor
    if (other) {
      let posBefore = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["cmp"])(head, anchor) < 0
      if (posBefore != (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["cmp"])(other, anchor) < 0)) {
        anchor = head
        head = other
      } else if (posBefore != (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["cmp"])(head, other) < 0)) {
        head = other
      }
    }
    return new _selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](anchor, head)
  } else {
    return new _selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](other || head, head)
  }
}

// Extend the primary selection range, discard the rest.
function extendSelection(doc, head, other, options, extend) {
  if (extend == null) extend = doc.cm && (doc.cm.display.shift || doc.extend)
  setSelection(doc, new _selection_js__WEBPACK_IMPORTED_MODULE_7__["Selection"]([extendRange(doc.sel.primary(), head, other, extend)], 0), options)
}

// Extend all selections (pos is an array of selections with length
// equal the number of selections)
function extendSelections(doc, heads, options) {
  let out = []
  let extend = doc.cm && (doc.cm.display.shift || doc.extend)
  for (let i = 0; i < doc.sel.ranges.length; i++)
    out[i] = extendRange(doc.sel.ranges[i], heads[i], null, extend)
  let newSel = Object(_selection_js__WEBPACK_IMPORTED_MODULE_7__["normalizeSelection"])(doc.cm, out, doc.sel.primIndex)
  setSelection(doc, newSel, options)
}

// Updates a single range in the selection.
function replaceOneSelection(doc, i, range, options) {
  let ranges = doc.sel.ranges.slice(0)
  ranges[i] = range
  setSelection(doc, Object(_selection_js__WEBPACK_IMPORTED_MODULE_7__["normalizeSelection"])(doc.cm, ranges, doc.sel.primIndex), options)
}

// Reset the selection to a single range.
function setSimpleSelection(doc, anchor, head, options) {
  setSelection(doc, Object(_selection_js__WEBPACK_IMPORTED_MODULE_7__["simpleSelection"])(anchor, head), options)
}

// Give beforeSelectionChange handlers a change to influence a
// selection update.
function filterSelectionChange(doc, sel, options) {
  let obj = {
    ranges: sel.ranges,
    update: function(ranges) {
      this.ranges = []
      for (let i = 0; i < ranges.length; i++)
        this.ranges[i] = new _selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["clipPos"])(doc, ranges[i].anchor),
                                   Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["clipPos"])(doc, ranges[i].head))
    },
    origin: options && options.origin
  }
  Object(_util_event_js__WEBPACK_IMPORTED_MODULE_4__["signal"])(doc, "beforeSelectionChange", doc, obj)
  if (doc.cm) Object(_util_event_js__WEBPACK_IMPORTED_MODULE_4__["signal"])(doc.cm, "beforeSelectionChange", doc.cm, obj)
  if (obj.ranges != sel.ranges) return Object(_selection_js__WEBPACK_IMPORTED_MODULE_7__["normalizeSelection"])(doc.cm, obj.ranges, obj.ranges.length - 1)
  else return sel
}

function setSelectionReplaceHistory(doc, sel, options) {
  let done = doc.history.done, last = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_5__["lst"])(done)
  if (last && last.ranges) {
    done[done.length - 1] = sel
    setSelectionNoUndo(doc, sel, options)
  } else {
    setSelection(doc, sel, options)
  }
}

// Set a new selection.
function setSelection(doc, sel, options) {
  setSelectionNoUndo(doc, sel, options)
  Object(_history_js__WEBPACK_IMPORTED_MODULE_6__["addSelectionToHistory"])(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options)
}

function setSelectionNoUndo(doc, sel, options) {
  if (Object(_util_event_js__WEBPACK_IMPORTED_MODULE_4__["hasHandler"])(doc, "beforeSelectionChange") || doc.cm && Object(_util_event_js__WEBPACK_IMPORTED_MODULE_4__["hasHandler"])(doc.cm, "beforeSelectionChange"))
    sel = filterSelectionChange(doc, sel, options)

  let bias = options && options.bias ||
    (Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["cmp"])(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1)
  setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true))

  if (!(options && options.scroll === false) && doc.cm)
    Object(_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__["ensureCursorVisible"])(doc.cm)
}

function setSelectionInner(doc, sel) {
  if (sel.equals(doc.sel)) return

  doc.sel = sel

  if (doc.cm) {
    doc.cm.curOp.updateInput = 1
    doc.cm.curOp.selectionChanged = true
    Object(_util_event_js__WEBPACK_IMPORTED_MODULE_4__["signalCursorActivity"])(doc.cm)
  }
  Object(_util_operation_group_js__WEBPACK_IMPORTED_MODULE_0__["signalLater"])(doc, "cursorActivity", doc)
}

// Verify that the selection does not partially select any atomic
// marked ranges.
function reCheckSelection(doc) {
  setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false))
}

// Return a selection that does not partially select any atomic
// ranges.
function skipAtomicInSelection(doc, sel, bias, mayClear) {
  let out
  for (let i = 0; i < sel.ranges.length; i++) {
    let range = sel.ranges[i]
    let old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i]
    let newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear)
    let newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear)
    if (out || newAnchor != range.anchor || newHead != range.head) {
      if (!out) out = sel.ranges.slice(0, i)
      out[i] = new _selection_js__WEBPACK_IMPORTED_MODULE_7__["Range"](newAnchor, newHead)
    }
  }
  return out ? Object(_selection_js__WEBPACK_IMPORTED_MODULE_7__["normalizeSelection"])(doc.cm, out, sel.primIndex) : sel
}

function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
  let line = Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, pos.line)
  if (line.markedSpans) for (let i = 0; i < line.markedSpans.length; ++i) {
    let sp = line.markedSpans[i], m = sp.marker
    if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
        (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
      if (mayClear) {
        Object(_util_event_js__WEBPACK_IMPORTED_MODULE_4__["signal"])(m, "beforeCursorEnter")
        if (m.explicitlyCleared) {
          if (!line.markedSpans) break
          else {--i; continue}
        }
      }
      if (!m.atomic) continue

      if (oldPos) {
        let near = m.find(dir < 0 ? 1 : -1), diff
        if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
          near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null)
        if (near && near.line == pos.line && (diff = Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["cmp"])(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
          return skipAtomicInner(doc, near, pos, dir, mayClear)
      }

      let far = m.find(dir < 0 ? -1 : 1)
      if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
        far = movePos(doc, far, dir, far.line == pos.line ? line : null)
      return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
    }
  }
  return pos
}

// Ensure a given position is not inside an atomic range.
function skipAtomic(doc, pos, oldPos, bias, mayClear) {
  let dir = bias || 1
  let found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
      (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
      skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
      (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true))
  if (!found) {
    doc.cantEdit = true
    return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["Pos"])(doc.first, 0)
  }
  return found
}

function movePos(doc, pos, dir, line) {
  if (dir < 0 && pos.ch == 0) {
    if (pos.line > doc.first) return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["clipPos"])(doc, Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["Pos"])(pos.line - 1))
    else return null
  } else if (dir > 0 && pos.ch == (line || Object(_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__["getLine"])(doc, pos.line)).text.length) {
    if (pos.line < doc.first + doc.size - 1) return Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["Pos"])(pos.line + 1, 0)
    else return null
  } else {
    return new _line_pos_js__WEBPACK_IMPORTED_MODULE_2__["Pos"](pos.line, pos.ch + dir)
  }
}

function selectAll(cm) {
  cm.setSelection(Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["Pos"])(cm.firstLine(), 0), Object(_line_pos_js__WEBPACK_IMPORTED_MODULE_2__["Pos"])(cm.lastLine()), _util_misc_js__WEBPACK_IMPORTED_MODULE_5__["sel_dontScroll"])
}


/***/ }),

/***/ "./node_modules/codemirror/src/modes.js":
/*!**********************************************!*\
  !*** ./node_modules/codemirror/src/modes.js ***!
  \**********************************************/
/*! exports provided: modes, mimeModes, defineMode, defineMIME, resolveMode, getMode, modeExtensions, extendMode, copyState, innerMode, startState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeModes", function() { return mimeModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineMode", function() { return defineMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineMIME", function() { return defineMIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveMode", function() { return resolveMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMode", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modeExtensions", function() { return modeExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendMode", function() { return extendMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyState", function() { return copyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerMode", function() { return innerMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startState", function() { return startState; });
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/misc.js */ "./node_modules/codemirror/src/util/misc.js");


// Known modes, by name and by MIME
let modes = {}, mimeModes = {}

// Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)
function defineMode(name, mode) {
  if (arguments.length > 2)
    mode.dependencies = Array.prototype.slice.call(arguments, 2)
  modes[name] = mode
}

function defineMIME(mime, spec) {
  mimeModes[mime] = spec
}

// Given a MIME type, a {name, ...options} config object, or a name
// string, return a mode config object.
function resolveMode(spec) {
  if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
    spec = mimeModes[spec]
  } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
    let found = mimeModes[spec.name]
    if (typeof found == "string") found = {name: found}
    spec = Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_0__["createObj"])(found, spec)
    spec.name = found.name
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
    return resolveMode("application/xml")
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
    return resolveMode("application/json")
  }
  if (typeof spec == "string") return {name: spec}
  else return spec || {name: "null"}
}

// Given a mode spec (anything that resolveMode accepts), find and
// initialize an actual mode object.
function getMode(options, spec) {
  spec = resolveMode(spec)
  let mfactory = modes[spec.name]
  if (!mfactory) return getMode(options, "text/plain")
  let modeObj = mfactory(options, spec)
  if (modeExtensions.hasOwnProperty(spec.name)) {
    let exts = modeExtensions[spec.name]
    for (let prop in exts) {
      if (!exts.hasOwnProperty(prop)) continue
      if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop]
      modeObj[prop] = exts[prop]
    }
  }
  modeObj.name = spec.name
  if (spec.helperType) modeObj.helperType = spec.helperType
  if (spec.modeProps) for (let prop in spec.modeProps)
    modeObj[prop] = spec.modeProps[prop]

  return modeObj
}

// This can be used to attach properties to mode objects from
// outside the actual mode definition.
let modeExtensions = {}
function extendMode(mode, properties) {
  let exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {})
  Object(_util_misc_js__WEBPACK_IMPORTED_MODULE_0__["copyObj"])(properties, exts)
}

function copyState(mode, state) {
  if (state === true) return state
  if (mode.copyState) return mode.copyState(state)
  let nstate = {}
  for (let n in state) {
    let val = state[n]
    if (val instanceof Array) val = val.concat([])
    nstate[n] = val
  }
  return nstate
}

// Given a mode and a state (for that mode), find the inner mode and
// state at the position that the state refers to.
function innerMode(mode, state) {
  let info
  while (mode.innerMode) {
    info = mode.innerMode(state)
    if (!info || info.mode == mode) break
    state = info.state
    mode = info.mode
  }
  return info || {mode: mode, state: state}
}

function startState(mode, a1, a2) {
  return mode.startState ? mode.startState(a1, a2) : true
}


/***/ }),

/***/ "./node_modules/codemirror/src/util/StringStream.js":
/*!**********************************************************!*\
  !*** ./node_modules/codemirror/src/util/StringStream.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc.js */ "./node_modules/codemirror/src/util/misc.js");


// STRING STREAM

// Fed to the mode parsers, provides helper functions to make
// parsers more succinct.

class StringStream {
  constructor(string, tabSize, lineOracle) {
    this.pos = this.start = 0
    this.string = string
    this.tabSize = tabSize || 8
    this.lastColumnPos = this.lastColumnValue = 0
    this.lineStart = 0
    this.lineOracle = lineOracle
  }

  eol() {return this.pos >= this.string.length}
  sol() {return this.pos == this.lineStart}
  peek() {return this.string.charAt(this.pos) || undefined}
  next() {
    if (this.pos < this.string.length)
      return this.string.charAt(this.pos++)
  }
  eat(match) {
    let ch = this.string.charAt(this.pos)
    let ok
    if (typeof match == "string") ok = ch == match
    else ok = ch && (match.test ? match.test(ch) : match(ch))
    if (ok) {++this.pos; return ch}
  }
  eatWhile(match) {
    let start = this.pos
    while (this.eat(match)){}
    return this.pos > start
  }
  eatSpace() {
    let start = this.pos
    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos
    return this.pos > start
  }
  skipToEnd() {this.pos = this.string.length}
  skipTo(ch) {
    let found = this.string.indexOf(ch, this.pos)
    if (found > -1) {this.pos = found; return true}
  }
  backUp(n) {this.pos -= n}
  column() {
    if (this.lastColumnPos < this.start) {
      this.lastColumnValue = Object(_misc_js__WEBPACK_IMPORTED_MODULE_0__["countColumn"])(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)
      this.lastColumnPos = this.start
    }
    return this.lastColumnValue - (this.lineStart ? Object(_misc_js__WEBPACK_IMPORTED_MODULE_0__["countColumn"])(this.string, this.lineStart, this.tabSize) : 0)
  }
  indentation() {
    return Object(_misc_js__WEBPACK_IMPORTED_MODULE_0__["countColumn"])(this.string, null, this.tabSize) -
      (this.lineStart ? Object(_misc_js__WEBPACK_IMPORTED_MODULE_0__["countColumn"])(this.string, this.lineStart, this.tabSize) : 0)
  }
  match(pattern, consume, caseInsensitive) {
    if (typeof pattern == "string") {
      let cased = str => caseInsensitive ? str.toLowerCase() : str
      let substr = this.string.substr(this.pos, pattern.length)
      if (cased(substr) == cased(pattern)) {
        if (consume !== false) this.pos += pattern.length
        return true
      }
    } else {
      let match = this.string.slice(this.pos).match(pattern)
      if (match && match.index > 0) return null
      if (match && consume !== false) this.pos += match[0].length
      return match
    }
  }
  current(){return this.string.slice(this.start, this.pos)}
  hideFirstChars(n, inner) {
    this.lineStart += n
    try { return inner() }
    finally { this.lineStart -= n }
  }
  lookAhead(n) {
    let oracle = this.lineOracle
    return oracle && oracle.lookAhead(n)
  }
  baseToken() {
    let oracle = this.lineOracle
    return oracle && oracle.baseToken(this.pos)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (StringStream);


/***/ }),

/***/ "./node_modules/codemirror/src/util/bidi.js":
/*!**************************************************!*\
  !*** ./node_modules/codemirror/src/util/bidi.js ***!
  \**************************************************/
/*! exports provided: iterateBidiSections, bidiOther, getBidiPartAt, getOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateBidiSections", function() { return iterateBidiSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bidiOther", function() { return bidiOther; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBidiPartAt", function() { return getBidiPartAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrder", function() { return getOrder; });
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc.js */ "./node_modules/codemirror/src/util/misc.js");


// BIDI HELPERS

function iterateBidiSections(order, from, to, f) {
  if (!order) return f(from, to, "ltr", 0)
  let found = false
  for (let i = 0; i < order.length; ++i) {
    let part = order[i]
    if (part.from < to && part.to > from || from == to && part.to == from) {
      f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i)
      found = true
    }
  }
  if (!found) f(from, to, "ltr")
}

let bidiOther = null
function getBidiPartAt(order, ch, sticky) {
  let found
  bidiOther = null
  for (let i = 0; i < order.length; ++i) {
    let cur = order[i]
    if (cur.from < ch && cur.to > ch) return i
    if (cur.to == ch) {
      if (cur.from != cur.to && sticky == "before") found = i
      else bidiOther = i
    }
    if (cur.from == ch) {
      if (cur.from != cur.to && sticky != "before") found = i
      else bidiOther = i
    }
  }
  return found != null ? found : bidiOther
}

// Bidirectional ordering algorithm
// See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
// that this (partially) implements.

// One-char codes used for character types:
// L (L):   Left-to-Right
// R (R):   Right-to-Left
// r (AL):  Right-to-Left Arabic
// 1 (EN):  European Number
// + (ES):  European Number Separator
// % (ET):  European Number Terminator
// n (AN):  Arabic Number
// , (CS):  Common Number Separator
// m (NSM): Non-Spacing Mark
// b (BN):  Boundary Neutral
// s (B):   Paragraph Separator
// t (S):   Segment Separator
// w (WS):  Whitespace
// N (ON):  Other Neutrals

// Returns null if characters are ordered as they appear
// (left-to-right), or an array of sections ({from, to, level}
// objects) in the order in which they occur visually.
let bidiOrdering = (function() {
  // Character types for codepoints 0 to 0xff
  let lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
  // Character types for codepoints 0x600 to 0x6f9
  let arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"
  function charType(code) {
    if (code <= 0xf7) return lowTypes.charAt(code)
    else if (0x590 <= code && code <= 0x5f4) return "R"
    else if (0x600 <= code && code <= 0x6f9) return arabicTypes.charAt(code - 0x600)
    else if (0x6ee <= code && code <= 0x8ac) return "r"
    else if (0x2000 <= code && code <= 0x200b) return "w"
    else if (code == 0x200c) return "b"
    else return "L"
  }

  let bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
  let isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/

  function BidiSpan(level, from, to) {
    this.level = level
    this.from = from; this.to = to
  }

  return function(str, direction) {
    let outerType = direction == "ltr" ? "L" : "R"

    if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) return false
    let len = str.length, types = []
    for (let i = 0; i < len; ++i)
      types.push(charType(str.charCodeAt(i)))

    // W1. Examine each non-spacing mark (NSM) in the level run, and
    // change the type of the NSM to the type of the previous
    // character. If the NSM is at the start of the level run, it will
    // get the type of sor.
    for (let i = 0, prev = outerType; i < len; ++i) {
      let type = types[i]
      if (type == "m") types[i] = prev
      else prev = type
    }

    // W2. Search backwards from each instance of a European number
    // until the first strong type (R, L, AL, or sor) is found. If an
    // AL is found, change the type of the European number to Arabic
    // number.
    // W3. Change all ALs to R.
    for (let i = 0, cur = outerType; i < len; ++i) {
      let type = types[i]
      if (type == "1" && cur == "r") types[i] = "n"
      else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R" }
    }

    // W4. A single European separator between two European numbers
    // changes to a European number. A single common separator between
    // two numbers of the same type changes to that type.
    for (let i = 1, prev = types[0]; i < len - 1; ++i) {
      let type = types[i]
      if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1"
      else if (type == "," && prev == types[i+1] &&
               (prev == "1" || prev == "n")) types[i] = prev
      prev = type
    }

    // W5. A sequence of European terminators adjacent to European
    // numbers changes to all European numbers.
    // W6. Otherwise, separators and terminators change to Other
    // Neutral.
    for (let i = 0; i < len; ++i) {
      let type = types[i]
      if (type == ",") types[i] = "N"
      else if (type == "%") {
        let end
        for (end = i + 1; end < len && types[end] == "%"; ++end) {}
        let replace = (i && types[i-1] == "!") || (end < len && types[end] == "1") ? "1" : "N"
        for (let j = i; j < end; ++j) types[j] = replace
        i = end - 1
      }
    }

    // W7. Search backwards from each instance of a European number
    // until the first strong type (R, L, or sor) is found. If an L is
    // found, then change the type of the European number to L.
    for (let i = 0, cur = outerType; i < len; ++i) {
      let type = types[i]
      if (cur == "L" && type == "1") types[i] = "L"
      else if (isStrong.test(type)) cur = type
    }

    // N1. A sequence of neutrals takes the direction of the
    // surrounding strong text if the text on both sides has the same
    // direction. European and Arabic numbers act as if they were R in
    // terms of their influence on neutrals. Start-of-level-run (sor)
    // and end-of-level-run (eor) are used at level run boundaries.
    // N2. Any remaining neutrals take the embedding direction.
    for (let i = 0; i < len; ++i) {
      if (isNeutral.test(types[i])) {
        let end
        for (end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
        let before = (i ? types[i-1] : outerType) == "L"
        let after = (end < len ? types[end] : outerType) == "L"
        let replace = before == after ? (before ? "L" : "R") : outerType
        for (let j = i; j < end; ++j) types[j] = replace
        i = end - 1
      }
    }

    // Here we depart from the documented algorithm, in order to avoid
    // building up an actual levels array. Since there are only three
    // levels (0, 1, 2) in an implementation that doesn't take
    // explicit embedding into account, we can build up the order on
    // the fly, without following the level-based algorithm.
    let order = [], m
    for (let i = 0; i < len;) {
      if (countsAsLeft.test(types[i])) {
        let start = i
        for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
        order.push(new BidiSpan(0, start, i))
      } else {
        let pos = i, at = order.length
        for (++i; i < len && types[i] != "L"; ++i) {}
        for (let j = pos; j < i;) {
          if (countsAsNum.test(types[j])) {
            if (pos < j) order.splice(at, 0, new BidiSpan(1, pos, j))
            let nstart = j
            for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
            order.splice(at, 0, new BidiSpan(2, nstart, j))
            pos = j
          } else ++j
        }
        if (pos < i) order.splice(at, 0, new BidiSpan(1, pos, i))
      }
    }
    if (direction == "ltr") {
      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
        order[0].from = m[0].length
        order.unshift(new BidiSpan(0, 0, m[0].length))
      }
      if (Object(_misc_js__WEBPACK_IMPORTED_MODULE_0__["lst"])(order).level == 1 && (m = str.match(/\s+$/))) {
        Object(_misc_js__WEBPACK_IMPORTED_MODULE_0__["lst"])(order).to -= m[0].length
        order.push(new BidiSpan(0, len - m[0].length, len))
      }
    }

    return direction == "rtl" ? order.reverse() : order
  }
})()

// Get the bidi ordering for the given line (and cache it). Returns
// false for lines that are fully left-to-right, and an array of
// BidiSpan objects otherwise.
function getOrder(line, direction) {
  let order = line.order
  if (order == null) order = line.order = bidiOrdering(line.text, direction)
  return order
}


/***/ }),

/***/ "./node_modules/codemirror/src/util/browser.js":
/*!*****************************************************!*\
  !*** ./node_modules/codemirror/src/util/browser.js ***!
  \*****************************************************/
/*! exports provided: gecko, ie, ie_version, webkit, chrome, presto, safari, mac_geMountainLion, phantom, ios, android, mobile, mac, chromeOS, windows, flipCtrlCmd, captureRightClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gecko", function() { return gecko; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ie", function() { return ie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ie_version", function() { return ie_version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webkit", function() { return webkit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chrome", function() { return chrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presto", function() { return presto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safari", function() { return safari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mac_geMountainLion", function() { return mac_geMountainLion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phantom", function() { return phantom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ios", function() { return ios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "android", function() { return android; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobile", function() { return mobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mac", function() { return mac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chromeOS", function() { return chromeOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windows", function() { return windows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipCtrlCmd", function() { return flipCtrlCmd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureRightClick", function() { return captureRightClick; });
// Kludges for bugs and behavior differences that can't be feature
// detected are enabled based on userAgent etc sniffing.
let userAgent = navigator.userAgent
let platform = navigator.platform

let gecko = /gecko\/\d/i.test(userAgent)
let ie_upto10 = /MSIE \d/.test(userAgent)
let ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent)
let edge = /Edge\/(\d+)/.exec(userAgent)
let ie = ie_upto10 || ie_11up || edge
let ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1])
let webkit = !edge && /WebKit\//.test(userAgent)
let qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent)
let chrome = !edge && /Chrome\//.test(userAgent)
let presto = /Opera\//.test(userAgent)
let safari = /Apple Computer/.test(navigator.vendor)
let mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent)
let phantom = /PhantomJS/.test(userAgent)

let ios = !edge && /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent)
let android = /Android/.test(userAgent)
// This is woefully incomplete. Suggestions for alternative methods welcome.
let mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent)
let mac = ios || /Mac/.test(platform)
let chromeOS = /\bCrOS\b/.test(userAgent)
let windows = /win/i.test(platform)

let presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/)
if (presto_version) presto_version = Number(presto_version[1])
if (presto_version && presto_version >= 15) { presto = false; webkit = true }
// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
let flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11))
let captureRightClick = gecko || (ie && ie_version >= 9)


/***/ }),

/***/ "./node_modules/codemirror/src/util/dom.js":
/*!*************************************************!*\
  !*** ./node_modules/codemirror/src/util/dom.js ***!
  \*************************************************/
/*! exports provided: classTest, rmClass, removeChildren, removeChildrenAndAdd, elt, eltP, range, contains, activeElt, addClass, joinClasses, selectInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classTest", function() { return classTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rmClass", function() { return rmClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChildren", function() { return removeChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChildrenAndAdd", function() { return removeChildrenAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elt", function() { return elt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eltP", function() { return eltP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeElt", function() { return activeElt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinClasses", function() { return joinClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInput", function() { return selectInput; });
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.js */ "./node_modules/codemirror/src/util/browser.js");


function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

let rmClass = function(node, cls) {
  let current = node.className
  let match = classTest(cls).exec(current)
  if (match) {
    let after = current.slice(match.index + match[0].length)
    node.className = current.slice(0, match.index) + (after ? match[1] + after : "")
  }
}

function removeChildren(e) {
  for (let count = e.childNodes.length; count > 0; --count)
    e.removeChild(e.firstChild)
  return e
}

function removeChildrenAndAdd(parent, e) {
  return removeChildren(parent).appendChild(e)
}

function elt(tag, content, className, style) {
  let e = document.createElement(tag)
  if (className) e.className = className
  if (style) e.style.cssText = style
  if (typeof content == "string") e.appendChild(document.createTextNode(content))
  else if (content) for (let i = 0; i < content.length; ++i) e.appendChild(content[i])
  return e
}
// wrapper for elt, which removes the elt from the accessibility tree
function eltP(tag, content, className, style) {
  let e = elt(tag, content, className, style)
  e.setAttribute("role", "presentation")
  return e
}

let range
if (document.createRange) range = function(node, start, end, endNode) {
  let r = document.createRange()
  r.setEnd(endNode || node, end)
  r.setStart(node, start)
  return r
}
else range = function(node, start, end) {
  let r = document.body.createTextRange()
  try { r.moveToElementText(node.parentNode) }
  catch(e) { return r }
  r.collapse(true)
  r.moveEnd("character", end)
  r.moveStart("character", start)
  return r
}

function contains(parent, child) {
  if (child.nodeType == 3) // Android browser always returns false when child is a textnode
    child = child.parentNode
  if (parent.contains)
    return parent.contains(child)
  do {
    if (child.nodeType == 11) child = child.host
    if (child == parent) return true
  } while (child = child.parentNode)
}

function activeElt() {
  // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
  // IE < 10 will throw when accessed while the page is loading or in an iframe.
  // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
  let activeElement
  try {
    activeElement = document.activeElement
  } catch(e) {
    activeElement = document.body || null
  }
  while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
    activeElement = activeElement.shadowRoot.activeElement
  return activeElement
}

function addClass(node, cls) {
  let current = node.className
  if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls
}
function joinClasses(a, b) {
  let as = a.split(" ")
  for (let i = 0; i < as.length; i++)
    if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i]
  return b
}

let selectInput = function(node) { node.select() }
if (_browser_js__WEBPACK_IMPORTED_MODULE_0__["ios"]) // Mobile Safari apparently has a bug where select() is broken.
  selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length }
else if (_browser_js__WEBPACK_IMPORTED_MODULE_0__["ie"]) // Suppress mysterious IE10 errors
  selectInput = function(node) { try { node.select() } catch(_e) {} }


/***/ }),

/***/ "./node_modules/codemirror/src/util/event.js":
/*!***************************************************!*\
  !*** ./node_modules/codemirror/src/util/event.js ***!
  \***************************************************/
/*! exports provided: on, getHandlers, off, signal, signalDOMEvent, signalCursorActivity, hasHandler, eventMixin, e_preventDefault, e_stopPropagation, e_defaultPrevented, e_stop, e_target, e_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHandlers", function() { return getHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signal", function() { return signal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalDOMEvent", function() { return signalDOMEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalCursorActivity", function() { return signalCursorActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasHandler", function() { return hasHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventMixin", function() { return eventMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e_preventDefault", function() { return e_preventDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e_stopPropagation", function() { return e_stopPropagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e_defaultPrevented", function() { return e_defaultPrevented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e_stop", function() { return e_stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e_target", function() { return e_target; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e_button", function() { return e_button; });
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.js */ "./node_modules/codemirror/src/util/browser.js");
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc.js */ "./node_modules/codemirror/src/util/misc.js");



// EVENT HANDLING

// Lightweight event framework. on/off also work on DOM nodes,
// registering native DOM handlers.

const noHandlers = []

let on = function(emitter, type, f) {
  if (emitter.addEventListener) {
    emitter.addEventListener(type, f, false)
  } else if (emitter.attachEvent) {
    emitter.attachEvent("on" + type, f)
  } else {
    let map = emitter._handlers || (emitter._handlers = {})
    map[type] = (map[type] || noHandlers).concat(f)
  }
}

function getHandlers(emitter, type) {
  return emitter._handlers && emitter._handlers[type] || noHandlers
}

function off(emitter, type, f) {
  if (emitter.removeEventListener) {
    emitter.removeEventListener(type, f, false)
  } else if (emitter.detachEvent) {
    emitter.detachEvent("on" + type, f)
  } else {
    let map = emitter._handlers, arr = map && map[type]
    if (arr) {
      let index = Object(_misc_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(arr, f)
      if (index > -1)
        map[type] = arr.slice(0, index).concat(arr.slice(index + 1))
    }
  }
}

function signal(emitter, type /*, values...*/) {
  let handlers = getHandlers(emitter, type)
  if (!handlers.length) return
  let args = Array.prototype.slice.call(arguments, 2)
  for (let i = 0; i < handlers.length; ++i) handlers[i].apply(null, args)
}

// The DOM events that CodeMirror handles can be overridden by
// registering a (non-DOM) handler on the editor for the event name,
// and preventDefault-ing the event in that handler.
function signalDOMEvent(cm, e, override) {
  if (typeof e == "string")
    e = {type: e, preventDefault: function() { this.defaultPrevented = true }}
  signal(cm, override || e.type, cm, e)
  return e_defaultPrevented(e) || e.codemirrorIgnore
}

function signalCursorActivity(cm) {
  let arr = cm._handlers && cm._handlers.cursorActivity
  if (!arr) return
  let set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = [])
  for (let i = 0; i < arr.length; ++i) if (Object(_misc_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(set, arr[i]) == -1)
    set.push(arr[i])
}

function hasHandler(emitter, type) {
  return getHandlers(emitter, type).length > 0
}

// Add on and off methods to a constructor's prototype, to make
// registering events on such objects more convenient.
function eventMixin(ctor) {
  ctor.prototype.on = function(type, f) {on(this, type, f)}
  ctor.prototype.off = function(type, f) {off(this, type, f)}
}

// Due to the fact that we still support jurassic IE versions, some
// compatibility wrappers are needed.

function e_preventDefault(e) {
  if (e.preventDefault) e.preventDefault()
  else e.returnValue = false
}
function e_stopPropagation(e) {
  if (e.stopPropagation) e.stopPropagation()
  else e.cancelBubble = true
}
function e_defaultPrevented(e) {
  return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
}
function e_stop(e) {e_preventDefault(e); e_stopPropagation(e)}

function e_target(e) {return e.target || e.srcElement}
function e_button(e) {
  let b = e.which
  if (b == null) {
    if (e.button & 1) b = 1
    else if (e.button & 2) b = 3
    else if (e.button & 4) b = 2
  }
  if (_browser_js__WEBPACK_IMPORTED_MODULE_0__["mac"] && e.ctrlKey && b == 1) b = 3
  return b
}


/***/ }),

/***/ "./node_modules/codemirror/src/util/feature_detection.js":
/*!***************************************************************!*\
  !*** ./node_modules/codemirror/src/util/feature_detection.js ***!
  \***************************************************************/
/*! exports provided: dragAndDrop, zeroWidthElement, hasBadBidiRects, splitLinesAuto, hasSelection, hasCopyEvent, hasBadZoomedRects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragAndDrop", function() { return dragAndDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroWidthElement", function() { return zeroWidthElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBadBidiRects", function() { return hasBadBidiRects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitLinesAuto", function() { return splitLinesAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSelection", function() { return hasSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCopyEvent", function() { return hasCopyEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBadZoomedRects", function() { return hasBadZoomedRects; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/codemirror/src/util/dom.js");
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser.js */ "./node_modules/codemirror/src/util/browser.js");



// Detect drag-and-drop
let dragAndDrop = function() {
  // There is *some* kind of drag-and-drop support in IE6-8, but I
  // couldn't get it to work yet.
  if (_browser_js__WEBPACK_IMPORTED_MODULE_1__["ie"] && _browser_js__WEBPACK_IMPORTED_MODULE_1__["ie_version"] < 9) return false
  let div = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])('div')
  return "draggable" in div || "dragDrop" in div
}()

let zwspSupported
function zeroWidthElement(measure) {
  if (zwspSupported == null) {
    let test = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])("span", "\u200b")
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeChildrenAndAdd"])(measure, Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])("span", [test, document.createTextNode("x")]))
    if (measure.firstChild.offsetHeight != 0)
      zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(_browser_js__WEBPACK_IMPORTED_MODULE_1__["ie"] && _browser_js__WEBPACK_IMPORTED_MODULE_1__["ie_version"] < 8)
  }
  let node = zwspSupported ? Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])("span", "\u200b") :
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px")
  node.setAttribute("cm-text", "")
  return node
}

// Feature-detect IE's crummy client rect reporting for bidi text
let badBidiRects
function hasBadBidiRects(measure) {
  if (badBidiRects != null) return badBidiRects
  let txt = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeChildrenAndAdd"])(measure, document.createTextNode("A\u062eA"))
  let r0 = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["range"])(txt, 0, 1).getBoundingClientRect()
  let r1 = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["range"])(txt, 1, 2).getBoundingClientRect()
  Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeChildren"])(measure)
  if (!r0 || r0.left == r0.right) return false // Safari returns null in some cases (#2780)
  return badBidiRects = (r1.right - r0.right < 3)
}

// See if "".split is the broken IE version, if so, provide an
// alternative way to split lines.
let splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? string => {
  let pos = 0, result = [], l = string.length
  while (pos <= l) {
    let nl = string.indexOf("\n", pos)
    if (nl == -1) nl = string.length
    let line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl)
    let rt = line.indexOf("\r")
    if (rt != -1) {
      result.push(line.slice(0, rt))
      pos += rt + 1
    } else {
      result.push(line)
      pos = nl + 1
    }
  }
  return result
} : string => string.split(/\r\n?|\n/)

let hasSelection = window.getSelection ? te => {
  try { return te.selectionStart != te.selectionEnd }
  catch(e) { return false }
} : te => {
  let range
  try {range = te.ownerDocument.selection.createRange()}
  catch(e) {}
  if (!range || range.parentElement() != te) return false
  return range.compareEndPoints("StartToEnd", range) != 0
}

let hasCopyEvent = (() => {
  let e = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])("div")
  if ("oncopy" in e) return true
  e.setAttribute("oncopy", "return;")
  return typeof e.oncopy == "function"
})()

let badZoomedRects = null
function hasBadZoomedRects(measure) {
  if (badZoomedRects != null) return badZoomedRects
  let node = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeChildrenAndAdd"])(measure, Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["elt"])("span", "x"))
  let normal = node.getBoundingClientRect()
  let fromRange = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["range"])(node, 0, 1).getBoundingClientRect()
  return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
}


/***/ }),

/***/ "./node_modules/codemirror/src/util/misc.js":
/*!**************************************************!*\
  !*** ./node_modules/codemirror/src/util/misc.js ***!
  \**************************************************/
/*! exports provided: bind, copyObj, countColumn, Delayed, indexOf, scrollerGap, Pass, sel_dontScroll, sel_mouse, sel_move, findColumn, spaceStr, lst, map, insertSorted, createObj, isWordCharBasic, isWordChar, isEmpty, isExtendingChar, skipExtendingChars, findFirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyObj", function() { return copyObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countColumn", function() { return countColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delayed", function() { return Delayed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollerGap", function() { return scrollerGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pass", function() { return Pass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sel_dontScroll", function() { return sel_dontScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sel_mouse", function() { return sel_mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sel_move", function() { return sel_move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findColumn", function() { return findColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceStr", function() { return spaceStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lst", function() { return lst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertSorted", function() { return insertSorted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObj", function() { return createObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWordCharBasic", function() { return isWordCharBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWordChar", function() { return isWordChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExtendingChar", function() { return isExtendingChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipExtendingChars", function() { return skipExtendingChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFirst", function() { return findFirst; });
function bind(f) {
  let args = Array.prototype.slice.call(arguments, 1)
  return function(){return f.apply(null, args)}
}

function copyObj(obj, target, overwrite) {
  if (!target) target = {}
  for (let prop in obj)
    if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
      target[prop] = obj[prop]
  return target
}

// Counts the column offset in a string, taking tabs into account.
// Used mostly to find indentation.
function countColumn(string, end, tabSize, startIndex, startValue) {
  if (end == null) {
    end = string.search(/[^\s\u00a0]/)
    if (end == -1) end = string.length
  }
  for (let i = startIndex || 0, n = startValue || 0;;) {
    let nextTab = string.indexOf("\t", i)
    if (nextTab < 0 || nextTab >= end)
      return n + (end - i)
    n += nextTab - i
    n += tabSize - (n % tabSize)
    i = nextTab + 1
  }
}

class Delayed {
  constructor() {this.id = null}
  set(ms, f) {
    clearTimeout(this.id)
    this.id = setTimeout(f, ms)
  }
}

function indexOf(array, elt) {
  for (let i = 0; i < array.length; ++i)
    if (array[i] == elt) return i
  return -1
}

// Number of pixels added to scroller and sizer to hide scrollbar
let scrollerGap = 30

// Returned or thrown by various protocols to signal 'I'm not
// handling this'.
let Pass = {toString: function(){return "CodeMirror.Pass"}}

// Reused option objects for setSelection & friends
let sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"}

// The inverse of countColumn -- find the offset that corresponds to
// a particular column.
function findColumn(string, goal, tabSize) {
  for (let pos = 0, col = 0;;) {
    let nextTab = string.indexOf("\t", pos)
    if (nextTab == -1) nextTab = string.length
    let skipped = nextTab - pos
    if (nextTab == string.length || col + skipped >= goal)
      return pos + Math.min(skipped, goal - col)
    col += nextTab - pos
    col += tabSize - (col % tabSize)
    pos = nextTab + 1
    if (col >= goal) return pos
  }
}

let spaceStrs = [""]
function spaceStr(n) {
  while (spaceStrs.length <= n)
    spaceStrs.push(lst(spaceStrs) + " ")
  return spaceStrs[n]
}

function lst(arr) { return arr[arr.length-1] }

function map(array, f) {
  let out = []
  for (let i = 0; i < array.length; i++) out[i] = f(array[i], i)
  return out
}

function insertSorted(array, value, score) {
  let pos = 0, priority = score(value)
  while (pos < array.length && score(array[pos]) <= priority) pos++
  array.splice(pos, 0, value)
}

function nothing() {}

function createObj(base, props) {
  let inst
  if (Object.create) {
    inst = Object.create(base)
  } else {
    nothing.prototype = base
    inst = new nothing()
  }
  if (props) copyObj(props, inst)
  return inst
}

let nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
function isWordCharBasic(ch) {
  return /\w/.test(ch) || ch > "\x80" &&
    (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
}
function isWordChar(ch, helper) {
  if (!helper) return isWordCharBasic(ch)
  if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) return true
  return helper.test(ch)
}

function isEmpty(obj) {
  for (let n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false
  return true
}

// Extending unicode characters. A series of a non-extending char +
// any number of extending chars is treated as a single unit as far
// as editing and measuring is concerned. This is not fully correct,
// since some scripts/fonts/browsers also treat other configurations
// of code points as a group.
let extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

// Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
function skipExtendingChars(str, pos, dir) {
  while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) pos += dir
  return pos
}

// Returns the value from the range [`from`; `to`] that satisfies
// `pred` and is closest to `from`. Assumes that at least `to`
// satisfies `pred`. Supports `from` being greater than `to`.
function findFirst(pred, from, to) {
  // At any point we are certain `to` satisfies `pred`, don't know
  // whether `from` does.
  let dir = from > to ? -1 : 1
  for (;;) {
    if (from == to) return from
    let midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF)
    if (mid == from) return pred(mid) ? from : to
    if (pred(mid)) to = mid
    else from = mid + dir
  }
}


/***/ }),

/***/ "./node_modules/codemirror/src/util/operation_group.js":
/*!*************************************************************!*\
  !*** ./node_modules/codemirror/src/util/operation_group.js ***!
  \*************************************************************/
/*! exports provided: pushOperation, finishOperation, signalLater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushOperation", function() { return pushOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishOperation", function() { return finishOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalLater", function() { return signalLater; });
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ "./node_modules/codemirror/src/util/event.js");


let operationGroup = null

function pushOperation(op) {
  if (operationGroup) {
    operationGroup.ops.push(op)
  } else {
    op.ownsGroup = operationGroup = {
      ops: [op],
      delayedCallbacks: []
    }
  }
}

function fireCallbacksForOps(group) {
  // Calls delayed callbacks and cursorActivity handlers until no
  // new ones appear
  let callbacks = group.delayedCallbacks, i = 0
  do {
    for (; i < callbacks.length; i++)
      callbacks[i].call(null)
    for (let j = 0; j < group.ops.length; j++) {
      let op = group.ops[j]
      if (op.cursorActivityHandlers)
        while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
          op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm)
    }
  } while (i < callbacks.length)
}

function finishOperation(op, endCb) {
  let group = op.ownsGroup
  if (!group) return

  try { fireCallbacksForOps(group) }
  finally {
    operationGroup = null
    endCb(group)
  }
}

let orphanDelayedCallbacks = null

// Often, we want to signal events at a point where we are in the
// middle of some work, but don't want the handler to start calling
// other methods on the editor, which might be in an inconsistent
// state or simply not expect any other events to happen.
// signalLater looks whether there are any handlers, and schedules
// them to be executed when the last operation ends, or, if no
// operation is active, when a timeout fires.
function signalLater(emitter, type /*, values...*/) {
  let arr = Object(_event_js__WEBPACK_IMPORTED_MODULE_0__["getHandlers"])(emitter, type)
  if (!arr.length) return
  let args = Array.prototype.slice.call(arguments, 2), list
  if (operationGroup) {
    list = operationGroup.delayedCallbacks
  } else if (orphanDelayedCallbacks) {
    list = orphanDelayedCallbacks
  } else {
    list = orphanDelayedCallbacks = []
    setTimeout(fireOrphanDelayed, 0)
  }
  for (let i = 0; i < arr.length; ++i)
    list.push(() => arr[i].apply(null, args))
}

function fireOrphanDelayed() {
  let delayed = orphanDelayedCallbacks
  orphanDelayedCallbacks = null
  for (let i = 0; i < delayed.length; ++i) delayed[i]()
}


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.slim.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/dist/jquery.slim.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./src/codemirror-addon-mode-simple.js":
/*!*********************************************!*\
  !*** ./src/codemirror-addon-mode-simple.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Adjusted copy of addon/mode/simple.js
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  mod(CodeMirror)
})(function(CodeMirror) {
  "use strict"

  CodeMirror.defineSimpleMode = function(name, states) {
    CodeMirror.defineMode(name, function(config) {
      return CodeMirror.simpleMode(config, states)
    })
  }

  CodeMirror.simpleMode = function(config, states) {
    ensureState(states, "start")
    var states_ = {}, meta = states.meta || {}, hasIndentation = false
    for (var state in states) if (state != meta && states.hasOwnProperty(state)) {
      var list = states_[state] = [], orig = states[state]
      for (var i = 0; i < orig.length; i++) {
        var data = orig[i]
        list.push(new Rule(data, states))
        if (data.indent || data.dedent) hasIndentation = true
      }
    }
    var mode = {
      startState: function() {
        return {state: "start", pending: null,
          local: null, localState: null,
          indent: hasIndentation ? [] : null}
      },
      copyState: function(state) {
        var s = {state: state.state, pending: state.pending,
          local: state.local, localState: null,
          indent: state.indent && state.indent.slice(0)}
        if (state.localState)
          s.localState = CodeMirror.copyState(state.local.mode, state.localState)
        if (state.stack)
          s.stack = state.stack.slice(0)
        for (var pers = state.persistentStates; pers; pers = pers.next)
          s.persistentStates = {mode: pers.mode,
            spec: pers.spec,
            state: pers.state == state.localState ? s.localState : CodeMirror.copyState(pers.mode, pers.state),
            next: s.persistentStates}
        return s
      },
      token: tokenFunction(states_, config),
      innerMode: function(state) { return state.local && {mode: state.local.mode, state: state.localState} },
      indent: indentFunction(states_, meta)
    }
    if (meta) for (var prop in meta) if (meta.hasOwnProperty(prop))
      mode[prop] = meta[prop]
    return mode
  }

  function ensureState(states, name) {
    if (!states.hasOwnProperty(name))
      throw new Error("Undefined state " + name + " in simple mode")
  }

  function toRegex(val, caret) {
    if (!val) return /(?:)/
    var flags = ""
    if (val instanceof RegExp) {
      if (val.ignoreCase) flags = "i"
      val = val.source
    } else {
      val = String(val)
    }
    return new RegExp((caret === false ? "" : "^") + "(?:" + val + ")", flags)
  }

  function asToken(val) {
    if (!val) return null
    if (val.apply) return val
    if (typeof val == "string") return val.replace(/\./g, " ")
    var result = []
    for (var i = 0; i < val.length; i++)
      result.push(val[i] && val[i].replace(/\./g, " "))
    return result
  }

  function Rule(data, states) {
    if (data.next || data.push) ensureState(states, data.next || data.push)
    this.regex = toRegex(data.regex)
    this.token = asToken(data.token)
    this.data = data
  }

  function tokenFunction(states, config) {
    return function(stream, state) {
      if (state.pending) {
        var pend = state.pending.shift()
        if (state.pending.length == 0) state.pending = null
        stream.pos += pend.text.length
        return pend.token
      }

      if (state.local) {
        if (state.local.end && stream.match(state.local.end)) {
          let tok = state.local.endToken || null
          state.local = state.localState = null
          return tok
        } else {
          let tok = state.local.mode.token(stream, state.localState), m
          if (state.local.endScan && (m = state.local.endScan.exec(stream.current())))
            stream.pos = stream.start + m.index
          return tok
        }
      }

      var curState = states[state.state]
      for (var i = 0; i < curState.length; i++) {
        var rule = curState[i]
        var matches = (!rule.data.sol || stream.sol()) && stream.match(rule.regex)
        if (matches) {
          if (rule.data.next) {
            state.state = rule.data.next
          } else if (rule.data.push) {
            (state.stack || (state.stack = [])).push(state.state)
            state.state = rule.data.push
          } else if (rule.data.pop && state.stack && state.stack.length) {
            state.state = state.stack.pop()
          }

          if (rule.data.mode)
            enterLocalMode(config, state, rule.data.mode, rule.token)
          if (rule.data.indent)
            state.indent.push(stream.indentation() + config.indentUnit)
          if (rule.data.dedent)
            state.indent.pop()
          var token = rule.token
          if (token && token.apply) token = token(matches)
          if (matches.length > 2 && rule.token && typeof rule.token != "string") {
            state.pending = []
            for (var j = 2; j < matches.length; j++)
              if (matches[j])
                state.pending.push({text: matches[j], token: rule.token[j - 1]})
            stream.backUp(matches[0].length - (matches[1] ? matches[1].length : 0))
            return token[0]
          } else if (token && token.join) {
            return token[0]
          } else {
            return token
          }
        }
      }
      stream.next()
      return null
    }
  }

  function cmp(a, b) {
    if (a === b) return true
    if (!a || typeof a != "object" || !b || typeof b != "object") return false
    var props = 0
    for (let prop in a) if (a.hasOwnProperty(prop)) {
      if (!b.hasOwnProperty(prop) || !cmp(a[prop], b[prop])) return false
      props++
    }
    for (let prop in b) if (b.hasOwnProperty(prop)) props--
    return props == 0
  }

  function enterLocalMode(config, state, spec, token) {
    var pers
    if (spec.persistent) for (var p = state.persistentStates; p && !pers; p = p.next)
      if (spec.spec ? cmp(spec.spec, p.spec) : spec.mode == p.mode) pers = p
    var mode = pers ? pers.mode : spec.mode || CodeMirror.getMode(config, spec.spec)
    var lState = pers ? pers.state : CodeMirror.startState(mode)
    if (spec.persistent && !pers)
      state.persistentStates = {mode: mode, spec: spec.spec, state: lState, next: state.persistentStates}

    state.localState = lState
    state.local = {mode: mode,
      end: spec.end && toRegex(spec.end),
      endScan: spec.end && spec.forceEnd !== false && toRegex(spec.end, false),
      endToken: token && token.join ? token[token.length - 1] : token}
  }

  function indexOf(val, arr) {
    for (var i = 0; i < arr.length; i++) if (arr[i] === val) return true
  }

  function indentFunction(states, meta) {
    return function(state, textAfter, line) {
      if (state.local && state.local.mode.indent)
        return state.local.mode.indent(state.localState, textAfter, line)
      if (state.indent == null || state.local || meta.dontIndentStates && indexOf(state.state, meta.dontIndentStates) > -1)
        return CodeMirror.Pass

      var pos = state.indent.length - 1, rules = states[state.state]
      scan: for (;;) {
        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i]
          if (rule.data.dedent && rule.data.dedentIfLineStart !== false) {
            var m = rule.regex.exec(textAfter)
            if (m && m[0]) {
              pos--
              if (rule.next || rule.push) rules = states[rule.next || rule.push]
              textAfter = textAfter.slice(m[0].length)
              continue scan
            }
          }
        }
        break
      }
      return pos < 0 ? 0 : state.indent[pos]
    }
  }
})


/***/ }),

/***/ "./src/codemirror-global.js":
/*!**********************************!*\
  !*** ./src/codemirror-global.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror_src_codemirror_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror/src/codemirror.js */ "./node_modules/codemirror/src/codemirror.js");
// see https://github.com/codemirror/CodeMirror/issues/5403#issuecomment-392852397

window.CodeMirror = codemirror_src_codemirror_js__WEBPACK_IMPORTED_MODULE_0__["default"]


/***/ }),

/***/ "./src/spec.css":
/*!**********************!*\
  !*** ./src/spec.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/spec.js":
/*!*********************!*\
  !*** ./src/spec.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.slim.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _codemirror_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codemirror-global.js */ "./src/codemirror-global.js");
/* harmony import */ var _codemirror_addon_mode_simple_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codemirror-addon-mode-simple.js */ "./src/codemirror-addon-mode-simple.js");
/* harmony import */ var _codemirror_addon_mode_simple_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_codemirror_addon_mode_simple_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_src_codemirror_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/src/codemirror.js */ "./node_modules/codemirror/src/codemirror.js");
/* harmony import */ var _dist_mode_kukulu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dist/mode/kukulu.js */ "./dist/mode/kukulu.js");
/* harmony import */ var _dist_mode_kukulu_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dist_mode_kukulu_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _spec_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spec.css */ "./src/spec.css");
/* harmony import */ var _spec_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_spec_css__WEBPACK_IMPORTED_MODULE_7__);






// CSS




jquery__WEBPACK_IMPORTED_MODULE_0___default()(function() {
  codemirror_src_codemirror_js__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.mode = "kukulu"
  codemirror_src_codemirror_js__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.viewportMargin = Infinity
  console.log(codemirror_src_codemirror_js__WEBPACK_IMPORTED_MODULE_3__["default"].defaults)
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("pre.kukulu").each((index, pre) => {
    let code = jquery__WEBPACK_IMPORTED_MODULE_0___default()(pre).text()
    Object(codemirror_src_codemirror_js__WEBPACK_IMPORTED_MODULE_3__["default"])( elem => {
      pre.parentNode.replaceChild(elem, pre)
    }, { value: code })
  })
})


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map