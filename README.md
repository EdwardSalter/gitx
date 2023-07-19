# oclif-hello-world

oclif example Hello Rm CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g gitx
$ gitx COMMAND
running command...
$ gitx (--version)
gitx/0.0.0 win32-x64 node-v18.12.1
$ gitx --help [COMMAND]
USAGE
  $ gitx COMMAND
...
```

<!-- usagestop -->

```sh-session
$ npm install -g oclif-hello-world
$ oex COMMAND
running command...
$ oex (--version)
oclif-hello-world/0.0.0 darwin-x64 node-v16.13.1
$ oex --help [COMMAND]
USAGE
  $ oex COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`gitx hello PERSON`](#gitx-hello-person)
- [`gitx hello world`](#gitx-hello-world)
- [`gitx help [COMMANDS]`](#gitx-help-commands)
- [`gitx plugins`](#gitx-plugins)
- [`gitx plugins:install PLUGIN...`](#gitx-pluginsinstall-plugin)
- [`gitx plugins:inspect PLUGIN...`](#gitx-pluginsinspect-plugin)
- [`gitx plugins:install PLUGIN...`](#gitx-pluginsinstall-plugin-1)
- [`gitx plugins:link PLUGIN`](#gitx-pluginslink-plugin)
- [`gitx plugins:uninstall PLUGIN...`](#gitx-pluginsuninstall-plugin)
- [`gitx plugins:uninstall PLUGIN...`](#gitx-pluginsuninstall-plugin-1)
- [`gitx plugins:uninstall PLUGIN...`](#gitx-pluginsuninstall-plugin-2)
- [`gitx plugins update`](#gitx-plugins-update)

## `gitx hello PERSON`

Say hello

```
USAGE
  $ gitx hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/EdwardSalter/gitx/blob/v0.0.0/dist/commands/hello/index.ts)_

## `gitx hello world`

Say hello world

```
USAGE
  $ gitx hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ gitx hello world
  hello world! (./src/commands/hello/rm.ts)
```

## `gitx help [COMMANDS]`

Display help for gitx.

```
USAGE
  $ gitx help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for gitx.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.12/src/commands/help.ts)_

## `gitx plugins`

List installed plugins.

```
USAGE
  $ gitx plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ gitx plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `gitx plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ gitx plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ gitx plugins add

EXAMPLES
  $ gitx plugins:install myplugin

  $ gitx plugins:install https://github.com/someuser/someplugin

  $ gitx plugins:install someuser/someplugin
```

## `gitx plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ gitx plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ gitx plugins:inspect myplugin
```

## `gitx plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ gitx plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ gitx plugins add

EXAMPLES
  $ gitx plugins:install myplugin

  $ gitx plugins:install https://github.com/someuser/someplugin

  $ gitx plugins:install someuser/someplugin
```

## `gitx plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ gitx plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ gitx plugins:link myplugin
```

## `gitx plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ gitx plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ gitx plugins unlink
  $ gitx plugins remove
```

## `gitx plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ gitx plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ gitx plugins unlink
  $ gitx plugins remove
```

## `gitx plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ gitx plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ gitx plugins unlink
  $ gitx plugins remove
```

## `gitx plugins update`

Update installed plugins.

```
USAGE
  $ gitx plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

<!-- commandsstop -->

- [`oex hello PERSON`](#oex-hello-person)
- [`oex hello world`](#oex-hello-world)
- [`oex help [COMMAND]`](#oex-help-command)
- [`oex plugins`](#oex-plugins)
- [`oex plugins:inspect PLUGIN...`](#oex-pluginsinspect-plugin)
- [`oex plugins:install PLUGIN...`](#oex-pluginsinstall-plugin)
- [`oex plugins:link PLUGIN`](#oex-pluginslink-plugin)
- [`oex plugins:uninstall PLUGIN...`](#oex-pluginsuninstall-plugin)
- [`oex plugins update`](#oex-plugins-update)

## `oex hello PERSON`

Say hello

```
USAGE
  $ oex hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/oclif/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `oex hello world`

Say hello world

```
USAGE
  $ oex hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/rm.ts)
```

## `oex help [COMMAND]`

Display help for oex.

```
USAGE
  $ oex help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oex.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `oex plugins`

List installed plugins.

```
USAGE
  $ oex plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oex plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `oex plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oex plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oex plugins:inspect myplugin
```

## `oex plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oex plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ oex plugins add

EXAMPLES
  $ oex plugins:install myplugin

  $ oex plugins:install https://github.com/someuser/someplugin

  $ oex plugins:install someuser/someplugin
```

## `oex plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oex plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ oex plugins:link myplugin
```

## `oex plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oex plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oex plugins unlink
  $ oex plugins remove
```

## `oex plugins update`

Update installed plugins.

```
USAGE
  $ oex plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

<!-- commandsstop -->
