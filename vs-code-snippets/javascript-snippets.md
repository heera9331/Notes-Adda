

```json
{
	"console.log": {
		"prefix": "clg",
		"body": [
			"console.log(${1:'hello js'})"
		],
		"description": "Log output to console"
	},

	"Map Method": {
		"prefix": "map",
		"body": [
			"${1:array}.map((${2:item}) => {",
			"    ${3:// code to be executed for each item}",
			"});"
		],
		"description": "Map Method"
	},

	"Promise Declaration": {
		"prefix": "promise",
		"body": [
			"new Promise((resolve, reject) => {",
			"    ${1:// async operation}",
			"})"
		],
		"description": "Promise Declaration"
	},
	"ForEach Loop": {
		"prefix": "foreach",
		"body": [
			"${1:array}.forEach((${2:item}) => {",
			"    ${3:// code to be executed}",
			"});"
		],
		"description": "ForEach Loop"
	} 
}
```