describe('Ninja-vs-Samurai', function() {

    var ninja;
    var samurai;

    beforeEach(function() {
        ninja = new Warrior('Ninja');
        samurai = new Warrior('Samurai');
    });

    it('ninja blocks high; samurai attacks low; ninja.health should == 95', function() {

        ninja.block = Position.high;
        samurai.attack(ninja, Position.low);

        expect(ninja.health).toEqual(95);
    });

});


