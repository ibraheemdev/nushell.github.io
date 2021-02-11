(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{624:function(a,e,s){"use strict";s.r(e);var t=s(42),o=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"instalando-nu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalando-nu"}},[a._v("#")]),a._v(" Instalando Nu")]),a._v(" "),s("p",[a._v("Atualmente, as melhores maneiras de instalar o Nu são a partir do "),s("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("crates.io"),s("OutboundLink")],1),a._v(", fazer o download dos binários da nossa "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("página de releases"),s("OutboundLink")],1),a._v(", fazer o build a partir dos fontes ou baixar um container pronto com o Docker.")]),a._v(" "),s("h2",{attrs:{id:"binarios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binarios"}},[a._v("#")]),a._v(" Binários")]),a._v(" "),s("p",[a._v("Você pode baixar o Nu da "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("página de releases"),s("OutboundLink")],1),a._v(". Alternativamente, se você usa o "),s("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Homebrew"),s("OutboundLink")],1),a._v(" para macOS, pode instalar o binário executando o comando "),s("code",[a._v("brew install nushell")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"containers-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#containers-docker"}},[a._v("#")]),a._v(" Containers Docker")]),a._v(" "),s("p",[a._v("Se quiser baixar um container pronto, você pode navegar nas tags da "),s("a",{attrs:{href:"https://quay.io/organization/nushell",target:"_blank",rel:"noopener noreferrer"}},[a._v("organização nushell"),s("OutboundLink")],1),a._v(" no Quay.io. Baixar um container se resume a:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker pull quay.io/nushell/nu\n$ docker pull quay.io/nushell/nu-base\n")])])]),s("p",[a._v('Tanto o "nu-base" como o "nu" fornecem o binário '),s("code",[a._v("nu")]),a._v(", mas o nu-base também inclui o código fonte no container em "),s("code",[a._v("/code")]),a._v(", bem como todas as dependências.")]),a._v(" "),s("p",[a._v("Opcionalmente, você pode fazer o build dos containers localmente usando os "),s("a",{attrs:{href:"https://github.com/nushell/nushell/tree/master/docker",target:"_blank",rel:"noopener noreferrer"}},[a._v("dockerfiles fornecidos"),s("OutboundLink")],1),a._v(":")]),a._v(" "),s("p",[a._v("Para fazer o build da imagem base:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker build -f docker/Dockerfile.nu-base -t nushell/nu-base "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("p",[a._v("E então, para fazer o build do container menor (usando o build Multiestágios):")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker build -f docker/Dockerfile -t nushell/nu "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("p",[a._v("De qualquer modo, você pode rodar qualquer um dos containers assim:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker run -it nushell/nu-base\n$ docker run -it nushell/nu\n/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v("\n")])])]),s("p",[a._v("O segundo container é um pouco menor, se o tamanho for importante para você.")]),a._v(" "),s("h2",{attrs:{id:"preparando"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparando"}},[a._v("#")]),a._v(" Preparando")]),a._v(" "),s("p",[a._v("Antes de instalar o Nu, precisamos nos certificar de que nosso sistema tem os requisitos necessários. Atualmente, isso significa ter certeza de que temos tanto o conjunto de ferramentas do Rust como as dependências locais instaladas.")]),a._v(" "),s("h3",{attrs:{id:"instalando-o-rust"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalando-o-rust"}},[a._v("#")]),a._v(" Instalando o Rust")]),a._v(" "),s("p",[a._v("Se ainda não tivermos o Rust instalado no sistema, a melhor maneira de instalar é via "),s("a",{attrs:{href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"}},[a._v("rustup"),s("OutboundLink")],1),a._v(". Rustup é uma maneira de gerenciar instalações, inclusive de versões diferentes de Rust.")]),a._v(" "),s("p",[a._v("O Nu atualmente requer a versão "),s("strong",[a._v("nightly")]),a._v(' do Rust. Quando você abrir o "rustup" pela primeira vez, ele vai perguntar qual versão do Rust você quer instalar:')]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("Current installation options:\n\n   default "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" triple: x86_64-unknown-linux-gnu\n     default toolchain: stable\n  modify "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v(" variable: "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yes")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" Proceed with installation "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" Customize installation\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" Cancel installation\n")])])]),s("p",[a._v("Selecione a opção #2 para customizar a instalação.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("Default "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" triple?\n")])])]),s("p",[a._v("Aperte enter aqui para selecionar o default.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("Default toolchain? "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("stable/beta/nightly/none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v('Certifique-se de digitar "nightly" aqui e pressionar enter. Isso vai levar à configuração seguinte:')]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("Modify "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v(" variable? "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("y/n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Você pode opcionalmente atualizar o seu "),s("em",[a._v("path")]),a._v(". Normalmente é uma boa ideia, pois torna os passos seguintes mais fáceis.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("Current installation options:\n\n   default "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" triple: x86_64-unknown-linux-gnu\n     default toolchain: nightly\n  modify "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v(" variable: "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yes")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" Proceed with installation "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" Customize installation\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" Cancel installation\n")])])]),s("p",[a._v("Você pode ver que o toolchain agora mudou para a versão nightly. Se isso parece um pouco arriscado, não se preocupe. O compilador do Rust passa por uma bateria completa de testes. O compilador nightly é praticamente tão confiável quanto a versão estável.")]),a._v(" "),s("p",[a._v('Quando estiver pronto, pressione 1 e enter. Depois desse ponto, podemos seguir as instruções que o "rustup" nos der e teremos um compilador Rust funcionando no nosso sistema.')]),a._v(" "),s("p",[a._v('Se você preferir não instalar o Rust via "rustup", você pode também instalar por outros métodos (por exemplo, a partir de um pacote em uma distribuição Linux). Apenas se certifique de instalar uma versão nightly recente.')]),a._v(" "),s("h2",{attrs:{id:"dependencias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencias"}},[a._v("#")]),a._v(" Dependências")]),a._v(" "),s("h3",{attrs:{id:"debian-ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debian-ubuntu"}},[a._v("#")]),a._v(" Debian/Ubuntu")]),a._v(" "),s("p",[a._v('Você vai precisar instalar os pacotes "pkg-config" e "libssl-dev":')]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" pkg-config libssl-dev\n")])])]),s("p",[a._v("Usuários Linux que quiserem usar as funcionalidades opcionais "),s("code",[a._v("rawkey")]),a._v(" ou "),s("code",[a._v("clipboard")]),a._v(' precisarão instalar os pacotes "libx11-dev" and "libxcb-composite0-dev":')]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" libxcb-composite0-dev libx11-dev\n")])])]),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" macOS")]),a._v(" "),s("p",[a._v("Ao usar o "),s("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Homebrew"),s("OutboundLink")],1),a._v(', você precisará instalar o "openssl" e o "cmake" usando:')]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" openssl cmake\n")])])]),s("h2",{attrs:{id:"instalando-a-partir-do-crates-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalando-a-partir-do-crates-io"}},[a._v("#")]),a._v(" Instalando a partir do "),s("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("crates.io"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("Quando tivermos todas as dependências de que o Nu precisa, podemos instalá-lo usando o comando "),s("code",[a._v("cargo")]),a._v(", que vem junto com o compilador Rust.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" cargo "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nu\n")])])]),s("p",[a._v("Pronto! A ferramenta cargo fará o download do Nu e das dependências do fonte, o build e a instalação no caminho bin do cargo, de forma que possamos rodá-lo.")]),a._v(" "),s("p",[a._v("Se quiser instalar todas as funcionalidades, inclusive algumas opcionais divertidas, você pode usar:")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" cargo "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nu --features"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("stable\n")])])]),s("p",[a._v("Para esse comando funcionar, certifique-se de ter todas as dependências (mostradas acima) instaladas no seu sistema.")]),a._v(" "),s("p",[a._v("Uma vez instalado, podemos rodar o Nu usando o comando "),s("code",[a._v("nu")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ nu\n/home/jonathan/Source"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"fazendo-o-build-a-partir-dos-fontes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fazendo-o-build-a-partir-dos-fontes"}},[a._v("#")]),a._v(" Fazendo o Build a partir dos fontes")]),a._v(" "),s("p",[a._v("Também podemos fazer o build do código fonte diretamente do GitHub. Isso nos dá acesso imediato às últimas funcionalidades e correções do Nu.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/nushell/nushell.git\n")])])]),s("p",[a._v("O Git vai clonar o repositório principal do nushell e daí podemos fazer o build e rodar o Nu:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" nushell\nnushell"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" cargo build --workspace --features"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("stable "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" cargo run --features"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("stable\n")])])]),s("p",[a._v("Você também pode fazer o build e rodar o Nu em modo release:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("nushell"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" cargo build --release --workspace --features"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("stable "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" cargo run --release --features"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("stable\n")])])]),s("p",[a._v('Pessoas mais acostumadas com Rust podem se perguntar por que fazemos tanto o "build" como o "run" se o "run" já faz o build por padrão. Isso serve para contornar uma falha da nova opção '),s("code",[a._v("default-run")]),a._v(" no Cargo e assegurar que será feito o build de todos os plugins, embora  possa não ser necessário no futuro.")]),a._v(" "),s("h2",{attrs:{id:"configurando-como-login-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurando-como-login-shell"}},[a._v("#")]),a._v(" Configurando como login shell")]),a._v(" "),s("p",[s("strong",[a._v("!!! Nushell ainda está em desenvovlimento e pode não estar estável para uso diário. !!!")])]),a._v(" "),s("p",[a._v("Você pode definir o seu login shell usando o comando "),s("a",{attrs:{href:"https://linux.die.net/man/1/chsh",target:"_blank",rel:"noopener noreferrer"}},[s("code",[a._v("chsh")]),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("Algumas distribuições Linux possuem uma lista de shells válidos em "),s("code",[a._v("/etc/shells")]),a._v(" e não permitirão modificar o shell até que o Nu esteja nessa lista branca. Você pode ver um erro similar ao mostrado abaixo se não tiver atualizado seu arquivo "),s("code",[a._v("shells")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("chsh: /home/username/.cargo/bin/nu is an invalid shell\n")])])]),s("p",[a._v("Você pode adicionar o Nu à lista de shell permitidos acrescentando o binário do Nu ao arquivo "),s("code",[a._v("shells")]),a._v(". O caminho a ser adicionado pode ser encontrado com o comando "),s("code",[a._v("which nu")]),a._v(" e geralmente é "),s("code",[a._v("$HOME/.cargo/bin/nu")]),a._v(".")])])}),[],!1,null,null,null);e.default=o.exports}}]);