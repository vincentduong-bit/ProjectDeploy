import { Head, Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles, Briefcase, Globe, MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import logoUrl from '../../images/Logo.png';

const services = [
    {
        title: 'Thiết kế web cao cấp',
        description: 'Trang web responsive, UI/UX chuyên nghiệp và tối ưu hiệu suất.',
    },
    {
        title: 'Xây dựng API & SaaS',
        description: 'Kiến trúc backend mạnh mẽ, bảo mật và mở rộng dễ dàng.',
    },
    {
        title: 'Tư vấn kỹ thuật',
        description: 'Hỗ trợ giải pháp kiến trúc, workflow DevOps và cải thiện hiệu suất.',
    },
];

const projects = [
    {
        title: 'Hệ thống đặt lịch nội bộ',
        description: 'Tự động hóa lịch hẹn và nhắc nhở cho doanh nghiệp.',
    },
    {
        title: 'Nền tảng quản lý sản phẩm',
        description: 'Dashboard trực quan cho quy trình bán hàng và inventory.',
    },
    {
        title: 'Landing page thương hiệu',
        description: 'Thiết kế thương hiệu cao cấp giúp tăng chuyển đổi khách hàng.',
    },
];

const timeline = [
    {
        period: '2020 - 2025',
        title: 'Sinh viên Đại Học Công Nghệ Thông Tin và Truyền Thông Việt - Hàn',
        description: 'Học tập chuyên ngành CNTT, tham gia dự án thực tế và rèn luyện kỹ năng lập trình.',
    },
    {
        period: '2021',
        title: 'Thực tập tại Bizverse',
        description: 'Tham gia phát triển web, học quy trình làm việc thực tế và tự động hóa quy trình nội bộ.',
    },
    {
        period: '2023',
        title: 'Thực tập tại BAP Software',
        description: 'Hỗ trợ xây dựng product features và cải thiện chất lượng code trong môi trường agile.',
    },
    {
        period: '2024 - 2026',
        title: 'PHP Developer tại EFE Technology',
        description: 'Phát triển backend PHP, tối ưu API, xây dựng hệ thống mở rộng và phối hợp với đội ngũ frontend.',
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
                            <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 ring-1 ring-cyan-500/20">
                                Chuyên gia giải pháp phần mềm</span>
                            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{
                                'Tôi là Vincent Duong — xây dựng trải nghiệm web cao cấp và giải pháp kỹ thuật số cho doanh nghiệp.'
                            }</h1>
                            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg" data-reveal data-reveal-delay="80ms">
                                Tôi giúp hiện thực hoá ý tưởng, phát triển sản phẩm với hiệu suất mạnh mẽ, thiết kế tinh tế và quy trình làm việc chuyên nghiệp.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3" data-reveal data-reveal-delay="160ms">
                            {['Developer', 'Consultant', 'Product Builder', 'UX-focused', 'API Specialist'].map((tag) => (
                                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="220ms">
                            <Button asChild>
                                <Link href="#services">Dịch vụ</Link>
                            </Button>
                            <Button variant="secondary" asChild>
                                <Link href="#contact">Liên hệ</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/40" data-reveal data-reveal-delay="80ms">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 rounded-[1.75rem] bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950/80 p-6">
                                <img src={logoUrl} alt="Logo" className="h-14 w-14 rounded-2xl object-contain bg-white/5 p-2" />
                                <div>
                                    <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Điểm nhấn</p>
                                    <h2 className="mt-4 text-2xl font-semibold text-white">Các giá trị tôi mang lại</h2>
                                </div>
                            </div>
                            <p className="mt-3 text-slate-300">Giải pháp thiết kế để giúp bạn tăng trưởng, tối ưu hoá quy trình và xây dựng sản phẩm có sức cạnh tranh.</p>
                            <p className="text-sm text-slate-400">Logo hiển thị ngay lập tức để củng cố thương hiệu và tạo cảm giác chuyên nghiệp cho trang portfolio.</p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    { label: 'Kinh nghiệm', value: '2+ năm' },
                                    { label: 'Dự án', value: '10+' },
                                    { label: 'Khách hàng', value: '10+' },
                                    { label: 'Ngôn ngữ', value: 'TypeScript, PHP, Java' },
                                ].map((item, i) => (
                                    <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/90 p-5" data-reveal data-reveal-delay={`${i * 40}ms`}>
                                        <p className="text-sm text-slate-400">{item.label}</p>
                                        <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="space-y-6">
                    <div className="space-y-3">
                        <p className="text-sm uppercase tracking-[0.32em] text-slate-400" data-reveal data-reveal-delay="20ms">Dịch vụ</p>
                        <h2 className="text-3xl font-semibold text-white" data-reveal data-reveal-delay="40ms">Thiết kế và triển khai giải pháp toàn diện</h2>
                        <p className="max-w-3xl text-slate-300" data-reveal data-reveal-delay="80ms">Tôi hỗ trợ phát triển sản phẩm từ ý tưởng, xây dựng quy trình kỹ thuật và triển khai hệ thống thực tế.</p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {services.map((service, i) => (
                            <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20" data-reveal data-reveal-delay={`${i * 60}ms`}>
                                <div className="flex items-center gap-3 text-cyan-300">
                                    <Sparkles className="h-5 w-5" />
                                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                                </div>
                                <p className="mt-4 text-slate-300">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="timeline" className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-black/20" data-reveal data-reveal-delay="20ms">
                    <div className="space-y-3">
                        <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Timeline nghề nghiệp</p>
                        <h2 className="text-3xl font-semibold text-white">Hành trình học tập và kinh nghiệm</h2>
                        <p className="max-w-3xl text-slate-300">Các mốc quan trọng thể hiện hành trình từ học đại học đến công việc lập trình chuyên nghiệp.</p>
                    </div>

                    <div className="relative mx-auto max-w-[920px] px-4">
                        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-700/50" />
                        <div className="space-y-10">
                            {timeline.map((item, index) => {
                                const isRight = index % 2 === 0;
                                const isExpanded = expandedTimelineIndex === index;

                                return (
                                    <div key={item.period} className="relative">
                                        <span className="absolute left-1/2 top-8 z-10 -translate-x-1/2 rounded-full border border-white/10 bg-slate-950 p-2 shadow-xl shadow-cyan-500/10">
                                            <span className="block h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30" />
                                        </span>
                                        <div className={`flex w-full ${isRight ? 'justify-end' : 'justify-start'}`} data-reveal data-reveal-delay={`${80 + index * 40}ms`}>
                                            <div className={`w-full max-w-[480px] ${isRight ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                                                <button
                                                    type="button"
                                                    className="group w-full rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6 text-left shadow-xl shadow-black/10 transition hover:border-cyan-400/30 hover:bg-slate-900"
                                                    onClick={() => setExpandedTimelineIndex(isExpanded ? null : index)}
                                                    aria-expanded={isExpanded}
                                                >
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
                                                        <p className="mt-5 text-slate-300">{item.description}</p>
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

                <section className="space-y-6" id="projects">
                    <div className="space-y-3">
                        <p className="text-sm uppercase tracking-[0.32em] text-slate-400" data-reveal data-reveal-delay="20ms">Dự án</p>
                        <h2 className="text-3xl font-semibold text-white" data-reveal data-reveal-delay="40ms">Một vài dự án tiêu biểu</h2>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {projects.map((project, i) => (
                            <article key={project.title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/15" data-reveal data-reveal-delay={`${i * 60}ms`}>
                                <div className="flex items-center gap-3 text-cyan-300">
                                    <Briefcase className="h-5 w-5" />
                                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                </div>
                                <p className="mt-4 text-slate-300">{project.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="contact" className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/30" data-reveal data-reveal-delay="20ms">
                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div className="space-y-4">
                            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Liên hệ</p>
                            <h2 className="text-3xl font-semibold text-white">Sẵn sàng hợp tác với bạn</h2>
                            <p className="max-w-2xl text-slate-300">
                                Nếu bạn cần một trang web chuyên nghiệp, hệ thống backend mạnh mẽ hoặc tư vấn kỹ thuật, tôi sẵn sàng đồng hành cùng dự án của bạn.
                            </p>
                        </div>

                        <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6" data-reveal data-reveal-delay="120ms">
                            <div className="space-y-2">
                                <p className="text-sm text-slate-400">Email</p>
                                <p className="text-lg font-semibold text-white">hello@vincentduong.dev</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-slate-400">Điện thoại</p>
                                <p className="text-lg font-semibold text-white">+84 123 456 789</p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-3">
                                <Button asChild>
                                    <Link href="mailto:hello@vincentduong.dev">Gửi mail</Link>
                                </Button>
                                <Button variant="secondary" asChild>
                                    <Link href="#services">Xem dịch vụ</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="border-t border-white/10 pt-6 text-sm text-slate-500" data-reveal data-reveal-delay="40ms">
                    <p>© 2026 Vincent Duong. Portfolio cá nhân và dịch vụ kỹ thuật số.</p>
                </footer>
            </div>
        </main>
    );
}
