const { test } = require("@playwright/test");
const { AddPatient } = require("../pages/AddPatient");

test("login and add patient", async ({ page }) => {
  test.setTimeout(60000);

  const addPatient = new AddPatient(page);

  const patientData = {
    referralDate: "04/23/2026",
    referralTime: "12:30",
    plannedSocDate: "05/01/2026",
    mrn: "22222",

    primaryInsurance: "AIG Medicare",
    primaryPolicy: "1JR5EN1GE77",
    primaryAuthorization: "1234567890",
    primaryEcp: "- Medicare - All states",
    primaryCopay: "100",
    primaryCopayPaid: "100",

    secondaryInsurance: "Allianzz",
    secondaryPolicy: "1JR5EN1GE77",
    secondaryAuthorization: "1234567890",
    secondaryEcp: "- Medicare - All states",
    secondaryCopay: "100",
    secondaryCopayPaid: "100",

    lastName: "Evangel",
    firstName: "Evangel",
    middleInitial: "i",
    suffix: "sr",
    birthdate: "02/04/2026",
    gender: "Male",
    maritalStatus: "Single",
    ethnicity: "Asian",
    language: "English",
    ssn: "987645321",

    address1: "Villasis",
    address2: "Villasis",
    street: "Villasis",
    city: "Villasis",
    state: "AK- Alaska",
    zipcode: "99504",

    phone: "(123) 456-7890",
    otherPhone: "(123) 456-7890",
    email: "evangel2026@gmail.com",

    caregiverName: "Jaroah",
    caregiverPhone: "(123) 456-7890",

    emergencyContactName: "Jammai",
    emergencyRelationship: "brother",
    emergencyPhone1: "(123) 456-7890",
    emergencyPhone2: "(123) 456-7890",

    attendingPhysician: ".MCINDOE, THOMAS",
    primaryPhysician: "AAB, MARY",
    otherPhysician: "A HAWKES, ANDREA",

    admissionType: "- Emergency",
    pointOfOrigin: "- Clinic or Physician’s Office",
    referralType: "Facility",
    referralSource: "Blood Bank",
    hospital: "AMERICAN SOCIETY OF HEMATOLOGY",

    facilityAdmitDate: "05/10/2026",
    dischargeDate: "05/11/2026",
    diagnosisSurgery: "vanzvanz",

    csRn: "A3, OJT RN",
    caseManager: "Admin, Dick RN",
  };

  await addPatient.gotoLogin();
  await addPatient.login("ojt3@geeksnest", "!Ucu!evangel2026");
  await addPatient.openAddPatientPage();
  await addPatient.fillPatientForm(patientData);
  await addPatient.save();

  await page.waitForTimeout(15000);
});