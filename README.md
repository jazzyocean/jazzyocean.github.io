# Saturnine Fork of jazzyocean.github.io
This fork makes a number of changes to the tool developed by jazzyocean, including
refactoring the entire project under the hood. 

- Everything has been rewritten to use the Svelte framework, reducing the required code manifold. 
- Separation of concerns: the file structure has been overhauled to keep small file sizes
  and a small amount of things to worry about per file.
- Cookie assignment (server-side storage) has been changed to localStorage assignment (client-side storage). 
- Because I was not 100% sure how everything was *supposed* to function, there may have been
  a loss of some possibly intended behaviours.

Some of the techniques used in this fork a *little* bit overkill for how simple this app is, but this
structure scales up very well and makes it much easier to expand upon the codebase.

To test run this fork, clone the repo locally. In the repo, run
```
npm i
```
to install the node_modules needed for development testing. Then, you can run
```
npm run start
```
and check `localhost:8080` in your web-browser (or click the link which will come up in the terminal.)
