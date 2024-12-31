import { Button } from "../ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground font-medium text-center mb-12">
          Whether you have a question, want to discuss a project, or just say
          hello, feel free to drop me a message!
        </p>

        <div>
          <form action="#" method="POST" className="p-8 rounded-lg border">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border  rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border  rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border  rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full rounded-lg font-medium transition"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
