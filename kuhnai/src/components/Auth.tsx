import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabaseClient';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'POST':
      const { email, password } = req.body;
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({ email, password });

      if (signInError) {
        return res.status(401).json({ error: signInError.message });
      }

      return res.status(200).json({ user: signInData.user, session: signInData.session });

    case 'DELETE':
      const { error: signOutError } = await supabase.auth.signOut();

      if (signOutError) {
        return res.status(401).json({ error: signOutError.message });
      }

      return res.status(204).end();

    default:
      res.setHeader('Allow', ['POST', 'DELETE']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}