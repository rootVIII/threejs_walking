###### Steps used when project was initially created (else just install using existing package.json):
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
eslint --init
    </code>
</pre>

###### Check script src in index.html is set to the dist/main.js Webpack build:
<pre>
    <code>
&ltscript src="./dist/main.js"&gt; &lt;/script&gt;
    </code>
</pre>

###### Build Webpack DEV dist/main.js and run from project root
<pre>
    <code>
npm run dev
    </code>
</pre>

###### Build Webpack PROD dist/main.js and run from project root
<pre>
    <code>
npm run prod
    </code>
</pre>

###### Make Webpack PROD build only
<pre>
    <code>
npm run build
    </code>
</pre>

###### Other notes:

<pre>
    <code>
- Easily combine Mixamo model animations:
  https://nilooy.github.io/character-animation-combiner/

- Evenly scale a Mixamo model/object in Blender:
  https://blender.stackexchange.com/a/44738

- Recenter an object in Blender after scaling:
  https://blender.stackexchange.com/a/3217

* The dist/ folder included in this repo has had its paths altered
  in order to serve the project using Github pages. Rebuild the 
  dist/ using the above steps folder if cloning and running locally!

- Use directional arrows to move (hold shift to run).
  Hold 'p' while standing still to throw a haymaker.
    </code>
</pre>

###### Try it: https://rootviii.github.io/threejs_walking/
