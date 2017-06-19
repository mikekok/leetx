# leetx
A Node.js module to search for torrents at 1337x.to tracker.

## Installation
* `npm install leetx`

## Usage
```javascript
const leetx = require('leetx')

leetx.search(keyword, results) {
  console.log(results) // returns name, seeders, leechers, url
}
```

## Packages
* [request](https://github.com/request/request)
* [cheerio](https://github.com/cheeriojs/cheerio)

## License
This project is licensed under The MIT License (MIT). Which means that you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software. But you always need to state that xWeb is the original author of this template.

Project is developed and maintained by [xWeb](https://xweb.gr/).
