// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  bitcoin: {
    messagePrefix: '\x18Huginn hath Signed Message:\n',
    bech32: 'odin',
    bip32: {
      public: 0x27561872,
      private: 0x27256746
    },
    pubKeyHash: 0x73,
    scriptHash: 0x39,
    wif: 0x8a
  },
  testnet: {
    messagePrefix: '\x18Huginn hath Signed Message:\n',
    bech32: 'odt',
    bip32: {
      public: 0x3a8061a0,
      private: 0x3a805837
    },
    pubKeyHash: 0x89,
    scriptHash: 0x19,
    wif: 0xef
  }
}
