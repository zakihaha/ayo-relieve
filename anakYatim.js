const getDetail = async () => {
    const response = await fetch ("https://634d0019acb391d34a90fbc0.mockapi.io/campaigns/1")
    const data = await response.json() 
    let container = document.getElementById("detail")
    console.log(data)

    container.innerHTML = `
    <img src="${data.thumbnail}" class="center" alt="" width="600">

            <h1>${data.title}</h1>
            <p>${data.description}</p>

            <h3>Ketentuan</h3>
            <ul>
                <li>${data.rules1}</li>
                <li>${data.rules2}</li>
                <li>${data.rules3}</li>
            </ul>

            <h3>Kuota penerima</h3>
            <p>${data.quota} Orang</p>

            
    `
}

const daftar =() => {
    alert("Selamat kamu berhasil mendaftar program") 
}

getDetail()