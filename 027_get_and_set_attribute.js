class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get getpassword() {
        return this.password;
    }

    set setpassword(pass) {
        this.password = `${pass}abcd`; // Corrected the method name to setpassword
    }
}

const user = new User("khushboo", "khushboo@gmail.com", "123");
// user.setpassword("tatti"); // Corrected method name
user.setpassword = "tatti";
const p = user.getpassword;


console.log(p); // Output will be "tattiabcd"
