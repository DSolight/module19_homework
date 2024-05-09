function withoutPrototype() {
    return Object.create(null);
}

const obj = withoutPrototype();
console.log(obj);

// Проверяем, что у объекта нет прототипа
console.log(Object.getPrototypeOf(obj));