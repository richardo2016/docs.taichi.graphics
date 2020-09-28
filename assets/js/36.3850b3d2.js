(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{443:function(t,a,e){"use strict";e.r(a);var s=e(20),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"scalar-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scalar-fields"}},[t._v("#")]),t._v(" Scalar fields")]),t._v(" "),e("p",[e("strong",[t._v("Taichi fields")]),t._v(" are used to store data.")]),t._v(" "),e("p",[t._v("Field "),e("strong",[t._v("elements")]),t._v(" could be either a scalar, a vector, or a matrix (see\n"),e("RouterLink",{attrs:{to:"/documentation/api/matrix.html"}},[t._v("Matrices")]),t._v("). In this paragraph, we will only\ntalk about "),e("strong",[t._v("scalar fields")]),t._v(", whose elements are simply scalars.")],1),t._v(" "),e("p",[t._v("Fields can have up to eight "),e("strong",[t._v("dimensions")]),t._v(".")]),t._v(" "),e("ul",[e("li",[t._v("A 0D scalar field is simply a single scalar.")]),t._v(" "),e("li",[t._v("A 1D scalar field is a 1D linear array.")]),t._v(" "),e("li",[t._v("A 2D scalar field can be used to represent a 2D regular grid of\nvalues. For example, a gray-scale image.")]),t._v(" "),e("li",[t._v("A 3D scalar field can be used for volumetric data.")])]),t._v(" "),e("p",[t._v("Fields could be either dense or sparse, see "),e("RouterLink",{attrs:{to:"/documentation/advanced/sparse.html"}},[t._v("Sparse Computation")]),t._v(" for\ndetails on sparse fields. We will only talk about "),e("strong",[t._v("dense fields")]),t._v(" in\nthis paragraph.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("We once used the term "),e("strong",[t._v("tensor")]),t._v(" instead of "),e("strong",[t._v("field")]),t._v(". "),e("strong",[t._v("Tensor")]),t._v(" will\nno longer be used.")])]),t._v(" "),e("h2",{attrs:{id:"declaration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#declaration"}},[t._v("#")]),t._v(" Declaration")]),t._v(" "),e("p",[t._v("::: {.function}\nti.field(dtype, shape = None, offset = None)")]),t._v(" "),e("p",[t._v("parameter dtype")]),t._v(" "),e("p",[t._v(": (DataType) type of the field element")]),t._v(" "),e("p",[t._v("parameter shape")]),t._v(" "),e("p",[t._v(": (optional, scalar or tuple) the shape of field")]),t._v(" "),e("p",[t._v("parameter offset")]),t._v(" "),e("p",[t._v(": (optional, scalar or tuple) see "),e("RouterLink",{attrs:{to:"/documentation/advanced/offset.html"}},[t._v("coordinate offset")])],1),t._v(" "),e("p",[t._v("For example, this creates a "),e("em",[t._v("dense")]),t._v(" field with four "),e("code",[t._v("int32")]),t._v(" as elements:\n:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("x = ti.field(ti.i32, shape=4)\n")])])]),e("p",[t._v("This creates a 4x3 "),e("em",[t._v("dense")]),t._v(" field with "),e("code",[t._v("float32")]),t._v(" elements: :")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("x = ti.field(ti.f32, shape=(4, 3))\n")])])]),e("p",[t._v("If shape is "),e("code",[t._v("()")]),t._v(" (empty tuple), then a 0-D field (scalar) is created: :")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("x = ti.field(ti.f32, shape=())\n")])])]),e("p",[t._v("Then access it by passing "),e("code",[t._v("None")]),t._v(" as index: :")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("x[None] = 2\n")])])]),e("p",[t._v("If shape is "),e("strong",[t._v("not provided")]),t._v(" or "),e("code",[t._v("None")]),t._v(", the user must manually "),e("code",[t._v("place")]),t._v("\nit afterwards: :")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("x = ti.field(ti.f32)\nti.root.dense(ti.ij, (4, 3)).place(x)\n# equivalent to: x = ti.field(ti.f32, shape=(4, 3))\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("Not providing "),e("code",[t._v("shape")]),t._v(" allows you to "),e("em",[t._v("place")]),t._v(" the field in a layout other\nthan the default "),e("em",[t._v("dense")]),t._v(", see "),e("RouterLink",{attrs:{to:"/documentation/advanced/layout.html"}},[t._v("Advanced dense layouts")]),t._v(" for\nmore details.")],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("All variables should be created and placed before any kernel invocation\nor any of them accessed from python-scope. For example:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ERROR: x not placed!")]),t._v("\n")])])]),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kernel")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nfunc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ERROR: cannot create fields after kernel invocation!")]),t._v("\n")])])]),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\ny "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ERROR: cannot create fields after any field accesses from the Python-scope!")]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"accessing-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accessing-components"}},[t._v("#")]),t._v(" Accessing components")]),t._v(" "),e("p",[t._v("You can access an element of the Taichi field by an index or indices.")]),t._v(" "),e("p",[t._v("::: {.attribute}\na[p, q, ...]")]),t._v(" "),e("p",[t._v("parameter a")]),t._v(" "),e("p",[t._v(": (ti.field) the sclar field")]),t._v(" "),e("p",[t._v("parameter p")]),t._v(" "),e("p",[t._v(": (scalar) index of the first field dimension")]),t._v(" "),e("p",[t._v("parameter q")]),t._v(" "),e("p",[t._v(": (scalar) index of the second field dimension")]),t._v(" "),e("p",[t._v("return")]),t._v(" "),e("p",[t._v(": (scalar) the element at "),e("code",[t._v("[p, q, ...]")])]),t._v(" "),e("p",[t._v("This extracts the element value at index "),e("code",[t._v("[3, 4]")]),t._v(" of field "),e("code",[t._v("a")]),t._v(": :")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("x = a[3, 4]\n")])])]),e("p",[t._v("This sets the element value at index "),e("code",[t._v("2")]),t._v(" of 1D field "),e("code",[t._v("b")]),t._v(" to "),e("code",[t._v("5")]),t._v(": :")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("b[2] = 5\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("In Python, x[(exp1, exp2, …, expN)] is equivalent to x[exp1, exp2, …, expN]; the latter is just syntactic sugar for the former.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("The returned value can also be "),e("code",[t._v("Vector")]),t._v(" / "),e("code",[t._v("Matrix")]),t._v(" if "),e("code",[t._v("a")]),t._v(" is a vector/matrix field, see "),e("RouterLink",{attrs:{to:"/documentation/api/vector.html"}},[t._v("Vectors")]),t._v(" for more details.")],1)]),t._v(" "),e("h2",{attrs:{id:"meta-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meta-data"}},[t._v("#")]),t._v(" Meta data")]),t._v(" "),e("p",[t._v("::: {.attribute}\na.shape")]),t._v(" "),e("p",[t._v("parameter a")]),t._v(" "),e("p",[t._v(": (ti.field) the field")]),t._v(" "),e("p",[t._v("return")]),t._v(" "),e("p",[t._v(": (tuple) the shape of field "),e("code",[t._v("a")])]),t._v(" "),e("div",{staticClass:"language-{=html} extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\x3c!-- --\x3e\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("x = ti.field(ti.i32, (6, 5))\nx.shape  # (6, 5)\n\ny = ti.field(ti.i32, 6)\ny.shape  # (6,)\n\nz = ti.field(ti.i32, ())\nz.shape  # ()\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("::: {.attribute}\na.dtype")]),t._v(" "),e("p",[t._v("parameter a")]),t._v(" "),e("p",[t._v(": (ti.field) the field")]),t._v(" "),e("p",[t._v("return")]),t._v(" "),e("p",[t._v(": (DataType) the data type of "),e("code",[t._v("a")])]),t._v(" "),e("div",{staticClass:"language-{=html} extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\x3c!-- --\x3e\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("x = ti.field(ti.i32, (2, 3))\nx.dtype  # ti.i32\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("::: {.function}\na.parent(n = 1)")]),t._v(" "),e("p",[t._v("parameter a")]),t._v(" "),e("p",[t._v(": (ti.field) the field")]),t._v(" "),e("p",[t._v("parameter n")]),t._v(" "),e("p",[t._v(": (optional, scalar) the number of parent steps, i.e. "),e("code",[t._v("n=1")]),t._v(" for\nparent, "),e("code",[t._v("n=2")]),t._v(" grandparent, etc.")]),t._v(" "),e("p",[t._v("return")]),t._v(" "),e("p",[t._v(": (SNode) the parent of "),e("code",[t._v("a")]),t._v("'s containing SNode")]),t._v(" "),e("div",{staticClass:"language-{=html} extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\x3c!-- --\x3e\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("x = ti.field(ti.i32)\ny = ti.field(ti.i32)\nblk1 = ti.root.dense(ti.ij, (6, 5))\nblk2 = blk1.dense(ti.ij, (3, 2))\nblk1.place(x)\nblk2.place(y)\n\nx.parent()   # blk1\ny.parent()   # blk2\ny.parent(2)  # blk1\n")])])]),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/documentation/api/snode.html"}},[t._v("Structural nodes (SNodes)")]),t._v(" for more details.\n:::")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);