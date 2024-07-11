import { Avatar } from '../ui/Avatar'

export const Navbar = () => {
    return (
        <div>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-bold whitespace-nowrap">Unfold</span>
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse cursor-pointer">
                        <Avatar />
                    </div>
                </div>
            </nav>
        </div>
    )
}