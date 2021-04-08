console.log(1111);
async function start() {
  return await Promise.resolve('acync sssss !')
}
start().then(console.log);
