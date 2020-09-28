(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{421:function(t,e,a){"use strict";a.r(e);var n=a(20),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"life-of-a-taichi-kernel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#life-of-a-taichi-kernel"}},[t._v("#")]),t._v(" Life of a Taichi kernel")]),t._v(" "),a("p",[t._v("Sometimes it is helpful to understand the life cycle of a Taichi kernel.\nIn short, compilation will only happen on the first invocation of an\ninstance of a kernel.")]),t._v(" "),a("p",[t._v("The life cycle of a Taichi kernel has the following stages:")]),t._v(" "),a("ul",[a("li",[t._v("Kernel registration")]),t._v(" "),a("li",[t._v("Template instantiation and caching")]),t._v(" "),a("li",[t._v("Python AST transforms")]),t._v(" "),a("li",[t._v("Taichi IR compilation, optimization, and executable generation")]),t._v(" "),a("li",[t._v("Launching")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/taichi-dev/public_files/fa03e63ca4e161318c8aa9a5db7f4a825604df88/taichi/life_of_kernel.png",alt:"image"}})]),t._v(" "),a("p",[t._v("Let's consider the following simple kernel:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kernel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" delta\n")])])]),a("p",[t._v("We allocate two 1D fields to simplify discussion:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"kernel-registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kernel-registration"}},[t._v("#")]),t._v(" Kernel registration")]),t._v(" "),a("p",[t._v("When the "),a("code",[t._v("ti.kernel")]),t._v(" decorator is executed, a kernel named "),a("code",[t._v("add")]),t._v(" is\nregistered. Specifically, the Python Abstract Syntax Tree (AST) of the\n"),a("code",[t._v("add")]),t._v(" function will be memorized. No compilation will happen until the\nfirst invocation of "),a("code",[t._v("add")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"template-instantiation-and-caching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-instantiation-and-caching"}},[t._v("#")]),t._v(" Template instantiation and caching")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("When "),a("code",[t._v("add")]),t._v(" is called for the first time, the Taichi frontend compiler\nwill instantiate the kernel.")]),t._v(" "),a("p",[t._v("When you have a second call with the same "),a("strong",[t._v("template signature")]),t._v("\n(explained later), e.g.,")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Taichi will directly reuse the previously compiled binary.")]),t._v(" "),a("p",[t._v("Arguments hinted with "),a("code",[t._v("ti.template()")]),t._v(" are template arguments, and will\nincur template instantiation. For example,")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("will lead to a new instantiation of "),a("strong",[t._v("add")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[a("strong",[t._v("Template signatures")]),t._v(" are what distinguish different instantiations of\na kernel template. The signature of "),a("code",[t._v("add(x, 42)")]),t._v(" is "),a("code",[t._v("(x, ti.i32)")]),t._v(", which\nis the same as that of "),a("code",[t._v("add(x, 1)")]),t._v(". Therefore, the latter can reuse the\npreviously compiled binary. The signature of "),a("code",[t._v("add(y, 42)")]),t._v(" is\n"),a("code",[t._v("(y, ti.i32)")]),t._v(", a different value from the previous signature, hence a\nnew kernel will be instantiated and compiled.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("Many basic operations in the Taichi standard library are implemented\nusing Taichi kernels using metaprogramming tricks. Invoking them will\nincur "),a("strong",[t._v("implicit kernel instantiations")]),t._v(".")]),t._v(" "),a("p",[t._v("Examples include "),a("code",[t._v("x.to_numpy()")]),t._v(" and "),a("code",[t._v("y.from_torch(torch_tensor)")]),t._v(". When\nyou invoke these functions, you will see kernel instantiations, as\nTaichi kernels will be generated to offload the hard work to multiple\nCPU cores/GPUs.")]),t._v(" "),a("p",[t._v("As mentioned before, the second time you call the same operation, the\ncached compiled kernel will be reused and no further compilation is\nneeded.")])]),t._v(" "),a("h2",{attrs:{id:"code-transformation-and-optimizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-transformation-and-optimizations"}},[t._v("#")]),t._v(" Code transformation and optimizations")]),t._v(" "),a("p",[t._v("When a new instantiation happens, the Taichi frontend compiler (i.e.,\nthe "),a("code",[t._v("ASTTransformer")]),t._v(" Python class) will transform the kernel body AST\ninto a Python script, which, when executed, emits a Taichi frontend AST.\nBasically, some patches are applied to the Python AST so that the Taichi\nfrontend can recognize it.")]),t._v(" "),a("p",[t._v("The Taichi AST lowering pass translates Taichi frontend IR into\nhierarchical static single assignment (SSA) IR, which allows a series of\nfurther IR passes to happen, such as")]),t._v(" "),a("ul",[a("li",[t._v("Loop vectorization")]),t._v(" "),a("li",[t._v("Type inference and checking")]),t._v(" "),a("li",[t._v("General simplifications such as common subexpression elimination\n(CSE), dead instruction elimination (DIE), constant folding, and\nstore forwarding")]),t._v(" "),a("li",[t._v("Access lowering")]),t._v(" "),a("li",[t._v("Data access optimizations")]),t._v(" "),a("li",[t._v("Reverse-mode automatic differentiation (if using differentiable\nprogramming)")]),t._v(" "),a("li",[t._v("Parallelization and offloading")]),t._v(" "),a("li",[t._v("Atomic operation demotion")])]),t._v(" "),a("h2",{attrs:{id:"the-just-in-time-jit-compilation-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-just-in-time-jit-compilation-engine"}},[t._v("#")]),t._v(" The just-in-time (JIT) compilation engine")]),t._v(" "),a("p",[t._v("Finally, the optimized SSA IR is fed into backend compilers such as LLVM\nor Apple Metal/OpenGL shader compilers. The backend compilers then\ngenerate high-performance executable CPU/GPU programs.")]),t._v(" "),a("h2",{attrs:{id:"kernel-launching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kernel-launching"}},[t._v("#")]),t._v(" Kernel launching")]),t._v(" "),a("p",[t._v("Taichi kernels will be ultimately launched as multi-threaded CPU tasks\nor GPU kernels.")])])}),[],!1,null,null,null);e.default=s.exports}}]);