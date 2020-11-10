(function ($) {
    "use strict"; 
    var input = $('.validate-input .input100'); 
    $('.validate-form').on('submit', function () {
        var check = true;
        //console.log(input[0].val().trim()); 
        for (var i = 0; i < 2; i++) { 
            if (validate(input[i]) == false) { 
                showValidate(input[i]); 
                check = false; 
            } 
        }

        // checking the validity of the function
        if ($(input[1]).val().trim() != $(input[2]).val().trim()) {
            showValidate(input[2]);
            check = false;
        }
        return check;
    }); 
    
    $('.validate-form .input100').each(function () { 
        $(this).focus(function () { 
            hideValidate(this); 
        }); 
    }); 
    
    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') { 
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) { 
                return false; 
            } 
        }
        else { 
            if ($(input).val().trim() == '') { 
                return false; } 
            }
    }
    function showValidate(input) { 
        var thisAlert = $(input).parent(); 
        $(thisAlert).addClass('alert-validate'); 
    }
    function hideValidate(input) { 
        var thisAlert = $(input).parent(); 
        $(thisAlert).removeClass('alert-validate'); 
    }
})(jQuery);