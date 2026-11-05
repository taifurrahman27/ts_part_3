//* Utility Types

//* Partial

interface User {
  id: string;
  name: string;
  email: string;
}

const updateProfile = (id: string, data: Partial<User>): User => {
  // some backend logic (e.g. fetch the existing user, then merge)
  const existingUser: User = { id, name: "Old Name", email: "old@mail.com" };
  return { ...existingUser, ...data };
};

updateProfile("asdfas", { name: "Jasim" });

//* Required

interface Config {
  apiKey?: string;
  timeout?: number;
}

const initialize = (config: Required<Config>): void => {
  // some logic
  console.log(`Init with key ${config.apiKey}, timeout ${config.timeout}ms`);
};

initialize({ apiKey: "MTRJS", timeout: 30000 });

//* Pick

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

const preview: ProductPreview = {
  name: "Taifur",
  description: "my name",
};
console.log(preview)

//* Omit

interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}

type PublicEmployee = Omit<Employee, "salary" | "nid">;

const directoryEntry: PublicEmployee = {
  id: 42,
  name: "Tasim",
};

console.log(directoryEntry);

//* Record

type Environment = "development" | "staging" | "production";

const apiUrls: Record<Environment, string> = {
  development: "http://localhost:3000",
  staging: "https://staging.api.com",
  production: "https://api.com",
};

console.log(apiUrls);

