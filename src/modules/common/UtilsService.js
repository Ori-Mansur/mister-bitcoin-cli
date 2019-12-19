function loadFromStorage(key) {
    const json = localStorage.getItem(key);
    const value = JSON.parse(json)
    return value;
}

function saveToStorage(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json)
}
function makeId(length = 5) {
    var txt = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return txt;
}
export default{
    loadFromStorage,
    saveToStorage,
    makeId
}