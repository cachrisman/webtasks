module.exports = (context, cb) => {
  let name = context.data.name || 'Stranger';
  cb(null, `Hello ${name}`);
}
