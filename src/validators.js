export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const numbers = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;