function getFriendScoreList(user, friends, visitors) {
  let score = 0;
  let visitorScroe = 1;
  let friendsScore = new Map();
  for (let friend of friends) {
    if (!friend.includes(user)) {
      for (let name of friend) {
        friendsScore.set(name, score + 10);
      }
    } else {
      for (let name of friend) {
        friendsScore.set(name, score);
      }
    }
  }
  for (let visitor of visitors) {
    if (!friendsScore.has(visitor)) {
      friendsScore.set(visitor, visitorScroe);
    } else if (friendsScore.get(visitor) !== 0) {
      friendsScore.set(visitor, friendsScore.get(visitor) + 1);
    }
  }
  return friendsScore;
}

function getRecommendFriend(friendsScore) {
  let answer = [];
  const friendsScoreList = [...friendsScore].sort((a, b) => {
    b - a;
  });
  for (let i = 0; i < friendsScoreList.length; i++) {
    if (friendsScoreList[i][1] === 0) {
      continue;
    } else {
      answer.push(friendsScoreList[i][0]);
    }
  }
  return answer;
}

function problem7(user, friends, visitors) {
  const friendsScore = getFriendScoreList(user, friends, visitors);
  const recommendFriend = getRecommendFriend(friendsScore);
  return recommendFriend;
}

module.exports = problem7;
