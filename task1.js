/* Задание 1.
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект 
и выводить его в консоль.
 XML:
 */
 const xmlString = `
 <list>
   <student>
     <name lang="en">
       <first>Ivan</first>
       <second>Ivanov</second>
     </name>
     <age>35</age>
     <prof>teacher</prof>
   </student>
   <student>
     <name lang="ru">
       <first>Петр</first>
       <second>Петров</second>
     </name>
     <age>58</age>
     <prof>driver</prof>
   </student>
 </list>`
 
 
 const xmlDoc = new DOMParser().parseFromString(xmlString, 'text/xml');
 const listNode = xmlDoc.querySelector("list");
  //выводим xml в массив
 const listNodes = [...listNode.querySelectorAll("student")];
 const list = [];
 //перебираем массив
 listNodes.forEach(studentNode => {
 const students = xmlDoc.querySelector('list')
   const nameNode = studentNode.querySelector('name');
   const first = nameNode.querySelector('first').textContent;
   const second = nameNode.querySelector('second').textContent;
   const age = studentNode.querySelector('age');
   const prof = studentNode.querySelector('prof').textContent;
   const lang = nameNode.getAttribute('lang')
   // Добавлляем в массив константы
   list.push({
     lang: lang,
     first: first,
     second: second,
     age: Number(age.textContent),
     prof: prof
   })
 })
// Создаем переменную result для ввода массива в объект
 const result = {
   list: list
 };
 console.log(result)