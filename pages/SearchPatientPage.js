// searchpatient.js
const { expect } = require('@playwright/test');

class SearchPatientPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });

    this.menuIcon = page.getByRole('link', { name: '  Patient Manager ' });
    this.patientsLink = page.getByRole('link', { name: 'Patients' });
    this.searchPatientsInput = page.getByRole('textbox', { name: 'Search Patients' });
    this.patientResult = page.getByText('E Evangel, Evangel I. sr');
    this.patientData = page.locator('data');
  }

  // Navigate to the login page
  async goto() {
    await this.page.goto('https://qado.medisource.com/login');
  }

  // Perform login with provided credentials
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Navigate to the Patients page
  async openPatientsPage() {
    await this.menuIcon.click();
    await this.patientsLink.click();
  }

  // Search for a patient by name
  async searchPatient(name) {
    await this.searchPatientsInput.click();
    await this.searchPatientsInput.fill(name);
  }

  // Select the patient from search results
  async selectPatient() {
    await this.patientResult.click();
  }

  // Verify patient details are displayed correctly
  async verifyPatientDetails() {
    await expect(this.patientData).toContainText('Evangel I Evangel sr');
  }
}

module.exports = { SearchPatientPage };