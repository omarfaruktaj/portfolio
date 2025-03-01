import { Button } from "../ui/button";

export default function Contact() {
  return (
    <section id="contact" className="bg-background px-4 py-16 text-foreground">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">
          Get in Touch
        </h2>
        <p className="mb-12 text-center text-lg font-medium text-muted-foreground">
          Whether you have a question, want to discuss a project, or just say
          hello, feel free to drop me a message!
        </p>

        <div>
          <form action="#" method="POST" className="rounded-lg border p-8">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border px-4  py-2 focus:border-primary focus:ring-primary"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border px-4  py-2 focus:border-primary focus:ring-primary"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border px-4  py-2 focus:border-primary focus:ring-primary"
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
