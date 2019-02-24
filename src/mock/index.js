import Mock from 'mockjs'
import MyInfo from './MyInfo.js'
const mocktest = Mock.mock('http://127.0.0.1/main.php?cid=1', 'post', () => {
  return MyInfo.page1
})

const appnames = Mock.mock('http://127.0.0.1/queryapppnames', 'post', () => {
  return randappnames
})

const randappnames = Mock.mock('http://127.0.0.1/queryrandapppnames', 'post', () => {
  let arr = []
  for (let i = 0; i < 100; i++) {
    arr.push({ id: 'app' + i, appname: '系统' + i, state: false })
  }
  var retobj = {
    code: '200',
    appinfos: arr
  }
  console.log(retobj)
  return retobj
})

const querynodes = Mock.mock('http://127.0.0.1/querynodes', 'post', () => {
  let arr = []
  for (let i = 0; i < 100; i++) {
    arr.push({ id: 'app' + i, appname: '系统' + i, state: false })
  }
  var retobj = {
    code: '200',
    appinfos: arr
  }
  console.log(retobj)
  return retobj
})

const querydevelopment = Mock.mock('http://127.0.0.1/querydevelopment', 'post', function (options) {
  let tmpset = new Set()
  let optionsarr = JSON.parse(options.body)
  if (optionsarr === undefined || optionsarr.length === 0) {
    // tmpset.add({id: 'dep0', name: '南中心'})
    return {code: '200', data: Array.from(tmpset)}
  }
  let developmentsmap = new Map([['app0', {id: 'dep0', name: '南中心'}], ['app1', {id: 'dep1', name: 'IDC机房'}], ['app2', {id: 'dep2', name: '中电投'}]])
  optionsarr.forEach((item, index) => {
    if (item === 'app0') {
      tmpset.add(developmentsmap.get('app0'))
    }
    if (item === 'app1') {
      tmpset.add(developmentsmap.get('app1'))
    }
    if (item === 'app2') {
      tmpset.add(developmentsmap.get('app2'))
    }
    if (item > 'app2' && !optionsarr.includes('app0')) {
      tmpset.add({id: 'dep0', name: '南中心'})
    }
  })
  return {code: '200', data: Array.from(tmpset)}
})

export default { mocktest, appnames, randappnames, querydevelopment, querynodes }
