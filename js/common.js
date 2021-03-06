$( "#nav_bar_home" ).click(function() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(!!user) {
        let location = '';
        location = user['location'];
        if (!!location) {
            window.location.href ='../home/Search.html'
        }else{
            window.location.href ='../home/Home.html'
        }

    } else {
        let locationModal = $('#signin-required-modal');
        locationModal.popup('open');
    }
});

$( "#nav_bar_home_2" ).click(function() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(!!user) {
        let location = '';
        location = user['location'];
        if (!!location) {
            window.location.href ='../home/Search.html'
        }else{
            window.location.href ='../home/Home.html'
        }

    } else {
        let locationModal = $('#signin-required-modal');
        locationModal.popup('open');
    }
});

$( "#nav_bar_orders" ).click(function() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(!!user) {
        window.location.href ='./../orders/Orders.html'
    } else {
        let locationModal = $('#signin-required-modal');
        locationModal.popup('open');
    }
});

$( "#nav_bar_cart" ).click(function() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(!!user) {
        $( "#cartModal" ).load( "../common/Cart_N_Delivery_Modal.html" );
    } else {
        let locationModal = $('#signin-required-modal');
        locationModal.popup('open');
    }
});

$( "#nav_bar_profile" ).click(function() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(!!user) {
        $("#nav_bar_profile").prop("href", "#side-drawer");
    } else {
        let locationModal = $('#signin-required-modal');
        locationModal.popup('open');
    }
});
$( "#profile_logout" ).click(function() {
    sessionStorage.removeItem('user');
    window.location.replace('../welcome_screens/SignIn.html');
});
