var reverse = function(string) {
  return string.replace(/\w+/ig, function(callback){
  	return callback.split('').reverse().join('')
  });
}
console.log(reverse("This is fun, hopefully."));

// use replace() method to return string with a pattern replaced by a replacement
// in this case use regexp \w as the first parameter to switch only alphanumeric chars. Thus the punctuation will be ignored

// include "i" to ignore case for regex
// include "g" to test against all possible matches in string. Without g it will not continue throughout whole string
// second paramater is the replacement
// pass in a callback function as the second parameter in order take the argument
