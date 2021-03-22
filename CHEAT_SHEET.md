- running tsc in watch mode for a specific file
  - `tsc fileName.ts -w`
    or
    `* tsc fileName.ts --watch `
- running tsc in watch mode for a whole project
  - `tsc --init ` //outputs a tsconfig.json file; needs to be run once
  - `tsc -w`
- tsconfig.json options: allow you to reconfigure how the tsc will deal with your code. chech=k comments to get an idea about each option
- Debbuging your typescript code:
  - Extension: Debugger for chrome // allows you to debug your ts code from within vs code
  - steps of debugging:
    - place breackpoints
    - enable "sourceMap" option on tsconfig
    - Go to Debug -> open configurations -> chrome
    - add chrome configuration to .vscode/launch.json
    - run tsc
    - start debugging
