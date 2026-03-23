export class ScheduleVisitPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.goto('https://qado.medisource.com/login');

    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async openPatientsPage() {
    await this.page.locator('div:nth-child(3) > .collapsed__nav_icon').click();
    await this.page.getByRole('link', { name: 'Patients' }).click();
    await this.page.getByRole('heading', { name: /Patient Manager/i }).waitFor();
  }

  async searchAndOpenPatient(patientName, patientOptionText) {
    await this.page.getByRole('textbox', { name: 'Search Patients' }).fill(patientName);
    await this.page.getByText(patientOptionText).click();
    await this.page.getByRole('button', { name: ' ' }).click();
  }

  async scheduleVisit({date,discipline = 'Chronic Condition Management',clinician = 'Bucasas, Daryl',visitType = 'LVN G0300',}) 
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