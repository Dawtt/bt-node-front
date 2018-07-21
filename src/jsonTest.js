var json = '{"result":true, "count":42}';
var AfterParse = '';
var AfterStringify = '';



var jsonObject = JSON.stringify('{"feed":{"author":{"name":{"label":"iTunes Store"}, "uri":{"label":"http://www.apple.com/itunes/"}}, "entry":[\n' +
    '{"im:name":{"label":"You Say"}, "im:image":[\n' +
    '{"label":"https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/e9/b8/8f/e9b88f7c-1ba8-4ed6-53ef-92ad2a13ba48/00829619167009.rgb.jpg/55x55bb-85.png", "attributes":{"height":"55"}}, \n' +
    '{"label":"https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e9/b8/8f/e9b88f7c-1ba8-4ed6-53ef-92ad2a13ba48/00829619167009.rgb.jpg/60x60bb-85.png", "attributes":{"height":"60"}}, \n' +
    '{"label":"https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/e9/b8/8f/e9b88f7c-1ba8-4ed6-53ef-92ad2a13ba48/00829619167009.rgb.jpg/170x170bb-85.png", "attributes":{"height":"170"}}], "im:collection":{"im:name":{"label":"Look Up Child"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/album/look-up-child/1409149359?uo=2"}}, "im:contentType":{"im:contentType":{"attributes":{"term":"Album", "label":"Album"}}, "attributes":{"term":"Music", "label":"Music"}}}, "im:price":{"label":"$1.29", "attributes":{"amount":"1.29000", "currency":"USD"}}, "im:contentType":{"im:contentType":{"attributes":{"term":"Track", "label":"Track"}}, "attributes":{"term":"Music", "label":"Music"}}, "rights":{"label":"℗ 2018 Centricity Music"}, "title":{"label":"You Say - Lauren Daigle"}, "link":[\n' +
    '{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/album/you-say/1409149359?i=1409149756&uo=2"}}, \n' +
    '{"im:duration":{"label":"30000"}, "attributes":{"title":"Preview", "rel":"enclosure", "type":"audio/x-m4a", "href":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview125/v4/91/85/0f/91850f1d-85b8-1aa0-6eea-e5988b0eb194/mzaf_6254647395340771291.plus.aac.p.m4a", "im:assetType":"preview"}}], "id":{"label":"https://itunes.apple.com/us/album/you-say/1409149359?i=1409149756&uo=2", "attributes":{"im:id":"1409149756"}}, "im:artist":{"label":"Lauren Daigle", "attributes":{"href":"https://itunes.apple.com/us/artist/lauren-daigle/722177758?uo=2"}}, "category":{"attributes":{"im:id":"22", "term":"Christian & Gospel", "scheme":"https://itunes.apple.com/us/genre/music-christian-gospel/id22?uo=2", "label":"Christian & Gospel"}}, "im:releaseDate":{"label":"2018-07-13T00:00:00-07:00", "attributes":{"label":"July 13, 2018"}}}, \n' +
    '{"im:name":{"label":"Natural"}, "im:image":[\n' +
    '{"label":"https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/12/f2/0e/12f20e96-a7e8-22b2-abb2-cc761c63e33c/00602567862673.rgb.jpg/55x55bb-85.png", "attributes":{"height":"55"}}, \n' +
    '{"label":"https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/12/f2/0e/12f20e96-a7e8-22b2-abb2-cc761c63e33c/00602567862673.rgb.jpg/60x60bb-85.png", "attributes":{"height":"60"}}, \n' +
    '{"label":"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/12/f2/0e/12f20e96-a7e8-22b2-abb2-cc761c63e33c/00602567862673.rgb.jpg/170x170bb-85.png", "attributes":{"height":"170"}}], "im:collection":{"im:name":{"label":"Natural - Single"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/album/natural-single/1409165450?uo=2"}}, "im:contentType":{"im:contentType":{"attributes":{"term":"Album", "label":"Album"}}, "attributes":{"term":"Music", "label":"Music"}}}, "im:price":{"label":"$1.29", "attributes":{"amount":"1.29000", "currency":"USD"}}, "im:contentType":{"im:contentType":{"attributes":{"term":"Track", "label":"Track"}}, "attributes":{"term":"Music", "label":"Music"}}, "rights":{"label":"℗ 2018 KIDinaKORNER/Interscope Records"}, "title":{"label":"Natural - Imagine Dragons"}, "link":[\n' +
    '{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/album/natural/1409165450?i=1409165453&uo=2"}}, \n' +
    '{"im:duration":{"label":"30000"}, "attributes":{"title":"Preview", "rel":"enclosure", "type":"audio/x-m4a", "href":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/f4/db/8d/f4db8df2-bc29-063f-15bd-8d4ee4914728/mzaf_3662391512485478509.plus.aac.p.m4a", "im:assetType":"preview"}}], "id":{"label":"https://itunes.apple.com/us/album/natural/1409165450?i=1409165453&uo=2", "attributes":{"im:id":"1409165453"}}, "im:artist":{"label":"Imagine Dragons", "attributes":{"href":"https://itunes.apple.com/us/artist/imagine-dragons/358714030?uo=2"}}, "category":{"attributes":{"im:id":"20", "term":"Alternative", "scheme":"https://itunes.apple.com/us/genre/music-alternative/id20?uo=2", "label":"Alternative"}}, "im:releaseDate":{"label":"2018-07-17T00:00:00-07:00", "attributes":{"label":"July 17, 2018"}}}, \n' +
    '{"im:name":{"label":"In My Feelings"}, "im:image":[\n' +
    '{"label":"https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/bb/6d/8f/bb6d8f67-6d04-10b5-dd62-eb5809ac54fc/00602567879152.rgb.jpg/55x55bb-85.png", "attributes":{"height":"55"}}, \n' +
    '{"label":"https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/bb/6d/8f/bb6d8f67-6d04-10b5-dd62-eb5809ac54fc/00602567879152.rgb.jpg/60x60bb-85.png", "attributes":{"height":"60"}}, \n' +
    '{"label":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/bb/6d/8f/bb6d8f67-6d04-10b5-dd62-eb5809ac54fc/00602567879152.rgb.jpg/170x170bb-85.png", "attributes":{"height":"170"}}], "im:collection":{"im:name":{"label":"Scorpion"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/album/scorpion/1406109769?uo=2"}}, "im:contentType":{"im:contentType":{"attributes":{"term":"Album", "label":"Album"}}, "attributes":{"term":"Music", "label":"Music"}}}, "im:price":{"label":"$1.29", "attributes":{"amount":"1.29000", "currency":"USD"}}, "im:contentType":{"im:contentType":{"attributes":{"term":"Track", "label":"Track"}}, "attributes":{"term":"Music", "label":"Music"}}, "rights":{"label":"℗ 2018 Young Money/Cash Money Records"}, "title":{"label":"In My Feelings - Drake"}, "link":[\n' +
    '{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/album/in-my-feelings/1406109769?i=1406109901&uo=2"}}, \n' +
    '{"im:duration":{"label":"30000"}, "attributes":{"title":"Preview", "rel":"enclosure", "type":"audio/x-m4a", "href":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview115/v4/5c/9b/40/5c9b4004-b891-98da-de60-e795b481e2c2/mzaf_4224000852540118805.plus.aac.p.m4a", "im:assetType":"preview"}}], "id":{"label":"https://itunes.apple.com/us/album/in-my-feelings/1406109769?i=1406109901&uo=2", "attributes":{"im:id":"1406109901"}}, "im:artist":{"label":"Drake", "attributes":{"href":"https://itunes.apple.com/us/artist/drake/271256?uo=2"}}, "category":{"attributes":{"im:id":"18", "term":"Hip Hop/Rap", "scheme":"https://itunes.apple.com/us/genre/music-hip-hop-rap/id18?uo=2", "label":"Hip-Hop/Rap"}}, "im:releaseDate":{"label":"2018-06-29T00:00:00-07:00", "attributes":{"label":"June 29, 2018"}}}, \n' +
    '{"im:name":{"label":"Simple"}, "im:image":[\n' +
    '{"label":"https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/05/c5/3c/05c53ca9-6aa9-6f76-dc45-4c2136709f0f/00843930036691.rgb.jpg/55x55bb-85.png", "attributes":{"height":"55"}}, \n' +
    '{"label":"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/05/c5/3c/05c53ca9-6aa9-6f76-dc45-4c2136709f0f/00843930036691.rgb.jpg/60x60bb-85.png", "attributes":{"height":"60"}}, \n' +
    '{"label":"https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/05/c5/3c/05c53ca9-6aa9-6f76-dc45-4c2136709f0f/00843930036691.rgb.jpg/170x170bb-85.png", "attributes":{"height":"170"}}], "im:collection":{"im:name":{"label":"Florida Georgia Line - Single"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/album/florida-georgia-line-single/1405873271?uo=2"}}, "im:contentType":{"im:contentType":{"attributes":{"term":"Album", "label":"Album"}}, "attributes":{"term":"Music", "label":"Music"}}}, "im:price":{"label":"$1.29", "attributes":{"amount":"1.29000", "currency":"USD"}}, "im:contentType":{"im:contentType":{"attributes":{"term":"Track", "label":"Track"}}, "attributes":{"term":"Music", "label":"Music"}}, "rights":{"label":"℗ 2018 Big Machine Label Group, LLC"}, "title":{"label":"Simple - Florida Georgia Line"}, "link":[\n' +
    '{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/album/simple/1405873271?i=1405873296&uo=2"}}, \n' +
    '{"im:duration":{"label":"30000"}, "attributes":{"title":"Preview", "rel":"enclosure", "type":"audio/x-m4a", "href":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview125/v4/63/9a/a0/639aa00c-1c7a-77da-14ae-80354b6acbed/mzaf_2247746376660199192.plus.aac.p.m4a", "im:assetType":"preview"}}], "id":{"label":"https://itunes.apple.com/us/album/simple/1405873271?i=1405873296&uo=2", "attributes":{"im:id":"1405873296"}}, "im:artist":{"label":"Florida Georgia Line", "attributes":{"href":"https://itunes.apple.com/us/artist/florida-georgia-line/399241518?uo=2"}}, "category":{"attributes":{"im:id":"6", "term":"Country", "scheme":"https://itunes.apple.com/us/genre/music-country/id6?uo=2", "label":"Country"}}, "im:releaseDate":{"label":"2018-06-01T00:00:00-07:00", "attributes":{"label":"June 1, 2018"}}}, \n' +
    '{"im:name":{"label":"Youngblood"}, "im:image":[\n' +
    '{"label":"https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/b4/e2/08/b4e20858-295d-ecef-c9ba-30789773beb3/00602567483625.rgb.jpg/55x55bb-85.png", "attributes":{"height":"55"}}, \n' +
    '{"label":"https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/b4/e2/08/b4e20858-295d-ecef-c9ba-30789773beb3/00602567483625.rgb.jpg/60x60bb-85.png", "attributes":{"height":"60"}}, \n' +
    '{"label":"https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/b4/e2/08/b4e20858-295d-ecef-c9ba-30789773beb3/00602567483625.rgb.jpg/170x170bb-85.png", "attributes":{"height":"170"}}], "im:collection":{"im:name":{"label":"Youngblood (Deluxe)"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/album/youngblood-deluxe/1369109074?uo=2"}}, "im:contentType":{"im:contentType":{"attributes":{"term":"Album", "label":"Album"}}, "attributes":{"term":"Music", "label":"Music"}}}, "im:price":{"label":"$1.29", "attributes":{"amount":"1.29000", "currency":"USD"}}, "im:contentType":{"im:contentType":{"attributes":{"term":"Track", "label":"Track"}}, "attributes":{"term":"Music", "label":"Music"}}, "rights":{"label":"A Capitol Records UK release; ℗ 2018 One Mode Productions Limited, under exclusive licence to Universal Music Operations Limited"}, "title":{"label":"Youngblood - 5 Seconds of Summer"}, "link":[\n' +
    '{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/album/youngblood/1369109074?i=1369109322&uo=2"}}, \n' +
    '{"im:duration":{"label":"30000"}, "attributes":{"title":"Preview", "rel":"enclosure", "type":"audio/x-m4a", "href":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/a7/34/5a/a7345af4-5d3c-3736-5dd0-e9d051b0ded3/mzaf_6009557953366571039.plus.aac.p.m4a", "im:assetType":"preview"}}], "id":{"label":"https://itunes.apple.com/us/album/youngblood/1369109074?i=1369109322&uo=2", "attributes":{"im:id":"1369109322"}}, "im:artist":{"label":"5 Seconds of Summer", "attributes":{"href":"https://itunes.apple.com/us/artist/5-seconds-of-summer/538811449?uo=2"}}, "category":{"attributes":{"im:id":"14", "term":"Pop", "scheme":"https://itunes.apple.com/us/genre/music-pop/id14?uo=2", "label":"Pop"}}, "im:releaseDate":{"label":"2018-04-13T00:00:00-07:00", "attributes":{"label":"April 13, 2018"}}}], "updated":{"label":"2018-07-20T01:46:39-07:00"}, "rights":{"label":"Copyright 2008 Apple Inc."}, "title":{"label":"iTunes Store: Top Songs"}, "icon":{"label":"http://itunes.apple.com/favicon.ico"}, "link":[\n' +
    '{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=1&popId=1"}}, \n' +
    '{"attributes":{"rel":"self", "href":"https://itunes.apple.com/us/rss/topsongs/limit=5/json"}}], "id":{"label":"https://itunes.apple.com/us/rss/topsongs/limit=5/json"}}}')


export default jsonObject;