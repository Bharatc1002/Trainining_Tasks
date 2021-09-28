var data;
(function (data) {
    data[data["first"] = 1] = "first";
    data[data["second"] = 2] = "second";
    data[data["third"] = 3] = "third";
    data[data["fourth"] = 4] = "fourth";
})(data || (data = {}));
function finder(num) {
    if (num == data.first) {
        console.log(num);
    }
    else if (num == data.second) {
        console.log(num);
    }
    else if (num == data.third) {
        console.log(num);
    }
    if (num == data.fourth) {
        console.log(num);
    }
}
finder(3);
