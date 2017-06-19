// Modules
const request = require('request')
const cheerio = require('cheerio')

// 1337x.to base URL
let leetxURL = 'http://1337x.to'

module.exports = {
  search: function(keyword, cb) {
    let torrents = []
    var reqURL = leetxURL + '/search/' + keyword + '/1/'
    request(reqURL, function(err, res, body) {
      var $ = cheerio.load(body)
      $('table.table-list tr').each(function(index, el) {
        var torrent = {}
        torrent.name = $(this).find('td:nth-child(1) a:nth-child(2)').text()
        torrent.seeders = $(this).find('td:nth-child(2)').text()
        torrent.leechers = $(this).find('td:nth-child(3)').text()
        torrent.url = leetxURL + $(this).find('td:nth-child(1) a:nth-child(2)').attr('href')
        if (torrent.name !== '') {
          torrents.push(torrent)
        }
      })
      return cb(null, torrents)
    })
  }
}
