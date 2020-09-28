(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{448:function(e,a,i){"use strict";i.r(a);var t=i(20),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"fields-and-matrices"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fields-and-matrices"}},[e._v("#")]),e._v(" Fields and matrices")]),e._v(" "),i("p",[e._v("Fields are global variables provided by Taichi. Fields can be either\nsparse or dense. An element of a field can be either a scalar or a\nvector/matrix.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),i("p",[e._v("Matrices can be used as field elements, so you can have fields with each\nelement being a matrix.")])]),e._v(" "),i("h2",{attrs:{id:"scalar-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#scalar-fields"}},[e._v("#")]),e._v(" Scalar fields")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Every global variable is an N-dimensional field.")]),e._v(" "),i("ul",[i("li",[e._v("Global "),i("code",[e._v("scalars")]),e._v(" are treated as 0-D scalar fields.")])])]),e._v(" "),i("li",[i("p",[e._v("Fields are always accessed using indices")]),e._v(" "),i("ul",[i("li",[e._v("E.g. "),i("code",[e._v("x[i, j, k]")]),e._v(" if "),i("code",[e._v("x")]),e._v(" is a 3D scalar field.")]),e._v(" "),i("li",[e._v("Even when accessing 0-D field "),i("code",[e._v("x")]),e._v(", use "),i("code",[e._v("x[None] = 0")]),e._v(" instead of "),i("code",[e._v("x = 0")]),e._v(". Please "),i("strong",[e._v("always")]),e._v(" use indexing to access entries in fields.")])])]),e._v(" "),i("li",[i("p",[e._v("Field values are initially zero.")])]),e._v(" "),i("li",[i("p",[e._v("Sparse fields are initially inactive.")])]),e._v(" "),i("li",[i("p",[e._v("See "),i("RouterLink",{attrs:{to:"/documentation/api/scalar_field.html"}},[e._v("Scalar fields")]),e._v(" for more details.")],1)])]),e._v(" "),i("h2",{attrs:{id:"matrix-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#matrix-fields"}},[e._v("#")]),e._v(" Matrix fields")]),e._v(" "),i("p",[e._v("Field elements can also be matrices.")]),e._v(" "),i("p",[e._v("Suppose you have a "),i("code",[e._v("128 x 64")]),e._v(" field called "),i("code",[e._v("A")]),e._v(", each element containing\na "),i("code",[e._v("3 x 2")]),e._v(" matrix. To allocate a "),i("code",[e._v("128 x 64")]),e._v(" matrix field which has a\n"),i("code",[e._v("3 x 2")]),e._v(" matrix for each of its entry, use the statement\n"),i("code",[e._v("A = ti.Matrix.field(3, 2, dtype=ti.f32, shape=(128, 64))")]),e._v(".")]),e._v(" "),i("ul",[i("li",[e._v("If you want to get the matrix of grid node "),i("code",[e._v("i, j")]),e._v(", please use\n"),i("code",[e._v("mat = A[i, j]")]),e._v(". "),i("code",[e._v("mat")]),e._v(" is simply a "),i("code",[e._v("3 x 2")]),e._v(" matrix")]),e._v(" "),i("li",[e._v("To get the element on the first row and second column of that\nmatrix, use "),i("code",[e._v("mat[0, 1]")]),e._v(" or "),i("code",[e._v("A[i, j][0, 1]")]),e._v(".")]),e._v(" "),i("li",[e._v("As you may have noticed, there are "),i("strong",[e._v("two")]),e._v(" indexing operators "),i("code",[e._v("[]")]),e._v("\nwhen you load an matrix element from a global matrix field: the\nfirst is for field indexing, the second for matrix indexing.")]),e._v(" "),i("li",[i("code",[e._v("ti.Vector")]),e._v(" is simply an alias of "),i("code",[e._v("ti.Matrix")]),e._v(".")]),e._v(" "),i("li",[e._v("See "),i("RouterLink",{attrs:{to:"/documentation/api/matrix.html"}},[e._v("Matrices")]),e._v(" for more on matrices.")],1)]),e._v(" "),i("h2",{attrs:{id:"matrix-size"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#matrix-size"}},[e._v("#")]),e._v(" Matrix size")]),e._v(" "),i("p",[e._v("For performance reasons matrix operations will be unrolled, therefore we\nsuggest using only small matrices. For example, "),i("code",[e._v("2x1")]),e._v(", "),i("code",[e._v("3x3")]),e._v(", "),i("code",[e._v("4x4")]),e._v("\nmatrices are fine, yet "),i("code",[e._v("32x6")]),e._v(" is probably too big as a matrix size.")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("Due to the unrolling mechanisms, operating on large matrices (e.g.\n"),i("code",[e._v("32x128")]),e._v(") can lead to very long compilation time and low performance.")])]),e._v(" "),i("p",[e._v("If you have a dimension that is too large (e.g. "),i("code",[e._v("64")]),e._v("), it's better to\ndeclare a field of size "),i("code",[e._v("64")]),e._v(". E.g., instead of declaring\n"),i("code",[e._v("ti.Matrix.field(64, 32, dtype=ti.f32, shape=(3, 2))")]),e._v(", declare\n"),i("code",[e._v("ti.Matrix.field(3, 2, dtype=ti.f32, shape=(64, 32))")]),e._v(". Try to put large\ndimensions to fields instead of matrices.")])])}),[],!1,null,null,null);a.default=s.exports}}]);