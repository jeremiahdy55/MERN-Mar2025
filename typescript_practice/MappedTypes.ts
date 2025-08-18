/*
Mapped types are used primarily for key manipulation (changing keys' names, allowed types, etc.)
from using an original type as base. Because they are a subset of TypeScript "type" construct,
they are erased after compilation and only exist inside the TypeScript code. (JavaScript cannot use them, it sees vanilla JS
after transpilation).

Useful for avoiding repetition of similar but distinct type/design patterns.
*/

// Define original type
type User = {
    id: number;
    name: string;
    active: boolean;
};

// Define a User with all fields optional
type AllFieldsOptionallUser = {
    [K in keyof User]?: User[K];
};

// Make all fields required again
type AllFieldsRequiredUser = {
    [K in keyof AllFieldsOptionallUser]-?: AllFieldsOptionallUser[K];
};

// Make all fields readonly
type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
};

// Make all string fields UPPERCASE
type UppercaseKeysUser = {
    [K in keyof User as Uppercase<string & K>]: User[K];
};

// exclude keys based on condition
type OnlyStringFieldsUser = {
    [K in keyof User as User[K] extends string ? K : never]: User[K];
};
