var commentCards = document.querySelector(".comment-cards");
function createComment() {

    var commentBox = document.createElement('div');
    commentBox.classList.add('comment-box');

    var commentInput = document.createElement('p');
    commentInput.classList.add('comment-input');
    
    var commentBoxImg = document.createElement('div');
    commentBoxImg.classList.add('comment-box-img');
    
    commentBox.appendChild(commentInput);
    commentBox.appendChild(commentBoxImg);
    commentCards.appendChild(commentBox);
    //returning commentInput in createComments() function
    return commentInput;
}

var database = firebase.database();

let commentsRef = database.ref('pages/' + 'comments/');
// READ data from firebase 'comments/'
    commentsRef.on('child_added', function (snapshot) {
        var comments = snapshot.val();
        // read from firebase 'text/' value
        // for(k in comments) {  
            var commentIn;
            // receiving commentInput from createComment() function
            commentIn = createComment();                  
            commentIn.innerText = comments.text;     
        // }   
    });
