function longest(a, b) {
    if (a.length >= b.length) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}
var longerArray = longest([1, 2], [1, 2, 3]);
var longerString = longest("alice", "bob");
