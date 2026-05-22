import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Code2, LayoutGrid, Settings2, Sparkles } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Services',
        href: '/services',
    },
];

const services = [
    {
        title: 'Giải pháp web ứng dụng',
        description: 'Xây dựng hệ thống web cao cấp, dashboard quản lý, và trải nghiệm người dùng tối ưu cho doanh nghiệp.',
        icon: LayoutGrid,
    },
    {
        title: 'Tư vấn kỹ thuật & kiến trúc',
        description: 'Thiết kế kiến trúc phần mềm chuyên nghiệp, phân tích yêu cầu và tối ưu quy trình phát triển.',
        icon: Briefcase,
    },
    {
        title: 'Tự động hóa quy trình',
        description: 'Tự động hoá tác vụ lặp, tích hợp API và triển khai workflow giúp giảm thiểu sai sót và tăng hiệu suất.',
        icon: Settings2,
    },
    {
        title: 'Phát triển sản phẩm MVP',
        description: 'Tạo sản phẩm thử nghiệm nhanh chóng với công nghệ hiện đại, sẵn sàng mở rộng khi ra mắt thị trường.',
        icon: Code2,
    },
];

export default function Services() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Services | Vincent Duong" />

            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/5 bg-slate-900/80 p-6 shadow-inner shadow-black/20">
                    <Badge className="bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/20">
                        Services
                    </Badge>
                    <div className="mt-4 space-y-4">
                        <h1 className="text-3xl font-semibold tracking-tight text-white">Dịch vụ kỹ thuật phần mềm cao cấp</h1>
                        <p className="max-w-3xl text-sm leading-6 text-slate-300">
                            Tôi xây dựng giải pháp cho doanh nghiệp và cá nhân với phong cách premium dark. Tập trung vào Developer / Kỹ thuật phần mềm, dịch vụ được thiết kế để phát triển nhanh và bền vững.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">Vincent Duong</span>
                            <span className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">Developer</span>
                            <span className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">Premium Dark</span>
                        </div>
                    </div>
                </div>

                <section className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
                    {services.map((service) => (
                        <article key={service.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5 shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-slate-900/90">
                            <service.icon className="h-6 w-6 text-cyan-400" />
                            <h2 className="mt-4 text-xl font-semibold text-white">{service.title}</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                <Badge className="bg-white/5 text-slate-300">Premium</Badge>
                                <Badge className="bg-white/5 text-slate-300">Frontend</Badge>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-inner shadow-black/20">
                        <div className="flex items-center gap-3 text-slate-300">
                            <Sparkles className="h-5 w-5 text-cyan-400" />
                            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Dành cho khách hàng</p>
                        </div>
                        <h2 className="mt-4 text-2xl font-semibold text-white">Thêm sản phẩm & dịch vụ của bạn</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Trang này được thiết kế để bạn có thể mở rộng danh mục dịch vụ khi cần. Mỗi gói dịch vụ có thể là sản phẩm, tư vấn, hoặc giải pháp kỹ thuật dành riêng cho khách hàng.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <Button variant="secondary" size="lg" asChild>
                                <Link href="/portfolio">Xem portfolio</Link>
                            </Button>
                            <Button variant="ghost" size="lg">Thêm dịch vụ mới</Button>
                        </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20">
                        <div className="space-y-4">
                            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Khả năng mở rộng</p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    'Thiết kế UI/UX cao cấp',
                                    'API & Architecture',
                                    'Testing & QA',
                                    'DevOps / CI-CD',
                                ].map((item) => (
                                    <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
                                <p className="font-medium text-white">Quản lý nội dung dễ dàng</p>
                                <p className="mt-2 text-slate-400">Dữ liệu dịch vụ được quản lý tạm thời ở frontend. Sau này có thể kết nối API để thêm, sửa, xoá sản phẩm.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
