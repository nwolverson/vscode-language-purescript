import * as vscode from 'vscode';

// Configure in code as wordPattern not supported in JSON format
const configuration : vscode.LanguageConfiguration = {
    wordPattern: /([\w'_][\w'_\d]*)|([0-9]+\.[0-9]+([eE][+-]?[0-9]+)?|[0-9]+[eE][+-]?[0-9]+)/,
    "comments": {
		// symbol used for single line comment. Remove this entry if your language does not support line comments
		"lineComment": "--",
		// symbols used for start and end a block comment. Remove this entry if your language does not support block comments
		"blockComment": [ "{-", "-}" ]
	},
	// symbols used as brackets
	"brackets": [
		["{", "}"],
		["[", "]"],
		["(", ")"],
		["\"", "\""],
		["`", "`"]
	],
	"indentationRules": {
		// indent if:                   |-where w/o firstline-| |- ends with keyword            -| |- ends with unapplied op                                                 -|    |-unmatched brackets (depth 1)-|
		"increaseIndentPattern": /^\s*(((?!module).)+(.*)where|(.*)\b(do|let|in|if|then|else|of)\b|((.*)[$\.:\+\-\*\=/%><#:\u2200-\u22FF\u27C0-\u27EF\u2980-\u29FF\u2A00-\u2AFF]+)|(.*(\[[^\]]+|\{[^\}]+|\([^\)]+))|(,.*))\s*$/,
		"decreaseIndentPattern": /^\s*[\]\,\)\}].*$/,
	}
};

export function activate() {
    vscode.languages.setLanguageConfiguration('purescript', configuration);
}
