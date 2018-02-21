console.log('welcome');

// By defalut (on page load)

// if a 'firstname' cookie is set,
if (Cookies.get('firstName')) {
  //alert//
  console.log('found a cookie name firstName')
  /// update the DOM with the value of our firstName cookiesExport
} else {
  //alert//
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
