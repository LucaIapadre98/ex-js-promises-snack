// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

// Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. 
// Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, 
// recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.

function getPostTitle(id){
    return new Promise((resolve, reject) => {                               
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json)
        .then(post => {
            fetch(`https://dummyjson.com/users/${post.userId}`)
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


// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi,
// genera un numero casuale tra 1 e 6.
//  Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado(){
    return new Promise((resolve, reject) => {                                       // RETURN CON AL PROMISE 
        console.log("Sto lanciando il dado"); 
        setTimeout(() => {                                                          // OGNI TOT DI TEMPO GENERA UN  NUMERO 
            const incastro = Math.random() < 0.2; 
            if(incastro){                                                            // SE IL DADO SI INCASTRA ALTRIMENTI GENERA NUMERO
                reject("Il dado si è incastrato!");
            } else{
                const numberRandom = Math.floor(Math.random() * 6) + 1;                // GENERO UN NUMERO
                resolve(numberRandom);
            }
        }, 2000)
    })
}
lanciaDado()                                                                        // DIVHAIRO LA VARIABILE
  .then(numberRandom => console.log("E' uscito il:", numberRandom))                 // COL THEN IMPOSTO NUMERO USCITO E COL CATCH CATTURO L'ERRORE
  .catch(reject)