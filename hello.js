'use strict';

module.exports = (context, cb) => {
  console.log(JSON.stringify(context));
  let name = context.data.name || 'Stranger';
  cb(null, `Hello ${name}`);
}
