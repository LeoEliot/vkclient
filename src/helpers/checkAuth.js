export const checkAuth = (name, password) => {
    if (name === '123456' && password === '1221') {
        return true
    }
    return false
}