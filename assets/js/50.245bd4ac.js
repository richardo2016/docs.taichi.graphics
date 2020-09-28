(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{457:function(t,e,i){"use strict";i.r(e);var a=i(20),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"global-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#global-settings"}},[t._v("#")]),t._v(" Global settings")]),t._v(" "),i("h2",{attrs:{id:"backends"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#backends"}},[t._v("#")]),t._v(" Backends")]),t._v(" "),i("ul",[i("li",[t._v("To specify which Arch to use: "),i("code",[t._v("ti.init(arch=ti.cuda)")]),t._v(".")]),t._v(" "),i("li",[t._v("To specify pre-allocated memory size for CUDA:\n"),i("code",[t._v("ti.init(device_memory_GB=0.5)")]),t._v(".")]),t._v(" "),i("li",[t._v("To disable unified memory usage on CUDA:\n"),i("code",[t._v("ti.init(use_unified_memory=False)")]),t._v(".")]),t._v(" "),i("li",[t._v("To specify which GPU to use for CUDA:\n"),i("code",[t._v("export CUDA_VISIBLE_DEVICES=[gpuid]")]),t._v(".")]),t._v(" "),i("li",[t._v("To disable a backend on start up, say, CUDA:\n"),i("code",[t._v("export TI_ENABLE_CUDA=0")]),t._v(".")])]),t._v(" "),i("h2",{attrs:{id:"compilation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compilation"}},[t._v("#")]),t._v(" Compilation")]),t._v(" "),i("ul",[i("li",[t._v("Disable advanced optimization to save compile time & possible\nerrors: "),i("code",[t._v("ti.init(advanced_optimization=False)")]),t._v(".")]),t._v(" "),i("li",[t._v("Disable fast math to prevent possible undefined math behavior:\n"),i("code",[t._v("ti.init(fast_math=False)")]),t._v(".")]),t._v(" "),i("li",[t._v("To print preprocessed Python code:\n"),i("code",[t._v("ti.init(print_preprocessed=True)")]),t._v(".")]),t._v(" "),i("li",[t._v("To show pretty Taichi-scope stack traceback:\n"),i("code",[t._v("ti.init(excepthook=True)")]),t._v(".")]),t._v(" "),i("li",[t._v("To print intermediate IR generated: "),i("code",[t._v("ti.init(print_ir=True)")]),t._v(".")])]),t._v(" "),i("h2",{attrs:{id:"runtime"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#runtime"}},[t._v("#")]),t._v(" Runtime")]),t._v(" "),i("ul",[i("li",[t._v("Restart the entire Taichi system (destroy all fields and kernels):\n"),i("code",[t._v("ti.reset()")]),t._v(".")]),t._v(" "),i("li",[t._v("To start program in debug mode: "),i("code",[t._v("ti.init(debug=True)")]),t._v(" or\n"),i("code",[t._v("ti debug your_script.py")]),t._v(".")]),t._v(" "),i("li",[t._v("To disable importing torch on start up: "),i("code",[t._v("export TI_ENABLE_TORCH=0")]),t._v(".")])]),t._v(" "),i("h2",{attrs:{id:"logging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),i("ul",[i("li",[t._v("Show more detailed log to level TRACE: "),i("code",[t._v("ti.init(log_level=ti.TRACE)")]),t._v("\nor "),i("code",[t._v("ti.set_logging_level(ti.TRACE)")]),t._v(".")]),t._v(" "),i("li",[t._v("Eliminate verbose outputs: "),i("code",[t._v("ti.init(verbose=False)")]),t._v(".")])]),t._v(" "),i("h2",{attrs:{id:"develop"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#develop"}},[t._v("#")]),t._v(" Develop")]),t._v(" "),i("ul",[i("li",[t._v("To trigger GDB when Taichi crashes: "),i("code",[t._v("ti.init(gdb_trigger=True)")]),t._v(".")]),t._v(" "),i("li",[t._v("Cache compiled runtime bitcode in "),i("strong",[t._v("dev mode")]),t._v(" to save start up\ntime: "),i("code",[t._v("export TI_CACHE_RUNTIME_BITCODE=1")]),t._v(".")]),t._v(" "),i("li",[t._v("To specify how many threads to run test: "),i("code",[t._v("export TI_TEST_THREADS=4")]),t._v("\nor "),i("code",[t._v("ti test -t4")]),t._v(".")])]),t._v(" "),i("h2",{attrs:{id:"specifying-ti-init-arguments-from-environment-variables"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specifying-ti-init-arguments-from-environment-variables"}},[t._v("#")]),t._v(" Specifying "),i("code",[t._v("ti.init")]),t._v(" arguments from environment variables")]),t._v(" "),i("p",[t._v("Arguments for "),i("code",[t._v("ti.init")]),t._v(" may also be specified from environment\nvariables. For example:")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("ti.init(arch=ti.cuda)")]),t._v(" is equivalent to "),i("code",[t._v("export TI_ARCH=cuda")]),t._v(".")]),t._v(" "),i("li",[i("code",[t._v("ti.init(log_level=ti.TRACE)")]),t._v(" is equivalent to\n"),i("code",[t._v("export TI_LOG_LEVEL=trace")]),t._v(".")]),t._v(" "),i("li",[i("code",[t._v("ti.init(debug=True)")]),t._v(" is equivalent to "),i("code",[t._v("export TI_DEBUG=1")]),t._v(".")]),t._v(" "),i("li",[i("code",[t._v("ti.init(use_unified_memory=False)")]),t._v(" is equivalent to\n"),i("code",[t._v("export TI_USE_UNIFIED_MEMORY=0")]),t._v(".")])]),t._v(" "),i("p",[t._v("If both "),i("code",[t._v("ti.init")]),t._v(" argument and the corresponding environment variable\nare specified, then the one in the environment variable will\n"),i("strong",[t._v("override")]),t._v(" the one in the argument, e.g.:")]),t._v(" "),i("ul",[i("li",[t._v("if "),i("code",[t._v("ti.init(arch=ti.cuda)")]),t._v(" and "),i("code",[t._v("export TI_ARCH=opengl")]),t._v(" are specified\nat the same time, then Taichi will choose "),i("code",[t._v("ti.opengl")]),t._v(" as backend.")]),t._v(" "),i("li",[t._v("if "),i("code",[t._v("ti.init(debug=True)")]),t._v(" and "),i("code",[t._v("export TI_DEBUG=0")]),t._v(" are specified at\nthe same time, then Taichi will disable debug mode.")])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),i("p",[t._v("If "),i("code",[t._v("ti.init")]),t._v(" is called twice, then the configuation in first invocation\nwill be completely discarded, e.g.:")]),t._v(" "),i("div",{staticClass:"language-python extra-class"},[i("div",{staticClass:"highlight-lines"},[i("div",{staticClass:"highlighted"},[t._v(" ")]),i("br"),i("div",{staticClass:"highlighted"},[t._v(" ")]),i("br"),i("br")]),i("pre",{pre:!0,attrs:{class:"language-python"}},[i("code",[t._v("ti"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug"),i("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),i("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),i("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cfg"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),i("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# True")]),t._v("\nti"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),i("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cfg"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),i("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# False")]),t._v("\n")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);