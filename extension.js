const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('"betterarrow" is now active!');
	const disposable = vscode.commands.registerCommand('betterarrow.helloWorld', function () {
		vscode.window.showInformationMessage('Hello!');
	});
	context.subscriptions.push(disposable);
}
function deactivate() {}
module.exports = {
	activate,
	deactivate
}
