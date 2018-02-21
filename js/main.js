console.log('welcome');

// set a cookie with their name in it

Cookies.set('firstName', 'sumit')

// on click of button,
document.getElementById('button').addEventListener('click', function() {
  alert('baby on board')
    // get the .value of click button
    var fName = document.getElementById('fname').value;
    console.log('fName')
});
// get the .value of fname
// store that value in a cookiesExport
