import { test } from '@playwright/test';
import { MDOrderPage } from '../pages/mdorder';

test('Complete MD Orders', async ({ page }) => {

  const mdorder = new MDOrderPage(page);

  await mdorder.login();

  await mdorder.openPatient();

  await mdorder.createMDOrder();

  await mdorder.fillMDOrderForm();

  await mdorder.saveMDOrder();

});