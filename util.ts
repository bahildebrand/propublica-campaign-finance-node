export function buildUrlStr(str: String, args) {
    return str.replace(/{([^{}]*)}/g, function(a,b) {
        return args[b];
    });
}