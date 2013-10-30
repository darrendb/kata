describe('partition-on', function() {

    var items = [1, 2, 3, 4, 5, 6];
    function isEven(n) {return n % 2 == 0}
    var i = partitionOn(isEven, items);
    console.log('-- i:'+i);
    console.log('-- items:'+items);

    it('returns the boundary index', function() {

        expect(i).toEqual(3);
    });

    it('orders the F\'s before the boundary index', function() {
        expect(items.slice(0,i)).toEqual([1,3,5]);
    });

    it('orders the T\'s after the boundary index', function() {
        expect(items.slice(i)).toEqual([2,4,6]);
    });

});
