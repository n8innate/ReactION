"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class StartExtensionProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }
    refresh() {
        this._onDidChangeTreeData.fire();
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        vscode.commands.executeCommand('projectX.openTree');
        // vscode.commands.executeCommand('workbench.view.explorer');
        this._onDidChangeTreeData.fire(); // Make sure collection is not cached.
        return Promise.reject([]);
    }
}
exports.default = StartExtensionProvider;
//# sourceMappingURL=startExtensionProvider.js.map