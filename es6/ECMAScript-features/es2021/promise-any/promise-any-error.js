(async () => {
    try {
        const output = await Promise.any([
          Promise.reject('Error 1'),
          Promise.reject('Error 2'),
          Promise.reject('Error 3'),
      ]);
      console.log(`Output: ${output}`);
    } catch (err) {
        console.log(`Error: ${err.errors}`);
    }
  })(); 
  // Error: Error1,Error2,Error3