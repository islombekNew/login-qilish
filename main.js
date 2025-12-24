   const form = document.getElementById("myForm")
        const error = document.getElementById("error")

        form.addEventListener("submit", (e) => {
            e.preventDefault()

            const username = document.querySelector("#username").value.trim()
            const password = document.querySelector("#password").value.trim()
            const email = document.querySelector("#email").value.trim()

            if (!username || !email || !password) {
                error.textContent = "ism yoki parol yozilganiga ishonch hosil qiling !"
                error.style.color = "#ffc1c1ff"
                return
            }

            error.textContent = "Login muvaffaqiyatli!"
            error.style.color = "green"

            console.log("username: ", username)
            console.log("password: ", password)
            console.log("email: ", email)
       
            
                window.location = "home.html"

        })