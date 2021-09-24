interface First {
    name: string,
    age: number
}

interface Second {
    address: string,
}

type Data = First & Second;

var Details: Data = {
    name: "Bharat",
    age: 21,
    address: "Nhi bataunga",
}

console.log(Details);
