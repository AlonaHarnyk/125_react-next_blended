interface UserData {
    name: string,
    age: number,
}

interface User {
    name: string,
    age: number,
    isAdmin: boolean
}

// interface UserData {
//     name: string,
//     age: number,
// }

// interface User extends UserData {
//     isAdmin: boolean
// }

function createUser({name, age}: UserData): User {
  return {
    name,
    age,
    isAdmin: false
  };
}

createUser({ name: "Alice", age: 30 });

// Типізуйте функцію повністю: параметри і повернення функції.