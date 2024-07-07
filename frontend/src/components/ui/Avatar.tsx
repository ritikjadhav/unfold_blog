
export const Avatar = ({ name, size = 10 }: { name: string, size?: number }) => {
    return (
        <div className={`relative inline-flex items-center justify-center size-${size} ml-4 overflow-hidden bg-gray-100 rounded-full`}>
            <span className="font-medium text-gray-600">{name.charAt(0)}</span>
        </div>
    )
}