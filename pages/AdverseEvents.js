import { expect } from '@playwright/test';

export class AdverseEventsPage {
  constructor(page) {
    this.page = page;

    // LOGIN
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginBtn = page.getByRole('button', { name: 'Login' });

    // NAVIGATION
    this.patientManager = page.getByRole('link', { name: '  Patient Manager ' });
    this.patientsLink = page.getByRole('link', { name: 'Patients' });
    this.searchPatient = page.getByRole('textbox', { name: 'Search Patients' });
    this.adverseEventsTab = page.getByRole('link', { name: 'Adverse Events' });

    // ADVERSE EVENT
    this.newBtn = page.getByRole('button', { name: 'New' });
    this.fallEvent = page.getByRole('link', { name: 'Fall' });

    this.physicianDropdown = page.locator('#physician_chosen .chosen-single');

    this.dateIncident = page
      .getByRole('cell', { name: 'Date of incident Time Location' })
      .getByPlaceholder('mm/dd/yyyy');

    this.timeIncident = page.getByRole('textbox', { name: 'hh:mm' });

    this.location = page.locator('input[name="location"]');
    this.witness = page.locator('input[name="witness"]');

    this.description = page.locator('textarea[name="description"]');

    this.physicianRadio = page.getByRole('radio', { name: 'Physician' });

    this.physicianNote = page.locator(
      '.global__inner-nb > tbody > tr > td > div:nth-child(2) > .global__txtbox'
    ).first();

    this.time1 = page.locator('.m-b-5 > .global__txtbox').first();
    this.time2 = page.locator('td:nth-child(3) > .m-b-5 > .global__txtbox').first();

    this.followUp = page.locator('textarea[name="followupaction"]');

    this.noRadio = page.getByRole('radio', { name: 'NO' });

    this.resolution = page.locator('textarea[name="resolutionText"]');

    this.initialReportDropdown = page.locator('#initialReportBy_chosen a');

    this.saveBtn = page.getByRole('button', { name: 'Save' });
  }

  async gotoLogin() {
    await this.page.goto('https://qado.medisource.com/login');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async openPatient(patientName) {
    await this.patientManager.click();
    await this.patientsLink.click();
    await this.searchPatient.fill(patientName);
    await this.page.getByText('E Evangel, Evangel I. sr').click();
  }

  async openAdverseEvents() {
    await this.adverseEventsTab.click();
    await this.newBtn.click();
    await this.fallEvent.click();
  }

  async fillAdverseEventForm() {
    await this.physicianDropdown.click();
    await this.page.locator('#physician_chosen').getByText('A HAWKES, ANDREA').click();

    await this.dateIncident.fill('06/10/2024');
    await this.timeIncident.fill('10:00');

    await this.location.fill('test room 101');
    await this.witness.fill('test witness');

    await this.description.fill(
      'This is a test description for the adverse event.'
    );

    await this.physicianRadio.check();

    await this.physicianNote.fill('test physician note');
    await this.time1.fill('test time');
    await this.time2.fill('test time');

    await this.followUp.fill(
      'This is a test follow-up action for the adverse event.'
    );

    await this.noRadio.check();

    await this.resolution.fill(
      'This is a test resolution for the adverse event.'
    );

    // Initial report
    await this.initialReportDropdown.filter({ hasText: 'SELECT ONE' }).click();
    await this.page.locator('#initialReportBy_chosen').getByText('A3, OJT').click();

    const row = this.page.getByRole('row', {
      name: 'Initial Report by A3, OJT RN'
    });

    await row.getByPlaceholder('mm/dd/yyyy').fill('06/10/2024');
    await row.locator('input[type="password"]').fill('5432112345');
  }

  async save() {
    await this.saveBtn.click();
  }
}