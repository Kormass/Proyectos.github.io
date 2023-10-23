const loginForm = document.querySelector('#loginForm')


loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()

/*     const email = document.querySelector('#email').value */
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
/*     const validUser = Users.find(user => user.email === email && user.password === password) */
    const validUser = Users.find(user => user.name === username && user.password === password)


    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }

    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    console.log(localStorage.getItem('login_success'))
    window.location.href = 'index.html'

})