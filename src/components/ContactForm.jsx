import React, { useState } from "react";
import EdgeGlowCard from "./EdgeGlowCard";
import GlowButton from "./GlowButton";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [budgetField, setBudgetField] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const defaultGlowPalette = {
    glowColor: "#FF00B7",
    secondaryGlowColor: "rgba(32,140,255,0.45)",
    topColor: "#FF00B7",
    leftColor: "#FF00B7",
    rightColor: "rgba(32,140,255,0.45)",
    bottomColor: "rgba(32,140,255,0.45)",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in your name, email and a short message.");
      return;
    }

    setLoading(true);
    try {
      // Simulate an API call — replace with real POST when ready
      await new Promise((res) => setTimeout(res, 800));
      setSuccess(true);
      setSuccessMessage(
        "Thanks! Your message has been sent. We will contact you shortly."
      );
      setName("");
      setEmail("");
      setType("");
      setBudgetField("");
      setMessage("");
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setErrorMsg("Unable to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative space-y-8">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Contact Us
        </h2>
      </div>
      <div className="max-w-xl mx-auto">
        {success && (
          <div className="mb-4 rounded bg-green-600/20 border border-green-500/30 text-green-200 p-3 text-center">
            {successMessage}
          </div>
        )}
        {errorMsg && (
          <div className="mb-4 rounded bg-red-600/20 border border-red-500/30 text-red-200 p-3 text-center">
            {errorMsg}
          </div>
        )}
        <EdgeGlowCard
          mode="static"
          spotlight
          {...defaultGlowPalette}
          outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
          innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
        >
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-6 overflow-hidden rounded-[22px] border border-white/12 p-8 space-y-4"
            style={{
              boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
              background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
            }}
          >
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border border-white/20 rounded-lg bg-black/40 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF00B7] transition-colors"
            />

            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Email"
              className="w-full px-4 py-2 border border-white/20 rounded-lg bg-black/40 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF00B7] transition-colors"
            />

            <label htmlFor="type" className="sr-only">
              Project Type
            </label>
            <input
              id="type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              type="text"
              placeholder="Project Type (optional)"
              className="w-full px-4 py-2 border border-white/20 rounded-lg bg-black/40 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF00B7] transition-colors"
            />

            <label htmlFor="budget" className="sr-only">
              Budget
            </label>
            <input
              id="budget"
              name="budget"
              value={budgetField}
              onChange={(e) => setBudgetField(e.target.value)}
              type="text"
              placeholder="Budget (optional)"
              className="w-full px-4 py-2 border border-white/20 rounded-lg bg-black/40 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF00B7] transition-colors"
            />

            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Tell us about your project..."
              className="w-full px-4 py-2 border border-white/20 rounded-lg resize-none bg-black/40 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF00B7] transition-colors"
              style={{ minHeight: "120px", maxHeight: "200px" }}
            />

            <GlowButton
              type="submit"
              disabled={loading}
              className="w-full"
              innerClassName="w-full"
            >
              {loading ? "Sending…" : "Send Message"}
            </GlowButton>

            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://wa.me/your-number"
                className="px-4 py-2 text-white bg-green-500/80 rounded-lg hover:bg-green-500 transition-colors border border-green-500/30"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/your-telegram"
                className="px-4 py-2 text-white bg-blue-500/80 rounded-lg hover:bg-blue-500 transition-colors border border-blue-500/30"
              >
                Telegram
              </a>
            </div>
          </form>
        </EdgeGlowCard>
      </div>
    </section>
  );
};

export default ContactForm;