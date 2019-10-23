# 参照(感谢)

https://github.com/cipchk/vscode-cssrem.git

# rem2rem

一个将 `rem` 转 `rem` 的 VSCode 插件

将目标 rem 转换成设计图为 750 \* 1334 的 rem

# Calculation

```
(px * cssrem.rootFontSize) / 100
```

# Install

```bash
ext install rem2rem
```

# How To Use

- Auto snippet
- CLI: Press `F1`, enter `rem2rem`

# Support Language

html vue css less scss sass stylus tpl（php smarty3）

# Configuration

Open your user and workspace settings (`File > Preferences > Settings`):

| Name                           | Description                                                                                    | Default |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | ------- |
| `rem2rem.rootFontSize`         | root font-size (Unit: `px`)                                                                    | `16`    |
| `rem2rem.fixedDigits`          | `px` to `rem` decimal point maximum length                                                     | `6`     |
| `rem2rem.autoRemovePrefixZero` | Automatically remove prefix 0                                                                  | `true`  |
| `rem2rem.ingoresViaCommand`    | Ignores `px` to `rem` when trigger command (Unit: `string[]`), can be set `[ "1px", "0.5px" ]` | `[]`    |

**NOTE:** Muse be restart vscode after modification
