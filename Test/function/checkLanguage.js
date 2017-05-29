var greet = document.getElementById ('box');
var language = document.getElementsByName ('language')
var paragraph = document.getElementById ('paragraph')

function checkedLanguage(){
  if(document.getElementById('English').checked === true){
    return 'English';
    }

    else if(document.getElementById('isiXhosa').checked === true){
      return 'isiXhosa';
    }

    else if(document.getElementById('Sotho').checked === true){
      return 'Sotho';
    }
}
