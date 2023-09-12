let n1 = +prompt('Nhap vao so thu 1');
let n2 = +prompt('Nhap vao so thu 2');
function doiCho(a, b) {
    var temp = a;
    a = b;
    b = temp;
    return [a, b];
}
console.log('thu tu truoc khi doi la: ', [n1, n2]);
console.log('thu tu sau khi doi la: ', doiCho(n1, n2));