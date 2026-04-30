import { expect } from '@playwright/test';

export async function patientVisitTask(page) {
  await page.goto('https://qado.medisource.com/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('ojt3@geeksnest');
  await page.getByRole('textbox', { name: 'Password' }).fill('!Ucu!evangel2026');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: '  Patient Manager ' }).click();
  await page.getByRole('link', { name: 'Patients' }).click();

  await page.getByRole('textbox', { name: 'Search Patients' }).fill('evangel');
  await page.getByRole('cell', { name: 'E Evangel, Evangel I. sr' }).click();
  await page.getByText('RN - Education Visit', { exact: true }).click();


  // Vital Signs
  await page.locator('#timeIn').fill('10:00');
  await page.locator('#timeOut').fill('06:00');

  await page.locator('.global__txtbox.display-ib').first().fill('1');
  await page.getByRole('radio', { name: 'Oral' }).check();

  await page.locator('input[name="VS0021"]').fill('1');
  await page.locator('input[name="VS0003"]').fill('1');
  await page.getByRole('radio', { name: 'Radial' }).check();
  await page.locator('input[name="VS0022"]').fill('1');
  await page.locator('input[name="VS0023"]').fill('1');
  await page.locator('input[name="VS0006"]').fill('1');
  await page.locator('input[name="VS0024"]').fill('1');

  await page.getByRole('radio', { name: 'FBS' }).check();
  await page.locator('input[name="VS0009"]').fill('1');
  await page.locator('input[name="VS0057"]').fill('1');

  await page
    .getByRole('row', { name: 'BP Left Arm 1 / 1 mmHg Sitting Lying', exact: true })
    .getByLabel('Sitting')
    .check();

  await page.locator('input[name="VS0026"]').fill('1');
  await page.getByRole('radio', { name: 'Actual' }).check();
  await page.locator('input[name="VS0012"]').fill('1');
  await page.locator('input[name="VS0056"]').fill('1');

  await page
    .getByRole('cell', { name: 'BP Right Arm 1 / 1 mmHg Sitting Lying', exact: true })
    .getByLabel('Sitting')
    .check();

  await page
    .getByRole('cell', {
      name: 'Temp 1 F, HR 1 /min, Resp 1 /min, BPLA 1/1 mmHg, BPRA 1/1 mmHg, O2 Sat 1 RA, O2 Sat 1 O2 1 min, CBS 1FBS     Notified: MD   CM/Supervisor',
      exact: true
    })
    .getByLabel('MD')
    .check();

  await page
    .getByRole('cell', { name: 'No Yes, describe Notified: MD CM/Supervisor', exact: true })
    .getByLabel('No')
    .check();

  await page
    .getByRole('cell', { name: 'No Yes, describe Notified: MD CM/Supervisor', exact: true })
    .getByLabel('MD')
    .check();

  await page
    .getByRole('cell', { name: 'No Yes, specify', exact: true })
    .getByLabel('No')
    .check();

  await page.locator('input[name="VS0069"]').fill('1');
  await page.locator('input[name="VS0070"]').fill('1');
  await page.locator('input[name="VS0076"]').fill('1');
  await page.locator('input[name="VS0077"]').fill('1');
  await page.locator('input[name="VS0080"]').fill('1');
  await page.locator('input[name="VS0081"]').fill('1');
  await page.locator('input[name="VS0071"]').fill('1');
  await page.locator('input[name="VS0072"]').fill('1');
  await page.locator('input[name="VS0078"]').fill('1');
  await page.locator('input[name="VS0079"]').fill('1');
  await page.locator('input[name="VS0082"]').fill('1');
  await page.locator('input[name="VS0083"]').fill('1');
  await page.locator('input[name="VS0073"]').fill('1');
  await page.locator('input[name="VS0074"]').fill('1');
  await page.locator('input[name="VS0075"]').fill('1');

  
  await page.getByRole('radio', { name: '- Rarely or not at all' }).check();

  await page.getByRole('cell', {name: 'Eyes Within normal limits Abnormal findings Prescription glasses',exact: true}).getByLabel('Within normal limits').check();

  await page.getByRole('cell', {name: 'Ears Within normal limits Abnormal findings',exact: true}).getByLabel('Within normal limits').check();

  await page.getByRole('cell', {name: 'Mouth Within normal limits Abnormal findings Dentures [ Upper Lower Partial ]',exact: true}).getByLabel('Within normal limits').check();

  await page.getByRole('checkbox', { name: 'Upper' }).check();

  await page.getByRole('cell', {name: 'Nose Within normal limits Abnormal findings',exact: true}).getByLabel('Within normal limits').check();

  await page.getByRole('cell', {name: 'Throat Within normal limits Abnormal findings',exact: true}).getByLabel('Within normal limits').check();

  await page.getByRole('cell', {name: 'Speech Within normal limits Abnormal findings',exact: true}).getByLabel('Abnormal findings').check();

  await page.locator('table:nth-child(8) > tbody > .sub-th > td > div > .d-ib > .checkbox > .radio.m-0.m-r-10 > label > span').check();


  
  await page.getByRole('checkbox', { name: 'PERRLA' }).check();
  await page.getByRole('checkbox', { name: 'Oriented', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Place' }).check();
  await page.getByRole('checkbox', { name: 'Forgetful' }).check();
  await page.getByRole('radio', { name: 'Adequate', exact: true }).check();

  await page.locator('input[name="NEUSTAT0010"]').check();
  await page.locator('input[name="NEUSTAT0032"]').check();

  await page.getByText('L', { exact: true }).first().check();
  await page.getByText('R', { exact: true }).nth(1).check();

  await page.getByRole('checkbox', { name: 'Quadriplegia' }).check();

  

  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Next' }).click();


  //2nd form

  await page.getByRole('radio', { name: 'Pink' }).check();
  await page.getByRole('radio', { name: 'Warm' }).check();
  await page.getByRole('radio', { name: 'Dry' }).check();
  await page.getByRole('cell', { name: 'Turgor Normal Fair Poor' }).getByLabel('Normal').check();
  await page.getByRole('checkbox', { name: 'Skin intact' }).check();
  

  await page.getByRole('radio', { name: 'Within normal limits' }).check();
  

  await page.getByRole('radio', { name: 'No SOB' }).check();
  await page.getByRole('cell', { name: 'Breath sounds clear,' }).getByLabel('Yes').check();
  await page.getByRole('cell', { name: 'Abnormal breathing patterns?' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('cell', { name: 'Cough? No Yes' }).getByLabel('No', { exact: true }).check();

  await page.getByRole('checkbox', { name: 'BiPAP/CPAP' }).check();

  await page.locator('input[name="RESP0159"]').fill('1');
  await page.getByLabel('', { exact: true }).nth(2).check();
  await page.getByRole('cell', { name: 'Device Brand/Model Prescribed' }).getByLabel('No', { exact: true })

  await page.getByRole('radio', { name: 'Regular', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Bradycardia' }).check();
  await page.getByRole('cell', { name: 'Normal Abnormal' }).getByLabel('Normal', { exact: true }).check();
  await page.getByRole('row', { name: 'Peripheral edema No Yes' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('row', { name: 'Chest pain No Yes' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('row', { name: 'JVD No Yes' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: '< 3 sec' }).check();
  await page.locator('.radio.radio-inline.ng-binding').first().check();
  await page.getByRole('checkbox', { name: 'No' }).check();
  
  
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Next' }).click();

  // 3rd form

  //Upper Gastrointestinal
  await page.getByRole('row', { name: 'UPPER GASTROINTESTINAL Diet:' }).locator('textarea').fill('1');
  await page.getByRole('cell', { name: 'Soft Rigid Tender/pain' }).getByLabel('Soft').check();
  await page.locator('input[name="UPGASTRO0004"]').fill('1');
  await page.getByRole('radio', { name: 'Active', exact: true }).check();
  await page.getByRole('cell', { name: 'Good Fair Poor Anorexic' }).getByLabel('Good').check();
  await page.getByRole('checkbox', { name: 'Nausea' }).check();
  await page.locator('input[name="UPGASTRO0016"]').fill('1');
  await page.locator('input[name="LOGASTO0023"]').fill('03/23/2026');

  //Lower Gastrointestinal  
  await page.getByRole('checkbox', { name: 'Normal (1-3 days)' }).check();
  await page.getByRole('row', { name: 'Stool character Soft Hard' }).getByLabel('Soft').check();
  await page.getByRole('checkbox', { name: 'Yellow/brown' }).check();
  await page.getByRole('radio', { name: 'Effective', exact: true }).check();
  

  //Genitourinary
  await page.getByRole('checkbox', { name: 'Cloudy' }).check();
  await page.getByRole('checkbox', { name: 'Yellow', exact: true }).check();
  await page.getByRole('cell', { name: 'No Yes, describe' }).getByLabel('No').check();
  await page.locator('input[name="GENSTAS0006"]').fill('1');

  //abnormal urinary elimination?
  await page.getByRole('row', { name: 'Abnormal urinary elimination' }).getByLabel('Yes').check();
  await page.getByRole('checkbox', { name: 'Frequency' }).check();
  await page.getByRole('checkbox', { name: 'Retention' }).check();
  await page.getByRole('checkbox', { name: 'Dysuria' }).check();
  await page.getByRole('checkbox', { name: 'Hematuria' }).check();

  //Genitourinary Special Procedures
  await page.getByRole('checkbox', { name: 'Indwelling urinary catheter' }).check();
  

  //Indwelling Urinary Catheter
  await page.getByRole('radio', { name: 'Urethral' }).check();
  await page.getByRole('radio', { name: '16' }).check();
  await page.getByRole('radio', { name: '2-Way' }).check();
  await page.locator('input[name="GENSTAS0029"]').fill('1');
  await page.getByRole('radio', { name: 'Catheter change done' }).check();
  await page.locator('input[name="GENSTAS0013"]').fill('1');
  await page.locator('input[name="GENSTAS0026"]').fill('1');
  await page.locator('input[name="GENSTAS0024"]').fill('1');
  await page.getByRole('radio', { name: 'Irrigation done' }).check();
  await page.getByRole('radio', { name: 'No problem' }).check();

  //Musculoskeletal
  await page.getByRole('cell', { name: 'Strong Fair Weak' }).getByLabel('Strong').check();
  await page.getByRole('checkbox', { name: 'LUE' }).check();
  await page.getByRole('radio', { name: 'Steady', exact: true }).check();
  await page.getByRole('row', { name: 'Gait/ambulation Steady' }).getByLabel('Independent').check();
  await page.getByRole('row', { name: 'Balance Good Fair Poor' }).getByLabel('Good').check();
  await page.getByRole('row', { name: 'Balance Good Fair Poor' }).getByLabel('Independent').check();
  await page.getByRole('radio', { name: 'Low' }).check();
  await page.locator('input[name="MUSCOLO0066"]').fill('1');
  await page.getByRole('checkbox', { name: 'Practiced once before actual' }).check();
  await page.getByRole('checkbox', { name: 'BK' }).check();
  await page.getByRole('checkbox', { name: 'L', exact: true }).check();
  await page.getByRole('radio', { name: 'New' }).check();
  await page.locator('input[name="MUSCOLO0017"]').fill('1');
  await page.getByRole('checkbox', { name: 'Cast' }).check();
  
  
  //Cast
  await page.getByRole('radio', { name: 'Pink' }).check();
  await page.getByRole('row', { name: 'Pulses Strong Weak Absent' }).getByLabel('Strong').check();
  await page.getByRole('row', { name: 'Sensation Normal Pain' }).getByLabel('Normal').check();
  //DME
  await page.getByLabel('', { exact: true }).nth(2).check();
  await page.locator('input[name="DMEREQ0004"]').first().check();
  await page.locator('input[name="DMEREQ0010"]').first().check();
  await page.getByLabel('', { exact: true }).nth(4).check();
  await page.locator('input[name="DMEREQ0005"]').first().check();
  await page.locator('input[name="DMEREQ0011"]').first().check();
  await page.locator('input[name="DMEREQ0003"]').first().check();
  await page.locator('input[name="DMEREQ0153"]').first().check();

  //Medication management
  await page.getByRole('checkbox', { name: 'Evidence of non-adherence in' }).check();
  await page.getByRole('cell', { name: 'Medication discrepancy noted' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('checkbox', { name: 'Evidence of non-compliance in' }).check();
  await page.getByRole('cell', { name: 'Oral medications (tablets/' }).getByLabel('Yes').check();
  

  //Injectable medications
  await page.locator('.custom-header-bg > .checkbox > label > .ng-valid').check();
  await page.locator('.p-5.b1-b.b1-r.b1-l > div > div > .global__txtbox').fill('1');
  await page.getByRole('radio', { name: 'Intramuscular' }).check();
  await page.locator('.ng-scope > td:nth-child(2) > div > .p-r-15 > .global__txtbox').fill('1');

  //Venous Access and IV Therapy
  await page.locator('.flex-container > .checkbox > label > .ng-valid').check();
  await page.getByRole('checkbox', { name: 'Peripheral Venous Access' }).check();

  //Purpose Other


  //Peripheral Venous Access
  await page.getByRole('radio', { name: 'Short catheter' }).check();
  await page.getByRole('radio', { name: '24' }).check();
  await page.getByRole('radio', { name: 'Left' }).check();
  await page.getByRole('radio', { name: 'IV site restarted' }).check();
  await page.getByRole('radio', { name: 'WNL' }).check();
  await page.getByRole('cell', { name: 'WNL' }).locator('input[name="VAAIT0145"]').fill('1');


  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Next' }).click();


  //4th form

  await page.getByRole('radio', { name: 'Because of illness or injury' }).check();
  await page.getByRole('checkbox', { name: 'There must exist a normal' }).check();
  await page.getByRole('checkbox', { name: 'Needs assistance for all' }).check();
  await page.getByRole('checkbox', { name: 'Unable to safely leave home' }).check();
  await page.getByRole('checkbox', { name: 'Dependent upon adaptive' }).check();
  await page.getByRole('checkbox', { name: 'Requires assistance to' }).check();
  await page.getByRole('checkbox', { name: 'Bleeding precautions' }).check();
  await page.getByRole('checkbox', { name: 'Seizure precautions' }).check();
  await page.getByRole('checkbox', { name: 'Aspiration precautions' }).check();
  await page.getByRole('checkbox', { name: 'Elevate head of bed' }).check();
  await page.getByRole('checkbox', { name: 'Clear pathways' }).check();
  await page.getByRole('checkbox', { name: 'Side rails up' }).check();
  await page.locator('input[name="PSYFAC0119"]').fill('Test value');
  await page.getByRole('rowgroup').filter({ hasText: 'Additional Skilled Assessment' }).locator('textarea').fill('Test notes');

  await page.locator('.cont-opt > .global__txtbox').first().fill('1');
  await page.locator('tr:nth-child(3) > td > div > .cont-opt > .global__txtbox').fill('1');
  await page.locator('tr:nth-child(4) > td > div > .cont-opt > .global__txtbox').fill('1');


  await page.getByRole('cell', { name: 'Physician contacted via: Phone Fax Messaging Person-to-person regarding:', exact: true }).getByLabel('Phone').check();
  await page.getByRole('textbox', { name: 'Type here...' }).fill('Test notes');
  await page.locator('#DMEREQ0135').fill("Test notes");

  await page.getByRole('checkbox', { name: 'SN' }).check();
  await page.locator('input[name="DMEREQ0021"]').fill('Test notes');
  await page.getByRole('checkbox', { name: 'EMR' }).check();

  await page.getByRole('cell', { name: 'CARE COORDINATION Physician' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('checkbox', { name: 'State ID card' }).check();

  await page.locator('textarea[name="DMEREQ0037"]').fill('Test notes');

  await page.getByRole('textbox', { name: 'E-Signature Code' }).fill('5432112345');
  await page.getByRole('button', { name: 'Submit' }).click();


  await page.waitForTimeout(7000);
  await page.pause();
}