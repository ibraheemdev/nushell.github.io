(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{438:function(e,t,r){"use strict";r.r(t);var n=r(42),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"nushell-0-26"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-26"}},[e._v("#")]),e._v(" Nushell 0.26")]),e._v(" "),r("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),r("p",[e._v("Today, we're releasing 0.26 of Nu. It's a polish release with lots of improvements.")]),e._v(" "),r("h1",{attrs:{id:"where-to-get-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),r("p",[e._v("Nu 0.26 is available as "),r("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.26.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),r("OutboundLink")],1),e._v(" or from "),r("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),r("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),r("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),r("p",[e._v("If you want all the goodies, you can install "),r("code",[e._v("cargo install nu --features=extra")]),e._v(".")]),e._v(" "),r("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),r("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),r("h1",{attrs:{id:"what-s-new"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),r("h2",{attrs:{id:"rest-support-in-custom-commands-lhkipp-jonathandturner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rest-support-in-custom-commands-lhkipp-jonathandturner"}},[e._v("#")]),e._v(" Rest support in custom commands (LhKipp, jonathandturner)")]),e._v(" "),r("p",[e._v("You can now refer to a rest argument in your custom command:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("def my-cmd[...rest:int] {\n    echo $rest | math sum\n}\n")])])]),r("p",[e._v("Elements of the rest are referred to with positions, like "),r("code",[e._v("$rest.1")]),e._v(" for the 2nd position.")]),e._v(" "),r("h2",{attrs:{id:"short-flags-in-custom-commands-lhkipp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#short-flags-in-custom-commands-lhkipp"}},[e._v("#")]),e._v(" Short flags in custom commands (LhKipp)")]),e._v(" "),r("p",[e._v("You can now also added an optional shorthand flag to longhand flags:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("def foo [--bar(-b): int] {\n    echo $bar\n}\n\nfoo -b 10\nfoo --bar 10\n")])])]),r("h2",{attrs:{id:"improved-build-times-jonathandturner-stormasm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#improved-build-times-jonathandturner-stormasm"}},[e._v("#")]),e._v(" Improved build times (jonathandturner, stormasm)")]),e._v(" "),r("p",[e._v("When building from scratch, you may now notice that Nushell builds slightly faster. This comes from refactoring large crates into smaller crates and replacing some of our support crates with similar crates that compile faster.")]),e._v(" "),r("h2",{attrs:{id:"improvements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),r("p",[e._v("I hope you like improvements. We got a "),r("em",[e._v("lot")]),e._v(" of them this release.")]),e._v(" "),r("ul",[r("li",[e._v("fdcnred added support for using "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2973",target:"_blank",rel:"noopener noreferrer"}},[e._v("multi-byte chars as padding"),r("OutboundLink")],1),e._v(", improved "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2955",target:"_blank",rel:"noopener noreferrer"}},[e._v("ansi and char support"),r("OutboundLink")],1),e._v(", improved the output of "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2959",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("sys")]),r("OutboundLink")],1),e._v(", optimized some "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2937",target:"_blank",rel:"noopener noreferrer"}},[e._v("regex usage"),r("OutboundLink")],1),e._v(", removed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2924",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("set")]),e._v(" from Windows built-ins"),r("OutboundLink")],1),e._v(", added support for "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2906",target:"_blank",rel:"noopener noreferrer"}},[e._v("comparing a string and a filepath"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("JosephTLyons removed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2970",target:"_blank",rel:"noopener noreferrer"}},[e._v("unnecessary clones"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2969",target:"_blank",rel:"noopener noreferrer"}},[e._v("fixed some test macros"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("andrasio added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2965",target:"_blank",rel:"noopener noreferrer"}},[e._v("column path support to many "),r("code",[e._v("str")]),e._v(" commands"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("jonathandturner added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2964",target:"_blank",rel:"noopener noreferrer"}},[e._v("error checking for bad rows in column paths"),r("OutboundLink")],1),e._v(", added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2952",target:"_blank",rel:"noopener noreferrer"}},[e._v("proper flushing of stdout"),r("OutboundLink")],1),e._v(", split "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2898",target:"_blank",rel:"noopener noreferrer"}},[e._v("nu-cli and nu-engine"),r("OutboundLink")],1),e._v(", treat "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2890",target:"_blank",rel:"noopener noreferrer"}},[e._v("the startup commands a single script"),r("OutboundLink")],1),e._v(" which improves startup times, fixed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2893",target:"_blank",rel:"noopener noreferrer"}},[e._v("reading/writing of bigint/bigdecimal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("baoyachi updated "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2963",target:"_blank",rel:"noopener noreferrer"}},[e._v("shadow-rs support"),r("OutboundLink")],1),e._v(", removed some of the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2935",target:"_blank",rel:"noopener noreferrer"}},[e._v("git support that was no longer needed"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("kubouch added the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2953",target:"_blank",rel:"noopener noreferrer"}},[e._v("--skip flag to "),r("code",[e._v("nth")]),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("ahkrr fixed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2951",target:"_blank",rel:"noopener noreferrer"}},[e._v("variable scopes for "),r("code",[e._v("def")]),e._v(" parameters"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("brightly-salty "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2949",target:"_blank",rel:"noopener noreferrer"}},[e._v("replaces the dirs/directories supporting crates"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("jankeronmes fixed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2948",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitpod tests"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("LhKipp fixed a "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2945",target:"_blank",rel:"noopener noreferrer"}},[e._v("parser bug that prevented invocations and ranges from being parsed correctly"),r("OutboundLink")],1),e._v(", added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2939",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("def")]),e._v(" documentation"),r("OutboundLink")],1),e._v(", updated "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2925",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("alias")]),e._v(" docs"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("DivineGod moved "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2927",target:"_blank",rel:"noopener noreferrer"}},[e._v("keybinding_path to nu-data"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Gymea fixed the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2924",target:"_blank",rel:"noopener noreferrer"}},[e._v("dirs dependency in nu-engine"),r("OutboundLink")],1),e._v(", improved the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2915",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("help")]),e._v(" logic when the command does not have a description"),r("OutboundLink")],1),e._v(", fixed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2894",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("which")]),e._v(" output for aliases"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("gillespiecd added the support for "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2913",target:"_blank",rel:"noopener noreferrer"}},[e._v("reverse ranges"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("stormasm refactored "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2910",target:"_blank",rel:"noopener noreferrer"}},[e._v("nu-cli and split off commands into nu-command"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("TrevorAC99 fixed a "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2880",target:"_blank",rel:"noopener noreferrer"}},[e._v("rust-embed build breakage"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"breaking-changes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking changes")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("ps")]),e._v(" and "),r("code",[e._v("sys")]),e._v(" are now served using a "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2954",target:"_blank",rel:"noopener noreferrer"}},[e._v("different supporting crate"),r("OutboundLink")],1),e._v(". The functionality difference between the old crate and the new crate may mean a lack of fields that existed before, or different values than before (as it may be calculated differently).")]),e._v(" "),r("li",[e._v("We removed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2940",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("str set")]),r("OutboundLink")],1),e._v(". This command was one of the first of its style and has since been replaced by more general commands like "),r("code",[e._v("update")]),e._v(".")]),e._v(" "),r("li",[e._v("Internal architecture: the Primitive case for "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2887",target:"_blank",rel:"noopener noreferrer"}},[e._v("lines has been removed"),r("OutboundLink")],1),e._v(". Instead, use strings.")]),e._v(" "),r("li",[e._v("Internal architecture: the Path and Pattern primitives are now called "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2889",target:"_blank",rel:"noopener noreferrer"}},[e._v("FilePath and GlobPattern"),r("OutboundLink")],1),e._v(" respectively.")])]),e._v(" "),r("h1",{attrs:{id:"looking-forward"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#looking-forward"}},[e._v("#")]),e._v(" Looking forward")]),e._v(" "),r("p",[e._v("We've been humbled by the feedback we got on the 0.25 release and appreciate the support. Looking forward, we'll be continuing to polish the features that landed in 0.25 as we prepare for using these features in larger scripts and in custom completion logic.")])])}),[],!1,null,null,null);t.default=a.exports}}]);