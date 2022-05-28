require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remember modify inner kitten surge swim'; 
let testAccounts = [
"0x873e3385600791ad7ce23294a822a479732dd27b07b4925b53526fdda9cbe8b4",
"0xdd15ab35ab57c43a502219ac2f0ba96dd295413c9259d1562b06b1e228f58d22",
"0xe24592964d215aa9c09b8869dca3d21016910c6a8c73a163a77fc9237d550728",
"0x94feae492ce432c9c3b5db4ef5d51fb1db290e6eb1afe00bf23afc0ac56a4dfd",
"0x8fbd1f53e7b5f7216c4e50158058d37cdc9d7c7b6e350b91a917e2c89672724d",
"0x689f294690bc0d05e0db96895a76820dfb8487e0406af3e6f65ec0b6e7c06561",
"0xb54bc3dd9783246103c188462c25d87a3dbb8b489a93693a76df7e1a7291f0f2",
"0x0500a877b5bafd03a746bc72643e1a1ce173816fc3d78185f0cc5b5e9ae8df6d",
"0x05f0afa68b05ef2a90803b67ed76a9aeb339975ba7a77bfd3ca139ea3f4d7d88",
"0x4d9561ad092d24acf8c277f40741b368f13ce5e638ef15d14e16b6e0e39c099d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


