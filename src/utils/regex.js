export const checkEmail = (email) => {
    const regExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    const isValid = (email !== '' && email !== undefined);
    const isPatternValid = regExp.test(email);

    return isValid && isPatternValid;
};

export const checkPassword = (password) => {
    const num = password.search(/[0-9]/g);
    const eng = password.search(/[a-z]/ig);

    const isValid = (password !== '' && password !== undefined);
    const isPatternValid = (password.length >= 8 && password.length <= 20 && password.search(/\s/) === -1 && num !== -1 && eng !== -1);

    return isValid && isPatternValid;
};