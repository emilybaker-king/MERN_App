
const secrets = {
    //The URL that we use to connect to the MongoDB Atlas Cluster
    dbUri: 'mongodb+srv://ebakerking:password!123@cluster0-ozvui.mongodb.net/test?retryWrites=true&w=majority'
};

const getSecret = key => secrets[key];

module.exports = getSecret;