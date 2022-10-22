const getUser = () => {
    const user = localStorage.getItem('user')
    if (user) {
        const userData = JSON.parse(user)
        document.getElementById('user').innerHTML = `
            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">${userData.name}</button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><button onclick="logout()" class="dropdown-item">Logout</button></li>
            </ul>
        `

        document.getElementById('btn-login').style.display = 'none'
    }
}

getUser()

const logout = () => {
    localStorage.removeItem('user')
    window.location.href = 'index.html'
}