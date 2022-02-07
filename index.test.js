const rewire = require("rewire")
const index = rewire("./index")
const myObject = index.__get__("myObject")
// @ponicode
describe("myObject.couleur", () => {
    test("0", () => {
        let result = myObject.couleur()
        expect(result).toMatchSnapshot()
    })
})
