let getQueryObject = function () {
    var queryString = window.location.search.substring(1);
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}
export default {
    queryObj : getQueryObject(),
    exists (prop) {
        return this.queryObj.hasOwnProperty(prop) ? true : false
    }
}