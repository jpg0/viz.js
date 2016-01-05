// Generated from ./Dot.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by DotParser.
function DotListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

DotListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
DotListener.prototype.constructor = DotListener;

// Enter a parse tree produced by DotParser#graph.
DotListener.prototype.enterGraph = function(ctx) {
};

// Exit a parse tree produced by DotParser#graph.
DotListener.prototype.exitGraph = function(ctx) {
};


// Enter a parse tree produced by DotParser#stmt_list.
DotListener.prototype.enterStmt_list = function(ctx) {
};

// Exit a parse tree produced by DotParser#stmt_list.
DotListener.prototype.exitStmt_list = function(ctx) {
};


// Enter a parse tree produced by DotParser#stmt.
DotListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by DotParser#stmt.
DotListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by DotParser#attr_stmt.
DotListener.prototype.enterAttr_stmt = function(ctx) {
};

// Exit a parse tree produced by DotParser#attr_stmt.
DotListener.prototype.exitAttr_stmt = function(ctx) {
};


// Enter a parse tree produced by DotParser#attr_list.
DotListener.prototype.enterAttr_list = function(ctx) {
};

// Exit a parse tree produced by DotParser#attr_list.
DotListener.prototype.exitAttr_list = function(ctx) {
};


// Enter a parse tree produced by DotParser#a_list.
DotListener.prototype.enterA_list = function(ctx) {
};

// Exit a parse tree produced by DotParser#a_list.
DotListener.prototype.exitA_list = function(ctx) {
};


// Enter a parse tree produced by DotParser#edge_stmt.
DotListener.prototype.enterEdge_stmt = function(ctx) {
};

// Exit a parse tree produced by DotParser#edge_stmt.
DotListener.prototype.exitEdge_stmt = function(ctx) {
};


// Enter a parse tree produced by DotParser#edgeRHS.
DotListener.prototype.enterEdgeRHS = function(ctx) {
};

// Exit a parse tree produced by DotParser#edgeRHS.
DotListener.prototype.exitEdgeRHS = function(ctx) {
};


// Enter a parse tree produced by DotParser#edgeop.
DotListener.prototype.enterEdgeop = function(ctx) {
};

// Exit a parse tree produced by DotParser#edgeop.
DotListener.prototype.exitEdgeop = function(ctx) {
};


// Enter a parse tree produced by DotParser#node_stmt.
DotListener.prototype.enterNode_stmt = function(ctx) {
};

// Exit a parse tree produced by DotParser#node_stmt.
DotListener.prototype.exitNode_stmt = function(ctx) {
};


// Enter a parse tree produced by DotParser#node_id.
DotListener.prototype.enterNode_id = function(ctx) {
};

// Exit a parse tree produced by DotParser#node_id.
DotListener.prototype.exitNode_id = function(ctx) {
};


// Enter a parse tree produced by DotParser#port.
DotListener.prototype.enterPort = function(ctx) {
};

// Exit a parse tree produced by DotParser#port.
DotListener.prototype.exitPort = function(ctx) {
};


// Enter a parse tree produced by DotParser#subgraph.
DotListener.prototype.enterSubgraph = function(ctx) {
};

// Exit a parse tree produced by DotParser#subgraph.
DotListener.prototype.exitSubgraph = function(ctx) {
};


// Enter a parse tree produced by DotParser#id.
DotListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by DotParser#id.
DotListener.prototype.exitId = function(ctx) {
};



exports.DotListener = DotListener;