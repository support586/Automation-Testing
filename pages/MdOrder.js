export class MDOrderPage {
  constructor(page) {
    this.page = page;

    // LOGIN
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginBtn = page.getByRole('button', { name: 'Login' });

    // NAVIGATION
    this.patientManager = page.getByRole('link', { name: '  Patient Manager ' });
    this.patientsMenu = page.getByRole('link', { name: 'Patients' });

    // PATIENT SEARCH
    this.searchPatient = page.getByRole('textbox', { name: 'Search Patients' });
    this.patientResult = page.getByText('E Evangel, Evangel I. sr');

    // MD ORDER
    this.mdOrdersTab = page.getByRole('link', { name: 'MD Orders' });
    this.newBtn = page.getByRole('button', { name: 'New' });
    this.physicianOrder = page.getByRole('link', { name: 'Physician Order' });

    // FORM
    this.orderDate = page.locator('#orderdate');
    this.orderTime = page.locator('#orderTime').getByRole('textbox', { name: 'hh:mm' });
    this.sentDate = page.locator('#sentDate');
    this.receiveTime = page.locator('#receiveTime').getByRole('textbox', { name: 'hh:mm' });

    this.medicationCheckbox = page.getByRole('checkbox', { name: 'Medication' });
    this.personCheckbox = page.getByRole('checkbox', { name: 'Person to person' });

    this.templateDropdown = page.locator('#mdordertemplate_chosen > .chosen-single');
    this.templateOption = page.locator('#mdordertemplate_chosen .chosen-results li', { hasText: 'Diet/Nutrition' });

    this.notes = page.locator('#physicianordernotes');

    this.lvnCheckbox = page.getByRole('checkbox', { name: 'LVN' });
    this.lvnDropdown = page.locator('tr:nth-child(4) > td:nth-child(2) > .select > .chosen-container > .chosen-single');
    this.lvnOption = page.getByRole('listitem').filter({ hasText: 'LVN Christian, LVN' })

    this.signature = page.getByRole('textbox', { name: 'E-Signature Code' });

    this.saveBtn = page.getByRole('button', { name: 'Save' });
  }

  async login() {
    await this.page.goto('https://qado.medisource.com/login');
    await this.username.fill('ojt3@geeksnest');
    await this.password.fill('!Ucu!evangel2026');
    await this.loginBtn.click();
  }

  async openPatient() {
    await this.patientManager.click();
    await this.patientsMenu.click();

    await this.searchPatient.fill('evangel');
    await this.patientResult.click();
  }

  async createMDOrder() {
    await this.mdOrdersTab.click();
    await this.newBtn.click();
    await this.physicianOrder.click();
  }

  async fillMDOrderForm() {
    await this.orderDate.fill('04/28/2026');
    await this.orderTime.fill('12:00');
    await this.sentDate.fill('04/28/2026');
    await this.receiveTime.fill('12:30');

    await this.medicationCheckbox.check();
    await this.personCheckbox.check();

    await this.templateDropdown.click();
    await this.templateOption.click();

    await this.notes.fill('Test notes');

    await this.lvnCheckbox.check();
    await this.lvnDropdown.click();
    await this.lvnOption.click();

    await this.signature.fill('5432112345');
  }

  async saveMDOrder() {
    await this.saveBtn.click();
  }
}