# nitkanikita21 Dota2CustomGame template

A template for Dota 2 Custom Games built with modern technologies.
Forked from [TypeScriptAddonTemplate](https://github.com/ModDota/TypeScriptAddonTemplate)

- TypeScript with Webpack 5 & Solid.js for Panorama UI
- [TypeScript for VScripts](https://typescripttolua.github.io/)
- Basic code

## Getting Started

1. Clone this repository or, if you're planning to have a repository for your custom game on GitHub, [create a new repository from this template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) and clone it instead.
2. Open the directory of your custom game and change `name` field in `package.json` file to the name of your addon name.
3. Open terminal in that directory and run `npm i` to install dependencies. You also should run `npm update` once in a while to get tool updates.

After that you can press `Ctrl+Shift+B` in VSCode or run `npm run dev` command in terminal to compile your code and watch for changes.

Run `npm run launch` for launch Dota2 Workshop Tools

## Contents:

Modules: 
* **[modules/common]:** TypeScript .d.ts type declaration files with types that can be shared between Panorama and VScripts
* **[modules/vscripts]:** TypeScript code for Dota addon (Lua) vscripts. Compiles lua to game/scripts/vscripts.
* **[modules/panorama]:** TypeScript code for panorama UI. Compiles js to content/panorama/scripts/custom_game

Game dirs:
* **[game/*]:** Dota game directory containing files such as npc kv files and compiled lua scripts.
* **[content/*]:** Dota content directory containing panorama sources other than scripts (xml, css, compiled js)

Build scripts:
* **[scripts/*]:** Repository installation scripts

