# add-project

`add-project` is a command allowing a given project  to be added to the solution.

## Command execution
#### regular form
```sh:no-line-numbers
solution:add-project <project-dir>
```

#### short form
```sh:no-line-numbers
s:add <project-dir>
```

This command will result in a new entry at the `projects` attribute of your `orchestra.json` file.
```json
{
    "name": "Orchestra Solution",
    "version": "0.1",
    "projects": [
        {
            "name": "orchestra-example\/web-app",
            "path": ".\/webApp"
        }
    ]
}
```
