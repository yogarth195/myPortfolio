import { motion, AnimatePresence } from "framer-motion";
import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  InstagramLogo,
  WhatsappLogo,
} from "phosphor-react";

export default function LetsConnect() {
  const socialLinks = [
    {
      icon: <LinkedinLogo size={28} className="text-blue-600" />,
      href: "https://www.linkedin.com/in/yogarth-kankheria-160141261/",
      title: "LinkedIn",
    },
    {
      icon: <GithubLogo size={28} className="text-gray-800" />,
      href: "https://github.com/yogarth195/",
      title: "GitHub",
    },
    {
      icon: <EnvelopeSimple size={28} className="text-red-500" />,
      href: "mailto:yogarthkankheria@gmail.com",
      title: "Email",
    },
    {
      icon: <InstagramLogo size={28} className="text-pink-600" />,
      href: "https://instagram.com/yogaaarth",
      title: "Instagram",
    },
    {
      icon: <WhatsappLogo size={28} className="text-green-600" />,
      href: "https://wa.me/+919990272040",
      title: "WhatsApp",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="relative min-h-screen w-full px-6 py-12 bg-[#FBFFB9] font-inter overflow-hidden flex flex-col justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Main Content */}
        <div id="contact" className="flex-grow flex items-center justify-center">
          <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1 p-10"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Connect with Me
              </h2>
              <p className="text-base text-gray-700 mb-6">
                I’m always open to collaboration, projects, or just a friendly chat. Reach out via social platforms or drop a message!
              </p>
              <div className="mt-8 border-t border-gray-300 pt-4 flex justify-center gap-6">
                {socialLinks.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    title={item.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="flex-1 bg-white/40 backdrop-blur-md p-10 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Send a Message</h2>
              <motion.form
                onSubmit={(e) => {
                  e.preventDefault();
                  // handleSubmit logic here
                }}
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {["Your Name", "Your Email"].map((placeholder, idx) => (
                  <motion.input
                    key={idx}
                    type={placeholder.includes("Email") ? "email" : "text"}
                    placeholder={placeholder}
                    required
                    className="w-full px-4 py-2 rounded-md bg-white/70 border focus:outline-none focus:ring-1 focus:ring-[#9D9C62] transition-all duration-300"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  />
                ))}
                <motion.textarea
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white/70 border focus:outline-none focus:ring-1 focus:ring-[#9D9C62] transition-all duration-300"

                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                />
                <motion.button
                  type="submit"
                  className="w-full text-[#383B53] hover:bg-[#9D9C62] hover:text-white font-semibold py-2 px-4 rounded-xl shadow-lg hover:shadow-2xl backdrop-blur-md transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Yogarth. All rights reserved.
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
