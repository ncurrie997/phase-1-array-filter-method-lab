// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(array, query) {
    return array.filter((element) => element.toLowerCase().includes(query.toLowerCase()));
}

function fuzzyMatch(array, query) {
    return array.filter((element) => element.substring(0, 2).toLowerCase().includes(query.toLowerCase()));
}

function matchName(array, query) {
    let filtered = array.filter(arr => arr.name && arr.name === query)
    return filtered;
  }