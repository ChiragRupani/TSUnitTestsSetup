## Typescript unit tests

This repository contains 3 Projects:

1.  [HelloJasmine](https://github.com/chiragrupani/TSUnitTestsSetup/tree/master/HelloJasmine 'Jasmine')

2.  [HelloMocha](https://github.com/chiragrupani/TSUnitTestsSetup/tree/master/HelloMocha 'Mocha')

3.  [Hello Jest](https://github.com/chiragrupani/TSUnitTestsSetup/tree/master/HelloJest 'Jest')

Each project contains sample source code in `src` folder and unit tests in `tests` folder.

The goal is to create starter project using typescript and above testing frameworks along with debugging in VS Code and getting code coverage

<hr/>

## Manually Setting up projects

The `.\installCmd.sh` file contains `npm install` commands if you want to use same npm package in your existing projects.

The `.vscode\launch.json` file contains settings for debugging the code in VS Code editor.

The `.\Package.json` file contains scripts for executing tests.

Example:

```JSON
"scripts": {
    "test": "mocha -r ts-node/register tests/**/*.test.ts"
}
```

Also,`.\tsconfig.json` file is generated using `tsc --init` command

<hr/>

## Test Execution

The tests are executed using

```sh
npm t
```

(which is short for `npm run test`)

To get test coverage

```sh
npm run coverage
```

<hr/>

If you get error - `describe is not defined`, add mocha or jasmine as shown below in `ts.config`:

```json
"compilerOptions": {
    "types": [
      "mocha"
    ]
}
```
