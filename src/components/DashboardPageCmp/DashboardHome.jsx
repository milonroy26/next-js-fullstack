import React from "react";

const DashboardHome = ({ blog, service }) => {
  return (
    <>
      {/* Top section */}
      <div className="topSection py-20 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-6">
              <div className="content-box flex justify-center align-middle">
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">All Blog</h2>
                  </header>
                  <div className="p-3">
                    <div className="">
                      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                            >
                              Blog Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                            >
                              Blog Image
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                          {blog.map((item, index) => (
                            <tr className="hover:bg-gray-50" key={index}>
                              <td className="px-6 py-4">{item.title}</td>
                              <td className="px-6 py-4">
                                {item.updateAt.split("T", 1)[0]}
                              </td>

                              <td className="px-6 py-4">
                                <img
                                  src={item.imgCDN}
                                  alt=""
                                  className="w-[50px] h-[50px] object-cover"
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-800">All Services</h2>
                </header>
                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-4 font-medium text-gray-900"
                          >
                            Service Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 font-medium text-gray-900"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 font-medium text-gray-900"
                          >
                            Service Image
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {service.map((item, index) => (
                          <tr className="hover:bg-gray-50" key={index}>
                            <td className="px-6 py-4">{item.title}</td>
                            <td className="px-6 py-4">
                              {item.updateAt.split("T", 1)[0]}
                            </td>

                            <td className="px-6 py-4">
                              <img
                                src={item.imgCDN}
                                alt=""
                                className="w-[50px] h-[50px] object-cover"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
    </>
  );
};

export default DashboardHome;
