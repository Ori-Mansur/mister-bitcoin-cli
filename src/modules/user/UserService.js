import Utils from '../common/UtilsService'
export default{
    getUser,
    signup,
    addMove

}
function signup(user){
    console.log(user);
    
    user.coins=100
    user.moves=[]
    Utils.saveToStorage('user',user)
    return Promise.resolve(user)
}
function addMove(contact, amount){

}
function getUser(){
    const user =Utils.loadFromStorage('user')
    return Promise.resolve(user)
}