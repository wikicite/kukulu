import $ from "jquery"
import "./codemirror-global.js"
import "./codemirror-addon-mode-simple.js"
import CodeMirror from "codemirror/src/codemirror.js"
import "../dist/mode/kukulu.js"

// CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "codemirror/lib/codemirror.css"
import "./spec.css"

$(function() {
  CodeMirror.defaults.mode = "kukulu"
  CodeMirror.defaults.viewportMargin = Infinity
  console.log(CodeMirror.defaults)
  $("pre.kukulu").each((index, pre) => {
    let code = $(pre).text()
    CodeMirror( elem => {
      pre.parentNode.replaceChild(elem, pre)
    }, { value: code })
  })
})
