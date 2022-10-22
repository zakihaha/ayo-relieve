const getUser = () => {
    const user = localStorage.getItem('user')
    if (user) {
        const userData = JSON.parse(user)
        const element = document.createElement('p')
        element.innerHTML = userData.name
        element.classList.add('btn')
        element.classList.add('btn-primary')
        document.getElementById('user').appendChild(element)
    }
}

const getCampaigns = async () => {
    try {
        const response = await fetch('https://634d0019acb391d34a90fbc0.mockapi.io/campaigns');
        const data = await response.json();
        let container = document.getElementById('list-campaigns')
        data.forEach(campaign => {
            container.innerHTML += `
            <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${campaign.thumbnail}" class="card-img-top" alt="">
                <div class="card-body">
                    <h3 class="mb-3">${campaign.title}</h3>
                    <div class="d-flex justify-content-between">
                        <p class="card-text">${campaign.company}</p>
                        <a href="detail.html?id=${campaign.id}" class="link-detail-campaign">Detail</a>
                    </div>
                </div>
            </div>
        </div>
            `
        })
    } catch (error) {
        console.log(error);
    }
}

getUser()
getCampaigns()