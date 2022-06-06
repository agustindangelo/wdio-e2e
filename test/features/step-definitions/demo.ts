import { Given, When, Then } from "@cucumber/cucumber";
import chai from 'chai'


Given(/^Google page is opened$/, async function() {
  await browser.url('https://google.com')
  await browser.pause(70000)
})

When(/Search with (.*)/, async function(searchItem) {
  let searchBar = await $(`[name=q]`);
  await searchBar.setValue(searchItem);
  await browser.keys('Enter');
})

Then(/^Click on the first search result$/, async () => {
  let elem = await $('<h3>');
  await elem.click();
})

Then(/^URL should match (.*)$/, async (expectedURL) => {
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
})
