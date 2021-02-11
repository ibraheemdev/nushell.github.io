(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{604:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"はじめに"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#はじめに"}},[s._v("#")]),s._v(" はじめに")]),s._v(" "),t("p",[s._v("こんにちは、Nushellプロジェクトへようこそ。このプロジェクトのゴールは、シンプルなコマンドをパイプでつなぎ合わせるというシェルのUnix哲学を現代の開発スタイルにもちこむことです。")]),s._v(" "),t("p",[s._v("NuはBashのような伝統的なシェル、PowerShellなどの高度なシェル、関数型プログラミング、システムプログラミングなど、多くの分野からヒントを得ています。しかしNuは何でもこなせることを目指すのではなく、いくつかのことをうまくこなせることに注力しています。")]),s._v(" "),t("ul",[t("li",[s._v("モダンな雰囲気をもつ柔軟なクロスプラットフォームシェルを作ること")]),s._v(" "),t("li",[s._v("データ構造を理解するコマンドラインアプリケーションを組みあわせることができること")]),s._v(" "),t("li",[s._v("現代的なCLIアプリケーションが提供するUXをそなえること")])]),s._v(" "),t("p",[s._v("Nuになにができるかをみるには、実際に使ってみることが一番です。")]),s._v(" "),t("p",[t("code",[s._v("ls")]),s._v("コマンドを実行して最初に気づくことは、テキストブロックではなく、構造化されたテーブルデータが返ってくることです。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n────┬────────────────────┬──────┬────────┬────────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │ name               │ type │ size   │ modified")]),s._v("\n────┼────────────────────┼──────┼────────┼────────────\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(".html           │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("429")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ CONTRIBUTING.md    │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("955")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" mins ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Gemfile            │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ Gemfile.lock       │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ LICENSE            │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ README.md          │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("213")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),t("p",[s._v("このテーブルはディレクトリの内容を別の方法で表示しているだけではありません。このテーブルを利用するとスプレッドシートと同じように、よりインタラクティブにデータを操作できます。")]),s._v(" "),t("p",[s._v("最初に行うことはテーブルをサイズでソートすることです。これを行うには"),t("code",[s._v("ls")]),s._v("の出力を取得して、カラムの内容に基づいてテーブルをソートするコマンドに入力します。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sort-by size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" reverse\n────┬────────────────────┬──────┬────────┬────────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │ name               │ type │ size   │ modified")]),s._v("\n────┼────────────────────┼──────┼────────┼────────────\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Gemfile.lock       │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ SUMMARY.md         │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.7")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Gemfile            │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ LICENSE            │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ CONTRIBUTING.md    │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("955")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" mins ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ books.md           │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("687")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),t("p",[s._v("この作業をおこなうために、"),t("code",[s._v("ls")]),s._v("にコマンドライン引数を渡していないことがわかります。代わりに、Nuが提供する"),t("code",[s._v("sort-by")]),s._v("コマンドを利用して、"),t("code",[s._v("ls")]),s._v("コマンドの出力をソートしています。また、一番大きなファイルを表示するために逆順に並び替えています。")]),s._v(" "),t("p",[s._v("Nuにはテーブルを扱うための多くのコマンドが用意されています。例えば、1キロバイトを超えるファイルのみを表示するように"),t("code",[s._v("ls")]),s._v("コマンドの出力をフィルターできます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 1kb\n───┬──────────────┬──────┬────────┬────────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ name         │ type │ size   │ modified")]),s._v("\n───┼──────────────┼──────┼────────┼────────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Gemfile      │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ Gemfile.lock │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ LICENSE      │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ SUMMARY.md   │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.7")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n───┴──────────────┴──────┴────────┴────────────\n")])])]),t("p",[s._v("Unix哲学にあるように、コマンドをつなぎ合わせることで様々な組み合わせを作り出すことができます。別のコマンドをみてみましょう。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n─────┬───────┬──────────────────┬─────────┬─────────┬──────────┬─────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   │ pid   │ name             │ status  │ cpu     │ mem      │ virtual")]),s._v("\n─────┼───────┼──────────────────┼─────────┼─────────┼──────────┼─────────\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33155")]),s._v(" │ nu_plugin_core_p │ Running │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8496")]),s._v(" │   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(" MB │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(" GB\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32841")]),s._v(" │ mdworker_shared  │ Running │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0000")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.3")]),s._v(" MB │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(" GB\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32829")]),s._v(" │ CoreServicesUIAg │ Running │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0000")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.1")]),s._v(" MB │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.5")]),s._v(" GB\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32828")]),s._v(" │ mdworker_shared  │ Running │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0000")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23.0")]),s._v(" MB │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(" GB\n")])])]),t("p",[s._v("もしあなたがLinuxを利用しているなら"),t("code",[s._v("ps")]),s._v("コマンドには馴染みがあるでしょう。これを使うと、現在システムが実行しているすべてのプロセスの状態や名前の一覧を取得することができます。プロセスのCPU負荷も確認することができます。")]),s._v(" "),t("p",[s._v("CPUをアクティブに利用しているプロセスを表示したい場合はどうでしょうか。さきほどの"),t("code",[s._v("ls")]),s._v("コマンドと同じように、"),t("code",[s._v("ps")]),s._v("コマンドが返すテーブルを利用することができます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where cpu "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n───┬──────┬──────────────────┬─────────┬────────┬──────────┬─────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ pid  │ name             │ status  │ cpu    │ mem      │ virtual")]),s._v("\n───┼──────┼──────────────────┼─────────┼────────┼──────────┼─────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3971")]),s._v(" │ Google Chrome He │ Running │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.1263")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99.4")]),s._v(" MB │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(" GB\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("360")]),s._v(" │ iTerm2           │ Running │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.6635")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("218.6")]),s._v(" MB │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.0")]),s._v(" GB\n───┴──────┴──────────────────┴─────────┴────────┴──────────┴─────────\n")])])]),t("p",[s._v("これまで、"),t("code",[s._v("ls")]),s._v("と"),t("code",[s._v("ps")]),s._v("を利用してファイルやプロセスの一覧を表示しました。Nuはこの他にも便利なテーブルを作り出すコマンドを提供します。次に"),t("code",[s._v("date")]),s._v("と"),t("code",[s._v("sys")]),s._v("をみてみましょう。")]),s._v(" "),t("p",[t("code",[s._v("date utc")]),s._v("を実行すると、現在の日時と時間に関する情報が得られます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" utc\n──────────┬──────\n year     │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("\n month    │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n day      │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n hour     │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n minute   │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("\n second   │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),s._v("\n timezone │ UTC\n──────────┴──────\n")])])]),t("p",[t("code",[s._v("sys")]),s._v("はNuが実行されているシステムに関する情報を提供します。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys\n─────────┬─────────────────────────────────────────\n "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("    │ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("row "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" columns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n cpu     │ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("row cores current ghz max ghz min ghz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n disks   │ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" rows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n mem     │ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("row "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" swap "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" swap total total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n net     │ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" rows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n battery │ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" rows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n─────────┴─────────────────────────────────────────\n")])])]),t("p",[s._v("これはさきほどまでのテーブルと少し異なります。"),t("code",[s._v("sys")]),s._v("コマンドは単純な値ではなくセルに構造化されたテーブルを含むテーブルを提供します。このデータを見るには表示する列を選択する必要があります。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n──────────┬─────────────────────────────────────────────\n name     │ Linux\n release  │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v(".0-1019-azure\n version  │ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#20-Ubuntu SMP Fri Mar 27 23:54:23 UTC 2020")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" │ lifeless\n arch     │ x86_64\n "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v("   │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(":03:47:32\n sessions │ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" rows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n──────────┴─────────────────────────────────────────────\n")])])]),t("p",[t("code",[s._v("get")]),s._v('コマンドを利用するとテーブルのカラムの内容を調べることができます。ここでは、Nuが実行されているホストに関する情報を含む"host"列を調べています。OSの名前、ホスト名、CPUなどです。システム上のユーザーの名前を取得してみましょう。')]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get host.sessions\n───┬─────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ jonathan\n───┴─────────\n")])])]),t("p",[s._v('現在、システムには"jonathan"という名前のユーザが１人だけいます。列の名前だけではなくパスも渡せることに気づくでしょう。Nuはパスを受け取るとテーブルの対応するデータを取得します。')]),s._v(" "),t("p",[s._v('テーブルデータではなく、文字列"jonathan"を取得したことに気づかれたかもしれません。Nuはテーブルだけでなく文字列も扱います。文字列はNu以外のコマンドを扱う上で重要な役割をはたします。')]),s._v(" "),t("p",[s._v("実際にNuの外で文字列がどのように機能するか見てみましょう。先ほどの例で外部の"),t("code",[s._v("echo")]),s._v("コマンドを実行します。("),t("code",[s._v("^")]),s._v("は組込みの"),t("code",[s._v("echo")]),s._v("コマンドを使用しないよう指示しています)。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get host.sessions "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" each "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ^echo "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\njonathan\n")])])]),t("p",[s._v("するどい読者にはこれが以前ものと似ていると思われるでしょう。しかし、さきほどの出力で"),t("code",[s._v("echo")]),s._v("を呼び出しているという重要な違いがあります。このように、Nuからデータを"),t("code",[s._v("echo")]),s._v("(または"),t("code",[s._v("git")]),s._v("のようなNu以外の任意のコマンド)にわたすことができるのです。")]),s._v(" "),t("p",[s._v("注：Nuの組み込みコマンドのヘルプテキストは、"),t("code",[s._v("help")]),s._v("コマンドで検出できます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" config\nConfiguration management.\n\nUsage:\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("subcommand"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nSubcommands:\n  config get - Gets a value from the config\n  config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" - Sets a value "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the config\n  config set_into - Sets a value "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the config\n  config "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v(" the config\n  config load - Loads the config from the path given\n  config remove - Removes a value from the config\n  config path - "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" the path to the config "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\nFlags:\n  -h, --help: Display this "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" message\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);