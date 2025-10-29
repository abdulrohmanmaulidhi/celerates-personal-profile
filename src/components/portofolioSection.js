import { Mail, Phone, Instagram, Github, Linkedin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

function ContactSection() {
  const [state, handleSubmit] = useForm("xdkpzegv");

  if (state.succeeded) {
    return (
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-50 to-purple-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
        <p className="text-gray-600">Your message has been successfully sent. 🎉</p>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Kiri: Info Kontak */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
          <p className="text-gray-600 leading-relaxed">Interested working together? Let's talk about your project and make something amazing!</p>

          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3">
              <Mail className="text-purple-500" />
              <span className="text-gray-700">rohmanmauldihi@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-purple-500" />
              <span className="text-gray-700">+62 888-8888-8888</span>
            </div>
            <div className="flex gap-4 mt-6">
              <Instagram className="text-purple-600 cursor-pointer hover:text-purple-700" onClick={() => (window.location.href = "https://instagram.com/abdul.rohmanm")} />
              <Github className="text-purple-600 cursor-pointer hover:text-purple-700" onClick={() => (window.location.href = "https://github.com/abdulrohmanmaulidhi")} />
              <Linkedin className="text-purple-600 cursor-pointer hover:text-purple-700" onClick={() => (window.location.href = "https://linkedin.com/in/abdulrohmanmaulidhi")} />
            </div>
          </div>
        </div>

        {/* Kanan: Form Contact */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input id="name" type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input id="email" type="email" name="email" placeholder="you@email.com" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message..."
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full py-3 rounded-lg font-medium text-white transition-all ${state.submitting ? "bg-purple-300 cursor-not-allowed" : "bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg"}`}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
