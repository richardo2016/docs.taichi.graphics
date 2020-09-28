(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{484:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"coordinate-offsets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coordinate-offsets"}},[t._v("#")]),t._v(" Coordinate offsets")]),t._v(" "),a("ul",[a("li",[t._v("A Taichi field can be defined with "),a("strong",[t._v("coordinate offsets")]),t._v(". The\noffsets will move field bounds so that field origins are no longer\nzero vectors. A typical use case is to support voxels with negative\ncoordinates in physical simulations.")]),t._v(" "),a("li",[t._v("For example, a matrix of "),a("code",[t._v("32x64")]),t._v(" elements with coordinate offset\n"),a("code",[t._v("(-16, 8)")]),t._v(" can be defined as the following:")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("In this way, the field's indices are from "),a("code",[t._v("(-16, 8)")]),t._v(" to "),a("code",[t._v("(16, 72)")]),t._v(" (exclusive).")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# lower left corner")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# lower right corner")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# upper left corner")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# upper right corner")]),t._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The dimensionality of field shapes should "),a("strong",[t._v("be consistent")]),t._v(" with that of\nthe offset. Otherwise, a "),a("code",[t._v("AssertionError")]),t._v(" will be raised.")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Works!")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Works!")]),t._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# AssertionError")]),t._v("\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# AssertionError")]),t._v("\ne "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Works!")]),t._v("\nf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# AssertionError")]),t._v("\ng "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# AssertionError")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);