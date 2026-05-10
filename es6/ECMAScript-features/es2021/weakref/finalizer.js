    // Create new FinalizationRegistry:
    const reg = new FinalizationRegistry((val) => {
        console.log(val);
      });
  
      (() => {
      // Create new object:
        const obj = {}
  
      // Register finalizer for the "obj" as first argument and value for callback function as second argument:
        reg.register(obj, 'obj has been garbage-collected.')
      })();