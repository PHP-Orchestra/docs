# initialize Solution

`initialize` is a basic command allowing a solution to be created from scratch. The `solution` file can be created with or without scaning for projects.

## Command execution
#### regular form
```sh:no-line-numbers
solution:initialize [/working/directory]
```

#### short form
```sh:no-line-numbers
s:i [/working/directory]
```

The result of this command execution will be a `orchestra.json` file at the `working/directory` path.
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
solution:initialize /working/dir --solution-name="My solution name"
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
solution:initialize /working/directory --project-scan
```
#### result
:::danger 
add the remaining docs
:::
```json
```