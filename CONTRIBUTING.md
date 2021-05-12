This repository contains generated code based on [atom-language-purescript](https://github.com/purescript-contrib/atom-language-purescript).

* For snippets changes, edit `snippets/language-purescript.cson` in `atom-language-purescript`
* For grammar changes, edit `src/purescript.coffee` and (in atom-language purescript) run `npm run build`

Changes are pulled in from upstream repository `atom-language-purescript` by `npm run build` here.

You may also pull in changes from a locally cloned version of `atom-language-purescript` by running `node scripts/update --local [path-to cloned repo]` (by default the path is "../atom-language-purescript" relative to the current directory).
