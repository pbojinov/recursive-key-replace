# recursive-key-replace

> 🔑 Recursively replace object keys

## Install

```
$ npm install --save recursive-key-replace
```

## Usage

```js
const recursiveKeyReplace = require('recursive-key-replace');
const obj = {
	"cats.are.cool": true,
    "dogs": {
        "are.too": true
    }
};

recursiveKeyReplace(obj, /\./g, '');
//=> {"catsarecool": true, "dogs": {"aretoo": true}}

```

## API

### recursiveKeyReplace(input, search, replace)

Returns a new object.

#### input

*Required*  
Type: `object`

The object which keys will be replaced.

#### search

*Required*  
Type: `string` or `RegExp`

Search for matching substring that will be replaced.

#### replaceValue

*Required*  
Type: `string`

Replace the matching substring with this value.

## But why? 🤔

Because Elasticsearch doesn't like dots in field names...

https://www.elastic.co/guide/en/elasticsearch/reference/2.4/dots-in-names.html

## License

MIT © [Petar Bojinov](http://github.com/pbojinov)
