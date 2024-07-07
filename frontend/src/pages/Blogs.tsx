import { BlogCard } from '../components/BlogCard'
import { Navbar } from '../components/common/Navbar'
import { Blog } from '../components/common/types/auth'
import { getBlogs } from '../components/hooks'

export const Blogs = () => {
    const { loading, blogs } = getBlogs()

    if (loading) {
        return <div>loading...</div>
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
                            authorName={blog.author.name}
                            title={blog.title}
                            content={blog.content}
                            publishedDate='3 Dec, 2023' />
                    )
                })}
            </div>
        </div>)
}
