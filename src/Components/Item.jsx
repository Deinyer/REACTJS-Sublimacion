const products = [
    {
      id: 1,
      name: "Taza",
      stock: 6,
      cost: 450,
    },
    {
      id: 2,
      name: "Remera",
      stock: 10,
      cost: 190,
    },
    {
      id: 3,
      name: "Termo",
      stock: 9,
      cost: 800,
    }
]

const customFetch = ((dato, error) =>{
return new Promise ((resolve, reject) =>{
    setTimeout(() => {
        if(products){
            resolve(dato)
        }else{
            reject(error)
        }

       },2000)
    })
})

customFetch(products)
.then(data => console.log(data))
.cath( error => console.log(error))

