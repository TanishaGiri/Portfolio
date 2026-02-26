import {Briefcase, Code, User} from "lucide-react";

export const AboutMe = () => {
    return <section id='about' className="py-24 px-4 relative">
        <div className="container mx-auto max-w-45xl">
            <h2 className="text-3xl font-bold mb:text-4xl mb-12 text-center">About <span className='text-primary' >Me</span></h2>
            {/* <p className="text-lg text-muted-foreground">
                I'm Tanisha Giri, a passionate front-end developer with expertise in creating responsive and user-friendly web applications. My journey in web development began with a curiosity for how things work, and it has evolved into a career where I help businesses bring their digital visions to life.
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-3xl, font-semibold">Passionate Web Developer & Tech Creator</h3>
                    <p className="text-muted-foreground">With over 3 years of experience in web development. I specialize in creating responsive, accessible, and performant web applications using modern technologies.</p>
                    <p>With over 3 years of experience in web development. I specialize in creating responsive, accessible, and performant web applications using modern technologies.</p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>
                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Web Development
                                </h4>
                                <p className="text-muted-foreground">Creating responsive websites amd web applications with modern frameworks.</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    AI Engineer
                                </h4>
                                <p className="text-muted-foreground">Creating responsive websites amd web applications with modern frameworks.</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    ML and Data Science
                                </h4>
                                <p className="text-muted-foreground">Creating responsive websites amd web applications with modern frameworks.</p>
                            </div>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>
    </section>
}