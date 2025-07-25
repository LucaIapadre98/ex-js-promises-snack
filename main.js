// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

function getPostTitle(id){
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json)
        .then(post => {
            fetch(`https://dummyjson.com/users/{post.userId}`)
            .then(res => res.json())
            .then(user => resolve({...post, user}))
            .catch(reject)   
        })
        .catch(reject)
    });
};

getPostTitle(1)
.then(post => console.log("Titolo posto", post))
.catch(err => console.error(err))