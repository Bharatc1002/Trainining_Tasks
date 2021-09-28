

interface Container {
    value: number | null | undefined;
  }
   
  function multiplyValue(container: Container, factor: number) {
    if (container.value != null) {
      console.log(container.value);

      container.value *= factor;
      console.log(container.value);
      
    }
  }

  var container = {
      value: 5,
  }
  multiplyValue(container, 3)