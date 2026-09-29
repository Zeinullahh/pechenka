"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const RequestAccessModal = ({ isOpen, onClose, title = "Request access" }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setEmail("");
    setIsSubmitted(false);
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/50 p-4 backdrop-blur-md"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md rounded-2xl border border-emerald-400/20 bg-[#050b1a]/95 p-8 text-white shadow-[0_0_50px_rgba(52,211,153,0.15)] backdrop-blur-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close request access dialog"
              className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="mb-2 text-center text-2xl font-bold text-white/90">{title}</h2>
            <p className="mb-6 text-center text-sm text-gray-400">Enter your email address to request access.</p>

            {isSubmitted ? (
              <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-center text-sm font-medium text-emerald-300" role="status">
                Your request has been received.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label htmlFor="access-request-email" className="sr-only">Email address</label>
                <input
                  id="access-request-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-emerald-400/70"
                />
                <button type="submit" className="w-full rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-[#03150d] transition-colors hover:bg-emerald-400">
                  Request access
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RequestAccessModal;
