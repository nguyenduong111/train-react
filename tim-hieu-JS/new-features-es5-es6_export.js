/*
    1. new features trong ES5
    2. new features trong ES6
    3. Phân biệt Name Export và Default Export 

*/

//---------------------------1. new features trong ES5----------------------------

// 1. "use strict" xác định rằng mã JavaScript phải được thực thi ở "chế độ nghiêm ngặt".
/*
 + không sử dụng các biến chưa được khai báo.
 + khai báo ở đầu tập lệnh, nó có phạm vi toàn cầu
 + khai báo bên trong một hàm, nó có phạm vi cục bộ 
 + Không được phép xóa một biến, hàm 
 + ký tự số bát phân không được phép
 + Không được phép ghi vào thuộc tính chỉ đọc
*/

// 2.charAt()phương thức trả về giá tại một chỉ số nào đó (vị trí) trong một chuỗi
var str = "HELLO WORLD";
str.charAt(0); // H
str[0]; // returns H

// 3. Chuỗi trên nhiều dòng

var a = "Hello \
Dolly!";
console.log(a);

// 4.ES5 cho phép các từ keyword làm tên thuộc tính:
var obj = { name: "John", new: "yes" };

// 5.String.trim() loại bỏ khoảng trắng từ cả hai bên của một chuỗi.
var str = "       Hello World!        ";
alert(str.trim());

// 6. các hàm trong Array hay dùng
// isArray(), forEach(), map(), filter(), reduce(), reduceRight(), every(), some(), indexOf()
// lastIndexOf()

// 7. JSON.parse() được sử dụng để chuyển đổi văn bản thành một đối tượng JavaScript:
var obj_1 = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

// 8. JSON.stringify() để chuyển nó thành một chuỗi.
var obj_2 = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj_2);

// 9. class Date

// Date.now() trả về số mili giây kể từ ngày 0 (ngày 1 tháng 1 năm 1970 00:00:00 UTC)

// toISOString()phương pháp chuyển đổi một đối tượng Date thành một chuỗi, bằng cách sử dụng định dạng chuẩn ISO:

// Date.toJSON() chuyển đổi đối tượng Ngày thành một chuỗi, được định dạng là ngày JSON.
//Ngày JSON có cùng định dạng với tiêu chuẩn ISO-8601: YYYY-MM-DDTHH: mm: ss.sssZ:

// 10. Đối tượng JSON:

// Allowed:
var person = '{"firstName":"John", "lastName":"Doe", "age":46}';
JSON.parse(person);

// Not allowed:
// var person = '{"firstName":"John", "lastName":"Doe", "age":46,}'
// JSON.parse(person)

// 11. Mảng JSON:
// Allowed:
points = [40, 100, 1, 5, 25, 10];

// Not allowed:
// points = [40, 100, 1, 5, 25, 10,]

//-------------------------------------es6-------------------
// Nội suy chuỗi
// Nội suy biểu thức trực quan cho các chuỗi một dòng và nhiều dòng.
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

// trong es5 (cộng chuỗi)
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message =
  "Hello " +
  customer.name +
  ",\n" +
  "want to buy " +
  card.amount +
  " " +
  card.product +
  " for\n" +
  "a total of " +
  card.amount * card.unitprice +
  " bucks?";

//---------------------3. Phân biệt Name Export và Default Export ------------------------------

// 2 cách để xuất tệp: xuất tệp theo tên và xuất tệp mặc định

//---------Name Export:
/*
    + có thể xuất nhiều thành phần tử 1 tệp duy nhất
*/

export const Hello = () => {
  return <h1>Hello</h1>;
};

export const Goodbye = () => { 
    return <h2>Goodbye</h2>;
};

// import { Hello, Goodbye } from "./Greetings";
// gọi nhiều tệp từ 1 tệp

// import * as Greetings from "./Greetings";
// chuyển tất cả các tệp đc export trong Greetings thành phương thức trong class Greetings
// cách sử dụng: Greetings.A    Greetings.B        Greetings.C       (A, B, C là các phần tử đc export trong Greetings) 


//---------Default Export:
/*
+ chỉ có thể xuất mỗi tệp 1 thành phần 
+ tương tự khi import cũng chỉ đc 1 thành phần với mỗi tệp Default Export

*/

/*
const Hello = () => { 
  return <h1>Hello</h1>;
}

export default Hello;


-----------------------------------


import Hello from "./Hello";

*/

/*

const fn1 = () => {}
const fn2 = () => {}

export default { 
	fn1,
    fn2,
}
--------------------------------------
import Fns from "./functions";

...
Fns.fn1();
Fns.fn2();


*/



























