(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{437:function(e,a,t){"use strict";t.r(a);var s=t(42),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"nushell-0-25"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-25"}},[e._v("#")]),e._v(" Nushell 0.25")]),e._v(" "),t("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),t("p",[e._v("Today, we're releasing 0.25 of Nu. It's one of the largest releases we've ever done. With it Nushell grows from being a shell to being a full scripting language as well.\n")]),e._v(" "),t("h1",{attrs:{id:"where-to-get-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),t("p",[e._v("Nu 0.25 is available as "),t("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.25.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),t("OutboundLink")],1),e._v(" or from "),t("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),t("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),t("p",[e._v("If you want all the goodies, you can install "),t("code",[e._v("cargo install nu --features=extra")]),e._v(".")]),e._v(" "),t("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),t("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),t("h1",{attrs:{id:"what-s-new"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),t("p",[e._v("Lots of new features in this release. If you'd like to watch a demonstration, we can also watch a "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=PO6EW7_a1tE",target:"_blank",rel:"noopener noreferrer"}},[e._v("video showing off the new features"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"custom-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-commands"}},[e._v("#")]),e._v(" Custom commands")]),e._v(" "),t("p",[e._v("A long-requested feature for Nushell is to have scripting capability. A key piece of this story is the ability to make your own commands in addition to those built into Nu.")]),e._v(" "),t("p",[e._v("With 0.25, you can now make your own custom commands:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("def add [x, y] {\n    = $x + $y\n}\n\nadd 1 5\n")])])]),t("p",[e._v("The definitions are created in the scope where you define them, and are visible before any of the script body runs. This allows you to have written the above like so:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("add 1 5\n\ndef add [x, y] {\n    = $x + $y\n}\n")])])]),t("p",[e._v("There are a few other important features of custom commands. The first is that you can optionally add a type annotation to each parameter you take in. These type annotations tell the parser how to parse arguments given to the function and tell the type checker what is allowed to be passed in.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('def add [x:int, y] {\n    = $x + $y\n}\n\nadd "bob" 4\n')])])]),t("p",[e._v("Now if you run the example, you'll see a type error like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('error: Type Error\n  ┌─ shell:5:5\n  │\n5 │ add "bob" 4\n  │     ^^^^^ Expected int, found "bob"\n')])])]),t("p",[e._v("Here's a list of the types that are allowed:")]),e._v(" "),t("ul",[t("li",[e._v("int - an integer")]),e._v(" "),t("li",[e._v("string - a string")]),e._v(" "),t("li",[e._v("path - a filepath")]),e._v(" "),t("li",[e._v("table - a table")]),e._v(" "),t("li",[e._v("unit - a number with a unit (like "),t("code",[e._v("10kb")]),e._v(")")]),e._v(" "),t("li",[e._v("number - an integer or decimal number")]),e._v(" "),t("li",[e._v("pattern - a glob pattern (like "),t("code",[e._v("foo*")]),e._v(")")]),e._v(" "),t("li",[e._v("range - a numeric range (like "),t("code",[e._v("1..10")]),e._v(")")]),e._v(" "),t("li",[e._v("block - a code block (like "),t("code",[e._v("{ ls }")]),e._v(")")]),e._v(" "),t("li",[e._v("any - any of the above types (this is assumed if you leave off the type)")])]),e._v(" "),t("p",[t("em",[e._v("Note: Nushell is whitespace-significant, so the variable + ':' + type need to be united as one, without spaces.")])]),e._v(" "),t("p",[e._v("You can also create flags for your commands:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('def create-item(name, --age:int) { ... }\n\ncreate-item "driver" --age 20\n')])])]),t("h2",{attrs:{id:"variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),t("p",[e._v("You can now also define variables using "),t("code",[e._v("let")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('let name = "Nushell"\necho $name\n')])])]),t("p",[e._v("These variables are created in the scope they're defined in.")]),e._v(" "),t("p",[e._v("If, for example, we had written this instead:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('do {\n    let $name = "Nu"\n    echo $name   # prints "Nu"\n}\necho $name       # this will fail\n')])])]),t("p",[e._v("Once we leave the block above, the "),t("code",[e._v("name")]),e._v(" variable is no longer visible.")]),e._v(" "),t("p",[e._v("These variables are "),t("strong",[e._v("immutable")]),e._v(" and need to be initialized as they are defined.")]),e._v(" "),t("p",[e._v('Along with variables, we also support "shadowing", so that you can create a variable inside of a scope, and have it "shadow" the variable of the same name outside of the scope:')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let size = 10\ndo {\n    let size = 5\n    echo $size     # prints 5\n}\necho $size         # prints 10\n")])])]),t("h2",{attrs:{id:"environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment variables")]),e._v(" "),t("p",[e._v("You can also use "),t("code",[e._v("let-env")]),e._v(" to create environment variables. Just like variables, they are created in the scope they're defined.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let-env TRACE = on\necho $nu.env.TRACE   # prints 'on'\n")])])]),t("h2",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases"}},[e._v("#")]),e._v(" Aliases")]),e._v(" "),t("p",[e._v("With 0.25, we've also changed how aliases work to be more like a text expansion, in the spirit of how aliases work in shells like Bash.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("alias ll = ls -l\nll -a\n")])])]),t("p",[e._v("This lets you alias a larger command to a smaller name, and then also pass additional arguments and flags to it.")]),e._v(" "),t("h2",{attrs:{id:"source-ing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-ing"}},[e._v("#")]),e._v(" Source-ing")]),e._v(" "),t("p",[e._v("You can now also "),t("code",[e._v("source")]),e._v(" a script, so that the definitions and code of that script runs in the current scope and context.")]),e._v(" "),t("p",[e._v("Let's say we had a file called definitions.nu:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# definitions.nu\ndef add [x, y] {\n    = x + y\n}\n")])])]),t("p",[e._v("We can later use the definitions in this file using "),t("code",[e._v("source")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("source definitions.nu\n\nadd 3 7\n")])])]),t("p",[e._v("Like variables and definitions, the definitions we "),t("code",[e._v("source")]),e._v(" are put into the current scope.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("do {\n    source definitions.nu\n    echo $(add 3 7)      # prints 10\n}\necho $(add 1 11)         # errors, `add` isn't in scope here\n")])])]),t("h2",{attrs:{id:"breaking-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking changes")]),e._v(" "),t("ul",[t("li",[e._v("Please note that the "),t("code",[e._v("alias")]),e._v(" command no longer works the same way it did pre-0.25")])]),e._v(" "),t("p",[e._v("Pre-0.25, aliases worked similarly to how "),t("code",[e._v("def")]),e._v(" works now. We used multiple arguments, and each was optional:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("alias mycmd [a b c d] { myverylongcommand $a $b $c $d }\n")])])]),t("p",[e._v("With 0.25, we no longer pass parameters to alias this way. Instead, think of the aliased name being replaced by the right hand side. To update the previous alias to 0.25, we can write:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("alias mycmd = myverylongcommand\n")])])]),t("p",[e._v("Calling "),t("code",[e._v("mycmd 1 2")]),e._v(" now expands to "),t("code",[e._v("myverylongcommand 1 2")]),e._v(" and then runs the expanded command.")]),e._v(" "),t("h2",{attrs:{id:"improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),t("ul",[t("li",[e._v("the "),t("code",[e._v("which")]),e._v(" command now shows if the name points to an alias or custom command (LhKipp)")]),e._v(" "),t("li",[e._v("you can configure the "),t("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2829",target:"_blank",rel:"noopener noreferrer"}},[e._v("style that primities are shown"),t("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),t("li",[e._v("optionally you can "),t("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2794",target:"_blank",rel:"noopener noreferrer"}},[e._v("highlight trailing spaces"),t("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),t("li",[e._v("we support comments now, using "),t("code",[e._v("#")]),e._v(" (jonathandturner)")]),e._v(" "),t("li",[e._v("better information for debugging in "),t("code",[e._v("version")]),e._v(" (gillespiecd)")]),e._v(" "),t("li",[e._v("Thanks to all those who landed general improvements too! (baoyachi, scrabsha, stormasm, max-sixty, ArturKovacs, JosephTLyons)")])]),e._v(" "),t("h1",{attrs:{id:"looking-forward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#looking-forward"}},[e._v("#")]),e._v(" Looking forward")]),e._v(" "),t("p",[e._v("This update opens a lot of doors to what's possible with Nushell. There are a few areas we'd like to explore with it: better autocompletions, describing external commands, and more. We'd also really like to hear your feedback on the release so we can continue to improve the overall experience of using Nu.")])])}),[],!1,null,null,null);a.default=n.exports}}]);