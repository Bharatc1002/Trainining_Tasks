var user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        return this.admin = true;
    }
};
console.log(user.becomeAdmin());
