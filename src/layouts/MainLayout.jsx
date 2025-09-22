import { Footer } from "./Footer";
import { Header } from "./Header";
import MaxLayout from "./MaxLayout";

export function MainLayout({ children }) {
    return (
        <div className="flex h-screen">
            {/* Sidebar disini */}
            <div className="flex-1">
                <Header />
                <MaxLayout>
                    <main className="px-[5%]">{children}</main>
                </MaxLayout>
                <Footer/>
            </div>
        </div>
    )
}