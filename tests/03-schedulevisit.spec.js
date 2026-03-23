import { test, expect } from '@playwright/test';
import { ScheduleVisitPage } from '../pages/ScheduleVisit.js';

test('schedule a patient visit', async ({ page }) => {
  const scheduleVisitPage = new ScheduleVisitPage(page);

  await scheduleVisitPage.login('ojt3@geeksnest', 'Ucu!evangel2026');
  await scheduleVisitPage.openPatientsPage();

  await expect(page.getByRole('heading')).toContainText('Patient Manager');

  await scheduleVisitPage.searchAndOpenPatient(
    'evangel',
    'E Evangel, Evangel I. sr'
  );

  await scheduleVisitPage.scheduleVisit({
    date: '03/25/2026',
    discipline: 'Chronic Condition Management',
    clinician: 'Bucasas, Daryl',
    visitType: 'LVN G0300',
  });
});