// for validationg the form data

// for Email validation use Regex

export const checkValidData = (email, password) => {

    // Corrected email regex
    const isEmailValid = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/.test(email);

    // Renamed to isPasswordValid for clarity
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid || !isPasswordValid) {
        return "Email or Password is not valid";
    }

    return null;
}


