// Add your code here
function submitData(userName, userEmail) {
    fetch(`http://localhost:3000/users`, {
        method: `POST`,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body:JSON.stringify({name:userName, email:userEmail})
    })
    .then((resp) => resp.json())
    .then((data) => appendData(data.id))
    .catch((err) => appendData(err))    
}

function appendData(data) {
    const body = document.querySelector(`body`)
    body.innerText = `${data}`
    
}


