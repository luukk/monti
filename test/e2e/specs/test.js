module.exports = {
  "render product lists": function(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .assert.containsText("h2", "product list one")
      .assert.elementPresent(".products > li")
      .end();
  },
  
  "reducePrice": function(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .click('.product-list-one button')
      .pause(2000)
      .assert.containsText(".product-list-one .products li:nth-child(1) .price", "9.5")
      .end()
  },
};
