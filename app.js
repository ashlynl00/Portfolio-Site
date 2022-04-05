//
setTimeout( ()=>{
    $('#beginning-page').css({
        'z-index': '-10',
        'opacity': '0'
    });
}, 5000)


// make the logo be bigger when you hover to let the user to to know to click

$('#logo').on('mouseover', ()=>{
    $('#logo').css('transform', 'scale(1.2)');
}).mouseleave(()=>{
    $('#logo').css('transform', 'scale(1)');
})


// make the menu appear larger on hover to let the user know they can click it

$('#menu').on('mouseover', ()=>{
    $('#menu').css('transform', 'scale(1.2)');
}).mouseleave(()=>{
    $('#menu').css('transform', 'scale(1)');
});



// display the hidden nav bar when clicked

// keep count to num of times clicked so it closes or opens correctly on click
let hamburgerCount = 0;

$('body').on('click','#menu', ()=>{
    hamburgerCount++;
    if (hamburgerCount % 2 !== 0) {
        $('#hidden-nav-bar').css('display', 'flex');
    } else {
        $('#hidden-nav-bar').css('display', 'none');
    }
});



// when you click on an item in the hidden nav, it will close and direct the user to that part of the page

$('#hidden-nav-bar li a').on('click', ()=>{
    $('#hidden-nav-bar').css('display', 'none');
    hamburgerCount ++;
});



// on hover make the submit button of contact page appear larger to invite user to click

$('#input-submit').on('mouseover', ()=>{
    $('#input-submit').css('transform', 'scale(1.1)');
}).mouseleave(()=>{
    $('#input-submit').css('transform', 'scale(1)');
})



// get values from contact form

// $('#input-submit').on('click', ()=>{
//     event.preventDefault();
//     console.log('clicked submit');
//     let $fName = $('#input-fname').val();
//     let $lName = $('#input-lname').val();
//     let $email = $('#input-email').val();
//     let $subject = $('#input-subject').val();
//     let $message = $('#input-message').val();
//     if ($fName == '' || $lName == '' || $email == '' || $subject == '' || $message == '') {
//         alert("Please fill required fields");
//     } else {
//         // clear input fields and show success message
//         $('#contact-page').append('<p>Your message has been received! I will contact you soon!</p>');
//         $('form :input').val('');
//         $('#input-submit').val('Submit');
//         //window.location = 'mailto:' + $email + '?subject=' + $subject + '&body=' +   $fName + $lName + $message;
//     }
// })



// when user clicks on input field to type, add focus and make it disappear when they are no longer focusing

$('#input-fname').focus( ()=>{
    console.log($(this));
    $('#input-fname').css('background-color', 'rgb(241, 200, 145)');
});

$("#input-fname").blur(function(){
    $('#input-fname').css("background-color", "white");
});

$('#input-lname').focus( ()=>{
    $('#input-lname').css('background-color', 'rgb(241, 200, 145)');
});

$("#input-lname").blur(function(){
    $('#input-lname').css("background-color", "white");
});

$('#input-email').focus( ()=>{
    $('#input-email').css('background-color', 'rgb(241, 200, 145)');
});

$("#input-email").blur(function(){
    $('#input-email').css("background-color", "white");
});

$('#input-subject').focus( ()=>{
    $('#input-subject').css('background-color', 'rgb(241, 200, 145)');
});

$("#input-subject").blur(function(){
    $('#input-subject').css("background-color", "white");
});

$('#input-message').focus( ()=>{
    $('#input-message').css('background-color', 'rgb(241, 200, 145)');
});

$("#input-message").blur(function(){
    $('#input-message').css("background-color", "white");
});


// add blinking arrows

function firstBlink() {
    $('#first-arrow').fadeOut(1000);
    $('#first-arrow').fadeIn(1000);
}

function secondBlink() {
    setTimeout( ()=>{
        $('#second-arrow').fadeOut(1000);
        $('#second-arrow').fadeIn(1000);
    }, 500);
}

function thirdBlink() {
    setTimeout( ()=>{
        $('#third-arrow').fadeOut(1000);
        $('#third-arrow').fadeIn(1000);
    }, 1000);
}

setInterval(firstBlink, 2000);
setInterval(secondBlink, 2000);
setInterval(thirdBlink, 2000);



