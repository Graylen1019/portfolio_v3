import { BsLinkedin, BsGithub } from "react-icons/bs"
import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-300 z-50">
            <div className="bg-surface-gradient backdrop-blur-md border border-white/10 px-16 py-4 rounded-full flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                {/* Logo with Space Grotesk */}
                <div className="font-display font-bold text-xl bg-text-gradient bg-clip-text text-transparent tracking-tight cursor-pointer hover:opacity-80 transition-opacity">
                    G.Bigelow
                </div>
                <div className="flex items-center space-x-6">
                    <div>
                        <ul className="flex gap-6 text-sm font-medium font-sans text-muted-foreground/80">
                            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors duration-500">About</a></li>
                            <li><a href="#experience" className="hover:text-primary transition-colors duration-500">Experience</a></li>
                            <li><a href="#projects" className="hover:text-primary transition-colors duration-500">Projects</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors duration-500 text-muted font-bold">Contact</a></li>
                        </ul>
                    </div>
                    <div className="h-4 w-0.5 bg-muted-foreground" />
                    <div>
                        <ul className="flex gap-6">
                            <li>
                                <BsLinkedin size={16} color="#64748b" />
                            </li>
                            <li>
                                <BsGithub size={16} color="#64748b" />
                            </li>
                        </ul>
                    </div>
                    <div className="h-4 w-0.5 bg-muted-foreground" />
                    <div>
                        <Link className="bg-muted-foreground rounded-3xl p-2 text-muted" href={"/contact"}>Hire Me</Link>        
                    </div>
                </div>
            </div>
        </nav>
    )
}