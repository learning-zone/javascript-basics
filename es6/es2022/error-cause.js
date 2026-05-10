function processData(arrayData) {
    return arrayData.map(data => {
        try {
          const json = JSON.parse(data);
          return json;
        } catch (err) {
          throw new Error(
            `Data processing failed`,
            {cause: err}
          );
        }
      });
  }

  processData({"one": 1, "two": 2});