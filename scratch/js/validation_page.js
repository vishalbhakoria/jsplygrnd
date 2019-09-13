function onSubmit()
{
    window.location.replace('landing.html')
}

function validateRecaptcha(event)
{
    event.preventDefault();
      grecaptcha.execute();
}

$(document).ready(function(){
    $("#nric_submit_btn").click(validateRecaptcha);
});