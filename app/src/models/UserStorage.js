"use strict";

class UserStorage {
    static _users = {
        id: ["rusty", "woorimIT", "test"],
        psword: ["5018", "1234", "123456"],
        name: ["김재형", "우리밋", "테스트"],
    };

    static getUsers(...fields) { // 은닉화한 user정보를 내보내기 위한 함수 
        const users = this._users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this._users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this._users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);
    }
}

module.exports = UserStorage;