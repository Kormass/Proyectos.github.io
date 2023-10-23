const user = JSON.parse(localStorage.getItem('login_success')) || false


if(!user){
    window.location.href = 'login.html'

} else {
        let username = document.getElementById('name_display');
        username.textContent = user.name;
        console.log(localStorage.getItem('login_success'))
}

const logout = document.getElementById('salir_cuenta')

logout.addEventListener('click', ()=> {
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})


console.log(JSON.parse(localStorage.getItem('users')))


/* const usuarios_en_base = JSON.parse(localStorage.getItem('users')) || [];
const usuarios_menos_actual = usuarios_en_base.filter(user => user.name === "123");
localStorage.setItem('users', JSON.stringify(usuarios_menos_actual));
console.log(JSON.parse(localStorage.getItem('users'))); */