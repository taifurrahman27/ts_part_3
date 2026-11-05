//* Utility Types
const updateProfile = (id, data) => {
    // some backend logic (e.g. fetch the existing user, then merge)
    const existingUser = { id, name: "Old Name", email: "old@mail.com" };
    return { ...existingUser, ...data };
};
updateProfile("asdfas", { name: "Jasim" });
const initialize = (config) => {
    // some logic
    console.log(`Init with key ${config.apiKey}, timeout ${config.timeout}ms`);
};
initialize({ apiKey: "MTRJS", timeout: 30000 });
const preview = {
    name: "Taifur",
    description: "my name",
};
console.log(preview);
const directoryEntry = {
    id: 42,
    name: "Tasim",
};
console.log(directoryEntry);
const apiUrls = {
    development: "http://localhost:3000",
    staging: "https://staging.api.com",
    production: "https://api.com",
};
console.log(apiUrls);
export {};
