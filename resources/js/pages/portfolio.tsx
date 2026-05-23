import { Head, Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles, Briefcase, Globe, MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import logoUrl from '../../images/Logo.png';

const contributions = [
    {
        title: 'Full-Stack Development',
        description: 'Build responsive web applications from React frontend to PHP/Laravel backend with clean architecture and security best practices.',
    },
    {
        title: 'API Design & Optimization',
        description: 'Design efficient RESTful APIs, optimize performance, and provide comprehensive documentation for team collaboration.',
    },
    {
        title: 'Product Engineering',
        description: 'Develop features from requirement analysis to deployment with user-centric thinking and quality assurance.',
    },
];

const projects = [
    {
        title: 'Booking Management System',
        description: 'Automated appointment scheduling and reminder system for enterprise-level client management.',
    },
    {
        title: 'Product Dashboard Platform',
        description: 'Real-time analytics dashboard for sales pipeline tracking and inventory management with role-based access.',
    },
    {
        title: 'Brand Landing Page',
        description: 'Premium brand-focused landing page design with conversion optimization and responsive layouts.',
    },
];

const timeline = [
    {
        period: '2020 - 2025',
        title: 'Student at Vietnam-Korea University of Information and Communication Technology',
        description: 'Specialized in IT and computer science, participated in real-world projects and developed core programming skills.',
    },
    {
        period: '2021',
        title: 'Intern at Bizverse',
        description: 'Contributed to web development projects, learned real-world workflows and process automation techniques.',
    },
    {
        period: '2023',
        title: 'Intern at BAP Software',
        description: 'Assisted in building product features and improving code quality within an agile development environment.',
    },
    {
        period: '2024 - 2026',
        title: 'PHP Developer at EFE Technology',
        description: 'Develop PHP backend systems, optimize API performance, build scalable architectures and collaborate with frontend teams.',
    },
];

const skills = ['React', 'Laravel', 'TypeScript', 'Tailwind CSS', 'API Design', 'Product Strategy'];

export default function Portfolio() {
    const [expandedTimelineIndex, setExpandedTimelineIndex] = useState<number | null>(null);

    useEffect(() => {
        // initialize scroll reveal on client
        useScrollReveal();
    }, []);

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <Head title="Portfolio | Vincent Duong" />

            <header className="sticky top-0 z-40 w-full border-b border-white/6 bg-slate-950/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
                    <Link href={route('home')} className="flex items-center gap-3">
                        <img src={logoUrl} alt="Logo" className="h-10 w-10 rounded-2xl object-contain bg-white/5 p-1" />
                        <span className="text-base font-semibold text-white">Vincent Duong</span>
                    </Link>

                    <nav className="hidden items-center gap-6 md:flex">
                        <Link href="#services" className="text-sm text-slate-300">Services</Link>
                        <Link href="#projects" className="text-sm text-slate-300">Projects</Link>
                        <Link href="#contact" className="text-sm text-slate-300">Contact</Link>
                        <Link href="/dashboard" className="rounded-md bg-white/5 px-3 py-2 text-sm text-slate-200">Dashboard</Link>
                    </nav>
                </div>
            </header>

            <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-16 px-6 py-10 sm:px-8 lg:px-12">
                <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="space-y-8" data-reveal data-reveal-delay="0ms">
                        <div className="space-y-4">
                            <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 ring-1 ring-cyan-500/20 uppercase tracking-wider">
                                Full-Stack Developer</span>
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-tight">
                                Building Products, Optimizing Systems, Solving Complex Problems
                            </h1>
                            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8" data-reveal data-reveal-delay="80ms">
                                With 2+ years of experience, I contribute to real-world projects from startups to large enterprises. Specialized in PHP/Laravel backend, React frontend, API optimization, and building scalable system architectures.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3" data-reveal data-reveal-delay="160ms">
                            {['Developer', 'Consultant', 'Product Builder', 'UX-focused', 'API Specialist'].map((tag) => (
                                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row" data-reveal data-reveal-delay="220ms">
                            <Button asChild>
                                <Link href="#projects">View Projects</Link>
                            </Button>
                            <Button variant="secondary" asChild>
                                <Link href="#contact">Get In Touch</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-10 shadow-2xl shadow-black/40" data-reveal data-reveal-delay="80ms">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 rounded-[1.75rem] bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950/80 p-6">
                                <img src={logoUrl} alt="Logo" className="h-14 w-14 rounded-2xl object-contain bg-white/5 p-2" />
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300/80">By The Numbers</p>
                                    <h2 className="mt-3 text-2xl font-bold text-white">Experience & Skills</h2>
                                </div>
                            </div>
                            <p className="mt-3 text-slate-300 leading-relaxed">Real-world work, hands-on learning, and achievements that have contributed to my growth as a software developer.</p>
                            <p className="text-sm text-slate-400 leading-relaxed">Every step has shaped my professional journey: from startups to enterprises, from small features to scalable systems.</p>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {[
                                    { label: 'Experience', value: '2+ Years' },
                                    { label: 'Projects', value: '10+' },
                                    { label: 'Languages', value: 'PHP, React, TS' },
                                    { label: 'GPA', value: '3.64/4.0' },
                                ].map((item, i) => (
                                    <div key={item.label} className="rounded-xl border border-white/10 bg-slate-950/80 p-6 hover:border-cyan-400/30 transition-colors" data-reveal data-reveal-delay={`${i * 40}ms`}>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">{item.label}</p>
                                        <p className="mt-4 text-2xl font-bold text-white">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="space-y-6">
                    <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400" data-reveal data-reveal-delay="20ms">Skills & Contributions</p>
                        <h2 className="text-4xl font-bold text-white" data-reveal data-reveal-delay="40ms">Core Technical Expertise</h2>
                        <p className="max-w-3xl text-base leading-relaxed text-slate-300" data-reveal data-reveal-delay="80ms">Key areas where I contribute and accumulate experience through real-world projects in professional environments.</p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {contributions.map((item, i) => (
                            <div key={item.title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 shadow-xl shadow-black/20 hover:border-cyan-400/30 transition-all duration-300" data-reveal data-reveal-delay={`${i * 60}ms`}>
                                <div className="flex items-center gap-4 text-cyan-400 mb-4">
                                    <Briefcase className="h-6 w-6 flex-shrink-0" />
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                </div>
                                <p className="text-slate-300 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="timeline" className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-xl shadow-black/20" data-reveal data-reveal-delay="20ms">
                    <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Career Journey</p>
                        <h2 className="text-4xl font-bold text-white">Experience & Growth</h2>
                        <p className="max-w-3xl text-base leading-relaxed text-slate-300">From university education to professional development roles at leading companies, each stage has contributed to building my skills and experience.</p>
                    </div>

                    <div className="relative mx-auto max-w-[920px] px-4">
                        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-700/50" />
                        <div className="space-y-10">
                            {timeline.map((item, index) => {
                                const isRight = index % 2 === 0;
                                const isExpanded = expandedTimelineIndex === index;

                                return (
                                    <div key={item.period} className="relative">
                                        <span className={`absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-slate-950 p-2 shadow-xl shadow-cyan-500/10 transform transition-all duration-500 ease-out ${isExpanded ? 'scale-110 shadow-cyan-500/30' : 'scale-100'}`}>
                                            <span className="block h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30 transition-all duration-500" />
                                        </span>
                                        <div className={`flex w-full ${isRight ? 'justify-end' : 'justify-start'}`} data-reveal data-reveal-delay={`${80 + index * 40}ms`}>
                                            <div className={`w-full max-w-[480px] ${isRight ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                                                <button
                                                    type="button"
                                                    className={`group relative overflow-hidden w-full rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6 text-left shadow-xl transition-all duration-500 ease-out hover:border-cyan-400/30 hover:bg-slate-900 ${isExpanded ? 'border-cyan-400/30 shadow-cyan-500/20' : 'shadow-black/10'}`}
                                                    onClick={() => setExpandedTimelineIndex(isExpanded ? null : index)}
                                                    aria-expanded={isExpanded}
                                                >
                                                    <span className={`pointer-events-none absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-sm bg-slate-950/90 border border-white/10 shadow-lg shadow-cyan-500/10 ${isRight ? '-left-3 rotate-45' : '-right-3 rotate-45'}`} />
                                                    <div className="space-y-4">
                                                        <div className={`${isRight ? 'text-left' : 'text-right'}`}>
                                                            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">{item.period}</span>
                                                            <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                                                        </div>
                                                        <div className={`flex justify-${isRight ? 'start' : 'end'}`}>
                                                            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10">
                                                                {isExpanded ? 'Thu gọn' : 'Xem chi tiết'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {isExpanded && (
                                                        <p className="mt-5 text-slate-300 transition-all duration-500 ease-out opacity-100">{item.description}</p>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="space-y-8" id="projects">
                    <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400" data-reveal data-reveal-delay="20ms">Projects</p>
                        <h2 className="text-4xl font-bold text-white" data-reveal data-reveal-delay="40ms">Featured Work</h2>
                        <p className="max-w-3xl text-base leading-relaxed text-slate-300" data-reveal data-reveal-delay="60ms">Representative projects I've contributed to, from concept to deployment with real-world users and production environments.</p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {projects.map((project, i) => (
                            <article key={project.title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 shadow-xl shadow-black/15 hover:border-cyan-400/30 transition-all duration-300" data-reveal data-reveal-delay={`${i * 60}ms`}>
                                <div className="flex items-center gap-4 text-cyan-400 mb-4">
                                    <Globe className="h-6 w-6 flex-shrink-0" />
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                                <p className="text-slate-300 leading-relaxed">{project.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="contact" className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-10 shadow-2xl shadow-black/30" data-reveal data-reveal-delay="20ms">
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Contact</p>
                                <h2 className="text-4xl font-bold text-white">Let's Collaborate & Build Together</h2>
                                <p className="max-w-2xl text-base leading-relaxed text-slate-300">
                                    I'm always open to discussing new opportunities, exciting projects, or anything related to engineering and product development. Reach out via email or let's start a conversation about your next big idea.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8" data-reveal data-reveal-delay="120ms">
                            <div className="space-y-3">
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Email</p>
                                <p className="text-lg font-semibold text-white break-all">hello@vincentduong.dev</p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Phone</p>
                                <p className="text-lg font-semibold text-white">+84 123 456 789</p>
                            </div>
                            <div className="mt-6 flex flex-col gap-3">
                                <Button asChild>
                                    <Link href="mailto:hello@vincentduong.dev">Send Email</Link>
                                </Button>
                                <Button variant="secondary" asChild>
                                    <Link href="#projects">View Projects</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="border-t border-white/10 pt-8 text-center text-sm text-slate-500" data-reveal data-reveal-delay="40ms">
                    <p>© 2026 Vincent Duong. Software Development & Product Engineering.</p>
                </footer>
            </div>
        </main>
    );
}
