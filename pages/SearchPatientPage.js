// searchpatient.js
const { expect } = require('@playwright/test');

class SearchPatientPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });

    this.menuIcon = page.locator('div:nth-child(3) > .collapsed__nav_icon');
    this.patientsLink = page.getByRole('link', { name: 'Patients' });
    this.searchPatientsInput = page.getByRole('textbox', { name: 'Search Patients' });
    this.patientResult = page.getByText('E Evangel, Evangel I. sr');
    this.patientData = page.locator('data');
  }

  async goto() {
    await this.page.goto('https://qado.medisource.com/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async openPatientsPage() {
    await this.menuIcon.click();
    await this.patientsLink.click();
  }

  async searchPatient(name) {
    await this.searchPatientsInput.click();
    await this.searchPatientsInput.fill(name);
  }

  async selectPatient() {
    await this.patientResult.click();
  }

  async verifyPatientDetails() {
    await expect(this.patientData).toContainText('Evangel I Evangel sr');
  }
}

module.exports = { SearchPatientPage };