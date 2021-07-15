/*
1. Các hàm xử lý cơ bản trong javascript
2. Object trong javascript
3. Các hàm xử lý cơ bản trong array
4. Javascript destructuring assignment
*/





//---------------------Các hàm xử lý cơ bản trong javacript--------------------------------------

// 1. encodeURI() được sử dụng để mã hóa một URI.
var uri = "my test.asp?name=ståle&car=saab";
var res = encodeURI(uri);
console.log(res); // "my%20test.asp?name=st%C3%A5le&car=saab"

// 2. decodeURI() được sử dụng khi bạn cần giải mã một URI.
var encodedUri = "my%20test.asp?name=st%C3%A5le&car=saab";
var decodedUri = decodeURI(encodedUri);
console.log(decodedUri); // "my test.asp?name=ståle&car=saab"

// 3. encodeURIComponent() được sử dụng 
// khi bạn muốn mã hóa URI trở thành một phần của URI khác.

// 4. decodeURIComponent() được sử dụng khi bạn muốn giải mã một phần URI khác.

/* lưu ý: phân biệt encodeURI() và encodeURIComponent()
 + Khi bạn muốn mã hóa một url đầy đủ (có cả phần http:// hay https://) thì dùng encodeURI(), 
    bởi nó sẽ không mã hóa các ký tự :/.
 + Khi bạn muốn mã hóa giá trị của tham số thì sử dụng encodeURIComponent().
*/

// 5. eval() được sử dụng khi bạn muốn chạy một đoạn code JavaScript dưới dạng một string.
var x = 10;
var y = 20;
var a = eval("x * y");
console.log(a); // 200
console.log(typeof a ); // number (giữa nguyên kiểu)

/* 6.
isFinite(<value>) được sử dụng khi bạn muốn kiểm tra một số có phải là số hữu hạn hay không? 
    Nếu là số hữu hạn sẽ trả về true, 
    ngược lại trả về false.
*/

/* 7.
isNaN(<value>) được sử dụng khi bạn muốn kiểm tra một giá trị có phải là NaN hay không? Nếu là NaN 
    (hoặc tương tự NaN) sẽ trả về true, ngược lại trả về false.
*/

/* 8.
Number(<value>) được sử dụng khi bạn muốn ép một giá trị bất kỳ về dạng số. 
    Nếu không ép được, sẽ trả về NaN.
*/

/* 9.
parseFloat(<string>) được sử dụng khi bạn muốn chuyển một chuỗi thành một số dấu phẩy động. 
    Hàm sẽ chỉ chuyển được nếu chuỗi được bắt đầu bằng số (không tính các dấu khoảng cách như space, tab) và lấy ra số đầu tiên.
    Nếu không sẽ trả về NaN.
 */
    parseFloat(" 60 "); // 60
    parseFloat("40 years"); // 40
    parseFloat("He was 40"); // NaN

/* 10.
parseInt(<string>, <cơ số 2->36>) 
được sử dụng khi bạn muốn chuyển một chuỗi về dạng số nguyên. 

lưu ý:
Nếu string bắt đầu với “0x” thì sẽ là cơ số 16.
Nếu string bắt đầu với bất kỳ số nào sẽ là cơ số 10.
*/

// 11. String() được sử dụng khi bạn muốn ép một giá trị bất kỳ về dạng string

//----------------------------------------------------------------------------------







// ----------------------------Object trong javascript------------------------------
// ví dụ về object
/*
var myInfo = {
    name: 'nguyen duong',
    age: 19,
    address: 'nam dinh',
    '12abc': 110101,
    getName: function() {
        return this.name;  // this là con trỏ ngầm định cho object
    } 
}

console.log(myInfo);
*/

// lưu ý:
/*
+ tên key đc đặt theo quy tắc đặt tên biến, hàm
+ nếu muốn đặt key ko theo quy tắc đặt tên biến, hàm thì phải chuyển key đó thành string ('12abc')
+ function --> phương thức/ method
+ others --> thuộc tính/ property
*/

/*
// thêm key-value mới 
//c1
myInfo.email = 'duong.nt@mail.com';

//c2: nếu tên key muốn đặt ở dạng string
myInfo['my-email'] = 'nhung.vtc@mail.com';

//c3: key mới là 1 biến
var emailKey = 'email';

var myInfo = {
    name: 'nguyen duong',
    age: 19,
    address: 'nam dinh',
    '12abc': 110101,
    [emailKey]: 'duong.nt@mail.com' 
}

//lấy value, biết key 
//c1
console.log(myInfo.name);
console.log(myInfo.getName());

//c2: key là 1 string
console.log(myInfo['12abc']);

//c3: có biến ngoài
var myKey = 'address';
console.log(myInfo[myKey]);

//xóa key-value
delete myInfo.name;
delete myInfo[myKey];
delete myInfo['12abc'];
*/

// object constructor, function constructor, hàm tạo   

//tạo obj constructor
function User(firstName, lastName, avatar) {           //declaration funnc
    //var User = function(firstName, lastName, avatar) {   //expression func
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
        this.getName = function() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    
    // lưu ý :
    /*
    + tên của obj constructor quy ước viết hoa chữ cái đầu
    + obj contructor không phải là đối tượng, nó chỉ mô tả đối tượng
    + obj constructor có thể đc tạo bởi declaration func hoặc expression func
    */
    // tạo đối tượng
    var teacher = new User('Vũ', 'Nhung', 'avt');
    var student = new User('Nguyễn', 'Dương', 'avt');
    
    /*
    + phải dừng từ khóa new
    + sau khi cấp phát teacher và student mới là 1 đối tượng obj
    + muốn truy xuất constructor của đối tượng có thể làm như sau
        console.log(teacher.constructor);
    */
    
    // thêm thuộc tính đặc trưng cho từng đối tượng
    student.id = '1a2b3c';
    teacher.email = 'teacher@mail.com'
    
    // obj prototype
    /*
    + thêm thuộc tính sau khi đã có hàm tạo
    + sau khi thêm, tất cả các obj đc tạo từ hàm tạo đó đều sẽ nhận đc 
    + dùng để KẾ THỪA các hàm tạo
    */
    /*
    // thêm thuộc tính và phương thức
    User.prototype.schoolName = 'THPT C';
    User.prototype.getSchoolName = function() {
        return this.schoolName;
    }
    */
    //kế thừa
    function congNhan(age) {    // hàm kế thừa
        this.age = age;
    }
    
    congNhan.prototype = new User('vu', 'khai', 'avt');  // kế thừa hàm User
    
    var cn_1 = new congNhan(20);
    
    console.log(cn_1); 
    console.log(cn_1.getName());
    //console.log(teacher);
    //console.log(student.getSchoolName());
    
// các phương thức Obj

// 1. Object.assign() : Sao chép các gía trị của tất cả các thuộc tính riêng từ một hoặc nhiều object vào một object khác.
/*
    let A = {
        ....
    };

    let B = Object.assign({<thuộc tính c của B>}, A);
    // Obj B có thuộc tính c, gán tất cả các thuộc tính của Obj A vào B

    // lưu ý: Các thuộc tính của đối tượng đích sẽ được viết đè với các thuộc tính của đối tượng đích nếu chúng có key giống nhau.
*/

// 2. Object.create(prototypeObject, propertiesObject): hàm tạo Obj

// 3. Object.entries(<tên Obj>): trả về 1 Array gồm các phần tử là ["key", "value"]

// 4. Object.keys(<tên Obj>): trả về 1 Array các key (dạng string)

// 5. Object.values(<tên Obj>): trả về 1 Array các value (đúng kiểu đã khai báo)

// const A = {
//     1 : 2,
//     3 : "4"
// };

// console.log("--------", Object.keys(A));
// console.log("--------", Object.values(A));

//----------------------------------------------------------------------------------------







//-------------------------------Các hàm xử lý cơ bản trong array---------------------------

// 1. concat() được sử dụng khi bạn muốn gộp nhiều mảng lại với nhau, phương thức này sẽ trả về một mảng mới.

// 2. copyWithin() được sử dụng khi bạn muốn trích một đoạn trong mảng và ghi đè vào một đoạn khác trong chính mảng đó.
/*
Cú pháp: array.copyWithin(target, start, end). Trong đó:

    target: Vị trí bắt đầu ghi đè.
    start: Không bắt buộc, là vị trí bắt đầu của mảng muốn trích, mặc định là 0.
    end: Không bắt buộc, là vị trí kết thúc của mảng muốn trích, mặc định là độ dài của mảng.
*/
// ví dụ:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2);
console.log(fruits)  // ["Banana", "Orange", "Banana", "Orange"]
 
// Copy các phần tử từ vị trí 2 tới vị trí 4 sau đó ghi đè từ vị trí 0
var samsungPhones = ["galaxy s1", "galaxy s2", "galaxy s3", "galaxy s4", "galaxy s5"];
samsungPhones.copyWithin(0, 2, 4);
console.log(samsungPhones); // ["galaxy s3", "galaxy s4", "galaxy s3", "galaxy s4", "galaxy s5"]

// 3. entries() sẽ trả về một Array iterator từ mảng ban đầu, có giá trị là một cặp [key, value].
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();
 
for (let pair of f) {
  console.log(pair);
}
        /*
        Output:
        
        [0, "Banana"]
        [1, "Orange"]
        [2, "Apple"]
        [3, "Mango"]
        */

// 4. every(), filter(), find(), findIndex(), forEach(), includes(), indexOf(), isArray(), length, lastIndexOf(), map()
//      push(), reverse(), reduce(), reduceRight(), some(), sort()

// 5. Phương thức fill() sẽ làm cho tất cả các phần tử trong mảng trở thành một giá trị giống nhau.

    // Cú pháp: array.fill(value, start, end)

// 6. from() được sử dụng khi bạn muốn tạo ra một mảng mới từ một đối tượng dạng mảng.

var myArr = Array.from("123456", function (item, index, arr) {
    return item * 2;
});
 
console.log(myArr); // [2, 4, 6, 8, 10, 12]

// 7. join() được sử dụng khi bạn muốn nối các phần tử của mảng thành một string.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join(); // "Banana,Orange,Apple,Mango"

// 8. shift() được sử dụng khi bạn muốn xóa phần tử đầu tiên của mảng, đồng thời trả về phần tử đó.

// 9. slice() được sử dụng khi bạn muốn trích một mảng con từ vị trí n tới vị trí m trong mảng ban đầu. Lưu ý mảng được trích sẽ không bao gồm phần tử thứ m.

// Cú pháp: array.slice(start, end)

// 10. splice() được sử dụng khi bạn muốn thay thế một số phần tử trong mảng bằng một số phần tử khác.

/*
Cú pháp: array.splice(index, howmany, item1, ....., itemX). Trong đó:

index: Bắt buộc là vị trí bắt đầu thay thế, bạn có thể sử dụng số âm để tính vị trí từ cuối mảng lên (phần tử cuối cùng là -1).
howmany: Không bắt buộc, có bao nhiêu phần tử sẽ được thay thế, mặc định là 0.
item1,… itemX: Là các phần tử sẽ được thay thế vào mảng kể từ vị trí index.
*/

// 11. unshift() được sử dụng khi bạn muốn thêm một hoặc một số phần tử vào đầu mảng. Phương thức sẽ trả về số lượng phần tử trong mảng sau khi thêm.

// Cú pháp: array.unshift(item1, item2, ..., itemX). Trong đó item1, item2, …, itemX là các phần tử bạn muốn thêm vào đầu mảng.

//------------------------------------------------------------------------------------







// ---------------------------Javascript destructuring assignment-----------------------

// tác dụng: để lấy giá trị của array(bao gồm cả: strings, arrays, sets, maps, function arguments, DOM elements) và object một cách 
//  nhanh, thuận tiện
/*
    destructuring hay đc đi cùng với rest
    rest parameters: phần tử rest (lấy ra những phần còn lại) (*tránh nhầm với toán tử ... Spread)
    lưu ý rest: chỉ trong 2 trường hợp
        + 1: dùng với destructuring
        + 2: dùng làm tham số truyền vào func

        + các trường hợp còn lại có ... là spread
*/

// ví dụ với string
let message = 'Hello';
// let [a, b] = message;
// let [x, y, ...z] = message;

// console.log(a, b);    // H e
// console.log(x, y, z); // H e ['l', 'l', 'o']

// Array
// let numbers = [101, 102, 103];
// let [x, y, z] = numbers;

// console.log(x, y, z); // 101 102 103

// Obj
function foo() {
    return {
        x1: 1, 
        y1: 2,
        z1: 3
    };
}

let {x1, y1, z1} = foo();

console.log(x1 , y1, z1);  // 1 2 3
// lưu ý: các biến phải có tên trùng với tên key của obj thì mới sử dụng đc (nếu ko trả về undefine)





