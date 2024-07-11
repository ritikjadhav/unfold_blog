import { useRecoilState } from 'recoil'
import { user } from '../../recoil/atom'

export const Avatar = ({ size = 10 }: { size?: number }) => {
    const [userName] = useRecoilState(user)

    return (
        <div className={`relative inline-flex items-center justify-center w-${size} h-${size} ml-4 overflow-hidden bg-gray-100 rounded-full`}>
            <span className="font-medium text-gray-600">{userName.charAt(0)}</span>
        </div>
    )
}