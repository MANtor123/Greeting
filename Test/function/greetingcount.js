var namesGreeted = {}
var greetingCounter = 0


function greetingScounter (name){

  if (namesGreeted[name] === undefined) {
    greetingCounter++;
    namesGreeted[name] = 0
  }

  return greetingCounter
};
