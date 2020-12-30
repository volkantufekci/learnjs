function decomposeUrl(url) {
    const url_obj = new URL(url);
    let result = {};
    result.protocol = url_obj.protocol

    result.pathname = url_obj.pathname
    let tokenizedPathName = result.pathname.split("/")
    if (tokenizedPathName.length > 1) {
        tokenizedPathName.pop()
        result.folderTree = tokenizedPathName
    }

    result.domainName = url_obj.hostname
    let tokenizedDomainName = result.domainName.split(".")
    if (tokenizedDomainName.length > 2) {
        result.subDomain = tokenizedDomainName[0]
        tokenizedDomainName.shift() //removes first element of an array
        result.domainName = tokenizedDomainName.join(".")
    } else {
        result.subDomain = null;
    }

    result.argumentsFile = url_obj.search
    return result;
}

console.log(decomposeUrl("https://www.google.com/search/test.js?ok=1"))