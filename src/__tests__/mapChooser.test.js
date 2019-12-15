import mapChooser from '../MapChooser';

describe('mapChosser', function(){

    it('Returns an image file name based on an input given to it', function(){

        let expected = 'portland.png';
        let actual = mapChooser('portland');
        expect(actual).toEqual(expected);

    });

    it('Returns an image file name based on an input given to it', function(){

        let expected = 'astoria.png';
        let actual = mapChooser('astoria');
        expect(actual).toEqual(expected);

    });

    it('Returns a default image when no input it given to it', function(){

        let expected = 'none.png';
        let actual = mapChooser();
        expect(actual).toEqual(expected);
    })

    it('Returns a default image when an empty input is given to it', function(){

        let expected = 'none.png';
        let actual = mapChooser('');
        expect(actual).toEqual(expected);
    })

})