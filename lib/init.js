const commander  = require('commander');
const download = require('download-git-repo');

exports.download = (target) => {
  return new Promise((resolve, reject) => {
    download('direct:https://github.com/kobe990/components-repository-template/archive/master.zip',
      target, { clone: false }, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve(target)
        }
      })
  })
}