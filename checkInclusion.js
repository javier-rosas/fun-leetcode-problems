/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {

    function allZero(count) {
        for (var i = 0; i < 26; i++) {
            if (count[i] !== 0) return false;
        }
        return true;
    }
    
    if (s2.length < s1.length) return false
    
    let count = Array(26).fill(0)

    for (let i = 0; i < s1.length; i++){
        count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    if (allZero(count)) return true
    console.log(count)

    for (let i = s1.length; i < s2.length; i++){
        count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        count[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]++;
        if (allZero(count)) {
            console.log(count)
            return true
        }
    }

    

};

// "ab" "eidbaooo"

 checkInclusion("ab", "eidbaooo") 