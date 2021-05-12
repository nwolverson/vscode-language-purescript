// @ts-check
const request = require("request");
const cson = require("cson");
const process = require("process");
const fs = require("fs");
const path = require("path");

const upstreamName = "atom-language-purescript";

const getUrl = (file) =>
  "https://raw.githubusercontent.com/purescript-contrib/" +
  upstreamName +
  "/master/" +
  file;

const locFilesMap = {
  snippets: "snippets/purescript.json",
  grammar: "syntaxes/purescript.json",
};

const remoteFilesMap = {
  snippets: "snippets/language-purescript.cson",
  grammar: "grammars/purescript.cson",
};

const args = process.argv.slice(2);
const getArg = (flag, defaultVal) => {
  const index = args.indexOf("--" + flag);
  if (index >= 0) {
    const val = args[index + 1];
    return val && !val.startsWith("-") ? val : defaultVal;
  }
  return null;
};

const update = (updateFn) => {
  const upSnippets = args.includes("--snippets");
  const upGrammar = args.includes("--grammar");
  const all = !upSnippets && !upGrammar  
  if (all || upGrammar) {
    updateFn("grammar");
  }
  if (all || upSnippets) {
    updateFn("snippets");
  }
};

const updateFile = (file, error, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  } else {
    const obj = cson.parse(body);
    const json = cson.createJSONString(obj);
    fs.writeFileSync(file, json);
  }
};

const local = getArg("local", path.join(__dirname, "../..", upstreamName));

// if --local option is passed
if (local) {
  const updateFromFs = (what) => {
    const filePath = path.join(local, remoteFilesMap[what]);
    console.log("Updating from", filePath);
    fs.readFile(filePath, "utf-8", (error, text) => {
      updateFile(locFilesMap[what], error, text);
    });
  };
  update(updateFromFs);
} else {
  const updateFromUrl = (what) => {
    const url = getUrl(remoteFilesMap[what]);
    console.log("Updating from", url);
    request(url, (error, _, body) => {
      updateFile(locFilesMap[what], error, body);
    });
  };
  update(updateFromUrl);
}
