import { expect } from '@playwright/test';

export async function patientVisitTask(page) {
  await page.goto('https://qado.medisource.com/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('ojt3@geeksnest');
  await page.getByRole('textbox', { name: 'Password' }).fill('!Ucu!evangel2026');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: '  Patient Manager ' }).click();
  await page.getByRole('link', { name: 'Patients' }).click();

  await page.getByRole('textbox', { name: 'Search Patients' }).fill('evangel');
  await page.getByText('E Evangel, Evangel I. sr').click();

  await page.getByText('RN - OASIS E2 Start of Care', { exact: true }).click();

  await page.getByRole('button', { name: 'Form View' }).click();

  await page.getByRole('checkbox', { name: 'A. No, not of Hispanic,' }).check();
  await page.getByRole('checkbox', { name: 'F. Filipino' }).check();


  await page.getByRole('checkbox', { name: '1 - Medicare (traditional fee' }).check();
  await page.getByRole('checkbox', { name: '2 - Medicare (HMO/managed' }).check();
  await page.getByRole('checkbox', { name: '3 - Medicaid (traditional fee' }).check();


  await page.locator('input[name="A1110A"]').click();
  await page.getByRole('link', { name: '- English' }).click();
  await page.getByRole('radio', { name: '0. No' }).check();


  await page.getByRole('radio', { name: '– RN' }).check();

  await page.locator('#M0090_INFO_COMPLETED_DT').fill('04/22/2026');


  await page.getByRole('checkbox', { name: 'NA – No Specific SOC date' }).check();


  await page.locator('#M0104_PHYSN_RFRL_DT').fill('04/22/2026');

  await page.getByRole('radio', { name: '– Early' }).check();

  await page.getByRole('radio', { name: '- Yes' }).check();


  await page.getByRole('checkbox', { name: '1 – Long-term nursing' }).check();
  await page.getByRole('checkbox', { name: '2 – Skilled nursing facility' }).check();
  await page.getByRole('checkbox', { name: '3 – Short-stay acute hospital' }).check();
  await page.getByRole('checkbox', { name: '4 – Long-term care hospital (' }).check();

  await page.locator('#M1005_INP_DISCHARGE_DT').fill('04/22/2026');

  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Yes, save anyway' }).click();

  await expect(page).getByText('OASIS-E2 Start of Care has').toBeVisible(7000);

  await page.getByRole('button', { name: 'Next' }).click();











}