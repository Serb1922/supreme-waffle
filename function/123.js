function sumOfDifferences(arr) {
    if (arr.length <= 1) {
        return 0;
    } else if (arr.length > 1) {
        arr.sort((a, b) => b - a);
        return (arr[0] - arr[1]) + (arr[1] - arr[2]);
    } else {
        arr.reverse();
        return arr[0] - arr[1];
    }
}
for (let array = 0; array < array.length; array++) {
    const element = [];

}
