//Iteratively
//Time: O(n); Space: O(1)
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let x = 1; x <= n; x++)
        sum = sum + x;
    return sum;
}
//Recursive
//Time: O(n); Space: O(n)
function sum_to_n_b(n: number): number {
    if (n == 1)
        return 1;
    return n + sum_to_n_b(n - 1);
}
//Formula n*(n+1)/2
//Time: O(1); Space: O(1)
function sum_to_n_c(n: number): number {
    return n * (n + 1) / 2;
}

console.log(sum_to_n_a(10));
console.log(sum_to_n_b(10));
console.log(sum_to_n_c(10));