

export function saveLogin(google) {
    localStorage.setItem('user', JSON.stringify(google));
}

export function checkSession() {
    if( localStorage.getItem('user')!= null){
        return true;
    }
    return false;
}

export function logout() {
    if( localStorage.getItem('user')!= null){
        localStorage.removeItem('user')
    }
}