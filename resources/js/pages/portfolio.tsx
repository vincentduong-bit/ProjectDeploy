import { Head, Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles, Briefcase, Globe, MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import logoUrl from '../../images/Logo.png';
import heroImage from '../../images/hero-section-image.png';

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
        position: 'Bachelor of Computer Science',
        description: 'Specialized in IT and computer science, participated in real-world projects and developed core programming skills.',
    },
    {
        period: '2021',
        title: 'Intern at Bizverse',
        position: 'Internship Program',
        description: 'Contributed to web development projects, learned real-world workflows and process automation techniques.',
    },
    {
        period: '2023',
        title: 'Intern at BAP Software',
        position: 'Internship Program',
        description: 'Assisted in building product features and improving code quality within an agile development environment.',
    },
    {
        period: '2024 - 2026',
        title: 'PHP Developer at EFE Technology',
        position: 'Software Engineer',
        description: 'Develop PHP backend systems, optimize API performance, build scalable architectures and collaborate with frontend teams.',
    },
];

const skills = ['React', 'Laravel', 'TypeScript', 'Tailwind CSS', 'API Design', 'Product Strategy'];

export default function Portfolio() {
    const [expandedTimelineIndex, setExpandedTimelineIndex] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<'projects' | 'contact' | null>('projects');

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
                        <img src={logoUrl} alt="Logo" className="h-10 w-10 rounded-2xl bg-white/5 object-contain p-1" />
                        <span className="text-base font-semibold text-white">Vincent Duong</span>
                    </Link>

                    <nav className="hidden items-center gap-6 md:flex">
                        <Link href="#services" className="text-sm text-slate-300">
                            Services
                        </Link>
                        <Link href="#projects" className="text-sm text-slate-300">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-sm text-slate-300">
                            Contact
                        </Link>
                        <Link href="/dashboard" className="rounded-md bg-white/5 px-3 py-2 text-sm text-slate-200">
                            Dashboard
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-16 px-6 py-10 sm:px-8 lg:px-12">
                <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-8" data-reveal data-reveal-delay="0ms">
                        <div className="space-y-4">
                            <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-cyan-300 uppercase ring-1 ring-cyan-500/20">
                                Full-Stack Developer
                            </span>
                            <h1 className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-6xl">
                                Building Products, Optimizing Systems, Solving Complex Problems
                            </h1>
                            <p
                                className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8"
                                data-reveal
                                data-reveal-delay="80ms"
                            >
                                With 2+ years of experience, I contribute to real-world projects from startups to large enterprises. Specialized in
                                PHP/Laravel backend, React frontend, API optimization, and building scalable system architectures.
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
                            <Button onClick={() => setActiveTab(activeTab === 'projects' ? null : 'projects')}>View Projects</Button>
                            <Button variant="secondary" onClick={() => setActiveTab(activeTab === 'contact' ? null : 'contact')}>
                                Get In Touch
                            </Button>
                        </div>

                        <div className="relative mt-6 min-h-[260px]">
                            <div
                                className={`transition-all duration-500 ease-out ${
                                    activeTab === 'projects'
                                        ? 'pointer-events-auto translate-y-0 opacity-100'
                                        : 'pointer-events-none absolute inset-0 translate-y-4 opacity-0'
                                }`}
                            >
                                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-xl backdrop-blur">
                                    <div className="mb-6 flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-white">Featured Projects</h3>

                                        <Button asChild size="sm">
                                            <Link href="/projects">View More</Link>
                                        </Button>
                                    </div>

                                    <div className="space-y-5">
                                        {projects.slice(0, 3).map((project) => (
                                            <div
                                                key={project.title}
                                                className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-cyan-400/20 hover:bg-cyan-500/[0.03]"
                                            >
                                                <h4 className="text-base font-semibold text-white">{project.title}</h4>

                                                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">{project.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`transition-all duration-500 ease-out ${
                                    activeTab === 'contact'
                                        ? 'pointer-events-auto translate-y-0 opacity-100'
                                        : 'pointer-events-none absolute inset-0 translate-y-4 opacity-0'
                                }`}
                            >
                                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-xl backdrop-blur">
                                    <h3 className="text-lg font-semibold text-white">Contact</h3>

                                    <div className="mt-6 space-y-5">
                                        <div className="space-y-2">
                                            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Email</p>

                                            <p className="text-base font-medium break-all text-white">hello@vincentduong.dev</p>
                                        </div>

                                        <div className="space-y-2">
                                            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Phone</p>

                                            <p className="text-base font-medium text-white">+84 123 456 789</p>
                                        </div>

                                        <div className="pt-2 space-y-3">
                                            <Button asChild className="w-full">
                                                <Link href="mailto:hello@vincentduong.dev">Send Email</Link>
                                            </Button>
                                            <Button variant="secondary" asChild className="w-full">
                                                <Link href="tel:+84123456789">Call Now</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-10 shadow-2xl shadow-black/40"
                        data-reveal
                        data-reveal-delay="80ms"
                    >
                        <div className="space-y-8">
                            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950/80 shadow-2xl shadow-cyan-500/10">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-slate-950/40" />
                                <img src={heroImage} alt="Vincent Duong" className="relative h-[420px] w-full object-contain" />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent px-6 py-5">
                                    <p className="text-xs tracking-[0.3em] text-cyan-300 uppercase">Personal Brand</p>
                                    <h2 className="mt-2 text-2xl font-semibold text-white">A clean, confident brand presence</h2>
                                    <p className="mt-2 max-w-xl text-sm text-slate-300">
                                        This hero portrait pairs with the portfolio’s dark cyan palette to create a strong, consistent visual
                                        identity.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 rounded-[1.75rem] bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950/80 p-6">
                                <img src={logoUrl} alt="Logo" className="h-14 w-14 rounded-2xl bg-white/5 object-contain p-2" />
                                <div>
                                    <p className="text-xs font-semibold tracking-widest text-cyan-300/80 uppercase">By The Numbers</p>
                                    <h2 className="mt-3 text-2xl font-bold text-white">Experience & Skills</h2>
                                </div>
                            </div>
                            <p className="mt-3 leading-relaxed text-slate-300">
                                Real-world work, hands-on learning, and achievements that have contributed to my growth as a software developer.
                            </p>
                            <p className="text-sm leading-relaxed text-slate-400">
                                Every step has shaped my professional journey: from startups to enterprises, from small features to scalable systems.
                            </p>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {[
                                    { label: 'Experience', value: '2+ Years' },
                                    { label: 'Projects', value: '10+' },
                                    { label: 'Languages', value: 'PHP, React, TS' },
                                    { label: 'GPA', value: '3.64/4.0' },
                                ].map((item, i) => (
                                    <div
                                        key={item.label}
                                        className="rounded-xl border border-white/10 bg-slate-950/80 p-6 transition-colors hover:border-cyan-400/30"
                                        data-reveal
                                        data-reveal-delay={`${i * 40}ms`}
                                    >
                                        <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">{item.label}</p>
                                        <p className="mt-4 text-2xl font-bold text-white">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="space-y-6">
                    <div className="space-y-4">
                        <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase" data-reveal data-reveal-delay="20ms">
                            Skills & Contributions
                        </p>
                        <h2 className="text-4xl font-bold text-white" data-reveal data-reveal-delay="40ms">
                            Core Technical Expertise
                        </h2>
                        <p className="max-w-3xl text-base leading-relaxed text-slate-300" data-reveal data-reveal-delay="80ms">
                            Key areas where I contribute and accumulate experience through real-world projects in professional environments.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {contributions.map((item, i) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 shadow-xl shadow-black/20 transition-all duration-300 hover:border-cyan-400/30"
                                data-reveal
                                data-reveal-delay={`${i * 60}ms`}
                            >
                                <div className="mb-4 flex items-center gap-4 text-cyan-400">
                                    <Briefcase className="h-6 w-6 flex-shrink-0" />
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                </div>
                                <p className="leading-relaxed text-slate-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section
                    id="timeline"
                    className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-xl shadow-black/20"
                    data-reveal
                    data-reveal-delay="20ms"
                >
                    <div className="space-y-4">
                        <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">Career Journey</p>
                        <h2 className="text-4xl font-bold text-white">Experience & Growth</h2>
                        <p className="max-w-3xl text-base leading-relaxed text-slate-300">
                            From university education to professional development roles at leading companies, each stage has contributed to building
                            my skills and experience.
                        </p>
                    </div>

                    <div className="relative mx-auto max-w-[920px] px-4">
                        <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-slate-700/50" />
                        <div className="space-y-10">
                            {timeline.map((item, index) => {
                                const isRight = index % 2 === 0;
                                const isExpanded = expandedTimelineIndex === index;

                                return (
                                    <div key={item.period} className="relative">
                                        <span
                                            className={`absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-white/10 bg-slate-950 p-2 shadow-xl shadow-cyan-500/10 transition-all duration-500 ease-out ${isExpanded ? 'scale-110 shadow-cyan-500/30' : 'scale-100'}`}
                                        >
                                            <span className="block h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30 transition-all duration-500" />
                                        </span>
                                        <div
                                            className={`flex w-full ${isRight ? 'justify-end' : 'justify-start'}`}
                                            data-reveal
                                            data-reveal-delay={`${80 + index * 40}ms`}
                                        >
                                            <div className={`w-full max-w-[480px] ${isRight ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                                                <button
                                                    type="button"
                                                    className={`group relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6 text-left shadow-xl transition-all duration-500 ease-out hover:border-cyan-400/30 hover:bg-slate-900 ${isExpanded ? 'border-cyan-400/30 shadow-cyan-500/20' : 'shadow-black/10'}`}
                                                    onClick={() => setExpandedTimelineIndex(isExpanded ? null : index)}
                                                    aria-expanded={isExpanded}
                                                >
                                                    <span
                                                        className={`pointer-events-none absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-sm border border-white/10 bg-slate-950/90 shadow-lg shadow-cyan-500/10 ${isRight ? '-left-3 rotate-45' : '-right-3 rotate-45'}`}
                                                    />
                                                    <div className="space-y-4">
                                                        <div className={`${isRight ? 'text-left' : 'text-right'}`}>
                                                            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs tracking-[0.24em] text-cyan-300 uppercase">
                                                                {item.period}
                                                            </span>
                                                            <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                                                            <p className="text-sm text-slate-400">{item.position}</p>
                                                        </div>
                                                        <div className={`flex justify-${isRight ? 'start' : 'end'}`}>
                                                            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-[0.24em] text-slate-300 uppercase transition group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10">
                                                                {isExpanded ? 'Collapse' : 'View Details'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {isExpanded && (
                                                        <p className="mt-5 text-slate-300 opacity-100 transition-all duration-500 ease-out">
                                                            {item.description}
                                                        </p>
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
                        <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase" data-reveal data-reveal-delay="20ms">
                            Projects
                        </p>
                        <h2 className="text-4xl font-bold text-white" data-reveal data-reveal-delay="40ms">
                            Featured Work
                        </h2>
                        <p className="max-w-3xl text-base leading-relaxed text-slate-300" data-reveal data-reveal-delay="60ms">
                            Representative projects I've contributed to, from concept to deployment with real-world users and production environments.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {projects.map((project, i) => (
                            <article
                                key={project.title}
                                className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 shadow-xl shadow-black/15 transition-all duration-300 hover:border-cyan-400/30"
                                data-reveal
                                data-reveal-delay={`${i * 60}ms`}
                            >
                                <div className="mb-4 flex items-center gap-4 text-cyan-400">
                                    <Globe className="h-6 w-6 flex-shrink-0" />
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                                <p className="leading-relaxed text-slate-300">{project.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    id="contact"
                    className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-10 shadow-2xl shadow-black/30"
                    data-reveal
                    data-reveal-delay="20ms"
                >
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">Contact</p>
                                <h2 className="text-4xl font-bold text-white">Let's Collaborate & Build Together</h2>
                                <p className="max-w-2xl text-base leading-relaxed text-slate-300">
                                    I'm always open to discussing new opportunities, exciting projects, or anything related to engineering and product
                                    development. Reach out via email or let's start a conversation about your next big idea.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8" data-reveal data-reveal-delay="120ms">
                            <div className="space-y-3">
                                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Email</p>
                                <p className="text-lg font-semibold break-all text-white">hello@vincentduong.dev</p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Phone</p>
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
