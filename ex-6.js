// Exercise #6 : Car Collection

// carCollection เป็น Array ที่มี Value เป็น String ที่เก็บข้อมูลยี่ห้อของรถยนต์

// const carCollection = ["toyota", "fiat", "honda", "bmw"];
// ให้เขียน Function ที่ชื่อว่า updateCarCollection ซึ่งมีคุณสมบัติดังค่อไปนี้

// รับ Parameter carBrand ซึ่งเป็น String เก็บข้อมูลยี่ห้อรถ
// จุดประสงค์ของ Function นี้จะเพิ่มยี่ห้อรถเข้าไปใน carCollection โดยมีเงื่อนไขดังนี้
// ในกรณีที่ยี่ห้อรถที่ใส่มายังไม่มีใน carCollection
// เพิ่มยี่ห้อรถอันใหม่เข้าไปใน carCollection
// ให้ Return ผลลัพธ์ว่า new car collection is: toyota, fiat, honda, bmw,<car-brand>.
// แต่ถ้ายี่ห้อรถที่ใส่เข้ามามีอยู่แล้วใน carCollection
// ให้ Return ผลลัพธ์ว่า <car-brand> already exists in position <position> of the car collection.
// <car-brand> คือยี่ห้อรถที่ส่งเข้ามาใน Function updateCarCollection
// <position> คือตำแหน่งใน carCollection ที่เริ่มนับจาก 1 (ไม่ใช่ Index)

const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  //let addNewCarCollection = carCollection;
  if (!carCollection.includes(carBrand)) {
    carCollection.push(carBrand);
    return `new car collection is: ${carCollection}`;
  } else {
    const position = carCollection.indexOf(carBrand) + 1;
    return ` ${carBrand} already exists in position ${position} of the car collection.`;
  }
}

// เพิ่มเติม กรณีกรอกชื่อมาเป็น Capital letter
// const carCollection = ["toyota", "fiat", "honda", "bmw"];

// function updateCarCollection(carBrand) {
//   const lowerCaseCarBrand = carBrand.toLowerCase();

//   if (!carCollection.includes(lowerCaseCarBrand)) {
//     carCollection.push(lowerCaseCarBrand);
//     return `New car collection is: ${carCollection.join(', ')}`;
//   } else {
//     const position = carCollection.indexOf(lowerCaseCarBrand) + 1;
//     return `${carBrand} already exists in position ${position} of the car collection.`;
//   }
// }

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
