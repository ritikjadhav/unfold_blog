import { Link } from 'react-router-dom'
import rules_img from '../assets/productivity-rules.png'
import { BlogCardProps } from './common/types/auth'
import { Avatar } from './ui/Avatar'

export const BlogCard = ({ id, authorName, title, content, publishedDate }: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className='flex justify-center'>
                <div className='bg-white hover:bg-gray-50 cursor-pointer w-screen max-w-screen-md pt-8'>
                    <BlogCardHeader authorName={authorName} publishedDate={publishedDate} />
                    <div className="flex flex-col justify-between border-b border-gray-100 md:flex-row md:max-w-3xl pb-8">
                        <div className="flex flex-col justify-between leading-normal p-4 md:pb-0 ">
                            <div>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">{title}</h5>
                                <p className="font-normal text-gray-700">{content.slice(0, 135)}...</p>
                            </div>
                            <div className='text-sm text-gray-500'>
                                {Math.ceil(content.length / 100)} min read
                            </div>
                        </div>
                        <div>
                            <img className="object-cover w-full h-96 md:h-auto md:w-40" src={rules_img} alt="productivity-rules" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const BlogCardHeader = ({ authorName, publishedDate }: { authorName: string, publishedDate: string }) => {    
    return (
        <div className='flex text-sm'>
            <Avatar size={8} />
            <div className='flex flex-col justify-center font-normal ml-4'>
                {authorName}
            </div>
            <div className='flex flex-col justify-center text-gray-500 ml-1'>
                {'• '}{publishedDate}
            </div>
        </div>
    )
}