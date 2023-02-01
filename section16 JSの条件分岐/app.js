const DayOfWeek = prompt('好きな曜日を入力してください')


if (DayOfWeek === '月曜日') {
    console.log('憂鬱')
} else {
    console.log('月曜日以外')
}

// switch文

const day = 2;

switch(day) {
    case 2:
        console.log(2);
        break; // breakがないとヒットしたcase以下の数字全てを実行することになる
    case 3:
        console.log(3);
        break;
    case 6:
    case 7:
        console.log("6以上の数字です")
    default:
        console.log('無効な値です')
}