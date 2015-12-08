function displayTweet(tweetID, elementID){
    twttr.widgets.createTweet(
        tweetID,
        document.getElementById(elementID),
        {
            align: 'left'
        })
        .then(function (el) {
        console.log("taylor's Tweet has been displayed.")
    });
};