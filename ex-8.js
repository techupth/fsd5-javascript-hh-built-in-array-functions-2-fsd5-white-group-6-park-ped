// Exercise #8 (Challenge) : Locations

// จาก Exercise #1 เรามี Array bills ที่มี Key location ที่เก็บข้อมูลสถานที่ที่ชำระเงิน

// ให้เขียน Function สำหรับหายอดชำระทั้งหมดที่เกิดขึ้นในแต่ละ Location โดยมีรายละเอียดดังนี้

// Return ผลลัพธ์ออกมาเป็น Object ที่มีโครงสร้างแบบนี้

// Copy
// {
// 	<location_name>: <sum_of_bill_locations>
// }

// <location_name> คือชื่อของ Location ของบิล
// <sum_of_bill_locations> คือ Value ของผลรวมของยอดบิลใน Location นั้นๆ รวมกันทั้งหมด
// Declare ตัว Variable totalPaidByLocaltion เพื่อเก็บผลลัพธ์จาก Function ข้างต้น และแสดงผลลัพธ์ทางหน้าจอด้วย console.log()

// ตัวอย่างจริง

// Copy
// {
//   Chonburi: 226687,
//   Suphanburi: 41012,
//   Trang: 24826,
//   Trat: 47202,
//   Lopburi: 29815,
//   'Chiang Mai': 48911,
//   Lampang: 12545,
//   Phuket: 88674,
//   Saraburi: 23655,
//   Phrae: 15678,
//   Loei: 76757,
//   'Chiang Rai': 11230,
//   'Nakhon Pathom': 76705,
//   Bangkok: 370177,
//   'Samut Prakan': 38590,
//   Rayong: 40543,
//   Yala: 11315,
//   Ranong: 42612,
//   Phayao: 48147,
//   Khonkaen: 23218,
//   Nan: 37463,
//   'Nakhon Sawan': 74321
// }

const bills = [
  {
    id: "1",
    transactionDate: "2021-08-01",
    total: 20000,
    location: "Chonburi",
    paymentType: "Cash",
    member: {
      name: "Mark",
      age: "26",
    },
    pointRate: 0.01,
  },
  {
    id: "2",
    transactionDate: "2021-08-01",
    total: 12298,
    location: "Chonburi",
    paymentType: "Cash",
    member: {
      name: "Mark",
      age: "26",
    },
    pointRate: 0.01,
  },
  {
    id: "3",
    transactionDate: "2021-08-01",
    total: 41012,
    location: "Suphanburi",
    paymentType: "Mastercard",
    member: {
      name: "Peter",
      age: 33,
    },
    pointRate: 0.01,
  },
  {
    id: "4",
    transactionDate: "2021-08-02",
    total: 24826,
    location: "Trang",
    paymentType: "MasterCard",
    member: {
      name: "Bee",
      age: 31,
    },
    pointRate: 0.01,
  },
  {
    id: "5",
    transactionDate: "2021-08-21",
    total: 47202,
    location: "Trat",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "6",
    transactionDate: "2021-08-15",
    total: 29815,
    location: "Lopburi",
    paymentType: "VISA",
    member: {
      name: "Mark",
      age: 26,
    },
    pointRate: 0.01,
  },
  {
    id: "7",
    transactionDate: "2021-08-14",
    total: 28375,
    location: "Chonburi",
    paymentType: "VISA",
    member: {
      name: "Jack",
      age: 36,
    },
    pointRate: 0.01,
  },
  {
    id: "8",
    transactionDate: "2021-08-19",
    total: 26923,
    location: "Chiang Mai",
    paymentType: "QR",
    member: null,
  },
  {
    id: "9",
    transactionDate: "2021-08-11",
    total: 12545,
    location: "Lampang",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "10",
    transactionDate: "2021-08-07",
    total: 46169,
    location: "Phuket",
    paymentType: "Mastercard",
    member: {
      name: "Patrick",
      age: 28,
    },
    pointRate: 0.01,
  },
  {
    id: "11",
    transactionDate: "2021-08-11",
    total: 23655,
    location: "Saraburi",
    paymentType: "AliPay",
    member: {
      name: "John",
      age: 32,
    },
    pointRate: 0.01,
  },
  {
    id: "12",
    transactionDate: "2021-08-03",
    total: 42505,
    location: "Phuket",
    paymentType: "QR",
    member: {
      name: "John",
      age: 32,
    },
    pointRate: 0.01,
  },
  {
    id: "13",
    transactionDate: "2021-08-03",
    total: 15678,
    location: "Phrae",
    paymentType: "Cash",
    member: {
      name: "Bee",
      age: 31,
    },
    pointRate: 0.01,
  },
  {
    id: "14",
    transactionDate: "2021-08-26",
    total: 53209,
    location: "Loei",
    paymentType: "MasterCard",
    member: {
      name: "Jack",
      age: 36,
    },
    pointRate: 0.01,
  },
  {
    id: "15",
    transactionDate: "2021-08-23",
    total: 11230,
    location: "Chiang Rai",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "16",
    transactionDate: "2021-08-26",
    total: 26748,
    location: "Nakhon Pathom",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "17",
    transactionDate: "2021-08-28",
    total: 15885,
    location: "Bangkok",
    paymentType: "MasterCard",
    member: {
      name: "T",
      age: 29,
    },
    pointRate: 0.01,
  },
  {
    id: "18",
    transactionDate: "2021-08-02",
    total: 38590,
    location: "Samut Prakan",
    paymentType: "AliPay",
    member: {
      name: "Pop",
      age: 38,
    },
    pointRate: 0.01,
  },
  {
    id: "19",
    transactionDate: "2021-08-17",
    total: 35786,
    location: "Bangkok",
    paymentType: "VISA",
    member: {
      name: "Lisa",
      age: 21,
    },
    pointRate: 0.01,
  },
  {
    id: "20",
    transactionDate: "2021-08-04",
    total: 23085,
    location: "Bangkok",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "21",
    transactionDate: "2021-08-03",
    total: 49957,
    location: "Nakhon Pathom",
    paymentType: "MasterCard",
    member: null,
  },
  {
    id: "22",
    transactionDate: "2021-08-18",
    total: 38872,
    location: "Chonburi",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "23",
    transactionDate: "2021-08-29",
    total: 127142,
    location: "Chonburi",
    paymentType: "Cash",
    member: {
      name: "Alex",
      age: 27,
    },
    pointRate: 0.01,
  },
  {
    id: "24",
    transactionDate: "2021-08-05",
    total: 40543,
    location: "Rayong",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "25",
    transactionDate: "2021-08-21",
    total: 11315,
    location: "Yala",
    paymentType: "VISA",
    member: {
      name: "Bank",
      age: 40,
    },
    pointRate: 0.01,
  },
  {
    id: "26",
    transactionDate: "2021-08-08",
    total: 42612,
    location: "Ranong",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "27",
    transactionDate: "2021-08-11",
    total: 21988,
    location: "Chiang Mai",
    paymentType: "AliPay",
    member: null,
  },
  {
    id: "28",
    transactionDate: "2021-08-13",
    total: 48147,
    location: "Phayao",
    paymentType: "AliPay",
    member: null,
  },
  {
    id: "29",
    transactionDate: "2021-08-23",
    total: 23548,
    location: "Loei",
    paymentType: "MasterCard",
    member: null,
  },
  {
    id: "30",
    transactionDate: "2021-08-27",
    total: 23218,
    location: "Khonkaen",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "31",
    transactionDate: "2021-08-24",
    total: 37463,
    location: "Nan",
    paymentType: "AliPay",
    member: {
      name: "Mark",
      age: 26,
    },
    pointRate: 0.01,
  },
  {
    id: "32",
    transactionDate: "2021-08-06",
    total: 27477,
    location: "Bangkok",
    paymentType: "MasterCard",
    member: {
      name: "P",
      age: 49,
    },
    pointRate: 0.01,
  },
  {
    id: "33",
    transactionDate: "2021-08-22",
    total: 109872,
    location: "Bangkok",
    paymentType: "VISA",
    member: {
      name: "Mark",
      age: 26,
    },
    pointRate: 0.02,
  },
  {
    id: "34",
    transactionDate: "2021-08-06",
    total: 37786,
    location: "Bangkok",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "35",
    transactionDate: "2021-08-10",
    total: 120286,
    location: "Bangkok",
    paymentType: "VISA",
    member: {
      name: "Bee",
      age: 31,
    },
    pointRate: 0.02,
  },
  {
    id: "36",
    transactionDate: "2021-08-25",
    total: 74321,
    location: "Nakhon Sawan",
    paymentType: "QR",
    member: {
      name: "Mark",
      age: 26,
    },
    pointRate: 0.01,
  },
];

//const totalPaidByLocation;

function totalBillOfLocation(arrayBill) {
  const totalPaidByLocation = arrayBill.reduce((totalPaid, keyLocation) => {
    if (!totalPaid[keyLocation.location]) {
      totalPaid[keyLocation.location] = 0;
    }
    totalPaid[keyLocation.location] += keyLocation.total;
    return totalPaid;
  }, {});

  return totalPaidByLocation;
}

console.log(totalBillOfLocation(bills));

// function totalPaidByLocation (arrayBill){
//     let totalOfLocation = arrayBill.reduce((sumBillLocation, findLocation) => {
//         sumBillLocation[findLocation.location] += findLocation.total;
//         return sumBillLocation;
//       },{});
// }

// console.log(totalPaidByLocation)

//Hint🕵🏼‍♀️ : เราสามารถกำหนด initialValue ของ Array.reduce(callback, initialValue) ให้เป็น Object ได้

// const totalByLocation = bills.reduce((acc, bill) => {
//     const location = bill.location;
//     acc[location] = (acc[location]||0) + bill.total;
//     //console.log((acc[location] || 0))
//     return acc;
// }, {});

// // console.log(totalByLocation);

// let result = {};

// for (let i = 0; i < bills.length; i++) {
//   if (!result[bills[i].location]) {
//     result[bills[i].location] = 0;
//   }

//   result[bills[i].location] = result[bills[i].location] + bills[i].total;
// }

// console.log(result);
