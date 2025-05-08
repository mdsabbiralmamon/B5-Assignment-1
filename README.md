
# TypeScript Interview Questions – Blog Post

## 1. Interfaces vs Types in TypeScript

In TypeScript, both `interface` and `type` allow us to define custom types, but there are key differences:

### ✅ Interfaces

- Designed for object shape declaration.
- Can be **extended** using `extends` or **merged** using declaration merging.
- Ideal for defining the **structure of classes** and objects.

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}
```

### ✅ Types

- More **flexible**: can be used with primitives, unions, tuples, and intersections.
- Cannot be merged like interfaces.
- Better for **complex types**.

```ts
type ID = string | number;
type Coordinates = [number, number];
type Developer = Person & { role: string };
```

### 🔍 Summary

| Feature        | Interface        | Type           |
|----------------|------------------|----------------|
| Extending      | ✅ Yes            | ✅ Yes (via intersection) |
| Declaration Merging | ✅ Yes     | ❌ No         |
| Use for unions | ❌ No            | ✅ Yes         |

**Rule of thumb**: Use `interface` for objects and classes, `type` for unions/intersections.

---

## 2. Use of `keyof` in TypeScript

The `keyof` keyword creates a union type of the keys of an object or interface.

### 🎯 Example:

```ts
interface User {
  id: number;
  username: string;
  email: string;
}

type UserKeys = keyof User; // "id" | "username" | "email"
```

You can use `keyof` to build **generic utilities**:

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, username: "john", email: "john@example.com" };
const email = getValue(user, "email"); // inferred as string
```

### 🚀 Why it's useful:

- Ensures **type safety** when accessing object keys.
- Enables **generic functions** and **dynamic key access** without losing type inference.

---

## 📌 Summary

- Use `keyof` to extract object keys as a union of string literals.
- Combine with generics to create **powerful reusable utilities**.

---

## 📁 Repo Structure

```
├── README.md       # Blog content
└── solution.ts     # TypeScript solutions to problems
```
