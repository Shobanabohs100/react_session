# Simple React starter code

1. Initialize npm and install the dependencies

```sh
npm init

npm i react react-dom -s
npm i babel-cli babel-preset-react-app --save-dev
```

2. Create a npm script to convert jsx to js files in package.json file

```sh
"buildjs:watch": "npx babel --watch jsx --out-dir js --presets react-app/prod"
```

3. Create folders jsx and js
4. Add **jsx/App.jsx**

```sh
'use strict';

const App = () => (<div>App initialized </div>)

const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);
```

5. Run the npm script to transpile the Jsx to js format

```sh
npm run buildjs:watch
```

6. Include all script files to the index.html

```sh
<div id="root"></div>
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->

<script  src="node_modules/react/umd/react.development.js"></script>

<script  src="node_modules/react-dom/umd/react-dom.development.js"></script>



<!-- Load our React component. -->

<script  src="js/App.js"></script>
```

Open the index file in browser, now we can see the DOM rendered from react
