function getAllUsers(){
    return new Promise((resolve, reject) => {
        let checking = false;
        if(checking){
            resolve([
                {id: 1, name: 'Teo'},
                {id: 2, name: 'Ty'}
            ]);
        } else {
            reject(`can not call data`);
        }
    });
}
// getAllUsers : tra ve 1 promise
// su dung then : lay du lieu dc tra ve thanh cong (resolve)
// su dung catch: lay du lieu dc tra ve that bai (reject)
getAllUsers()
    .then(users => {
        const user = users.find(u => u.id === 2);
        console.log(user);
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('finally');
    })