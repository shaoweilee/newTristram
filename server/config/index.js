const dbPassword = '{Lili6361845}';

const serverImgUploadDir = '../public/upload/imgs';
const localDevImgUploadDir = './public/upload/imgs';//do not path.resolve! just form.uploadDir = localDevImgUploadDir;

const serverImgUploadReplace = '/root/newTristram/server/public';
const localDevImgUploadReplace = 'public';

const env = 'production';
module.exports = { dbPassword, serverImgUploadDir, localDevImgUploadDir, serverImgUploadReplace, localDevImgUploadReplace, env };