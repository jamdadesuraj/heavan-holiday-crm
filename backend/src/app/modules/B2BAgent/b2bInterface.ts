export interface IB2B {
  company: string;
  email: string;
  salutation: 'Mr' | 'Mrs' | 'Ms' | 'Dr' | 'Prof';
  firstName: string;
  lastName: string;
  phone: string;
  rm: 'abc' | 'xyz';
  leadSource: 'abc' | 'xyz';
  remarks: string;
  country: string;
  city: string;
  area: string;
  pin: number;
  address: string;
  isDeleted?: boolean;
}
