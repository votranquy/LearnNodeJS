const api = require('./api.js');

const testasyncawait = async() => {
    try{
        const user = await api.getUser('pikalong');
        const posts = await api.getPostsOfUser(user);
        const comments = await api.getCommentsOfPosts(posts);
        console.log(comments); 
    }
    catch(err){
        console.log(err); 
    }
};
testasyncawait();