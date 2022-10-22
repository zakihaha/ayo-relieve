const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

    const handlesignUp = async(e) => {
        e.preventDefault ()
        const respons = await fetch ("https://634d0019acb391d34a90fbc0.mockapi.io/users", {
            method: "post", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({
                name: document.getElementById ("signup-name").value,
                phone: document.getElementById ("signup-phone").value,
                email: document.getElementById ("signup-email").value,
                password: document.getElementById ("signup-password").value
            })
        })
        const data = await respons.json ()
        container.classList.remove("active");
        console.log (data)
    }
    const form_signUp = document.getElementById ("form_signUp")
    console.log(form_signUp)
form_signUp.addEventListener("submit", handlesignUp)

    const handleLogin = async (e) => {
        e.preventDefault ()
        const respon = await fetch ("https://634d0019acb391d34a90fbc0.mockapi.io/users")
        const data = await respon.json ()
        const users = data.find (user => user.email === document.getElementById ("login_email").value && user.password === document.getElementById ("login_password").value)
        if (users){
            localStorage.setItem ("user", JSON.stringify (users)) 
            console.log("user ditemukan")
            console.log(users)
        } else {
            console.log("user tidak ditemukan")
        }
    }

    const form_Login = document.getElementById("form_Login")
form_Login.addEventListener ("submit", handleLogin)