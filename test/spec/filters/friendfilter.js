describe('Filter: friendfilter', function() {
    var filter;
    var playerlist;

    var player1;
    var player2;
    var player3;

    beforeEach(function() {
        module('yoApplicationApp');
        inject(function($filter) {
            filter = $filter('friendfilter');
        });
        player1 = {name:"Remco", age:21, email:"12345678@test.nl", goals : [
              {name: "Finish SPA", category:"School",checked:true},
              {name: "Do a presentation about SPA", category:"School",checked:false},
              {name: "Make dummydata about the SPA project", category:"School",checked:true}
            ]};
      	player2 = {name:"Betty", age:22, email:"betty@mail", goals : [
              {name: "Send an email to the boss", category:"Work",checked:false},
              {name: "Drink coffee", category:"Work",checked:true}
            ]};
        player3 = {name:"Jack", age:25, email:"jack@dummydata.com", goals : [
              {name: "Get bananas", category:"Groceries",checked:false},
              {name: "Eat bananas", category:"Lunch",checked:false}
            ]};
    });

    /*Note: some if these tests don't really do much.
    *Those tests were made to test the testing.
    *I did this because I was uncertain if things would work.
    *I did not have any experience in testing with javascript.
    */
    it('should run this file without errors', function() {
        expect(1).toBe(1);
    });

    it('should be able to read a player', function() {
      expect(player1.email).toBe("12345678@test.nl");
    });

    it('should be able to make a list', function() {
        var list = [player1, player2, player3];
        expect(list.length).toBe(3);
    });

    it('should be able to read from the lists content', function() {
        var list = [player1, player2, player3];
        expect(list[0].email).toBe("12345678@test.nl")
    });

    it('should be able to add a friend to a player', function() {
      var list = [player1, player2, player3];
      player1.friends = [player2];
      expect(player1.friends.length).toBe(1);
    });

    it('should filter the selected player', function() {
      var list = [player1, player2, player3];
      expect(filter(list,player1).length).toBe(2);
    });

    it('should filter any friends', function() {
      var list = [player1, player2, player3];
      player1.friends=[player2]; player2.friends=[player1];
      expect(filter(list,player1).length).toBe(1);
    });

    it('should filter even more friends', function() {
      var list = [player1, player2, player3];
      player1.friends=[player2, player3];
      player2.friends=[player1];
      player3.friends=[player1];
      expect(filter(list,player1).length).toBe(0);
    });

});
