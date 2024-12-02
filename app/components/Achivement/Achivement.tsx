
const Achievement = () => {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="w-full text-[38px] font-bold text-[#000000]">Our Achievements</h2>
          <p className="text-[20px] text-[#000000] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <br />
          <br />
          <div className="flex flex-col lg:flex-row justify-between gap-[24px] mt-2">
            <div className="flex flex-col items-center gap-8">
              <span className="text-[40px] font-bold text-[#000000]">+200</span>
              <span className="text-[16px] text-[#000000] ml-2">Courses</span>
            </div>
            <div className="flex flex-col items-center gap-8">
              <span className="text-[40px] font-bold text-[#000000]">5K</span>
              <span className="text-[16px] text-[#000000] ml-2">Mentors</span>
            </div>
            <div className="flex flex-col items-center gap-8">
              <span className="text-[40px] font-bold text-[#000000]">370k</span>
              <span className="text-[16px] text-[#000000] ml-2">Students</span>
            </div>
            <div className="flex flex-col items-center gap-8">
              <span className="text-[40px] font-bold text-[#000000]">100+</span>
              <span className="text-[16px] text-[#000000] ml-2">Recognition</span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Achievement;