import React from "react";

const Blog = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <img
        className="hidden sm:block absolute bottom-0 left-0 -mb-24"
        src="saturn-assets/images/blog/blue-light-left.png"
        alt=""
      />
      <img
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        src="saturn-assets/images/blog/orange-light-center.png"
        alt=""
      />
      <div className="relative container px-4">
        <div className="max-w-lg  mb-16 ">
          <h2 className="mb-4 text-4xl font-bold font-heading">
            Lorem ipsum dolor sit amet consectutar domor
          </h2>
          <p className="text-gray-400 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-4 px-4 mb-8">
            <a className="block max-w-md mx-auto group relative" href="#">
              <div className="absolute bottom-0 left-0 w-full p-5">
                <div className="p-5 bg-white rounded-xl">
                  <h4 className="text-xl font-semibold">
                    Consectures Content Velit officia consequat duis
                  </h4>
                  <div className="hidden group-hover:flex justify-end mt-5 items-center text-orange-900 font-semibold">
                    <span className="mr-2">Read article</span>
                    <span>&#10095;</span>
                  </div>
                </div>
              </div>
              <img
                className="block w-full h-80 rounded-lg"
                src="https://cdn.dribbble.com/userupload/10672729/file/original-df8ed54a624b833b92b09c280762e67b.jpg?resize=1024x768"
                alt=""
              />
            </a>
          </div>
          <div className="col-span-4 px-4 mb-8 xl">
            <a className="block max-w-md mx-auto group relative" href="#">
              <div className="absolute bottom-0 left-0 w-full p-5">
                <div className="p-5 bg-white rounded-xl">
                  <h4 className="text-xl font-semibold">
                    Consectures Content Velit officia consequat duis
                  </h4>
                  <div className="hidden group-hover:flex justify-end mt-5 items-center text-orange-900 font-semibold">
                    <span className="mr-2">Read article</span>
                    <span>&#10095;</span>
                  </div>
                </div>
              </div>
              <img
                className="block w-full h-80 rounded-lg"
                src="https://cdn.dribbble.com/userupload/10263036/file/original-4dc87d0ee10ae572a4b0c54e34157447.jpg?resize=1024x768"
                alt=""
              />
            </a>
          </div>
          <div className="col-span-4 px-4 mb-8">
            <a className="block max-w-md mx-auto group relative" href="#">
              <div className="absolute bottom-0 left-0 w-full p-5">
                <div className="p-5 bg-white rounded-xl">
                  <h4 className="text-xl font-semibold">
                    Consectures Content Velit officia consequat duis
                  </h4>
                  <div className="hidden group-hover:flex justify-end mt-5 items-center text-orange-900 font-semibold">
                    <span className="mr-2">Read article</span>
                    <span>&#10095;</span>
                  </div>
                </div>
              </div>
              <img
                className="block w-full h-80 rounded-lg"
                src="https://cdn.dribbble.com/userupload/4153765/file/original-9a04e3df6f2fe311bad49ae97201bdc1.jpg?resize=1024x728"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
