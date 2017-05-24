function myFunction(name, language) {

  if (language[0].checked) {
    paragraph.innerHTML = 'Hello ' + name;
  } else if (language[1].checked) {
    paragraph.innerHTML = 'Molweni ' + name;

  } else if (language[2].checked) {
    paragraph.innerHTML = 'Dumela ' + name;
  }
}
