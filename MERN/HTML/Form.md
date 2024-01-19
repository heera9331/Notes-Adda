# Form

The form HTML element represents a document section containing interactive controls for submitting information.

## Attributes

- `autocapitalize` => none, off, on, word, sentances
- accept-charset => define character set

`name`
The name of the form. The value must not be the empty string, and must be `unique` among the form elements in the forms collection that it is in, if any.

`rel`
Controls the annotations and what kinds of links the form creates. Annotations include `external`, `nofollow`, `opener`, `noopener`, and `noreferrer`. Link types include `help`, `prev`, `next`, `search`, and license. The `rel` value is a space-separated list of these enumerated values.

`target` - Indicates where to display the response after submitting the form.

- \_self
- \_top
- \_parent
- \_top

`method` - get, post

`entype` - encryption type

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form method="post">
      <div>
        <label for="username">Username</label>
        <input type="text" placeholder="Enter name" name="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="text" placeholder="Enter password" name="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```