async function tokenRequest() {
    return fetch("https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=533890731477047&client_secret=82a92f29b8357dd300389c1bce6c08c5&fb_exchange_token=EAAHlkh9mCDcBAGXMEZBZCOLBxOCp85eIdbGcmWAdHcB4RqkfxiL2YarX41gHj5lw34HyCW7dYo8maSwOY43Hq2RHZBdkSxWczh7CMaqQwIcxefVMrnZCiVWqZA3eSdB8oGivwrTq0W8SG5IOI7r8QNJ1uSB4dab0V6wicciFSnZAH282UWB3OiKiCMuw4vF5shfdJzhjHwGq2ej7ZCX8ZB5q")
        .then( res => res.json() )
        .then( res => res.access_token )
}

async function pageTokenRequest(token) {
    return fetch(`https://graph.facebook.com/108453935199519?fields=access_token&access_token=${token}`)
        .then( res => res.json() )
        .then( res => res.access_token )
}

async function createPost(token, message="Hello world!") {
    fetch(`https://graph.facebook.com/108453935199519/feed?message=${message}&access_token=${token}`, {
        method: 'POST'
    })
        .then( res => res.json() )
        .then( res => console.log(res) )
}

async function start() {
    
    const authToken = await tokenRequest();
    console.log(authToken)
    const pageToken = await pageTokenRequest(authToken);
    content = 'I made this post during tonight\'s class!';
    const makePost = await createPost(pageToken, content)
}

start()
