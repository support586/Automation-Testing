export class CommunicationPage {
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

    // COMMUNICATION TAB
    this.communicationTab = page.getByRole('link', { name: 'Communication' });
    this.newBtn = page.getByRole('button', { name: 'New' });
    this.communicationNotes = page.getByRole('link', { name: 'Communication Notes' });

    // FORM
    this.dateField = page.getByRole('textbox', { name: 'mm/dd/yyyy' });
    this.subject = page.locator('input[name="subject"]');
    this.timeField = page.getByRole('textbox', { name: 'hh:mm' });

    this.notesArea = page
      .getByRole('cell', { name: 'Date Title/Subject Time' })
      .locator('textarea');

    this.mdCheckbox = page.getByRole('checkbox', { name: 'MD' });
    this.mdDropdown = page.getByRole('list').filter({ hasText: /^$/ }).nth(2);
    this.mdOption = page.getByRole('listitem').filter({ hasText: '\'ASHRAFI, SHADI' });

    this.caregiverCheckbox = page.getByRole('checkbox', { name: 'Caregiver' });
    this.caregiverInput = page.locator('input[name="caregiver.selected"]');

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

  async openCommunicationNotes() {
    await this.communicationTab.click();
    await this.newBtn.click();
    await this.communicationNotes.click();
  }

  async fillCommunicationForm() {
    await this.dateField.fill('04/28/2026');
    await this.subject.fill('Test Subject');
    await this.timeField.fill('12:00');

    await this.notesArea.fill('Test communication notes');

    await this.mdCheckbox.check();
    await this.mdDropdown.click();
    await this.mdOption.click();

    await this.caregiverCheckbox.check();
    await this.caregiverInput.fill('Test Caregiver');

    await this.signature.fill('5432112345');
  }

  async saveCommunication() {
    await this.saveBtn.click();
  }
}