function func1(data) {
  setTimeout(() => {
    return data;
  }, 2000);
}

const item = func1("Tom");

console.log(item);
