const { Builder, Key, By } = require("selenium-webdriver");
const assert = require("assert");
const example = async () => {
  //    launch the browser
  const driver = await new Builder().forBrowser("chrome").build();
  // navigate to our application
  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  // perform an action
  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Learn Selenium", Key.ENTER);
  // const responseReceived = await browser.getTitle();

  // const expectedTitle = "Search For Selenium - Google Search";
  // if (responseReceived === expectedTitle) {
  //   let searchList = await browser.findElements(By.className("LC20lb"));
  //   for (let everySearch of searchList) {
  //     console.log(await everySearch.getText());
  //   }
  // }

  let todoText = await driver
    .findElement(By.xpath("//li[last()]"))
    .getText()
    .then((value) => {
      return value;
    });
  assert.strictEqual(todoText, "Learn JS");
  console.log(assert.strictEqual(todoText, "Learn JS")); // Gives undefined
  //   Once the test is done close the browser
  await driver.quit();
};
example();

// /html/body/div[7]/div[1]/div[11]/div/div[2]/div[2]/div/div/div[5]/div/div/div[1]/div/a/h3
// //*[@id="rso"]/div[6]/div/div/div[1]/div/a/h3
// //*[@id="rso"]/div[5]/div/div/div[1]/div/a/h3
