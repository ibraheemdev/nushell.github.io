(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{562:function(e,t,a){"use strict";a.r(t);var n=a(42),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[e._v("#")]),e._v(" Files")]),e._v(" "),a("h3",{attrs:{id:"editing-a-file-and-then-saving-the-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editing-a-file-and-then-saving-the-changes"}},[e._v("#")]),e._v(" Editing a file and then saving the changes")]),e._v(" "),a("p",[e._v("Here we are making edits to "),a("code",[e._v("Cargo.toml")]),e._v(".\nWe increase the patch version of the crate using "),a("code",[e._v("inc")]),e._v(" and then save it back to the file.\nUse "),a("code",[e._v("help inc")]),e._v(" to get more information.")]),e._v(" "),a("p",[e._v("Read the file's initial contents")]),e._v(" "),a("p",[a("code",[e._v("open Cargo.toml | get package.version")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("p",[a("code",[e._v("0.5.1")])]),e._v(" "),a("p",[e._v("Make the edit to the version number and save it.")]),e._v(" "),a("p",[e._v("Nu keeps track of the file you have opened.\nYou may omit the filename argument from "),a("code",[e._v("save")]),e._v(" if you want to save the changes to the opened file.")]),e._v(" "),a("p",[a("code",[e._v("open Cargo.toml | inc package.version --patch | save")])]),e._v(" "),a("p",[e._v("Output\n"),a("em",[e._v("none")])]),e._v(" "),a("p",[e._v("View the changes we made to the file.")]),e._v(" "),a("p",[a("code",[e._v("open Cargo.toml | get package.version")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("p",[a("code",[e._v("0.5.2")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"parsing-a-file-in-a-non-standard-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parsing-a-file-in-a-non-standard-format"}},[e._v("#")]),e._v(" Parsing a file in a non-standard format")]),e._v(" "),a("p",[e._v("Suppose you have a file with the following format.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("band:album:year\nFugazi:Steady Diet of Nothing:1991\nFugazi:The Argument:2001\nFugazi:7 Songs:1988\nFugazi:Repeater:1990\nFugazi:In On The Kill Taker:1993\n")])])]),a("p",[e._v("You can parse it into a table.")]),e._v(" "),a("p",[a("code",[e._v('open bands.txt | lines | split column ":" Band Album Year | skip 1 | sort-by Year')])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━┯━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━\n # │ Band   │ Album                  │ Year\n───┼────────┼────────────────────────┼──────\n 0 │ Fugazi │ 7 Songs                │ 1988\n 1 │ Fugazi │ Repeater               │ 1990\n 2 │ Fugazi │ Steady Diet of Nothing │ 1991\n 3 │ Fugazi │ In On The Kill Taker   │ 1993\n 4 │ Fugazi │ The Argument           │ 2001\n━━━┷━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━\n")])])]),a("p",[e._v("You can alternatively do this using "),a("code",[e._v("parse")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v('open bands.txt | lines | parse "{Band}:{Album}:{Year}" | skip 1 | sort-by Year')])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"word-occurrence-count-with-ripgrep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#word-occurrence-count-with-ripgrep"}},[e._v("#")]),e._v(" Word occurrence count with Ripgrep")]),e._v(" "),a("p",[e._v('Suppose you would like to check the number of lines the string "Tagged" appears per file in the nushell project,\nthen sort those files by largest line count.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('rg -c Tagged | lines | split column ":" file line_count | str to-int line_count | sort-by line_count | reverse\n')])])]),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("───┬──────────────────────────────────────┬────────────\n # │ file                                 │ line_count\n───┼──────────────────────────────────────┼────────────\n 0 │ crates/nu-source/src/meta.rs         │         27\n 1 │ crates/nu-protocol/src/value/dict.rs │         10\n 2 │ src/commands/config.rs               │         10\n 3 │ crates/nu_plugin_sys/src/sys.rs      │         10\n 4 │ src/commands/from_bson.rs            │          9\n 5 │ src/utils/data_processing.rs         │          9\n 6 │ src/deserializer.rs                  │          8\n 7 │ src/commands/histogram.rs            │          7\n 8 │ src/commands/split_column.rs         │          6\n 9 │ src/data/dict.rs                     │          6\n───┴──────────────────────────────────────┴────────────\n... example output limited due to large output\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);