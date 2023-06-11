/* 
что такое ассоциативный массив? 

абстрактный тип данных, с помощью которого мы храним пары ключ-значение. 

ассоциативный массив нельзя положить в память "как есть" и у него нет индексов. Для реализации мы используем хэш-таблицу. 
*/

/* грокаем алгоритмы: 
хэши - одна из самых полезных базовых структур

теперь сравнения 

Вы продаёте товары в маленьком магазинчике. Когда клиент покупает товары, мы проверяем их цену по книге. Если записи в книге не упорядочены, то поиск элементов займёт слишком много времени. 

Если книга отсортирована - хорошо, но всё равно долго. Если книга не отсортирована - очень и очень долго. 

мы нанимаем помощницу, которая работает быстрее, чем всё вышеуказанное и не зависит от размера книги. Обращаемся к структурам данных: 
я знаю массивы и списки. 

Если сделать книгу массивом, то каждый её элемент будет состоять из ещё двух элементов - названия товара и его цены. Если отсортировать массив по имени - мы сможем провести по нему бинарный поиск.

Нам нужны(так называемые) хэш-функции, чтобы создать Мэгги. 

Хэш функция - получает строку(любые данные) и возвращает число. В научной терминлогии - отображает строки на числа. 

ОНА ДОЛЖНА БЫТЬ: 

1) последовательной(передали апельсины и получили четыре, когда будем передавать апельсины снова - будем получать четыре)

2) разным словам - разные числа, идеал - на каждое входное слово - своё число. 

*/

// начнём с пустого массива 

const book = {};

book['apple'] = 0.67;
book['milk'] = 1.49;
book['avocado'] = 1.49;

console.log(book);
