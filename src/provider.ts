import * as vscode from 'vscode'
import { CssRemProcess } from './process'

export class CssRemProvider implements vscode.CompletionItemProvider {
  constructor(private process: CssRemProcess) {}

  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): Thenable<vscode.CompletionItem[]> {
    return new Promise((resolve, _reject) => {
      const lineText = document.getText(
        new vscode.Range(position.with(undefined, 0), position)
      )
      console.log(lineText)
      const res = this.process.convert(lineText)
      if (!res) {
        return resolve([])
      }

      const item = new vscode.CompletionItem(
        `${res.pxValue}rem -> ${res.rem}`,
        vscode.CompletionItemKind.Snippet
      )
      item.insertText = res.rem
      return resolve([item])
    })
  }
}
