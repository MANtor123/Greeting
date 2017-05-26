var greet = document.getElementById('box');
var language = document.getElementsByName('language')
var paragraph = document.getElementById('paragraph')
var namesGreeted = {};
var greetingsCounter = 0;


function checkedLanguage(){
  if (language[0].checked) {
    paragraph.innerHTML = 'Hello ' + name;
  } else if (language[1].checked) {
    paragraph.innerHTML = 'Molweni ' + name;

  } else if (language[2].checked) {
    paragraph.innerHTML = 'Dumela ' + name;
}


function myfunction(){
  var name = greet.value
  if (namesGreeted[greet.value] === undefined) {
    greetingsCounter++;
    namesGreeted[greet.value] = 0;

    paragraph.innerHTML = greetName(name, checkedLanguage())
  // display(paragraph);
    // greetingsCounter(name);
    // if (language[0].checked) {
    //   paragraph.innerHTML = 'Hello ' + name;
    // } else if (language[1].checked) {
    //   paragraph.innerHTML = 'Molweni ' + name;
    //
    // } else if (language[2].checked) {
    //   paragraph.innerHTML = 'Dumela ' + name;
    // }
    var greeting = document.getElementById('box').value = '';


    var count = localStorage.getItem('on_click');
    if (count == null) {
      count = 0;
    }
    count++;
    localStorage.setItem('on_click', count);
    document.getElementById('result').innerHTML = count;

  }
};

(function() {

  var count = localStorage.getItem('on_click');
  if (count == null) {
    count = 0;
  }
  document.getElementById('result').innerHTML = count;

})()


function resetfunction() {
  count = 0;
  localStorage.removeItem('on_click');
  document.getElementById('result').innerHTML = count;

}
};
