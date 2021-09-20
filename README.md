[![NPM version](https://img.shields.io/npm/v/tsd-extra-cli.svg)](https://www.npmjs.com/package/tsd-extra-cli)
[![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen)](https://plant.treeware.earth/Moxio/tsd-extra-cli)

tsd-extra-cli
=============
Wrapper around [tsd](https://github.com/SamVerschueren/tsd) (TypeScript type
definition checker) that offsers some [extra CLI options](#extra-cli-options).

Installation
------------
This library can be installed from the NPM package registry. Using NPM:
```sh
npm install --save-dev tsd-extra-cli
```
Or using Yarn:
```sh
yarn add -D tsd-extra-cli
```

Usage
-----
See the documentation for [tsd](https://github.com/SamVerschueren/tsd) on
how to write tests for your type definitions.

You can use the `tsd-extra-cli` command as you would normally
[use `tsd`](https://github.com/SamVerschueren/tsd#usage), i.e.
```sh
tsd-extra-cli [path]
```

### Extra CLI options

In addition, `tsd-extra-cli` offers the following CLI options:

* `--tests-only`: Only reports errors that come from the `.test-d.ts(x)` files.
  In addition to those, tsd normally also reports TypeScript errors in the
  files loaded from the system under test. The `--tests-only` option discards
  those. This can be useful in codebases where there are some known TypeScript
  errors that haven't been fixed yet, but you still want to enforce passing
  tsd tests.
* `--report-checkstyle=<file>`: Writes a report in checkstyle format to `<file>`.
  This can be useful to programmatically consume the results, e.g. on a CI
  server.

Versioning
----------
This project adheres to [Semantic Versioning](http://semver.org/).

Contributing
------------
Contributions to this project are more than welcome.

License
-------
This project is released under the MIT license.

Treeware
--------
This package is [Treeware](https://treeware.earth/). If you use it in production,
then we'd appreciate it if you [**buy the world a tree**](https://plant.treeware.earth/Moxio/tsd-extra-cli)
to thank us for our work. By contributing to the Treeware forest you'll be creating
employment for local families and restoring wildlife habitats.

---
Made with love, coffee and fun by the [Moxio](https://www.moxio.com) team from
Delft, The Netherlands. Interested in joining our awesome team? Check out our
[vacancies](https://werkenbij.moxio.com/) (in Dutch).
