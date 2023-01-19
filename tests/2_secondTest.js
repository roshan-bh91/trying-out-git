const { Builder, Key, By } = require("selenium-webdriver");
const should = require("chai").should();

const exampleFn = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://lambdatest.github.io/sample-todo-app");
  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Learn Selenium", Key.RETURN);
  const todoText = await driver.findElement(By.xpath("//li[last()]")).getText();
  todoText.should.equal("Learn Selenium");
  await driver.quit();
};
exampleFn();
