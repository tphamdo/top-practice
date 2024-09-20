describe("Util", function () {
  it("should exist", function () {
    expect(require("./util")).toBeDefined();
  });

  const Util = require("./util");

  describe("Capitalize", function () {
    it("should capitalize first letter of a string", function () {
      var testCases = [
        { input: "a", expected: "A" },
        { input: "hello world", expected: "Hello world" },
        { input: "", expected: "" },
      ];

      testCases.forEach((tc) => {
        actual = Util.capitalize(tc.input);
        expected = tc.expected;
        expect(actual).toEqual(expected);
      });
    });
  });

  describe("Reverse String", function () {
    it("should reverse string", function () {
      var testCases = [
        { input: "a", expected: "a" },
        { input: "ab!", expected: "!ba" },
        { input: "hello world", expected: "dlrow olleh" },
        { input: "", expected: "" },
      ];

      testCases.forEach((tc) => {
        actual = Util.reverseString(tc.input);
        expected = tc.expected;
        expect(actual).toEqual(expected);
      });
    });
  });
});
