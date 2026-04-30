import { test } from '@playwright/test';
import { AdverseEventsPage } from '../pages/adverseevents';

test('Create Adverse Event - Fall', async ({ page }) => {

  const adverseEvent = new AdverseEventsPage(page);

  await adverseEvent.gotoLogin();

  await adverseEvent.login(
    'ojt3@geeksnest',
    '!Ucu!evangel2026'
  );

  await adverseEvent.openPatient('evangel');

  await adverseEvent.openAdverseEvents();

  await adverseEvent.fillAdverseEventForm();

  await adverseEvent.save();

});