import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return <footer className="px-4 py-12 bg-card relative border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ProPort.co. All rights reserved.</p>
        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"><ArrowUp size={20} /></a>
    </footer>
}

