# rollup-plugin-node-resolve-100

Setup with:
```
git clone https://github.com/scola84/rollup-plugin-node-resolve-100
cd rollup-plugin-node-resolve-100
cd project
npm install
npm run link
node node_modules/rollup/bin/rollup -c
```
This will give you the following warning:
```
'B' is imported by ../packages/A/index.js, but could not be resolved – treating it as an external dependency
```
If you then edit the plugin with
```
nano node_modules/rollup-plugin-node-resolve/dist/rollup-plugin-node-resolve.cjs.js 
```
and comment out line 85, then you will get no warning.
