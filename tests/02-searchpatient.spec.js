const { test } = require('@playwright/test');
const { SearchPatientPage } = require('../pages/SearchPatientPage');

test('test', async ({ page }) => {
  const searchPatientPage = new SearchPatientPage(page);

  await searchPatientPage.goto();
  await searchPatientPage.login('ojt3@geeksnest', 'Ucu!evangel2026');
  await searchPatientPage.openPatientsPage();
  await searchPatientPage.searchPatient('evangel');
  await searchPatientPage.selectPatient();
  await searchPatientPage.verifyPatientDetails();

  await page.waitForTimeout(5000);
});