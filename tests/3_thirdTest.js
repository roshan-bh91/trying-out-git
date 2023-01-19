const { Builder, Key, By } = require("selenium-webdriver");
const should = require("chai").should();

// Describe Block : For a group of tests
// It block : For an individual test

describe("getting started with todo tests", () => {
  it("should add a new todo", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("https://lambdatest.github.io/sample-todo-app");
      await driver
        .findElement(By.id("sampletodotext"))
        .sendKeys("Learn Selenium", Key.ENTER);
      const todoText = await driver
        .findElement(By.xpath("//li[last()]"))
        .getText();
      todoText.should.equal("Learn Something");
    } catch (error) {
      console.error("An error occurred while executing the test");
    } finally {
      await driver.quit();
    }
  });
});

// Renaming the folder to "test" can actually help out in automating the process of writing tests
// And in package.json file introduce a new script test:"mocha --no-timeouts"
