/**
 * @author -> Dare McAdewole <dare.dev.adewole@gmail.com>
 */

export default class Binary {

    static convert(value) {
        var b = Binary.__dummyConvert(parseInt(value))
               .split('').reverse().join('')
        for (var pad = ''; pad.length < 8 - b.length; pad += '0');
        return `${pad}${b}`
    }

    static __dummyConvert(v) {
        if (parseInt(v / 2) === 0) return '1'
        return `${parseInt(v % 2)}${Binary.__dummyConvert(parseInt(v / 2))}`
    }

}
