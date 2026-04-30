class AddPatient {
  constructor(page) {
    this.page = page;
  }

  // Navigate to Login Page
  async gotoLogin() {
    await this.page.goto("https://qado.medisource.com/login", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
  }


  // Login Function
  async login(username, password) {

    // Enter Username
    await this.page.getByRole("textbox", { name: "Username" }).pressSequentially(username, { delay: 100 });
    // Enter Password
    await this.page.getByRole("textbox", { name: "Password" }).pressSequentially(password, { delay: 100 });
    // Click Login Button
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  // Open Add Patient Page
  async openAddPatientPage() {
    // Navigate to Patient Manager and click Add Patient
    await this.page.getByRole('link', { name: '  Patient Manager ' }).click();
    // Click on Patients menu
    await this.page.getByRole('link', { name: 'Add Patient' }).click();
    // Click Skip Button on the pop-up
    await this.page.getByText("Skip").click();
  }

  // Fill Patient Form
  async fillPatientForm(data) {

    // Store the page object in a variable for easier access
    const page = this.page;

    await page.getByRole("row", { name: "Referral Date*" }).getByPlaceholder("mm/dd/yyyy").pressSequentially(data.referralDate, { delay: 100 });

    // Fill in the time field using pressSequentially
    const timeInput = page.getByRole("textbox", { name: "hh:mm" });
    await timeInput.click();
    await timeInput.pressSequentially(data.referralTime);

    // Fill in the Planned SOC date field using pressSequentially
    await page.getByRole("row", { name: "Planned SOC date" }).getByPlaceholder("mm/dd/yyyy").pressSequentially(data.plannedSocDate, { delay: 100 });

    await page.getByRole("checkbox", { name: "Auto-assign" }).uncheck();

    // Fill in the MRN field
    await page.locator("#takenmrn").fill(data.mrn);
    await page.getByRole("checkbox", { name: "The patient is a continuation" }).check();

    await page.locator("div").filter({hasText: /^Select\/Type one or more \(Separate items by pressing Enter\)$/}).click();

    // Select the appropriate options from the dropdowns
    await page.getByRole("listitem").filter({ hasText: "Antibiotic therapy" }).click();
    await page.getByRole("listitem").filter({ hasText: /^CP$/ }).click();

    // Fill in the insurance information
    await page.locator("#primary_insurance_chosen a").filter({ hasText: "SELECT ONE" }).click();
    await page.locator("#primary_insurance_chosen").getByText(data.primaryInsurance).click();
    await page.locator("#primary_insurance_policy").pressSequentially(data.primaryPolicy, { delay: 100 });
    await page.locator("#primary_insurance_authorization").pressSequentially(data.primaryAuthorization, { delay: 100 });

    // Fill in the primary ECP information
    await page.locator("#primary_ecp_name_chosen a").filter({ hasText: "SELECT ONE" }).click();
    await page.locator("#primary_ecp_name_chosen").getByText(data.primaryEcp).click();

    // Fill in the copay information
    await page.locator("#copay_amount").fill(data.primaryCopay);
    await page.getByRole("cell", { name: "AIG Medicare Medicare AIG" }).getByLabel("Cash").check();
    await page.locator('input[name="copay_amount_paid"]').fill(data.primaryCopayPaid);

    // Fill in the secondary insurance information
    await page.locator("#secondary_insurance_chosen a").filter({ hasText: "SELECT ONE" }).click();
    await page.locator("#secondary_insurance_chosen").getByText(data.secondaryInsurance).click();
    await page.locator("#secondary_insurance_policy").fill(data.secondaryPolicy);
    await page.locator("#secondary_insurance_authorization").fill(data.secondaryAuthorization);

    // Fill in the secondary ECP information
    await page.locator("#secondary_ecp_name_chosen a").filter({ hasText: "SELECT ONE" }).click();
    await page.locator("#secondary_ecp_name_chosen").getByText(data.secondaryEcp).click();

    // Fill in the secondary copay information
    await page.locator("#secondary_copay_amount").fill(data.secondaryCopay);
    await page.getByRole("cell", { name: "Allianzz Medicare AIG" }).getByLabel("Cash").check();
    await page.locator('input[name="secondary_copay_amount_paid"]').fill(data.secondaryCopayPaid);

    // Fill in the patient demographic information
    await page.locator("#last_name").fill(data.lastName);
    await page.locator("#first_name").fill(data.firstName);
    await page.locator("#mi").fill(data.middleInitial);
    await page.locator("#suffix").fill(data.suffix);

    // Fill in the birthdate field using pressSequentially
    await page.getByRole("row", { name: "Birthdate*" }).getByPlaceholder("mm/dd/yyyy").pressSequentially(data.birthdate, { delay: 100 });

    await page.getByRole("radio", { name: data.gender, exact: true }).check();

    // Select options from dropdowns
    await page.locator(".chosen-single.chosen-default").first().click();
    await page.locator("#marital_status_chosen").getByText(data.maritalStatus).click();

    // Select options from dropdowns
    await page.locator(".default").first().click();
    await page.locator("#ethnicities_chosen").getByText(data.ethnicity).click();

    await page.getByRole("combobox", { name: "Select box" }).click();
    await page.locator("span").filter({ hasText: data.language }).click();

    await page.locator("#ssNumber").pressSequentially(data.ssn, { delay: 100 });

    // Fill in the address information
    await page.locator("#main_line1").fill(data.address1);
    await page.locator("#main_line2").fill(data.address2);
    await page.locator("#main_street").fill(data.street);
    await page.locator("#main_city").pressSequentially(data.city, { delay: 100 });

    // Select state from dropdown
    await page.locator("#main_state_chosen a").filter({ hasText: "SELECT ONE" }).click();
    await page.locator("#main_state_chosen").getByText(data.state).click();

    await page.locator("#main_zipcode").pressSequentially(data.zipcode, { delay: 100 });

    // Fill in the contact information
    await page.locator('input[name="phone"]').fill(data.phone);
    await page.locator('input[name="other_phone"]').fill(data.otherPhone);
    await page.getByRole("textbox", { name: "email@domain.com" }).pressSequentially(data.email, { delay: 100 });

    // Fill in the caregiver and emergency contact information
    await page.getByRole("button", { name: "Same as Patient Address" }).click();
    await page.getByRole("radio", { name: "With caregiver" }).check();

    // Fill in the caregiver information
    await page.locator("#ls_caregiver").pressSequentially(data.caregiverName, { delay: 100 });
    await page.getByRole("row", { name: `Caregiver Name ${data.caregiverName}` }).getByPlaceholder("(000) 000-").fill(data.caregiverPhone);

    // Fill in the emergency contact information
    await page.locator("#ec_name").fill(data.emergencyContactName);
    await page.locator("#ec_relationship").fill(data.emergencyRelationship);
    await page.getByRole("row", { name: "Phone 1", exact: true })
      .getByPlaceholder("(000) 000-")
      .fill(data.emergencyPhone1);

      // Fill in the second emergency phone number
    await page.locator("#ec_other_phone").fill(data.emergencyPhone2);

    // Fill in the physician and admission information
    await page.locator("#physician_attending_chosen a").filter({ hasText: "SELECT ONE" }).click();
    await page.locator("#physician_attending_chosen").getByText(data.attendingPhysician).click();

    // Select primary physician from dropdown
    await page.locator("#physician_primary_chosen a").filter({ hasText: "SELECT ONE" }).click();
    await page.locator("#physician_primary_chosen").getByText(data.primaryPhysician).click();

    // Select other physician from dropdown
    await page.locator(".select.global__select.display-ib > .chosen-container > .chosen-choices > .search-field > .default").click();
    await page.getByText(data.otherPhysician).nth(5).click();

    // Fill in the admission information
    await page.locator("#admissiontype_chosen a").filter({ hasText: /^Select One$/ }).click();
    await page.locator("#admissiontype_chosen").getByText(data.admissionType).click();

    // Select options from dropdowns
    await page.locator("a").filter({ hasText: /^Select One$/ }).click();
    await page.locator("#point_of_origin_chosen").getByText(data.pointOfOrigin).click();

    // Fill in the referral and hospital information
    await page.locator("#referral_type_chosen > .chosen-single").click();
    await page.locator("#referral_type_chosen").getByText(data.referralType, { exact: true }).click();

    // Select options from dropdowns
    await page.locator("#referral_source_id_chosen > .chosen-single").click();
    await page.locator("#referral_source_id_chosen").getByText(data.referralSource).click();

    // Select hospital from dropdown
    await page.locator("#hospital_id_chosen > .chosen-single").click();
    await page.locator("#hospital_id_chosen").getByText(data.hospital).click();

    // Fill in the admission and discharge dates using pressSequentially
    await page.getByRole("row", { name: "Facility Admit Date" })
      .getByPlaceholder("mm/dd/yyyy")
      .pressSequentially(data.facilityAdmitDate, { delay: 100 });

    await page.getByRole("row", { name: "Discharge Date" })
      .getByPlaceholder("mm/dd/yyyy")
      .pressSequentially(data.dischargeDate, { delay: 100 });

      // Fill in the diagnosis and surgery information
    await page.locator("#diagnosis_surgery").fill(data.diagnosisSurgery);
    await page.getByRole("checkbox", { name: "NKA" }).check();
    await page.getByRole("radio", { name: "- RN" }).check();

    // Select case manager from dropdown
    await page.locator("#cs_rn_chosen > .chosen-single").click();
    await page.locator("#cs_rn_chosen").getByText(data.csRn).click();

    // Select case manager from dropdown
    const caseManagerDropdown = page.locator("//tr[td[contains(., 'Case Manager')]]//a");
    await caseManagerDropdown.click();

    // Fill in the case manager using the search input
    await page.locator(".chosen-container.chosen-with-drop .chosen-search input").fill(data.caseManager);
    await page.locator(".chosen-container.chosen-with-drop .chosen-results li", {hasText: data.caseManager}).click();
  }

  // Save the patient information
  async save() {
    await this.page.getByRole("button", { name: "Save" }).click();
  }
}

module.exports = { AddPatient };