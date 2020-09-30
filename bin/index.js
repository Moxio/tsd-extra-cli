#!/usr/bin/env node

/*eslint-env node*/
"use strict";

const tsd = require("tsd").default;
const tsdFormatter = require("tsd/dist/lib/formatter").default;

(async () => {
    const diagnostics = await tsd();

    if (diagnostics.length > 0) {
        console.error(tsdFormatter(diagnostics));
        process.exit(1);
    }
})();
