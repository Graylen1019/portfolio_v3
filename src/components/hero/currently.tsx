export const CurrentWork = () => {
    return (
        <div className="border border-(--line) rounded-[14px] bg-linear-to-b from-(--surface) to-(--bg-2) p-5.5 relative overflow-hidden">
            <div className="absolute top-3.5 right-3.5 font-mono text-[10px] text-(--dim) tracking-wider">/02</div>
            <h3 className="margin-0 mb-3.5 font-mono text-xs font-medium text-(--muted) tracking-widest uppercase">Currently</h3>

            <div className="flex flex-col gap-0 font-sans text-sm">
                <div className="flex justify-between items-center py-2.5 border-t border-dashed border-(--line) first:border-none first:pt-0">
                    <span className="text-(--muted) font-mono text-[11px] tracking-widest uppercase">Role</span>
                    <span className="text-(--text)">Peer Mentor</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-t border-dashed border-(--line)">
                    <span className="text-(--muted) font-mono text-[11px] tracking-widest uppercase">At</span>
                    <span className="text-(--text)">Frontend Simplified</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-t border-dashed border-(--line)">
                    <span className="text-(--muted) font-mono text-[11px] tracking-widest uppercase">Based</span>
                    <span className="text-(--text)">Remote · EST</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-t border-dashed border-(--line)">
                    <span className="text-(--muted) font-mono text-[11px] tracking-widest uppercase">Email</span>
                    <span className="text-(--text)">
                        <a href="mailto:graylen@example.com" className="hover:text-(--accent) transition-colors">
                            graylen@dev
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}