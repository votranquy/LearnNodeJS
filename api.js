module.exports = {
    getUser: function(name){
        console.log(name);
        setTimeout(function () {
            if(name == 'pikalong') return('pikalong');
          }, 1000);
        // return null;
    },
    getPostsOfUser: function(user){
        var post = "POST";
        console.log(post);
        if(user == 'pikalong') return(post);
        return null;
    },
    getCommentsOfPosts: function(post){
        var cmt = "AAAAAAAAAAA";
        console.log(cmt);
        if(post) return(cmt);
        return null;
    },
};
