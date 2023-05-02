// var user = firebase.auth().currentUser;
    function logOut(){
        
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            
            setTimeout(function () {
                window.location = "./sign-in.html?v=" + Math.random();
            }, 2000)
            // alert(user);
        }).catch(function(error) {
            // An error happened.
            
        });
    }
    
    