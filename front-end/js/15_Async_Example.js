const posts = 
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( resp => resp.json())
    .then( data => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${data[0].id}`)
    })
    .then(resp => resp.json())
    .then( data => console.log(data))
    .catch( e => console.log(e));

(async()=>{
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsResponse.json();
    const postReponse = await  fetch(`https://jsonplaceholder.typicode.com/posts/${posts[0].id}`);
    const post = await postReponse.json();
    console.log(post);
})()    