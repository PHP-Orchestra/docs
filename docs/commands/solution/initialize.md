# initialize Solution

`initialize` is a basic command allowing a solution to be created from scratch. The `solution` file can be created with or without scaning for projects.

## Command execution
#### regular form
```sh:no-line-numbers
solution:initialize
```

#### short form
```sh:no-line-numbers
s:i
```

The result of this command execution will be a `orchestra.json` file at the `working-dir` path defined (default value is `.`).
```json
{
    "name": "Orchestra Solution",
    "version": "0.1",
    "projects": []
}
```

## Command options
### `solution-name`
Passing `--solution-name` option, the `name` attribute can be customized.
```sh:no-line-numbers
solution:initialize --solution-name="My solution name"
```
#### result 
```json
{
    "name": "My solution name",
    "version": "0.1",
    "projects": []
}
```

### `project-scan`
When creating a solution on an existing application project, **orchestra** can scan for **projects** and add the to the projects list
```sh:no-line-numbers
solution:initialize --project-scan
```
#### result
```json
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

### `project-scan-depth`
When requesting orchestra to scan for projects, it is possible to specify the level of depth. Default value is `0`, and it means to check all the folders at the `working-dir` level trying to find `composer.json` files.
```sh:no-line-numbers
solution:initialize --project-scan --project-scan-depth=1 
```
