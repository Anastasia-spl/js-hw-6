// function findMatches(arr, ...arr2) {
//   const result = [];

//   const commonArr = [...arr, ...arr2];
//   result.push(commonArr.filter((el, i, array) => array.indexOf(el) !== i));
  
//   // Пиши код выше этой строки
//   return result;
// } 
function findMatches(arr, ...arr2) {
  const matches = []; // Не изменяй эту строку
const commonArr = [...arr, ...arr2];
  matches.push(...(commonArr.filter((el, i, array) => array.indexOf(el) !== i)));
  // Пиши код выше этой строки
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

//Вызов `findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)` возвращает `[17, 89, 2]`
//Вызов `findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)` возвращает `[24, 9, 41]`

// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу '${oldName}' на '${newName}'`;
//   },
  
//   // Пиши код выше этой строки
// };
// console.log(bookShelf.updateBook('Пески Дюны', 'Дюна'));

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    const indexOfBookToRemove = this.books.indexOf(oldName);
    this.books.splice(indexOfBookToRemove, 1, newName);
	return this.books;
    // Пиши код выше этой строки
  },
};
console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));


const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  
  addPotion(newPotion) {
    if(this.potions.some(potion => potion.name === newPotion.name)) {
      return `Зелье ${newPotion.name} уже есть в инвентаре!`
    };
     this.potions.push(newPotion);
  },
  
  removePotion(potionName) {
    const potionToRemove = this.potions.find(({ name }) => name === potionName);
    this.potions.splice(this.potions.indexOf(potionToRemove), 1);
    if (potionToRemove === undefined) {
      return `Зелья ${potionName} нет в инвентаре!`;
    }
  },
  
  updatePotionName(oldName, newName) {
    const alwaysHasPotion = this.potions.find(({ name }) => name === oldName);
    if (alwaysHasPotion) {
      alwaysHasPotion.name = newName;
    } else {
      return `Зелья ${oldName} нет в инвентаре!`
    }
  },
  // Пиши код выше этой строки
};

//  console.log(atTheOldToad.removePotion('Дыхан дракона'));
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
console.log(atTheOldToad.addPotion({ name: 'Каменная кожа', price: 520 }));
console.log(atTheOldToad.addPotion({ name: 'Зелье скорости', price: 460 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName('gfdsa', 'Полиморф'));
// console.log(atTheOldToad.getPotions());
