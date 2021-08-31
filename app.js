'use strict';
const length = process.argv[2] || 0;
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
memo.set(2, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = memo.get(n - 1) + memo.get(n - 2) + memo.get(n - 3);
    memo.set(n, value);
    return value;
}
for (let i = 0; i <= length; i++) {
    console.log(`${i}番目のトリボナッチ数は${trib(i)}`);
}
