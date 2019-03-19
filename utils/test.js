const content = "<p><img src='test' /></p>"
const testContent = 'history'
const regex = new RegExp(/src=.*\s/)
const testRegex = new RegExp(/hi/)
const res = regex.exec(content)
const testRes = testRegex.exec(testContent)
console.log('testRes', testRes)
console.log('res', res)
