const { assert } = require('chai')
require('chai').use(require('chai-as-promised')).should()

const Ballot = artifacts.require('Ballot')

contract('Ballot', function (accounts) {
  let ballot

  before(async () => {
    ballot = await Ballot.deployed()
  })

  it('candidates should not be empty', async () => {
    assert.equal((await ballot.getNumberOfCandidates.call()) > 0, true)
  })
  it('should increate the vote count of the candidate by 1 after a person has voted', async () => {
    // // Account 1 has voted 1st candidate
    // await ballot.vote(0, { from: accounts[1] })
    // assert.equal(await ballot.proposals.call(0).vote_count, 1)
  })
  it('should allow a person to vote if not voted', () => {})
  it('should not allow a person to vote if already voted', async () => {})
  it('should return the candidate with maximum number of votes as the winner', () => {})
})
