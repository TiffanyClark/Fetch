//Get route
//Get response when ready in a async function
async function getBodyFromResponse(){
    let apiUrl = 'https://frontend-take-home.fetchrewards.com/form'
    let response = await fetch(apiUrl)
      .then((res) => {
        if(response.ok) {
          //test the response
          console.log(res.json)
          return res.json()
        } else {
          return Promise.reject(res)
        }
      })
    .then(result=>{
      //do whatever you want with the returned object
      console.log(result)
    })
    .catch(error => {
    //if something goes wrong, print it in the terminal
    console.log('Something went wrong.', error)
    })
  }
  getBodyFromResponse()


  async function postRequest(name, email, password, ocupation, state){
    //a different way to create an http request without handling any error, you can use the GET approach above to catch any failed request.
    fetch('https://frontend-take-home.fetchrewards.com/form', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { "name": name,
          "email": email,
          "password": password,
          "occupation": ocupation,
          "state":  state
         }
      )
    })
    
    .then(response => response.json())
    .then(result=> console.log(JSON.stringify(result)))
    postRequest}
//
