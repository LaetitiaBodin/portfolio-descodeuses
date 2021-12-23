var stringLength = function (string) {
    return string.length;
}

var replaceFirstE = function (string) {
    return string.replace(/e/i, ' ');
}

var concatenate = function (string1, string2) {
    return string1 + string2;
}

var whichCharAt4 = function (string) {
    return string.charAt(4);
}

var stringSlice = function (string) {
    return string.slice(0, 9);
}

var stringToUppercase = function (string) {
    return string.toUpperCase();
}

var stringToLowerCase = function (string) {
    return string.toLowerCase();
}

var stringTrim = function (string) {
    return string.trim();
}

var isString = function (arg) {
    if (typeof arg == 'string') {
        return true;
    }
    return false;
}

var fileExt = function (filename) {
    let splitString = filename.split('.');
    let fileType = splitString[splitString.length - 1];
    return fileType;
}

var numSpaces = function (string) {
    let spaces = string.match(/\s/g);
    if (spaces != null) {
        return spaces.length;
    }
    return 0;
}

var stringReverse = function (string) {
    let reversedStr = string.split("")
                            .reverse()
                            .join("");
    return reversedStr;
}