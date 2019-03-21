import * as vscode from 'vscode';
import * as path from 'path';

export default {
	generateD3:
		function (stringifiedTreeData: string, parseInfo: any): string {
			const bundle = vscode.Uri.file(path.join(__dirname, 'build', 'bundle.js'));
			const bundleUri = bundle.with({
				scheme: 'vscode-resource'
			});
			// console.log('tree data ', stringifiedTreeData);
			return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="utf-8">
			<link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
			<title>Tree Example</title>
			<script>
				window._TREE_DATA = [${stringifiedTreeData}];
				// window._CONFIG = ${parseInfo};
			</script>
		</head>
			<body>
				<div id="root"></div>
				<script src="${bundleUri}"></script>
			</body>
		</html>
		`;
		}
}
