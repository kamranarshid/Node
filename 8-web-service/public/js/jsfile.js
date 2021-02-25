const msg1 = document.querySelector("#msg-1")
const msg2 = document.querySelector("#msg-2")

const weatherFrom = document.querySelector('form')
const search = document.querySelector('input')
weatherFrom.addEventListener('submit', (e)=>{  
    const location = search.value
    e.preventDefault()

    msg1.textContent ="Loading..."
    msg2.textContent = ""
    fetch("http://localhost:3000/weather?address="+location).then((response) =>{
      
          response.json().then((data)=>{
             if (data.error) {
                msg1.textContent =data.error
            } else {
                msg1.textContent =data.forcost +' '+data.temp
                msg2.textContent = data.cityDetails
              
            }
        })
       
    })

})





