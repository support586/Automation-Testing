import { test } from '@playwright/test';
import { CommunicationPage } from '../pages/CommunicationNote';

test('Complete Communication Notes', async ({ page }) => {

  const communication = new CommunicationPage(page);

  await communication.login();

  await communication.openPatient();

  await communication.openCommunicationNotes();

  await communication.fillCommunicationForm();

  await communication.saveCommunication();

});