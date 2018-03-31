// 1st Example
// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
// this first example does not use JQuery
var sayHello = SH$('John', 'Doe');
// use our chainable methods
sayHello.greet().setLanguage('es').greet(true).log();

// 2nd Example: let's use our object on the click of the login button
$('#login').click(function() {
    
    var firstName = $('#fName').val();
    var lastName = $('#lName').val();
   
    // create a new 'SayHello' object (capturing firstName and lastName from login page)
    var loginSH = SH$(firstName, lastName);
    
     // hide the login on the screen
    $('#wrap').hide();
    
     // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
    loginSH.setLanguage($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});