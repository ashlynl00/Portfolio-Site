$('#logo').on('mouseover', ()=>{
    $('#logo').css('transform', 'scale(1.2)');
}).mouseleave(()=>{
    $('#logo').css('transform', 'scale(1)');
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

setTimeout( ()=>{
    $('#down-arrow').css('opacity', '1');
}, 2500);

// event handler for down arrow to display homepage subcontent
let downArrowClickCount = 0;
$('#down-arrow').on('click', ()=>{
    downArrowClickCount ++;
    if (downArrowClickCount % 2 !== 0) {
        $('#homepage-subcontent').css('opacity', '1');
    } else {
        $('#homepage-subcontent').css('opacity', '0');
    }
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



