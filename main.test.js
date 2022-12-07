const { translate } = require('./main')

test("words that starts with vowel", function() {
    expect(translate("apples")).toBe("applesway")
    expect(translate("orange")).toBe("orangeway")
    expect(translate("eye")).toBe("eyeway")
})

test('words that starts with vowel with capital letters are converted to lowercase', () => { 
    expect(translate("UNIVERSITY")).toBe("universityway")
 })

 test('should words that starts with one consonant', () => { 
    expect(translate("Sister")).toBe("istersay")
    expect(translate("dog")).toBe("ogday")
    expect(translate("beach")).toBe("eachbay")
  })

  test('should words that starts with two consonant', () => { 
    expect(translate("blach")).toBe("achblay")
   })

   test('should words that starts with more consonant', () => {
    expect(translate("split")).toBe("itsplay")
   })
