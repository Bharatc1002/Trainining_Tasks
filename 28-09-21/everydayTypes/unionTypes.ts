

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      console.log("Hello, " + x.join(" and "));
    } else {
      console.log("Welcome lone traveler " + x);
    }
  }

  welcomePeople(["This", "That", "Those"])