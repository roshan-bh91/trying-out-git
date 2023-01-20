const { Builder, Key, By } = require("selenium-webdriver");
const should = require("chai").should();
const { capabilities } = require("../capabilities");

// Describe Block : For a group of tests
// It block : For an individual test

// Before Each Option
describe("getting started with todo tests", function () {
  const {
    "LT:Options": { username: USERNAME, accessKey: KEY },
  } = capabilities;
  const GRID_HOST = "hub.lambdatest.com/wd/hub";
  const GRID_URL = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;
  const todoEndPoint = "https://lambdatest.github.io/sample-todo-app";
  var driver;
  beforeEach(function () {
    capabilities["LT:Options"].name = this.currentTest.title;
    driver = new Builder()
      .usingServer(GRID_URL)
      .withCapabilities(capabilities)
      .build();
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("should add a new todo", async () => {
    // const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get(todoEndPoint);
      await driver
        .findElement(By.id("sampletodotext"))
        .sendKeys("Learn Selenium", Key.ENTER);
      const todoText = await driver
        .findElement(By.xpath("//li[last()]"))
        .getText();
      todoText.should.equal("Learn Selenium");
    } catch (error) {
      console.error("An error occurred while executing the test");
    }
  });
});

// Renaming the folder to "test" can actually help out in automating the process of writing tests
// And in package.json file introduce a new script test:"mocha --no-timeouts"
