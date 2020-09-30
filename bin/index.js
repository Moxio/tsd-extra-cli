#!/usr/bin/env node

/*eslint-env node*/
"use strict";

const tsd = require("tsd").default;
const tsdFormatter = require("tsd/dist/lib/formatter").default;
const yargs = require("yargs");

const argv = yargs
    .usage('Usage: $0 [path]')
    .option('tests-only', { type: 'boolean', describe: 'Only consider errors in tests, not TypeScript errors in the system under test' })
    .argv;

const projectPath = argv._[0] || process.cwd();

function isTestFile(file) {
    return file.endsWith('.test-d.ts');
}

(async () => {
    let diagnostics = await tsd({
        cwd: projectPath,
    });

    if (argv['tests-only']) {
        diagnostics = diagnostics.filter((diagnostic) => isTestFile(diagnostic.fileName));
    }

    if (diagnostics.length > 0) {
        console.error(tsdFormatter(diagnostics));
        process.exit(1);
    }
})();
