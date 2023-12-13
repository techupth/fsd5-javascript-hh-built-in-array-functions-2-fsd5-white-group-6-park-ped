// Example #7 : Palindrome

// ให้เขียน Function ที่ชื่อว่า isPalindrome ซึ่งมีคุณสมบัติดังต่อไปนี้

// รับ Parameter string เป็น String ที่เป็นคำหรือ ประโยคอะไรก็ได้
// โดย Function นี้จะทำการตรวจสอบ string ที่ได้รับเข้ามาว่าเป็นคำที่สามารถอ่านจากหลังไปหน้าหรือหน้าไปหลังแล้วมีความหมายเหมือนกันหรือไม่ คำแบบนี้เรียกว่า Palindrome
// ในกรณีที่ string เป็น Palindrome ตัว Function นี้ จะ Return ผลลัพธ์เป็น true
// ในกรณีที่ string ไม่เป็น Palindrome ตัว Function นี้ จะ Return ผลลัพธ์เป็น false

const isPalindrome = function (string) {
  //const cutSpecialChar = string.toLowerCase().replace(/[^a-z0-9]/g, ""); //ปรับตัวอักษรให้เป็นพิมพ์เล็กทั้งหมด และตัดอักขระพิเศษออกด้วย .replace (ใช้ regular expression /[^a-z0-9]/g ตัดนอกเหนือ lowercase และตัวเลข0-9)
  const reverseToStr = string.split("").reverse().join(""); //เอาตัวอักษรที่ปรับ มากลับด้านด้วย .reverse และนำมาต่อกัน
  //console.log(reverseToStr);
  return string === reverseToStr ? true : false; // ถ้าอ่านจากขวาไปซ้าย และซ้ายไปขวา
};
//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
