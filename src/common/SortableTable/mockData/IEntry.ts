interface IEntry {
  id: number;
  fullName: string;
  gender: string;
  language: string;
  email: string;
  phone: string | null;
  firstName?: string;
  lastName?: string;
  [key: string]: any;
}

export default IEntry;
