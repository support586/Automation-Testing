export class ScheduleVisitPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  // Perform login with provided credentials
  async login(username, password) {
    await this.page.goto('https://qado.medisource.com/login');

    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  // Navigate to the Patients page
  async openPatientsPage() {
    await this.page.getByRole('link', { name: '  Patient Manager ' }).click();
    await this.page.getByRole('link', { name: 'Patients' }).click();
  }

  // Search for a patient and open their details
  async searchAndOpenPatient(patientName, patientOptionText) {
    await this.page.getByRole('textbox', { name: 'Search Patients' }).fill(patientName);
    await this.page.getByText(patientOptionText).click();
    await this.page.getByRole('button', { name: ' ' }).click();
  }

  // Schedule a visit with specified details
  async scheduleVisit({date,discipline = 'RN - Education Visit',clinician = 'A3, OJT',visitType = 'RN Regular Visit G0299',}) 
  {
    await this.page.waitForTimeout(5000);

    await this.page.getByRole('textbox', { name: 'mm/dd/yyyy' }).fill(date);

    await this.page.locator('a').filter({ hasText: 'Select Discipline/Task' }).click();
    await this.page.getByRole('listitem').filter({ hasText: new RegExp(`^${discipline}$`) }).click();

    await this.page.locator("//div[@class='select global__select xcreds']//div[@class='chosen-container chosen-container-single']//a[@class='chosen-single']//div//b").click();
    await this.page.getByRole('listitem').filter({ hasText: clinician }).click();

    await this.page.locator('a').filter({ hasText: visitType }).click();
    await this.page.getByRole('listitem').filter({ hasText: visitType }).click();

    await this.page.getByRole('button', { name: 'Save' }).click();
    await this.page.waitForTimeout(7000);
  }
}