#typescript-makefile

Want to easily install TypeScript into a local `node_modules` directory? Don't want to deal with Gulp, Grunt, Webpack, or whatever cool new tool is out there? Well then, use this project as your starting point for a quick and easy time using TypeScript!

## Usage
```
node run.js
node ./build/example.js
```
## Options
we now have one command with two options of execution (build mode, watch mode):
    node run.js - For build (default)
    node run.js --watch - For watch mode

That's all there is to it!

### PS
watch mode - Anytime you save the file, it will be auto-rebuilt

If you want to use this in a real project and don't like `example.js` as build filename, then edit the `tsconfig.json` to change the `outFile` value.

