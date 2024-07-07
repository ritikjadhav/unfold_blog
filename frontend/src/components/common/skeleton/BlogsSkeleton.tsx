
export const BlogsSkeleton = () => {
    return (
        <div className='flex justify-center'>
            <div role='status' className='animate-pulse w-screen max-w-screen-md pt-8'>
                <div className='flex text-sm'>
                    <div className="flex items-center justify-center ml-4">
                        <svg className="w-8 h-8 text-gray-200 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <div className="w-20 h-2.5 bg-gray-200 rounded-full me-3"></div>
                        <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-between border-b border-gray-100 md:flex-row md:max-w-3xl pb-8">
                    <div className="flex flex-col justify-between leading-normal w-full p-4 md:pb-0 ">
                        <div>
                            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                        <div className='text-sm text-gray-500'>
                            <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
                        </div>
                    </div>
                    <div className='class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"'>
                    <div className="flex items-center justify-center w-full h-96 md:h-40 md:w-40 md:ml-10 bg-gray-300 rounded">
                        <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}