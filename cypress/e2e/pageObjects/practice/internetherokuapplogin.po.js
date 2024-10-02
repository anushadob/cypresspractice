class loginPO{
    usernameInput='input[name="username"]'
    passwordInput='input[name="password"]'
    loginBtn(){
        return ' Login'
    }
    loginSuccessMessage(){
        return 'div[class="flash success"]'
    }
    usernameErrorMessage(){
        return 'div[class="flash error"]'
    }
    passwordErrorMessage(){
        return 'div[class="flash error"]'            
    }
    logoutBtn(){
        return 'a[class="button secondary radius"]'
    }
   //logoutBtn='a[href="/logout"]'

}

const logindetails = new loginPO()
export default logindetails