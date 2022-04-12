// process 1 : get all data users tu api
// process 2 : loc du lieu cua user theo id (loc data cua get all users)
// ca 2 deu la tien trinh xu ly bat dong bo

function getAllUsers(callback) {
    if(typeof callback !== 'function'){
        return [];
    }
    // let users = [];
    // call api
    setTimeout(() => {
        callback([
            {id: 1, name: 'Teo'},
            {id: 2, name: 'Ty'}
        ]);
    }, 1000);
    // return users;
}
function findUserById(idUser, cb){
    if(typeof cb !== 'function'){
        return null;
    }
    /*
    const users = getAllUsers();
    //console.log(users);
    const user = users.find(u => u.id === idUser);
    return user;
    */
    getAllUsers(users => {
        const user = users.find(u => u.id === idUser);
        cb(user);
    });
}
console.log(findUserById(1, console.log));