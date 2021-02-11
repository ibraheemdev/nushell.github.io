(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{644:function(a,s,e){"use strict";e.r(s);var t=e(42),l=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#别名"}},[a._v("#")]),a._v(" 别名")]),a._v(" "),e("p",[a._v("Nu 编写长管道的能力可以让你对数据和系统进行大量控制，但这需要打很多字。在预想中，你可以保存写好的管道并重复使用。")]),a._v(" "),e("p",[a._v("这就是别名要做的事情。")]),a._v(" "),e("p",[a._v("一个别名让你为一个命令块创建一个较短的名字。当别名被执行时，它就表现得像你输入了完整的命令块一样。")]),a._v(" "),e("p",[a._v("例如：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("> alias ls-names [] { ls | select name }\n> ls-names\n────┬────────────────────\n #  │ name\n────┼────────────────────\n  0 │ 404.html\n  1 │ CONTRIBUTING.md\n  2 │ Gemfile\n  3 │ Gemfile.lock\n  4 │ LICENSE\n")])])]),e("h2",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("p",[a._v("别名同样可以使用传递给命令块的可选参数。它们中的每一个在块中都是新的变量。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('> alias e [msg] { echo $msg }\n> e "hello world"\nhello world\n')])])]),e("p",[a._v("可以有任意数量的参数。当用户未提供值时，块中的变量将会作为 Nothing 并被移除。")]),a._v(" "),e("h2",{attrs:{id:"持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[a._v("#")]),a._v(" 持久化")]),a._v(" "),e("p",[a._v("默认情况下，别名只在当前会话中可用。这对临时性地帮助和测试新别名有用，单如果别名已经能真正地工作了，它们就需要被持久化。要做到它，用 "),e("code",[a._v("--save")]),a._v(" （或 "),e("code",[a._v("-s")]),a._v(" 的短形式）来调用 alias 指令。例如：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("alias e --save [msg] { echo $msg }\n")])])]),e("p",[a._v("别名将被存储在启动配置文件中，你可以使用 "),e("code",[a._v("config get startup")]),a._v(" 来查看它们。如果你得到一个错误，则是 "),e("code",[a._v("startup")]),a._v(" 配置文件还不存在。")]),a._v(" "),e("p",[a._v("你同样可以直接在 config.toml 文件中编辑别名，例如使用 "),e("code",[a._v("vi")]),a._v("：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("config path | vi $it\n")])])])])}),[],!1,null,null,null);s.default=l.exports}}]);