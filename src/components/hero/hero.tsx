export const Hero = () => {
    return (
        <div className="flex h-svh w-svw items-center justify-center">
            <div className="text-center flex flex-col justify-center items-center">
                <div className="bg-surface-gradient rounded-full p-2 mb-12 backdrop-blur-md border border-white/10 w-full mx-auto max-w-70">
                    <h1 className="text-muted-foreground text-xs font-bold">
                        Frontend Software Engineer \\ AI integrations
                    </h1>
                </div>
                <div className="max-w-2xl">
                    <h1 className="bg-text-gradient bg-clip-text text-transparent text-7xl mb-12">
                        Deconstruct. Analyze. Rebuild. Innovate.
                    </h1>
                </div>
                <div>
                    <p className="font-sans text-foreground/80 leading-relaxed max-w-150 text-lg">
                        I am a North Carolina-based Frontend Engineer specializing in React, and TypeScript, who discovered a passion for coding by
                        <span className="bg-text-gradient bg-clip-text text-transparent"> deconstructing complex systems to see how they tick. </span>
                        My approach is rooted in the belief that anything that can be taken apart can be rebuilt more efficiently. I channel this curiosity into building high-performance web applications where clean architecture meets interactive design.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-8 h-36 w-1 bg-surface-gradient">

            </div>
        </div>
    )
}