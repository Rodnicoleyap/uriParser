var form = document.getElementById('url-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var uri = document.getElementById('uri-box').value;
    var uriParts = parseUri(uri);
    render(uriParts);
});

function render(uriParts) {
    document.getElementById('parts').className = '';
    for (var key in uriParts) {
        document.getElementById(key + '-value').innerHTML = uriParts[key];
    }
}

function parseUri(uri) {
    var uriParts = {
        scheme: '',
        authority: '',
        path: '',
        query: '',
        fragment: ''
    };

     var parser = document.createElement('a');
      // queries = parser.search.replace(/^\?/, '').split('&');
    // for( i = 0; i < queries.length; i++ ) {
    //     split = queries[i].split('=');
    //     searchObject[split[0]] = split[1];
    // }
     parser.href = uri;

     uriParts.scheme = parser.protocol;
     uriParts.authority = parser.host;
     uriParts.path = parser.pathname;
     uriParts.query = parser.search;
     uriParts.fragment = parser.hash;


    // var keys = 'scheme authority path query fragment'.split(' ');
    // for (var keyIndex in keys) {
    //     var currentKey = keys[keyIndex]; 
    //     uriParts[currentKey] = anchor[currentKey];
    // }

    // uriParts.toString = function() { return anchor.href; };
    // uriParts.requestUri = uriParts.pathname + uriParts.search;

    return uriParts;
}
