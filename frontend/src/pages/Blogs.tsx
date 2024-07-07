import { BlogCard } from '../components/BlogCard'
import { Navbar } from '../components/common/Navbar'
import { BlogsSkeleton } from '../components/common/skeleton/BlogsSkeleton'
import { Blog } from '../components/common/types/auth'
import { getBlogs } from '../components/hooks'

export const Blogs = () => {
    const { loading, blogs } = getBlogs()

    if (loading) {
        return (
        <div>
            <div className='mb-24'>
                <Navbar authorName='Anonymous' />
            </div>
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
        </div>
    )
    }

    return (
        <div>
            <div>
                <Navbar authorName='Ritik' />
            </div>
            <div className='flex flex-col mt-24'>
                {blogs.map((blog: Blog) => {
                    return (
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            authorName={blog.author.name || 'Anonymous'}
                            title={blog.title}
                            content={blog.content}
                            publishedDate='3 Dec, 2023' />
                    )
                })}
            </div>
        </div>)
}
