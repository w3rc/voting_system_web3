const Ballot = artifacts.require('Ballot')

module.exports = function (deployer) {
  deployer.deploy(Ballot, [
    '0x05416460deb76d57af601be17e777b93592d8d4d4a4096c57876a91c84f4a712',
    '0x05416460deb76d57af601be17e777b93592d8d4d4a4096c57876a91c84f4a455',
  ])
}
