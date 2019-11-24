var A = 51;
var B = 92;
var C = 3;
var D = 12;

if (A > B) {
    if (A > C) {
        if (A > D) {
        console.log('A');
    } else {
        console.log('D');
    }
}
    } else {
        if (B > C) {
            if (B > D) {
            console.log('B')
        } else {
            console.log('D')   
        } 
    } else {
        console.log('C')
    }
}

if (A === B || A === C || A === D || B === C || C === D) {
    console.log('равные элементы')
}