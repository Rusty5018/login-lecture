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
}

module.exports = UserStorage;