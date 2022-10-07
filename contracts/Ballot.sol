// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Ballot {
  struct Candidate {
    bytes32 name;
    uint32 vote_count;
  }

  struct Voter {
    bool voted;
    uint8 voted_candidate;
  }

  mapping(address => Voter) public Voters;

  Candidate[] public candidates;

  constructor(bytes32[] memory candidateNames) {
    for (uint i=0; i<candidates.length; i++) {
      candidates.push(
        Candidate({
          name: candidateNames[i],
          vote_count: 0
    })
      );
    }
  }

  function vote() public {}

  function countVotes() private {}

  function declareWinner() public {}
}
