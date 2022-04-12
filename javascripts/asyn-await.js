function getUserByName(name) {
    return new Promise((resolve, reject) => {
        const listUser = [
            {id: 1, name: 'teo', email: 'teo@gmail.com'},
            {id: 2, name: 'ty', email: 'ty@gmail.com'}
        ];
        setTimeout(() => {
            const user = listUser.find(u => u.name === name);
            if(user !== undefined){
                resolve({ cod: 200, data: user});
            } else {
                reject({ cod: 404, data: {} });
            }
        }, 1000);
    });
}
function getPostsByUsername(username){
    return new Promise((resolve, reject) => {
        const dataPosts = [
            {idPost: 1, user: 'teo', title: 'bai viet 1'},
            {idPost: 2, user: 'teo', title: 'bai viet 2'},
            {idPost: 3, user: 'ty', title: 'bai viet 3'},
            {idPost: 4, user: 'ty', title: 'bai viet 4'},
        ];
        const posts = dataPosts.filter(p => p.user === username);
        if(posts.length > 0){
            resolve({ cod: 200, data: posts});
        } else {
            reject({ cod: 404, data: {} });
        }
    })
}

// Cần lưu ý là kết quả trả về của async function luôn là một Promise.
async function callData(){
    try {
        const userName = await getUserByName('teo');
        //console.log(userName);
        // doi thang ben tren chay xong
        const dataPosts = await getPostsByUsername(userName.data.name);
        console.log(dataPosts);
    } catch(e) {
        console.log(e);
    }
    
}
callData();