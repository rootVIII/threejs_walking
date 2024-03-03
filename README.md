##### Try it: https://rootviii.github.io/threejs_walking/

###### Node modules used:
<pre>
    <code>
npm init -y
npm install --save three
npm install --save-dev webpack
npm install --save-dev webpack-cli
npm install eslint --save-dev
    </code>
</pre>

###### ESLint (then edit .eslintrc.js)
<pre>
    <code>
node node_modules/eslint/bin/eslint.js --init
    </code>
</pre>

###### Build Webpack DEV dist/main.js and run from project root
<pre>
    <code>
npm run dev ; python -m http.server
    </code>
</pre>

###### Build Webpack PRD dist/main.js and run from project root
<pre>
    <code>
npm run prd ; python -m http.server
    </code>
</pre>

###### Other notes:

<pre>
    <code>
- Use directional arrows to move (hold shift to run).
  Hold 'p' while standing still to throw a haymaker.

- Easily combine Mixamo model animations:
  https://nilooy.github.io/character-animation-combiner/

- Evenly scale a Mixamo model/object in Blender:
  https://blender.stackexchange.com/a/44738

- Recenter an object in Blender after scaling:
  https://blender.stackexchange.com/a/3217

* The dist/ folder included in this repo has had its paths
  altered for all .glb files using the included update_paths.sh
  script in order to serve the project using Github Pages. The
  normal webpack build that runs locally will use paths pointing
  to the parent directory, similar to ../assets/filename.glb.
  Github Pages requires paths to start from project root such as
  assets/filename.glb. Only use update_paths.sh if deploying to
  Github Pages.
    </code>
</pre>
