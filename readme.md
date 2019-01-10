# example of tree shaking in rollup and webpack

We have external lib `some-lib` and our application `app`.  
The `app` imports one method from `some-lib` by two different ways:  
1. `import { fooAlpha as method } from 'some-lib';`
2. `import { fooAlpha as method } from 'some-lib/src/foo-module/foo-alpha';`

and the output of app build is 4 bundled apps:
1. rollup with lib import
2. rollup with src import
3. webpack with lib import
4. webpack with src import

## how to run
You have to have `webpack` and `rollup` CLI installed

just do `npm start` inside `./app` folder.

## additional
`some-lib` has tripple circular dependency:  
`barAlpha` imports `fooBeta`  
`fooBeta` imports `barBeta`  
`barBeta` imports `barAlpha`

`fooAlpha` without any dependencies.

## conclusion
`import something from 'external'` will bundle all exports of `external` without tree-shaking for both: webpack and rollup 

`import { something } from 'external/submodule'` will bundle something and it dependencies for rollup and all exports of `submodule` for webpack  

`import { something } from 'external/submodule/something'` will bundle something and it dependencies for both rollup and webpack
