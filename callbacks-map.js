var words = ["ground", "control", "to", "major", "tom"];

function map(arr, func) {
  var finalArray = [];
  arr.forEach(function(e) {
    finalArray.push(func(e));
  })
  console.log(finalArray);
}

map(words, function(a) {
  return a.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});