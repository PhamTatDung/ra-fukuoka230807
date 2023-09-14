let str = prompt('nhap vao chuoi can dao nguoc');
let reverseStr = (string) => {
    string = str.split('').reverse().join('');
    return string;
}
console.log(reverseStr(str));
