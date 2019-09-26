/* new script */
$('#divErrorId').hide();

// Visibility Change Setup
var hidden, state, visibilityChange;
if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
    state = "visibilityState";
} else if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
    state = "mozVisibilityState";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
    state = "msVisibilityState";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
    state = "webkitVisibilityState";
}
// End Visibility Change Setup

var threshold_assume_axs = 5;
var ts_enteredbrowser, ts_leavebrowser;
var axs_btn_clicked = false; 

function onSubmit() {
      
    $('#lblErrorMsg').text('');
    if ($('#id_input').val() == null || $('#id_input').val() == "") {
        $('#lblErrorMsg').text('Last 4 digits of NRIC required')
        $('#id_input').css('border-color', 'red');
        $('#divErrorId').show();
        return;
    }
    else if ($('#id_input').val().length <= 3) {
        $('#lblErrorMsg').text('Please enter correct last 4 digits of NRIC')
        $('#id_input').css('border-color', 'red');
        $('#divErrorId').show();
        return;
    }
    else {
        $('#id_input').css('border-color', 'lightgray');
        return true;
    }
}

function onPayTax() {
    window.location.replace('payment.html')
}


function onAXSPage() {
    window.location.replace('pin.html')
}

function onBack() {
    window.location.replace('landing.html')
}



function onOCBCBank() {
    var r = confirm("You will be leaving IRAS website and be re-directed to external page.");
    if (r == true) {
        window.open('https://internet.ocbc.com/internet-banking/');
    } else {
        return;
    }
}
function onDBSBank() {
    var r = confirm("You will be leaving IRAS website and be re-directed to external page.");
    if (r == true) {
        window.open('http://www.dbs.com.sg');
    } else {
        return;
    }
}
function onPOSBBank() {
    var r = confirm("You will be leaving IRAS website and be re-directed to external page.");
    if (r == true) {
        window.open('http://www.dbs.com.sg');
    } else {
        return;
    }
}
function onUOBBank() {
    var r = confirm("You will be leaving IRAS website and be re-directed to external page.");
    if (r == true) {
        window.open('http://www.uobgroup.com.sg');
    } else {
        return;
    }
}

function onCopy() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    copyText.blur();
    window.getSelection().removeAllRanges();
}

function onAskJamie() {
    window.open('https://va.ecitizen.gov.sg/CFP/VA/IRAS/PTSD/mobile.html?PageTitle=Property%20Tax%20Interactive%20Bill');
}

function onViewIBill() {
    window.open('https://mytax.iras.gov.sg/ESVWeb/default.aspx');
}

function onApplyGiro() {
    //window.open('https://mytax.iras.gov.sg/ESVWeb/default.aspx?target=MPYMApplyGIROBankDetails&toLoginSelection=true');
    window.location.href = 'https://mytax.iras.gov.sg/ESVWeb/default.aspx?target=MPYMApplyGIROBankDetails&toLoginSelection=true';
}

$(document).ready(function () {
    //$('#myInput').hide();

    $('[data-toggle="popover"]').popover();
});

$(function () {
    $('#copytext').on('hide.bs.popover', function (e) {
        onCopy();
    });
});
$('.popover-dismiss').popover({
    trigger: 'focus'
})


function onSubmitCaptcha() {
    
    window.location.replace('landing.html')
}

function validateRecaptcha(event) {
    if (onSubmit() == true) {
        event.preventDefault();
        grecaptcha.execute();
    }
}

$(document).ready(function () {

    $("#nric_submit_btn").click(validateRecaptcha);
});

function onAxsBtnClicked() {
    if (window.confirm('You will be redirect to the AXS m-Station app to complete the payment. Please ensure that you have the app installed.')) {
        axs_btn_clicked = true;
        window.open('axsredirection://');
    }
    else {
        axs_btn_clicked = false;
        return;
    }
} 


$(document).ready(function () {
    document.addEventListener(visibilityChange, onVisibilityChange);

    if (window.matchMedia('(hover: hover)').matches && window.matchMedia('(pointer: fine)').matches) {
        $('#mediaId').show();
    }

}); 


function onVisibilityChange() {
    if (document[state] == 'hidden') {
        console.log(document[state]);
        ts_leavebrowser = new Date();
        ts_enteredbrowser = undefined;
        console.log(ts_leavebrowser);
    }

    else {
        ts_enteredbrowser = new Date();
        var elapsedSeconds = (ts_enteredbrowser - ts_leavebrowser) / 1000;
        console.log(axs_btn_clicked);
        console.log(ts_leavebrowser);
        console.log(elapsedSeconds);
        if (elapsedSeconds > threshold_assume_axs && axs_btn_clicked) {
            window.location.replace('Acknowledgement.html')
        }
    }
}








