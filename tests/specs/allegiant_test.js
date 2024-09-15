const assert = require('assert');

describe('Forgot Password Test', () => {
  it('can find search results', async () => {
    await browser.url('https://portal.allegiant.co.uk/Account/ForgottenPassword');
    await browser.pause(10000);
    const email = await $('[id="email"]'); // consent popup is coming for other location which needs to be accepted to proceed
    await email.setValue('a.l.expople@gmail.com');
    console.log("Email entered")
     const submitBtn = await $('.btn.btn-primary.mt-4.to-dashboard-btn');
     await submitBtn.click();
     console.log('Clicked Submit')
    // await input.setValue('test123');
     await browser.pause(5000);
  });
});
