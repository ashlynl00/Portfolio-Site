$('#logo').on('mouseover', ()=>{
    $('#logo').css('transform', 'scale(1.2)');
}).mouseleave(()=>{
    $('#logo').css('transform', 'scale(1)');
})

$('#menu').on('mouseover', ()=>{
    $('#menu').css('transform', 'scale(1.2)');
}).mouseleave(()=>{
    $('#menu').css('transform', 'scale(1)');
})

let hamburgerCount = 0;
// allow menu to appear at 480px or less
$('body').on('click','#menu', ()=>{
    console.log('hello?');
    console.log(hamburgerCount);
    hamburgerCount++;
    if (hamburgerCount % 2 !== 0) {
        $('.hidden-nav-bar').css('display', 'flex');
    } else {
        $('.hidden-nav-bar').css('display', 'none');
    }
});

// whe you click responsive nav li, make nav disappear
$('.hidden-nav-bar li a').on('click', ()=>{
    $('.hidden-nav-bar').css('display', 'none');
    hamburgerCount ++;
})

setTimeout( ()=>{
    $('#down-arrow').css('opacity', '1');
}, 2500);

// event handler for down arrow to display homepage subcontent
// let downArrowClickCount = 0;
// $('#down-arrow').on('click', ()=>{
//     downArrowClickCount ++;
//     if (downArrowClickCount % 2 !== 0) {
//         $('#homepage-subcontent').css('opacity', '1');
//     } else {
//         $('#homepage-subcontent').css('opacity', '0');
//     }
// })

// hover effect on project cards and submit btn in contact form
$('.card').click(function(){
    $('.card').toggleClass('flipped');
});

$('#input-submit').on('mouseover', ()=>{
    $('#input-submit').css('transform', 'scale(1.1)');
}).mouseleave(()=>{
    $('#input-submit').css('transform', 'scale(1)');
})

// get values from contact form
$('#input-submit').on('click', ()=>{
    event.preventDefault();
    console.log('clicked submit');
    let $fName = $('#input-fname').val();
    let $lName = $('#input-lname').val();
    let $email = $('#input-email').val();
    let $subject = $('#input-subject').val();
    let $message = $('#input-message').val();
    if ($fName == '' || $lName == '' || $email == '' || $subject == '' || $message == '') {
        alert("Please fill required fields");
    } else {
        console.log($fName+$lName+$email+$subject+$message);
        $('#contact-page').append('<p>Your message has been received! I will contact you soon!</p>');
        $('form :input').val('');
        $('#input-submit').val('Submit');
    }
})

// add focus for input fields and add blur to lose focus
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





