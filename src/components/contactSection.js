import { Mail, Phone, Instagram, Github, Linkedin } from "lucide-react";

function ContactSection() {
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

        {/* Kanan: Form (tanpa login Formspree) */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form action="https://formspree.io/f/xoqoldlk" method="POST" className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" name="_replyto" placeholder="you@email.com" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea name="message" placeholder="Type your message..." rows="5" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
