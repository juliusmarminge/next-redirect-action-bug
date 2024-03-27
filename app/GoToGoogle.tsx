'use client';

import { redirectMe } from './_action';

export function GoToGoogle() {
  return (
    <button
      className="bg-blue-500 p-4 rounded"
      onClick={async () => {
        const result = await redirectMe("foo");
        //    ^? { ok: false, message: string }
        if (!result.ok) {
          // 💥 TypeError: Cannot read properties of undefined (reading 'ok')
          alert(`Error: ${result.message}`);
        }
      }}
    >
      Go to Google
    </button>
  );
}
