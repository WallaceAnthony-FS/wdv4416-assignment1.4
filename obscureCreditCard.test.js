/*
In this assignment:

You are going to write unit test using TDD.

You will be writing unit tests for an application that will obscure a credit card number.

You will need to write a single function to obscure a credit card number.
The function argument should be a string and return a string.
The credit cards should be between 12-16 numbers in size.
Any other size should return "Invalid Credit Card"
You don't need to validate if the characters are numbers.
You should have positive and negative unit tests for your function.
Test Driven Development - is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later.
*/

import obscureCreditCard from "./obscureCreditCard";

describe("Test obscureCreditCard module", () => {
  test("Should return 'Invalid Credit Card' if input not between 12-16 characters", () => {
    expect(obscureCreditCard("123456")).toEqual("Invalid Credit Card");

    expect(obscureCreditCard("123456789123456789")).toEqual(
      "Invalid Credit Card"
    );
  });

  test("Should obscure all but the last 4 digits of a 12-16 digit credit card number", () => {
    expect(obscureCreditCard("12345678912345")).toEqual("**********2345");
  });
});
