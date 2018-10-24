const env = 'productio';
const dbPassword = env === 'production' ? '{Lili6361845}' : null;

const serverImgUploadDir = '../public/upload/imgs';
const localDevImgUploadDir = './public/upload/imgs';//do not path.resolve! just form.uploadDir = localDevImgUploadDir;

const serverImgUploadReplace = '/root/newTristram/server/public';
const localDevImgUploadReplace = 'public';

module.exports = { dbPassword, serverImgUploadDir, localDevImgUploadDir, serverImgUploadReplace, localDevImgUploadReplace, env };