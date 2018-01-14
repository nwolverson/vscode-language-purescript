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
	]
};

export function activate() {
    vscode.languages.setLanguageConfiguration('purescript', configuration);
}
