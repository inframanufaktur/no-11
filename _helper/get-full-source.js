/**
 * Check if the image starts with the remote upload path and set MEDIA_HOST if it does
 *
 * @param {String} orig
 * @returns
 */
module.exports = (orig) => {
  return orig.startsWith(process.env.MEDIA_ROOT_FOLDER)
    ? `${process.env.MEDIA_HOST}${orig}`
    : orig
}
