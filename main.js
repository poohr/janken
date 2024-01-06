let jankenRole = ['gu', 'choki', 'pa'];
let jankenRoleResult;

// ジャンケンの役をランダム生成
const generateRandamJanken = () => {
    jankenRoleResult = jankenRole[Math.floor(Math.random() * jankenRole.length)];
    // console.log(jankenRoleResult);
}

// ジャンケンの結果表示
const displayResult = () => {
    generateRandamJanken();
    const element = document.getElementById("jankenResult");
    // console.log(element);
    // console.log(jankenRoleResult);

    if (jankenRoleResult == 'gu') {
        element.src = "image/janken_gu.png";
    } else if (jankenRoleResult == 'choki') {
        element.src = "image/janken_choki.png"
    } else if (jankenRoleResult == 'pa') {
        element.src = "image/janken_pa.png"
    }
}
