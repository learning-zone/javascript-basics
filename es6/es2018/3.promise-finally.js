let isLoading = true;
fetch('http://somesite.com/users')
    .then(data => data.json())
    .catch(err => console.error(err))
    .finally(() => {
        isLoading = false;
        console.log('Finished loading!!');
    })