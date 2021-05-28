import { ipcRenderer } from 'electron';

export function editUser(id: string): void {
  ipcRenderer.send('editUser', id);
}

export function newPrescription(id: string): void {
  ipcRenderer.send('newPrescriptionInit', id);
}

export function printPDF(id: string): void {
  ipcRenderer.send('printPDF', id);
}

export function deleteUser(id: string): void {
  ipcRenderer.send('deleteUser', id);
}

export function deletePrescription(id: string): void {
  ipcRenderer.send('deletePrescription', id);
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function editPrescription(prescription_id: string, user_id: string): void {
  ipcRenderer.send('editPrescription', { user_id, prescription_id });
}

export function printPrescription(id: string): void {
  ipcRenderer.send('printPrescription', id);
}
