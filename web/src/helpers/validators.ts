export const isRequiredValidator = (value: string) => {
    return value ? undefined : 'Required';
};
