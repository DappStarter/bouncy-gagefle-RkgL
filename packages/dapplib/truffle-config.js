require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name recipe machine uncover grid glimpse equal gaze'; 
let testAccounts = [
"0x74860e25508c40ab1d4215ebd7169fd994b956a3e71e2d3628146571ef54b16c",
"0x91a510d13e34951f66a226174f49309f6c6ab201f6d3e199023f3f2635cadc67",
"0x49adc39a232e5b0393b6782d2fe78d3de7f9918a715742d9c9a9f4993189dd78",
"0x685cd743c913d153827e82ddaccb8f72680619acf049badd3720d342f6a82041",
"0x54bdd5b2e3faa4a46febd4f381fe9268cd8c77109df7d557ca7edacfde131c7b",
"0x1795346b2e9548aaba240b854c76f59da6c6245885a40da04c5e889a820d1d19",
"0x29fdcc5904a9a513d5b8b06cf8cce0fae2708bb3d9d1b3c3fb632ede2e8129ed",
"0xdcea38a3d1f606d2332eebd0749c231c9d4d604278d038086f5fd4e960001fe5",
"0xb18878735a7f262c39c20749c68f9251a0d072f57737f8d706c2a22815b590fd",
"0x853b9f4f47be09d748789aeabb9924ec0966333f140286f19ffca2b327b6465d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

