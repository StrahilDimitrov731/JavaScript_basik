function checkPassword(password) {
    let myPassword = "s3cr3t!P@ssw0rd";

    if (password == myPassword) {
        console.log("Welcome!");
    }
    else {
        console.log("Wrong password!");
    }
}

checkPassword("s3cr3t!p@ss")