import React from 'react';

const BlogDetailsPage = ({blogDetails}) => {
    return (
        <>
         <div className='container mx-auto py-20'>
            <div className='gird grid-cols-12 place-content-center'>
                <div className='col-span-12 space-y-10'>
                    <h1> {blogDetails?.title} </h1>
                    <div className='image'>
                        <img className="rounded-md" src={blogDetails?.imgCDN} alt="" />
                    </div>
                    <p> {blogDetails?.des} </p>
                </div>
            </div>
         </div>
        </>
    );
};

export default BlogDetailsPage;