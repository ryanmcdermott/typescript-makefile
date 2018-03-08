# typescript-makefile

Want to easily install TypeScript into a local `node_modules` directory? Don't want to deal with Gulp, Grunt, Webpack, or whatever cool new tool is out there? Well then, use this project as your starting point for a quick and easy time using TypeScript!

## Usage
```
make install
make build
node ./build/example.js
```

That's all there is to it! For an extra awesome workflow, type `make watch` and edit `example.ts` and anytime you save the file, it will be auto-rebuilt.

### PS
If you want to use this in a real project and don't like `example.js` as build filename, then edit the `tsconfig.json` to change the `outFile` value.

