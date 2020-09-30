/*eslint-env node*/
"use strict";

const { create } = require('xmlbuilder2');

module.exports = function (diagnostics) {
    const diagnosticsPerFile = {};
    diagnostics.forEach((diagnostic) => {
        diagnosticsPerFile[diagnostic.fileName] = diagnosticsPerFile[diagnostic.fileName] || [];
        diagnosticsPerFile[diagnostic.fileName].push(diagnostic);
    });

    const rootElement = create()
        .ele('checkstyle', { version: 4.3 });
    Object.entries(diagnosticsPerFile).forEach(([fileName, diagnosticsForFile]) => {
        const fileElement = rootElement.ele('file', { name: fileName });
        diagnosticsForFile.forEach((diagnostic) => {
            fileElement.ele('error')
                .att('line', diagnostic.line)
                .att('column', diagnostic.column)
                .att('severity', diagnostic.severity)
                .att('message', diagnostic.message)
                .att('source', 'tsd');
        });
    });

    return rootElement.end({ prettyPrint: true });
};
