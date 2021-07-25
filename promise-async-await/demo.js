
// ------------------------------------- demo Promise---------------------------------------

var promise = new Promise((resolve, reject) => {  // khởi tạo 1 phần tử bất đồng bộ, sử dụng từ khoá new Promise, nhận vào 
                                                  // 1 func gồm 2 tham số là resolve, reject
    
    // thành phần kiểm tra
    let a = 1 + 1;

    if(a === 2) {      // nếu logic đúng, chạy vào réolve
        resolve(
            // nhận bất kì value nào
            {
                name: "duong",
                age: 20
            } 
        );
    }else {             // nếu sai, chạy reject 
        reject(
            // nhận bất kì value nào
            "error"
        )
    }
});

promise
    /*
        + trường hợp nếu resolve đc gọi, thì giá trị trong resolve sẽ đc truyền vào trong hàm .then() đầu tiên
        + có thể có nhiều hàm .then() nối tiếp nhau (lưu ý: các hàm .then() tiếp theo sẽ ko nhận đc giá trị trực tiếp từ
                                                        resolve mà sẽ nhận đc giá trị trả về từ hàm .then() phía trên)
        + các hàm .then() sẽ chạy lần lượt từ trên xuống dưới
        + nếu trong .then() truyền vào 1 func thì .then() đó sẽ đc thực hiện tuần tự
        + nếu trong .then() ko truyền 1 func thì .then() đó sẽ đc ưu tiên thực hiện đầu tiên
        * lưu ý: nếu hàm .then() trả về 1 Promise mới thì sẽ phải thực hiện xong Promise đó mới chạy tiếp các .then() bên dưới

    */
    .then((value) => {
        console.log(value.name);     // "duong"
        console.log(value.age);      // 20
        value.id = 123;

        return value;
    })

    .then((value) => {
        console.log(value.id);        // 123
    })

    .then(
        console.log("another")
    )

    /*
        + chạy .catch() chỉ khi reject đc gọi
        + có duy nhất 1 hàm .catch()
    */
    .catch((value) => {
        console.log(value);     // error
    })

    .finally(() => {                     // ko cần thiết phải có
        console.log("done!!!");
    })

//------------------------------------async/await----------------------------
/*
    + Async / Await được xây dựng trên Promises và tương thích với tất cả các Promise dựa trên API. Trong đó:

    + Async - khai báo một hàm bất đồng bộ (async function someName(){...}).

        - Tự động biến đổi một hàm thông thường thành một Promise.
        - Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
        - Async cho phép sử dụng Await.

    + Await - tạm dừng việc thực hiện các hàm async.

        - Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
        - Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
        - Await chỉ có thể được sử dụng bên trong các function async.


*/

/*

// cách 1: 
function getJSON() {

    // To make the function blocking we manually create a Promise.
    return new Promise( function(resolve) {
        axios.get('https://tutorialzine.com/misc/files/example.json')
            .then( function(json) {
                // The data from the request is available in a .then block
                // We return the result using resolve.
                resolve(json);
            });
    });
}
getJSON().then((value) => {
    console.log(value);
});

// cách 2:
// Async/Await approach

async function getJSONAsync() {

    // await thay cho .then()
    let json = await axios.get('https://tutorialzine.com/misc/files/example.json');

    // giá trị của GET sẽ đc lưu vào biến json
    return json;
    
}

    //------------------tương đương-----------------

function getJSONAsync() {

    
    axios.get('https://tutorialzine.com/misc/files/example.json')
    .then((response) => {
        return response;
    });

}
*/



































