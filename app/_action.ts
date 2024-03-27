'use server';

import { redirect } from 'next/navigation';

export const redirectMe = async (input: string) => {
  if (input.length === 0) {
    return { ok: false as const, message: 'Something went wrong' };
  }
  redirect('https://google.com');
};
