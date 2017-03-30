angular.module('yoApplicationApp').filter('friendfilter', function() {
    return function(input, player) {
      var list = [];
      if(player !== undefined) {
        input.forEach(function(e) {
          var inFriendList=false;
          if( e.email === player.email)
          {
            inFriendList = true;
          }
          if(player.friends === undefined)
          {
            player.friends = [];
          }
          player.friends.forEach(function(f, i) {
            if(e.email === f.email)
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
