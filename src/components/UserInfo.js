export default class UserInfo {
    constructor({ name, job }) {
        this._nameUser = document.querySelector(name);
        this._jobUser = document.querySelector(job);
    }

    getUserInfo() {
        return {
            name: this._nameUser.textContent,
            profession: this._jobUser.textContent,
        }
    }

    setUserInfo(nameAdd, jobAdd) {
        this._nameUser.textContent = nameAdd;
        this._jobUser.textContent = jobAdd;
    }
}
