import * as vscode from 'vscode';

import aiCommitController from './coder-commit-controller';

export async function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.coder-commit', async (arg) => {
      await aiCommitController(arg);
    })
  );
}

export function deactivate() {}
