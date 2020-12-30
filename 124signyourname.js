const obj = { yourSignature: "" }

function signYourName(obj) {
    Object.preventExtensions(obj)

    obj.yourSignature = "Whatever"
    obj.spouseSignature = "Nice Try"
    return obj;
}

console.log(signYourName(obj))