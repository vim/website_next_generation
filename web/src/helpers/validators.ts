export const getMailValidation = (email: string) => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email) ? undefined : 'Invalid email address';
};
