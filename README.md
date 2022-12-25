# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
  #   b a b y - c o r r e c t e d - a g e 
   
   

Step 1
Remove the dist directory from the project’s .gitignore file (it’s ignored by default by Yeoman).

Step 2
Make sure git knows about your subtree (the subfolder with your site).

git add dist && git commit -m "Initial dist subtree commit"
Step 3
Use subtree push to send it to the gh-pages branch on GitHub.

git subtree push --prefix dist origin gh-pages
Boom. If your folder isn’t called dist, then you’ll need to change that in each of the commands above.
