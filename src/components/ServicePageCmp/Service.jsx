
const Service = ({ service }) => {
  return (
    <section className="pt-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold font-heading">
            Lorem ipsum dolor sit amet consectutar domor
          </h2>
          <p className="text-gray-400 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>
        <div className="flex flex-wrap -mx-3">
          {
            service.map((item, index) => (
              <div key={index} className="w-1/2 lg:w-1/4 px-3 mb-20">
                <img
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4"
                  src={item?.imgCDN}
                  alt=""
                />
                <h3 className="sm:text-2xl font-bold font-heading text-center">
                  {item?.title}
                </h3>
              </div>
            ))
          }
          
        </div>
      </div>
    </section>
  );
};

export default Service;
