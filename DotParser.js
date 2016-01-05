// Generated from ./Dot.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DotListener = require('./DotListener').DotListener;
var DotVisitor = require('./DotVisitor').DotVisitor;

var grammarFileName = "Dot.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\32\u0082\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b",
    "\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\5",
    "\2 \n\2\3\2\3\2\5\2$\n\2\3\2\3\2\3\2\3\2\3\3\3\3\5\3,\n\3\7\3.\n\3\f",
    "\3\16\3\61\13\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4;\n\4\3\5\3\5\3\5",
    "\3\6\3\6\5\6B\n\6\3\6\6\6E\n\6\r\6\16\6F\3\7\3\7\3\7\5\7L\n\7\3\7\5",
    "\7O\n\7\6\7Q\n\7\r\7\16\7R\3\b\3\b\5\bW\n\b\3\b\3\b\5\b[\n\b\3\t\3\t",
    "\3\t\5\t`\n\t\6\tb\n\t\r\t\16\tc\3\n\3\n\3\13\3\13\5\13j\n\13\3\f\3",
    "\f\5\fn\n\f\3\r\3\r\3\r\3\r\5\rt\n\r\3\16\3\16\5\16x\n\16\5\16z\n\16",
    "\3\16\3\16\3\16\3\16\3\17\3\17\3\17\2\2\20\2\4\6\b\n\f\16\20\22\24\26",
    "\30\32\34\2\6\3\2\16\17\4\2\16\16\20\21\3\2\n\13\3\2\23\26\u0089\2\37",
    "\3\2\2\2\4/\3\2\2\2\6:\3\2\2\2\b<\3\2\2\2\nD\3\2\2\2\fP\3\2\2\2\16V",
    "\3\2\2\2\20a\3\2\2\2\22e\3\2\2\2\24g\3\2\2\2\26k\3\2\2\2\30o\3\2\2\2",
    "\32y\3\2\2\2\34\177\3\2\2\2\36 \7\r\2\2\37\36\3\2\2\2\37 \3\2\2\2 !",
    "\3\2\2\2!#\t\2\2\2\"$\5\34\17\2#\"\3\2\2\2#$\3\2\2\2$%\3\2\2\2%&\7\3",
    "\2\2&\'\5\4\3\2\'(\7\4\2\2(\3\3\2\2\2)+\5\6\4\2*,\7\5\2\2+*\3\2\2\2",
    "+,\3\2\2\2,.\3\2\2\2-)\3\2\2\2.\61\3\2\2\2/-\3\2\2\2/\60\3\2\2\2\60",
    "\5\3\2\2\2\61/\3\2\2\2\62;\5\24\13\2\63;\5\16\b\2\64;\5\b\5\2\65\66",
    "\5\34\17\2\66\67\7\6\2\2\678\5\34\17\28;\3\2\2\29;\5\32\16\2:\62\3\2",
    "\2\2:\63\3\2\2\2:\64\3\2\2\2:\65\3\2\2\2:9\3\2\2\2;\7\3\2\2\2<=\t\3",
    "\2\2=>\5\n\6\2>\t\3\2\2\2?A\7\7\2\2@B\5\f\7\2A@\3\2\2\2AB\3\2\2\2BC",
    "\3\2\2\2CE\7\b\2\2D?\3\2\2\2EF\3\2\2\2FD\3\2\2\2FG\3\2\2\2G\13\3\2\2",
    "\2HK\5\34\17\2IJ\7\6\2\2JL\5\34\17\2KI\3\2\2\2KL\3\2\2\2LN\3\2\2\2M",
    "O\7\t\2\2NM\3\2\2\2NO\3\2\2\2OQ\3\2\2\2PH\3\2\2\2QR\3\2\2\2RP\3\2\2",
    "\2RS\3\2\2\2S\r\3\2\2\2TW\5\26\f\2UW\5\32\16\2VT\3\2\2\2VU\3\2\2\2W",
    "X\3\2\2\2XZ\5\20\t\2Y[\5\n\6\2ZY\3\2\2\2Z[\3\2\2\2[\17\3\2\2\2\\_\5",
    "\22\n\2]`\5\26\f\2^`\5\32\16\2_]\3\2\2\2_^\3\2\2\2`b\3\2\2\2a\\\3\2",
    "\2\2bc\3\2\2\2ca\3\2\2\2cd\3\2\2\2d\21\3\2\2\2ef\t\4\2\2f\23\3\2\2\2",
    "gi\5\26\f\2hj\5\n\6\2ih\3\2\2\2ij\3\2\2\2j\25\3\2\2\2km\5\34\17\2ln",
    "\5\30\r\2ml\3\2\2\2mn\3\2\2\2n\27\3\2\2\2op\7\f\2\2ps\5\34\17\2qr\7",
    "\f\2\2rt\5\34\17\2sq\3\2\2\2st\3\2\2\2t\31\3\2\2\2uw\7\22\2\2vx\5\34",
    "\17\2wv\3\2\2\2wx\3\2\2\2xz\3\2\2\2yu\3\2\2\2yz\3\2\2\2z{\3\2\2\2{|",
    "\7\3\2\2|}\5\4\3\2}~\7\4\2\2~\33\3\2\2\2\177\u0080\t\5\2\2\u0080\35",
    "\3\2\2\2\25\37#+/:AFKNRVZ_cimswy"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'{'", "'}'", "';'", "'='", "'['", "']'", "','", 
                     "'->'", "'--'", "':'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', "STRICT", "GRAPH", 
                      "DIGRAPH", "NODE", "EDGE", "SUBGRAPH", "NUMBER", "STRING", 
                      "ID", "HTML_STRING", "COMMENT", "LINE_COMMENT", "PREPROC", 
                      "WS" ];

var ruleNames =  [ "graph", "stmt_list", "stmt", "attr_stmt", "attr_list", 
                   "a_list", "edge_stmt", "edgeRHS", "edgeop", "node_stmt", 
                   "node_id", "port", "subgraph", "id" ];

function DotParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

DotParser.prototype = Object.create(antlr4.Parser.prototype);
DotParser.prototype.constructor = DotParser;

Object.defineProperty(DotParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

DotParser.EOF = antlr4.Token.EOF;
DotParser.T__0 = 1;
DotParser.T__1 = 2;
DotParser.T__2 = 3;
DotParser.T__3 = 4;
DotParser.T__4 = 5;
DotParser.T__5 = 6;
DotParser.T__6 = 7;
DotParser.T__7 = 8;
DotParser.T__8 = 9;
DotParser.T__9 = 10;
DotParser.STRICT = 11;
DotParser.GRAPH = 12;
DotParser.DIGRAPH = 13;
DotParser.NODE = 14;
DotParser.EDGE = 15;
DotParser.SUBGRAPH = 16;
DotParser.NUMBER = 17;
DotParser.STRING = 18;
DotParser.ID = 19;
DotParser.HTML_STRING = 20;
DotParser.COMMENT = 21;
DotParser.LINE_COMMENT = 22;
DotParser.PREPROC = 23;
DotParser.WS = 24;

DotParser.RULE_graph = 0;
DotParser.RULE_stmt_list = 1;
DotParser.RULE_stmt = 2;
DotParser.RULE_attr_stmt = 3;
DotParser.RULE_attr_list = 4;
DotParser.RULE_a_list = 5;
DotParser.RULE_edge_stmt = 6;
DotParser.RULE_edgeRHS = 7;
DotParser.RULE_edgeop = 8;
DotParser.RULE_node_stmt = 9;
DotParser.RULE_node_id = 10;
DotParser.RULE_port = 11;
DotParser.RULE_subgraph = 12;
DotParser.RULE_id = 13;

function GraphContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_graph;
    return this;
}

GraphContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GraphContext.prototype.constructor = GraphContext;

GraphContext.prototype.stmt_list = function() {
    return this.getTypedRuleContext(Stmt_listContext,0);
};

GraphContext.prototype.GRAPH = function() {
    return this.getToken(DotParser.GRAPH, 0);
};

GraphContext.prototype.DIGRAPH = function() {
    return this.getToken(DotParser.DIGRAPH, 0);
};

GraphContext.prototype.STRICT = function() {
    return this.getToken(DotParser.STRICT, 0);
};

GraphContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

GraphContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterGraph(this);
	}
};

GraphContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitGraph(this);
	}
};

GraphContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitGraph(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.GraphContext = GraphContext;

DotParser.prototype.graph = function() {

    var localctx = new GraphContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, DotParser.RULE_graph);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        _la = this._input.LA(1);
        if(_la===DotParser.STRICT) {
            this.state = 28;
            this.match(DotParser.STRICT);
        }

        this.state = 31;
        _la = this._input.LA(1);
        if(!(_la===DotParser.GRAPH || _la===DotParser.DIGRAPH)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 33;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DotParser.NUMBER) | (1 << DotParser.STRING) | (1 << DotParser.ID) | (1 << DotParser.HTML_STRING))) !== 0)) {
            this.state = 32;
            this.id();
        }

        this.state = 35;
        this.match(DotParser.T__0);
        this.state = 36;
        this.stmt_list();
        this.state = 37;
        this.match(DotParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Stmt_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_stmt_list;
    return this;
}

Stmt_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stmt_listContext.prototype.constructor = Stmt_listContext;

Stmt_listContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

Stmt_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterStmt_list(this);
	}
};

Stmt_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitStmt_list(this);
	}
};

Stmt_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitStmt_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.Stmt_listContext = Stmt_listContext;

DotParser.prototype.stmt_list = function() {

    var localctx = new Stmt_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, DotParser.RULE_stmt_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DotParser.T__0) | (1 << DotParser.GRAPH) | (1 << DotParser.NODE) | (1 << DotParser.EDGE) | (1 << DotParser.SUBGRAPH) | (1 << DotParser.NUMBER) | (1 << DotParser.STRING) | (1 << DotParser.ID) | (1 << DotParser.HTML_STRING))) !== 0)) {
            this.state = 39;
            this.stmt();
            this.state = 41;
            _la = this._input.LA(1);
            if(_la===DotParser.T__2) {
                this.state = 40;
                this.match(DotParser.T__2);
            }

            this.state = 47;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.node_stmt = function() {
    return this.getTypedRuleContext(Node_stmtContext,0);
};

StmtContext.prototype.edge_stmt = function() {
    return this.getTypedRuleContext(Edge_stmtContext,0);
};

StmtContext.prototype.attr_stmt = function() {
    return this.getTypedRuleContext(Attr_stmtContext,0);
};

StmtContext.prototype.id = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdContext);
    } else {
        return this.getTypedRuleContext(IdContext,i);
    }
};

StmtContext.prototype.subgraph = function() {
    return this.getTypedRuleContext(SubgraphContext,0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitStmt(this);
	}
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.StmtContext = StmtContext;

DotParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, DotParser.RULE_stmt);
    try {
        this.state = 56;
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.node_stmt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 49;
            this.edge_stmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 50;
            this.attr_stmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 51;
            this.id();
            this.state = 52;
            this.match(DotParser.T__3);
            this.state = 53;
            this.id();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 55;
            this.subgraph();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Attr_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_attr_stmt;
    return this;
}

Attr_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attr_stmtContext.prototype.constructor = Attr_stmtContext;

Attr_stmtContext.prototype.attr_list = function() {
    return this.getTypedRuleContext(Attr_listContext,0);
};

Attr_stmtContext.prototype.GRAPH = function() {
    return this.getToken(DotParser.GRAPH, 0);
};

Attr_stmtContext.prototype.NODE = function() {
    return this.getToken(DotParser.NODE, 0);
};

Attr_stmtContext.prototype.EDGE = function() {
    return this.getToken(DotParser.EDGE, 0);
};

Attr_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterAttr_stmt(this);
	}
};

Attr_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitAttr_stmt(this);
	}
};

Attr_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitAttr_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.Attr_stmtContext = Attr_stmtContext;

DotParser.prototype.attr_stmt = function() {

    var localctx = new Attr_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, DotParser.RULE_attr_stmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DotParser.GRAPH) | (1 << DotParser.NODE) | (1 << DotParser.EDGE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 59;
        this.attr_list();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Attr_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_attr_list;
    return this;
}

Attr_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attr_listContext.prototype.constructor = Attr_listContext;

Attr_listContext.prototype.a_list = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(A_listContext);
    } else {
        return this.getTypedRuleContext(A_listContext,i);
    }
};

Attr_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterAttr_list(this);
	}
};

Attr_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitAttr_list(this);
	}
};

Attr_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitAttr_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.Attr_listContext = Attr_listContext;

DotParser.prototype.attr_list = function() {

    var localctx = new Attr_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, DotParser.RULE_attr_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 61;
            this.match(DotParser.T__4);
            this.state = 63;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DotParser.NUMBER) | (1 << DotParser.STRING) | (1 << DotParser.ID) | (1 << DotParser.HTML_STRING))) !== 0)) {
                this.state = 62;
                this.a_list();
            }

            this.state = 65;
            this.match(DotParser.T__5);
            this.state = 68; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===DotParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function A_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_a_list;
    return this;
}

A_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
A_listContext.prototype.constructor = A_listContext;

A_listContext.prototype.id = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdContext);
    } else {
        return this.getTypedRuleContext(IdContext,i);
    }
};

A_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterA_list(this);
	}
};

A_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitA_list(this);
	}
};

A_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitA_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.A_listContext = A_listContext;

DotParser.prototype.a_list = function() {

    var localctx = new A_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, DotParser.RULE_a_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 70;
            this.id();
            this.state = 73;
            _la = this._input.LA(1);
            if(_la===DotParser.T__3) {
                this.state = 71;
                this.match(DotParser.T__3);
                this.state = 72;
                this.id();
            }

            this.state = 76;
            _la = this._input.LA(1);
            if(_la===DotParser.T__6) {
                this.state = 75;
                this.match(DotParser.T__6);
            }

            this.state = 80; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DotParser.NUMBER) | (1 << DotParser.STRING) | (1 << DotParser.ID) | (1 << DotParser.HTML_STRING))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Edge_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_edge_stmt;
    return this;
}

Edge_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Edge_stmtContext.prototype.constructor = Edge_stmtContext;

Edge_stmtContext.prototype.edgeRHS = function() {
    return this.getTypedRuleContext(EdgeRHSContext,0);
};

Edge_stmtContext.prototype.node_id = function() {
    return this.getTypedRuleContext(Node_idContext,0);
};

Edge_stmtContext.prototype.subgraph = function() {
    return this.getTypedRuleContext(SubgraphContext,0);
};

Edge_stmtContext.prototype.attr_list = function() {
    return this.getTypedRuleContext(Attr_listContext,0);
};

Edge_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterEdge_stmt(this);
	}
};

Edge_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitEdge_stmt(this);
	}
};

Edge_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitEdge_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.Edge_stmtContext = Edge_stmtContext;

DotParser.prototype.edge_stmt = function() {

    var localctx = new Edge_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, DotParser.RULE_edge_stmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        switch(this._input.LA(1)) {
        case DotParser.NUMBER:
        case DotParser.STRING:
        case DotParser.ID:
        case DotParser.HTML_STRING:
            this.state = 82;
            this.node_id();
            break;
        case DotParser.T__0:
        case DotParser.SUBGRAPH:
            this.state = 83;
            this.subgraph();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 86;
        this.edgeRHS();
        this.state = 88;
        _la = this._input.LA(1);
        if(_la===DotParser.T__4) {
            this.state = 87;
            this.attr_list();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EdgeRHSContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_edgeRHS;
    return this;
}

EdgeRHSContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EdgeRHSContext.prototype.constructor = EdgeRHSContext;

EdgeRHSContext.prototype.edgeop = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EdgeopContext);
    } else {
        return this.getTypedRuleContext(EdgeopContext,i);
    }
};

EdgeRHSContext.prototype.node_id = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Node_idContext);
    } else {
        return this.getTypedRuleContext(Node_idContext,i);
    }
};

EdgeRHSContext.prototype.subgraph = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SubgraphContext);
    } else {
        return this.getTypedRuleContext(SubgraphContext,i);
    }
};

EdgeRHSContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterEdgeRHS(this);
	}
};

EdgeRHSContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitEdgeRHS(this);
	}
};

EdgeRHSContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitEdgeRHS(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.EdgeRHSContext = EdgeRHSContext;

DotParser.prototype.edgeRHS = function() {

    var localctx = new EdgeRHSContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, DotParser.RULE_edgeRHS);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 90;
            this.edgeop();
            this.state = 93;
            switch(this._input.LA(1)) {
            case DotParser.NUMBER:
            case DotParser.STRING:
            case DotParser.ID:
            case DotParser.HTML_STRING:
                this.state = 91;
                this.node_id();
                break;
            case DotParser.T__0:
            case DotParser.SUBGRAPH:
                this.state = 92;
                this.subgraph();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 97; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===DotParser.T__7 || _la===DotParser.T__8);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EdgeopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_edgeop;
    return this;
}

EdgeopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EdgeopContext.prototype.constructor = EdgeopContext;


EdgeopContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterEdgeop(this);
	}
};

EdgeopContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitEdgeop(this);
	}
};

EdgeopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitEdgeop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.EdgeopContext = EdgeopContext;

DotParser.prototype.edgeop = function() {

    var localctx = new EdgeopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, DotParser.RULE_edgeop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        _la = this._input.LA(1);
        if(!(_la===DotParser.T__7 || _la===DotParser.T__8)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Node_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_node_stmt;
    return this;
}

Node_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Node_stmtContext.prototype.constructor = Node_stmtContext;

Node_stmtContext.prototype.node_id = function() {
    return this.getTypedRuleContext(Node_idContext,0);
};

Node_stmtContext.prototype.attr_list = function() {
    return this.getTypedRuleContext(Attr_listContext,0);
};

Node_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterNode_stmt(this);
	}
};

Node_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitNode_stmt(this);
	}
};

Node_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitNode_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.Node_stmtContext = Node_stmtContext;

DotParser.prototype.node_stmt = function() {

    var localctx = new Node_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, DotParser.RULE_node_stmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.node_id();
        this.state = 103;
        _la = this._input.LA(1);
        if(_la===DotParser.T__4) {
            this.state = 102;
            this.attr_list();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Node_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_node_id;
    return this;
}

Node_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Node_idContext.prototype.constructor = Node_idContext;

Node_idContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

Node_idContext.prototype.port = function() {
    return this.getTypedRuleContext(PortContext,0);
};

Node_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterNode_id(this);
	}
};

Node_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitNode_id(this);
	}
};

Node_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitNode_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.Node_idContext = Node_idContext;

DotParser.prototype.node_id = function() {

    var localctx = new Node_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, DotParser.RULE_node_id);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.id();
        this.state = 107;
        _la = this._input.LA(1);
        if(_la===DotParser.T__9) {
            this.state = 106;
            this.port();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PortContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_port;
    return this;
}

PortContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PortContext.prototype.constructor = PortContext;

PortContext.prototype.id = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdContext);
    } else {
        return this.getTypedRuleContext(IdContext,i);
    }
};

PortContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterPort(this);
	}
};

PortContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitPort(this);
	}
};

PortContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitPort(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.PortContext = PortContext;

DotParser.prototype.port = function() {

    var localctx = new PortContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, DotParser.RULE_port);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.match(DotParser.T__9);
        this.state = 110;
        this.id();
        this.state = 113;
        _la = this._input.LA(1);
        if(_la===DotParser.T__9) {
            this.state = 111;
            this.match(DotParser.T__9);
            this.state = 112;
            this.id();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubgraphContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_subgraph;
    return this;
}

SubgraphContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubgraphContext.prototype.constructor = SubgraphContext;

SubgraphContext.prototype.stmt_list = function() {
    return this.getTypedRuleContext(Stmt_listContext,0);
};

SubgraphContext.prototype.SUBGRAPH = function() {
    return this.getToken(DotParser.SUBGRAPH, 0);
};

SubgraphContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

SubgraphContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterSubgraph(this);
	}
};

SubgraphContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitSubgraph(this);
	}
};

SubgraphContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitSubgraph(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.SubgraphContext = SubgraphContext;

DotParser.prototype.subgraph = function() {

    var localctx = new SubgraphContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, DotParser.RULE_subgraph);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        _la = this._input.LA(1);
        if(_la===DotParser.SUBGRAPH) {
            this.state = 115;
            this.match(DotParser.SUBGRAPH);
            this.state = 117;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DotParser.NUMBER) | (1 << DotParser.STRING) | (1 << DotParser.ID) | (1 << DotParser.HTML_STRING))) !== 0)) {
                this.state = 116;
                this.id();
            }

        }

        this.state = 121;
        this.match(DotParser.T__0);
        this.state = 122;
        this.stmt_list();
        this.state = 123;
        this.match(DotParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotParser.RULE_id;
    return this;
}

IdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdContext.prototype.constructor = IdContext;

IdContext.prototype.ID = function() {
    return this.getToken(DotParser.ID, 0);
};

IdContext.prototype.STRING = function() {
    return this.getToken(DotParser.STRING, 0);
};

IdContext.prototype.HTML_STRING = function() {
    return this.getToken(DotParser.HTML_STRING, 0);
};

IdContext.prototype.NUMBER = function() {
    return this.getToken(DotParser.NUMBER, 0);
};

IdContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.enterId(this);
	}
};

IdContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotListener ) {
        listener.exitId(this);
	}
};

IdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DotVisitor ) {
        return visitor.visitId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DotParser.IdContext = IdContext;

DotParser.prototype.id = function() {

    var localctx = new IdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, DotParser.RULE_id);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DotParser.NUMBER) | (1 << DotParser.STRING) | (1 << DotParser.ID) | (1 << DotParser.HTML_STRING))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.DotParser = DotParser;
