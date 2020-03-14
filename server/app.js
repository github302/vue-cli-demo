const path = require('path');
let timer = -1;
function test(count) {
    if (count > 10) {
        clearTimeout(timer);
        return ;
    }
    const date = new Date();
    count++;
    timer = setTimeout(() => test(count), 1000);
}
test(0);
console.log(path.basename);