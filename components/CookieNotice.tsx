"use client";

import { useEffect, useState } from "react";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("providence-cookie-choice") !== "accepted");
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:flex sm:items-center sm:gap-5">
      <p className="text-sm leading-6 text-slate-600">
        We use essential cookies and privacy-preserving analytics to improve reliability. You can review details in our Privacy Policy.
      </p>
      <button
        className="focus-ring mt-3 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:mt-0 sm:shrink-0"
        onClick={() => {
          localStorage.setItem("providence-cookie-choice", "accepted");
          setVisible(false);
        }}
      >
        Accept
      </button>
    </div>
  );
}
