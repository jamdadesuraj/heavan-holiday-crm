export interface ICorporateLead {
  company: string;
  email: string;
  salutation: 'Mr' | 'Mrs' | 'Ms' | 'Dr' | 'Prof';
  firstName: string;
  lastName: string;
  phone: string;
  rm: 'abc' | 'xyz';
  leadSource: 'abc' | 'xyz';
  country: string;
  city: string;
  area: string;
  pin: number;
  address: string;
  remarks: string;
  isDeleted?: boolean;
}
