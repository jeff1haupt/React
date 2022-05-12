// http verbs - GET, POST, PUT/PATCH, DELETE
// C - create (POST)
// R - read (GET)
// U - update (PUT)
// D - delete (DELETE)


// fetch default's get 
// async function getUsers () {
//     return fetch('https://randomuser.me/api/?results=5')
//     .then( (response) => response.json() )
//     // .then( (data) => {
        
//     //     const mainDiv = document.getElementById('main')
//     //     let dataToPost = ''
//     //     for ( let user of data.results ) {
            
//     //         dataToPost += `<p>${user.email}</p>`;
//     //     }
//     //     mainDiv.innerHTML = dataToPost;
//     // })
// }

// function logNames (arr) {
//     for ( let user of arr ) {
//         console.log(user.name.first + " " + user.name.last)
//     }

// }

// async function start() {
//     let userArray = await fetch('https://randomuser.me/api/?results=5')
//     let userJSON = await userArray.json()
//     userJSON = userJSON.results
    
//     logNames(userJSON)
// }

// start()


fetch('https://api.openbrewerydb.org/breweries?page=341')
.then( res => res.json() )
.then( data => console.log(data) )


// console.log(getName(userArray[1]))

