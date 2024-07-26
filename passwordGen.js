import generatePassword from 'password-generator';


// Generate a random password with default options (length 10)
const password = generatePassword();
console.log(password);



// Generate a  random password with specific options

function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 12,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        excludeSimilarCharacters: true
    });
    console.log("Generated Password: ", password);
}




