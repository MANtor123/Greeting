(function(){

  var count= localStorage.getItem ('on_click');
  if(count == null){
    count = 0;
    }
  document.getElementById('result').innerHTML = count;

  //console.log(count)
})()
//  Write your JavaScript here
var greet = document.getElementById ('box');
var language = document.getElementsByName ('language')
var paragraph = document.getElementById ('paragraph')
var namesGreeted = {};
var greetingsCounter = 0;

//for(i=0; i < namesGreeted.length; i++)


function myfunction(){
  var name = greet.value;
  if (namesGreeted[name] === undefined){
    greetingsCounter++;

    namesGreeted[name] = 0;

  //}

if (language[0].checked){
  paragraph.innerHTML= 'Hello ' + greet.value;
}

else if (language[1].checked){
 paragraph.innerHTML= 'Molweni ' + greet.value;

}

else if(language[2].checked){
  paragraph.innerHTML = 'Dumela ' + greet.value;
}
var greeting = document.getElementById ('box').value= '';


var count= localStorage.getItem ('on_click');
if(count == null){
  count = 0;
  }
count++;
localStorage.setItem('on_click', count);
document.getElementById('result').innerHTML = count;

    }
};

function resetfunction(){
count = 0;
  localStorage.removeItem ('on_click');
  document.getElementById('result').innerHTML=count;

}
