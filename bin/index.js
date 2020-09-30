#!/usr/bin/env node

/*eslint-env node*/
"use strict";

const tsd = require("tsd").default;
const tsdFormatter = require("tsd/dist/lib/formatter").default;
const yargs = require("yargs");

const argv = yargs
    .usage('Usage: $0 [path]')
    .argv;

const projectPath = argv._[0] || process.cwd();

(async () => {
    const diagnostics = await tsd({
        cwd: projectPath,
    });

    if (diagnostics.length > 0) {
        console.error(tsdFormatter(diagnostics));
        process.exit(1);
    }
})();
