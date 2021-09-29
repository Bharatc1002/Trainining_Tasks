

function Elements<T>(arr: T[]): T | undefined {
    return arr[0];
}

var a: string[] = ["one", "two", "three"];
console.log(Elements(a));
