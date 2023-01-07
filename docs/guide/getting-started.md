# Getting started with PHP Orchestra
[[toc]]
## Prerequisites
- `PHP >= 8.1`
- Composer 

## Installation
The best way to get `orchestra` is to download it directly from the repo: [![Download Orchestra](https://img.shields.io/badge/Orchestra-latest-brightgreen)](https://github.com/PHP-Orchestra/orchestra/raw/main/bin/orchestra.phar)

```SH
curl -L https://github.com/PHP-Orchestra/orchestra/raw/main/bin/orchestra.phar -o orchestra.phar
```

In case you want to use it anywhere, just move it into your `PATH`:
```SH
sudo mv orchestra.phar /usr/local/bin/orchestra
```


## Creating your first `solution`
Once you have `orchestra` installed and working, than it's time to create your first `solution`. 

### Creating a `solution` from scratch
For full flexibility, you can create your project structure and then make `orchestra` to `initialize` a new solution.
Let's consider the following example:
```
$ tree
.
├── businessLogic
│   └── src
├── entities
│   ├── src
└── webApp
    └── src
```
Where:
  * **entities** to contain the domain entities of your application
  * **businessLogic** to contain the logic that makes your application to produce the desired outcomes, only depending on the **entities** layer
  * **webApp** to contain the `Request/Response` layer, for example, your `PHP` framework of choice.

Keeping in mind the basic concept of [Composer - introduction](https://getcomposer.org/doc/00-intro.md), that your project depends on a number of libraries, and those libraries can depend on another libraries, each of those folders (layers) will contain their own `composer.json` file. This is a mandatory step for `orchestra` to coordinate each project inside your application and to support it's orchestration. 
So, the next step is to run `composer init` on each of the project layers.
```SH
cat entities/composer.json
```
```JSON
{
    "name": "orchestra-example/entities",
    "description": "The Entities layer of my application",
    "type": "library",
    "license": "MIT",
    "autoload": {
        "psr-4": {
            "OrchestraExample\\Entities\\": "src/"
        }
    },
    "require": {}
}
```
After all 3 `composer.json` files are created, your project should look like:
```SH
.
├── businessLogic
│   ├── composer.json
│   └── src
├── entities
│   ├── composer.json
│   └── src
└── webApp
    ├── composer.json
    └── src
```
#### Creating project's solution file
At your applications root folder run: 
```SH
orchestra solution:initialize --project-scan
```
. This command will create the `solution` file (`orchestra.json`) and scan for existent projects to be part of it.
```JSON
{
    "name": "Orchestra Solution",
    "version": "0.1",
    "projects": [
        {
            "name": "orchestra-example\/business-logic",
            "path": ".\/businessLogic"
        },
        {
            "name": "orchestra-example\/entities",
            "path": ".\/entities"
        },
        {
            "name": "orchestra-example\/web-app",
            "path": ".\/webApp"
        }
    ]
}
```
#### Installing composer dependencies
Now your application can be managed by `orchestra`. To install Composer's dependencies, just run: 
```SH
orchestra solution:install-dependencies
``` 
And now each project has it's composer `vendor` folder with the `autoloader` ready to provide it's funcionality
```SH
.
├── businessLogic
│   ├── composer.json
│   ├── composer.lock
│   ├── src
│   └── vendor
│       ├── autoload.php
│       └── composer
│           ├── autoload_classmap.php
│           ├── autoload_namespaces.php
│           ├── autoload_psr4.php
│           ├── autoload_real.php
│           ├── autoload_static.php
│           ├── ClassLoader.php
│           ├── installed.json
│           ├── installed.php
│           ├── InstalledVersions.php
│           └── LICENSE
├── entities
│   ├── composer.json
│   ├── composer.lock
│   ├── src
│   └── vendor
│       ├── autoload.php
│       └── composer
│           ├── autoload_classmap.php
│           ├── autoload_namespaces.php
│           ├── autoload_psr4.php
│           ├── autoload_real.php
│           ├── autoload_static.php
│           ├── ClassLoader.php
│           ├── installed.json
│           ├── installed.php
│           ├── InstalledVersions.php
│           └── LICENSE
├── orchestra.json
└── webApp
    ├── composer.json
    ├── composer.lock
    ├── src
    └── vendor
        ├── autoload.php
        └── composer
            ├── autoload_classmap.php
            ├── autoload_namespaces.php
            ├── autoload_psr4.php
            ├── autoload_real.php
            ├── autoload_static.php
            ├── ClassLoader.php
            ├── installed.json
            ├── installed.php
            ├── InstalledVersions.php
            └── LICENSE
```