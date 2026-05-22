import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Portfolio Manager',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Portfolio Manager" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20">
                    <h1 className="text-3xl font-semibold text-white">Quản lý Portfolio</h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                        Trang này quản lý nội dung được hiển thị trên Portfolio: giới thiệu bản thân, dịch vụ, dự án và thông tin liên hệ.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-black/10">
                        <h2 className="text-lg font-semibold text-white">Thông tin cá nhân</h2>
                        <p className="mt-3 text-sm text-slate-400">Cập nhật tên, mô tả và các điểm mạnh của bạn để Portfolio thêm thuyết phục.</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-black/10">
                        <h2 className="text-lg font-semibold text-white">Dịch vụ</h2>
                        <p className="mt-3 text-sm text-slate-400">Quản lý các gói dịch vụ bạn cung cấp và nội dung giới thiệu chi tiết.</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-black/10">
                        <h2 className="text-lg font-semibold text-white">Dự án</h2>
                        <p className="mt-3 text-sm text-slate-400">Kiểm soát danh sách dự án, case study và kết quả hiển thị trên trang Portfolio.</p>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        'Portfolio là trang giới thiệu cá nhân và dịch vụ.',
                        'Dashboard là nơi bạn quản lý nội dung hiển thị trên Portfolio.',
                        'Portfolio không phải trang admin, mà là trang công khai cho khách hàng.',
                    ].map((item, index) => (
                        <div key={index} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-xl shadow-black/10 text-slate-300">
                            <p className="text-sm leading-6">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[40vh] flex-1 rounded-xl border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
