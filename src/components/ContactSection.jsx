import {Facebook, Linkedin, Mail, MapPin, Phone, Send, Twitter} from "lucide-react"
import {cn}  from "@/lib/utils"

export const ContactSection = () =>{
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Have a project in mind or want to collaborate? Feel free to react out.
            I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10"><Mail className="h-6 w-6 text-primary" /></div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:tanisha.giri2507@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Tanisha.giri2507@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10"><Phone className="h-6 w-6 text-primary" /></div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:+9199657846" className="text-muted-foreground hover:text-primary transition-colors">+91 99657846</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10"><MapPin className="h-6 w-6 text-primary" /></div>
                        <div>
                            <h4 className="font-medium">Location</h4>
                            <a  className="text-muted-foreground hover:text-primary transition-colors">Xanadu, Japan</a>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/tanisha-giri-2507/" target="_blank" >
                                <Linkedin />
                            </a>
                            <a href="https://twitter.com/TanishaGiri_" target="_blank">
                                <Twitter />
                            </a>
                            <a href="https://www.facebook.com/tanisha.giri.7" target="_blank">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block fint-medium text-sm mb-2">Your Name</label>
                        <input type="text" id="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="John Cena..."></input>
                    </div>
                    <div>
                        <label htmlFor="email" className="block fint-medium text-sm mb-2">Your Email</label>
                        <input type="text" id="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="john@gmail.com"></input>
                    </div>
                    <div>
                        <label htmlFor="message" className="block fint-medium text-sm mb-2">Your Message</label>
                        <textarea  id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Hello, I'd like to talk about..."></textarea>
                    </div>
                    <div>
                        <button className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>Send Message<Send size={16}/></button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </section>
}