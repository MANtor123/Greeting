var namesGreeted = {};
var greetingCounter = 0;
//var name = greet.value

function greetingsCounter(name) {
  if (namesGreeted[name] === undefined) {
    greetingCounter++;
    namesGreeted[name] = 0
    var countLocal = localDisplay()
  }

  return countLocal;
}
