// Generated from ./Dot.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by DotParser.

function DotVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

DotVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
DotVisitor.prototype.constructor = DotVisitor;

// Visit a parse tree produced by DotParser#graph.
DotVisitor.prototype.visitGraph = function(ctx) {
};


// Visit a parse tree produced by DotParser#stmt_list.
DotVisitor.prototype.visitStmt_list = function(ctx) {
};


// Visit a parse tree produced by DotParser#stmt.
DotVisitor.prototype.visitStmt = function(ctx) {
};


// Visit a parse tree produced by DotParser#attr_stmt.
DotVisitor.prototype.visitAttr_stmt = function(ctx) {
};


// Visit a parse tree produced by DotParser#attr_list.
DotVisitor.prototype.visitAttr_list = function(ctx) {
};


// Visit a parse tree produced by DotParser#a_list.
DotVisitor.prototype.visitA_list = function(ctx) {
};


// Visit a parse tree produced by DotParser#edge_stmt.
DotVisitor.prototype.visitEdge_stmt = function(ctx) {
};


// Visit a parse tree produced by DotParser#edgeRHS.
DotVisitor.prototype.visitEdgeRHS = function(ctx) {
};


// Visit a parse tree produced by DotParser#edgeop.
DotVisitor.prototype.visitEdgeop = function(ctx) {
};


// Visit a parse tree produced by DotParser#node_stmt.
DotVisitor.prototype.visitNode_stmt = function(ctx) {
};


// Visit a parse tree produced by DotParser#node_id.
DotVisitor.prototype.visitNode_id = function(ctx) {
};


// Visit a parse tree produced by DotParser#port.
DotVisitor.prototype.visitPort = function(ctx) {
};


// Visit a parse tree produced by DotParser#subgraph.
DotVisitor.prototype.visitSubgraph = function(ctx) {
};


// Visit a parse tree produced by DotParser#id.
DotVisitor.prototype.visitId = function(ctx) {
};



exports.DotVisitor = DotVisitor;