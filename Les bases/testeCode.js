class userinfo {
    constructor(user){
        this.user = user ;
    }
    get name(){
        return this.user;
    }
    set userName(updatedName){
        this.user = updatedName;
    }
}
const newUser1 = new userinfo('Justine');
console.log(newUser1.name);
newUser1.newName = 'Alexis';
console.log(newUser1.newName);