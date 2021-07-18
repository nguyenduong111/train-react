// demo HOF
console.log("----------------------------------demo HOF-------------------------------");

const { number } = require("prop-types");

// vd1: xây dựng hàm HOF thực hiện nghiệm vụ sau ms thì thực hiện hàm run()
function waitRun(ms, func) {
  setTimeout(func, ms);
}
function run() {
  console.log("run");
}

// waitRun(2000, run); // chạy đúng

// waitRun(2000, run());
// waitRun sẽ chạy thẳng vào hàm run luôn, ko qua hàm setTimeout nữa, (và bị lỗi callback)


//vd2: xuất ra arr các giá trị thoả mãn điều kiện cho trước trong khoảng nhỏ hơn maximum

function pickNumber(max, pickingCondtion) {
  const result = [];

  for (let i = 0; i < max; i++) {
    if (pickingCondtion(i)) {
      result.push(i);
    }
  }

  return result;
}

// là số lẻ
function soLe(number) {
  return number % 2 === 1;
}

// chia hết cho 5
function chiaHet5(number) {
  return number % 5 === 0;
}

const so_le = pickNumber(20, soLe);
console.log(so_le);

const chia_het_5 = pickNumber(50, chiaHet5);
console.log(chia_het_5);

//-------------------------------------------------------------------------------

// demo currying
console.log("----------------------------------demo currying-------------------------------");

function pickNumber_2(number) {
  return function (pickingCondition) {
    const result = [];

    for (let i = 0; i < number; i++) {
      if (pickingCondition(i)) {
        result.push(i);
      }
    }

    return result;
  };
}

const so_le_2 = pickNumber_2(20) ((number) => number % 2 === 1);
console.log(so_le_2);

const so_chia_5 = pickNumber_2(50) ((number) => number % 5 === 0);
console.log(so_chia_5);

// ví dụ: lấy giá trị qua 1 key cho trước (trong 1 obj có điều kiện) trong 1 mảng các obj

var arrObj = [
    {
        key1: "duong",
        status: false
    },
    {
        key2: "nhung",
        status: false
    },
    {
        key3: "duc",
        status: false
    },
    {
        key4: "binh",
        status: true
    }
];

function getValue(key) {
    return function (arrObjs, pickingCondition) {
        let obj = null;

        for(let i = 0; i < arrObjs.length; i ++) {
            if(pickingCondition(arrObjs[i])) {
                obj = arrObjs[i];
                return obj[key];
            }
        }

        return obj;
    }
}

// hàm điều kiện obj
function picking(obj) {
    return obj.status === true;
}

var getValueByKey1 = getValue("key1");
var getValueByKey2 = getValue("key2");

var valueKey1 = getValueByKey1(arrObj, picking);
var valueKey2 = getValueByKey2(arrObj, picking);

var valueKey3 = getValue("key3")(arrObj, picking);

console.log(valueKey1);
console.log(valueKey2);
console.log(valueKey3);






