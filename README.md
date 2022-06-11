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
