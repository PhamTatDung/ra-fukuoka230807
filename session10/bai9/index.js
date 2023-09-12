let str = prompt('nhap vao mot chuoi');
console.log(str);
function kiemTraTanXuat(s) {
    let arr = [];
    let tansuat = [];
    for (let i = 0; i < str.length; i++) {
        if (arr.indexOf(str[i]) === -1) {
            arr.push(str[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (arr[i] == str[j]) {
                count++
            }
        }
        tansuat.push(count);
        console.log(`ki tu ${arr[i]} xuat hien: ${tansuat[i]} lan.`);
    }

}
kiemTraTanXuat(str);
