const validationModule = (() => {
    const isLengthValid = (input: string) =>
        !!(input && input.length > 5);

    const isPasswordValid = (password: string) =>
        isLengthValid(password);

    const isEmailValid = (email: string) =>
        isLengthValid(email);

    const isUsernameValid = (username: string) =>
        isLengthValid(username);

    return {
        isPasswordValid: isPasswordValid,
        isEmailValid: isEmailValid,
        isUsernameValid: isUsernameValid
    };
})();


export default validationModule;







