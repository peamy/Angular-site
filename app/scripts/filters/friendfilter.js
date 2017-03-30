angular.module('yoApplicationApp').filter('friendfilter', function() {
    return function(input, player) {
      var list = [];
      if(player.friends !== undefined) {
        input.forEach(function(e) {
          var inFriendList=false;
          player.friends.forEach(function(f, i) {
            if(e.email === f.email || e.email === player.email)
            {
              inFriendList = true;
            }
          })
          if(inFriendList === false)
          {
            list.push(e);
          }
        })
      }
      return list;
    };
});
