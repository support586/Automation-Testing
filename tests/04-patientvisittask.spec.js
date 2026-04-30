import { test } from '@playwright/test';
import { patientVisitTask } from '../pages/PatientVisitTask';

test('Patient Visit Test', async ({ page }) => {
  await patientVisitTask(page);
});