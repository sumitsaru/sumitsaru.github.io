console.log('welcome');

// By defalut (on page load)

// if a 'firstname' cookie is set,
if (Cookies.get('firstName')) {
  //alert('found a cookie name firstName') also can do it this way
  console.log('found a cookie name firstName')
  /// update the DOM with the value of our firstName cookiesExport
  document.getElementById('welcome').innertText = 'welcome back' + Cookies.get('firstname')
  document.getElementById('fname').value = Cookie.get('firstName');
  // set the placeholder attribute to somethign else
  // document.getElementById attribute to someting else
} else {
  //alert('no cookie was found') also can do this way to
  console.log('no cookie was found')
}
// update the DOM tp display the value of the firstName cookie





// set a cookie with their name in it

Cookies.set('firstName', 'sumit')

// on click of button,
document.getElementById('button').addEventListener('click', function() {
  alert('baby on board')
    // get the .value of click button
    var fName = document.getElementById('fname').value;
    console.log(fName);
    // store that value in cookies
    Cookies.set('firstName', fName);
});

// store that value in a cookiesExport
