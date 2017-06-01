// var namesGreeted = {};
// var greetingsCounter = 0;
//var greet = document.getElementById ('box');



function myfunction(){

  var name = greet.value
  var radioButton = checkedLanguage();

  var greeting = document.getElementById('box').value = '';
  //
  // if (namesGreeted[greet.value] === undefined) {
  //   greetingsCounter++;
  //   namesGreeted[greet.value] = 0;

    paragraph.innerHTML = greetName(name, radioButton)

    document.getElementById('result').innerHTML =  greetingsCounter(name);

    // var count = localStorage.getItem('on_click');
    // if (count == null) {
    //   count = 0;
    // }
    // count++;
    // localStorage.setItem('on_click', count);
    // document.getElementById('result').innerHTML = count;

}

document.getElementById('result').innerHTML = ();
console.log(());
// (function(){
//
//   var count= localStorage.getItem ('on_click');
//   if(count == null){
//     count = 0;
//   }
//   document.getElementById('result').innerHTML = count;
//
//   console.log(count)
// })()

function resetfunction(){
count = 0;
  localStorage.removeItem ('on_click');
  document.getElementById('result').innerHTML=count;

}
