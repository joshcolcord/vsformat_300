# CS300 VSC Formatting Extension

Small extension for VSCode that applies the Java formatting requirements, including the 100-character line limit, for CS300 at UW-Madison as required.

---

## Installation (from .vsix)

1. Download `cs300-format-vscode-0.0.1.vsix` 
2. Open VSCode, go to the Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Click the `...` menu at the top right of the panel → Install from VSIX..
4. Select the `.vsix` file
5. Open any `.java` file — the extension activates and a confirmation message appears

Make sure you have the Extension Pack for Java from Microsoft installed in VSCode or else the extension will not work !!


Or from the terminal:
```bash
code --install-extension cs300-format-vscode-0.0.1.vsix
```

---

## Usage

| Action | Shortcut |
|---|---|
| Format current file | `Shift+Alt+F` (Win/Linux) · `Shift+Option+F` (Mac) |
| Format selected code | `Ctrl+K Ctrl+F` · `Cmd+K Cmd+F` |

---

## What it do

- Loads `eclipse-cs300-style-f26.xml` as the Java formatter profile (same file as from Canvas)
- Adds a ruler at column 100
- Writes both settings into your workspace config (`.vscode/settings.json`) so doesn't affect any other projects 
- (But this also means you'll just have to apply it to each CS300 project yourself with the keyboard shortcut)

---

## Requirements

You need to install the Extension Pack for Java from Microsoft before using this extension.  
It provides the Java language server that actually runs the Eclipse formatter engine.

```
ext install vscjava.vscode-java-pack
```
---

## Building from source if you like

You need to have node.js installed

```
cd cs300-vscode
npm install
npx vsce package

# outputs cs300-format-vscode-0.0.1.vsix
```

---
