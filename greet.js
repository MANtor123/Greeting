function myfunction() {

  var name = greet.value
  var radioButton = checkedLanguage();

  var greeting = document.getElementById('box').value = '';

  paragraph.innerHTML = greetName(name, radioButton)

  document.getElementById('result').innerHTML = greetingsCounter(name);
}


document.getElementById('result').innerHTML = localStorage.length;


function resetfunction() {
  count = 0;
  localStorage.removeItem('on_click');
  document.getElementById('result').innerHTML = count;

}
