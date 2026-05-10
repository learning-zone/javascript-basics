async function logger() {

    let data = await fetch('http://someapi.com/users'); // pause until fetch returns
    console.log(data)
}
logger();