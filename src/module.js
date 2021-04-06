console.log(1111);
async  function start() {
    return await Promise.resolve('acync working1111 !')
}
start().then(console.log)