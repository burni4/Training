// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {
    let str = '';

    switch (names.length) {
        case 0:
            str = "no one likes this";
            break;
        case 1:
            str = `${names[0]}${str} likes this`;
            break;
        case 2:
            str = `${names[0]} and ${names[1]}${str} like this`;
            break;
        case 3:
            str = `${names[0]}, ${names[1]} and ${names[2]}${str} like this`;
            break;
        default:
            str = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
    return str;
}