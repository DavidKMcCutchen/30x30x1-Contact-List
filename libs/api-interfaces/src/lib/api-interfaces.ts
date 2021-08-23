export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  friendMeter: string;
  inContact: boolean;
};

export const emptyContact = {
  id: '',
  name: '',
  phoneNumber: '',
  friendMeter: '',
  inContact: false
};
