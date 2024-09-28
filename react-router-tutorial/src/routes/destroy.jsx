import { redirect } from 'react-router-dom';
import { deleteContact } from '../contacts.js';

export async function action({ params }) {
  throw new Error('oh dang!');
  const success = await deleteContact(params.contactId);
  if (success) return redirect('/');
}
