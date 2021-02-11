(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{613:function(a,e,t){"use strict";t.r(e);var _=t(42),v=Object(_.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"パイプライン"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#パイプライン"}},[a._v("#")]),a._v(" パイプライン")]),a._v(" "),t("p",[a._v("Nuのコアデザインのひとつがパイプラインです。パイプラインはUnixの背後にある哲学にまでそのルーツを遡ることができるデザインアイデアです。Nuは、Unixの文字列データを拡張したように、パイプラインの概念も拡張してテキスト以外のものも扱えるようにします。")]),a._v(" "),t("h2",{attrs:{id:"基礎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基礎"}},[a._v("#")]),a._v(" 基礎")]),a._v(" "),t("p",[a._v("パイプラインは、入力、フィルター、出力の３つの部分から構成されます。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('> open "Cargo.toml" | inc package.version | save "Cargo_new.toml"\n')])])]),t("p",[a._v("最初のコマンド"),t("code",[a._v('open "Cargo.toml"')]),a._v('が入力です(しばしば"source"や"producer"と呼ばれます)。これによりデータが作成またはロードされパイプラインに送られます。パイプラインは入力から渡された値を扱います。'),t("code",[a._v("ls")]),a._v("のようなコマンドも入力です。ファイルシステムからデータを取得し、パイプラインを経由して扱えるようにするからです。")]),a._v(" "),t("p",[a._v("２番目のコマンド"),t("code",[a._v("inc package.version")]),a._v("はフィルターです。フィルターは与えられたデータをうけとると大抵の場合はなにかします。それは変更("),t("code",[a._v("inc")]),a._v("コマンドの例のように)であったり、ロギングなどの別の操作かもしれません。")]),a._v(" "),t("p",[a._v("最後のコマンド"),t("code",[a._v('save "Cargo_new.toml"')]),a._v('が出力です("sink"と呼ばれることもあります)。出力はパイプラインから入力を受け取り、最終的な操作を実行します。この例では、最終ステップとして、パイプラインを介しておくられてきたものをファイルに保存しています。他の出力コマンドとしては、値をうけとりユーザのために表示するものがあります。')]),a._v(" "),t("h2",{attrs:{id:"外部コマンドの使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外部コマンドの使用"}},[a._v("#")]),a._v(" 外部コマンドの使用")]),a._v(" "),t("p",[a._v("Nuのコマンドは互いにNuのデータ型("),t("RouterLink",{attrs:{to:"/ja/book/types_of_data.html"}},[a._v("types of data")]),a._v("を参照してください)を利用してやりとりします。しかし、Nu以外のコマンドはどうでしょうか。外部コマンドの使用例をみてみましょう。")],1),a._v(" "),t("p",[t("code",[a._v("internal_command | external_command")])]),a._v(" "),t("p",[a._v("データは内部コマンドから外部コマンドにむかって流れます。このデータは文字列であることが期待されるので、外部コマンドの"),t("code",[a._v("stdin")]),a._v("に送られます。")]),a._v(" "),t("p",[t("code",[a._v("external_command | internal_command")])]),a._v(" "),t("p",[a._v("外部コマンドからNuに送られるデータは単一の文字列にまとめられ、内部コマンドに渡されます。"),t("code",[a._v("lines")]),a._v("のようなコマンドは外部からのデータを取り込む際に便利です。")]),a._v(" "),t("p",[t("code",[a._v("external_command_1 | external_command_2")])]),a._v(" "),t("p",[a._v("NuはBashのような他のシェルと同じように２つの外部コマンドでパイプされるデータを処理します。外部コマンド１の"),t("code",[a._v("stdout")]),a._v("は外部コマンド２の"),t("code",[a._v("stdin")]),a._v("につながれます。これにより２つのコマンドの間でデータは自然にやりとりされます。")]),a._v(" "),t("h2",{attrs:{id:"内部の仕組み"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内部の仕組み"}},[a._v("#")]),a._v(" 内部の仕組み")]),a._v(" "),t("p",[t("code",[a._v("ls")]),a._v("が出力ではなく入力の場合、テーブルがどのように表示されるのか疑問に思われるかもしれません。Nuは"),t("code",[a._v("autoview")]),a._v("とよばれるコマンドを自動的に出力に加えます。"),t("code",[a._v("autoview")]),a._v("コマンドは結果を確認できる出力をもたないパイプラインに追加されるのです。")]),a._v(" "),t("p",[a._v("実質的にこのコマンドと")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> ls\n")])])]),t("p",[a._v("このパイプラインは")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> ls | autoview\n")])])]),t("p",[a._v("同じものです。")])])}),[],!1,null,null,null);e.default=v.exports}}]);