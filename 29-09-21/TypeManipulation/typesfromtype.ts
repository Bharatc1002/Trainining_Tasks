interface rishi1 {
    val: string,
}
interface rishi2 {
    val1: number,
}

type rishi3 = rishi1 & rishi2;

var rishi4: rishi3 = {
    val: "hello Rishi",
    val1: 10,
}

console.log(rishi4);
