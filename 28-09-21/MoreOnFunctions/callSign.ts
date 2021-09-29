

type DescribableFunction = {
    description: string;
    Func(someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn.Func(6));
  }

  var Func = (num: number): boolean => {
      return num>0;
  }
  var secobj: DescribableFunction = {
      description: "Hello",
      Func
  }

  doSomething(secobj);