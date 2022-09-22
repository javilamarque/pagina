window.onload = function(){
    const loginBtn = document.getElementById('login-button')
    const rememberCheck = document.getElementById('rememberCheck')
    rememberCheck.addEventListener('check', function () {
        const isDisabled = loginBtn.hasAttribute('disabled')
        if (isDisabled) {
            loginBtn.removeAttribute('disabled')
        } else {
            loginBtn.setAttribute('disabled', 'true')
        }
    })
}

/**
 * const loginButtons = document.getElementsByClassName('login-button') // Retorna un array con todos los elementos encontrados con la clase solicitada
const loginButton = loginButtons[0]
const blockAccountButton = loginButtons[1]
const rememberCheck = document.getElementById('rememberCheck')
const loginBtn = document.getElementById('login')

console.log(rememberCheck)

const loginForm = document.getElementById('cardLogin')



loginButton.addEventListener('click', function () {
    loginForm.classList.toggle('d-none')

})

rememberCheck.addEventListener('check', function () {
    const isDisabled = loginBtn.hasAttribute('disabled')
    if (isDisabled) {
        loginBtn.removeAttribute('disabled')
    } else {
        loginBtn.setAttribute('disabled', 'true')
    }
})
 */