// Exercise #5 : Crimes Records

// crimeRecordNames เป็น Array ที่บรรจุชื่อบุคคลที่มีประวัติอาชญากรรม

// Copy
// let crimeRecordNames = [
//   "Theodora Milenko",
//   "Tinashe Benigno",
//   "Mahalia Priyanka",
//   "Maisy Sudhir",
// ];
// ให้เขียน Function ที่ชื่อว่า searchCrimeRecord ซึ่งมีคุณสมบัติต่อไปนี้
// รับ Parameter ชื่อ name ซึ่งเป็น String
// จุดประสงค์ของ Function นี้ คือนำ name ไปค้นหาในรายชื่อบุคคลที่มีประวัติอาชญากรรม crimeRecordNames
// ถ้า name ไม่มีประวัติอาชญากรรม ให้ Function แสดงผลลัพธ์ทางหน้าจอด้วย console.log() ในรูปแบบดังนี้ “<name> has no crime record.”
// ถ้า name มีประวัติอาชญากรรม ให้ Function แสดงผลลัพธ์ทางหน้าจอด้วย console.log() ในรูปแบบดังนี้ “<name> has a crime record !!!”
// <name> คือชื่อที่ส่งเข้ามาใน Function searchCrimeRecord

let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Maisy Sudhir",
];

function searchCrimeRecord(name) {
  if (!crimeRecordNames.includes(name)) {
    return `${name} has no crime record.`;
  } else {
    return `${name} is in the crime record.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"
