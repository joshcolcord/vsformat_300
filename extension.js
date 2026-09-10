const vscode = require('vscode');
const path = require('path');

const PROFILE_NAME = 'eclipse-cs300-style-f26-1';

/**
 * Called when the extension activates (first Java file opened).
 * Writes CS300 formatter and ruler settings into the current workspace config.
 */
async function activate(context) {
  const xmlPath = context.asAbsolutePath(path.join('formatters', 'eclipse-cs300-style-f26-1.xml'));

  // Java formatter (requires Microsoft Java extension pack)
  const javaConfig = vscode.workspace.getConfiguration('java');
  await javaConfig.update(
    'format.settings.url',
    xmlPath,
    vscode.ConfigurationTarget.Workspace
  );
  await javaConfig.update(
    'format.settings.profile',
    PROFILE_NAME,
    vscode.ConfigurationTarget.Workspace
  );

  // Ruler at 100 characters
  const editorConfig = vscode.workspace.getConfiguration('editor');
  await editorConfig.update(
    'rulers',
    [100],
    vscode.ConfigurationTarget.Workspace
  );

  // Notify on first activation so user knows it worked
  const key = 'cs300.activated';
  const alreadyNotified = context.globalState.get(key, false);
  if (!alreadyNotified) {
    vscode.window.showInformationMessage(
      'CS300 formatter and 100-char ruler are active.' +
      'Apply format with Shift+Alt+F (Windows/Linux) or Shift+Option+F (Mac).'
    );
    context.globalState.update(key, true);
  }
}

function deactivate() {}

module.exports = { activate, deactivate };
