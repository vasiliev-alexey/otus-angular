# Домашнее задание

## Работа с компонентами: привязка логики к шаблону и выделение частей в отдельные компоненты

### Цель:

- Создание умных компонент - основных единиц любого проекта, связывание логики компонента с его шаблоном, передача
  данных из одного компонента в другой.

#### Тренируемые навыки:

- создание нового компонента
- связывание данных и событий с шаблоном компонента
- включение одних компонентов в другие и передача данных между ними

---

#### Требования

- Создать массив элементов списка (каждый элемент содержит поля id и text)
- Выводить элементы списка в шаблоне основываясь на созданном массиве с помощью \*ngFor
- Стилизовать кнопки, а также добавить кнопке состояние disabled, если поле ввода пустое
- Реализовать добавление и удаление элементов в этом списке по клику по кнопке Add и Delete
- Выделить элемент списка в отдельный ToDoListItemComponent компонент
- Подключить Angular Material библиотеку и используя matInput для нашего поля ввода
