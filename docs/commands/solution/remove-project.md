# Remove a Project from a Solution

`remove-project` is a command allowing a given project  to be removed from the solution. Additionally, the files can be removed from the storage.

## Command execution
#### regular form
```sh:no-line-numbers
solution:remove-project <project-dir>
```

#### short form
```sh:no-line-numbers
s:remove <project-dir>
```

This command will result in removing an entry from the `projects` attribute of your `orchestra.json` file.

##### before
```json:no-line-numbers
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

##### after
```json:no-line-numbers
{
    "name": "Orchestra Solution",
    "version": "0.1",
    "projects": [
    ]
}
```

## Command options
### `delete-files`
Passing `--delete-files` option, the project folder will be removed form the storage. The command will ask for a manual confirmation, as this is a destructive operation.

```sh:no-line-numbers
solution:remove-project --delete-files
```
#### result 
```json:no-line-numbers
{
    "name": "My solution name",
    "version": "0.1",
    "projects": []
}
```