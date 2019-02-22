import Mock from 'mockjs'
import MyInfo from './MyInfo.js'
const mocktest = Mock.mock('http://127.0.0.1/main.php?cid=1', 'post', () => {
  return MyInfo.page1
})

const appnames = Mock.mock('http://127.0.0.1/queryapppnames', 'post', () => {
  return MyInfo.appnames
})

const randappnames = Mock.mock('http://127.0.0.1/queryrandapppnames', 'post', () => {
  const Random = Mock.Random
  let arr = []
  for (let i = 0; i < 100; i++) {
    arr.push({id: 'app' + i, appname: Random.cname()})
  }
  var retobj = {
    code: '200',
    appinfos: arr
  }
  console.log(retobj)
  return retobj
})

export default { mocktest, appnames, randappnames }
