export default function footer() {
  return (
    <>
      <div className=" bg-[#1D1D1D]  text-white">
        <footer className="footer p-4 md:p-8 lg:p-12 md:flex md:justify-between">
          <div className="md:w-1/2">
            {" "}
            <div>
              <img src="/logo-1.png"></img>
            </div>
            <div className="text-c1 md:hidden">
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
              unde quae qui quasi mollitia tenetur. Dicta explicabo est
              consectetur maxime quos fugit velit assumenda est.{" "}
            </div>
          </div>

          <form className="max-w-[628px]">
            <div className="space-y-2">
              <h1 className="text-h5 font-bold">Sign Up For Our Newsletter!</h1>
              <h1 className="text-body">
                Get notified about updates and be the first to get early access
                to new Podcast episodes.
              </h1>
            </div>

            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="input join-item placeholder:text-black"
                />
                <button className="btn border-none text-white bg-[#7E53D4] join-item text-[16px] leading-[20.8px]">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
        <div className="py-6">
          <div className="p-4 md:flex justify-between px-10">
            <div className="space-y-2">
              <h1 className="text-c1 md:text-body font-bold">Contact Us</h1>
              <h1 className="text-c1 md:text-body ">support@we5ive.com</h1>
            </div>
            <div className="space-y-2">
              <h1 className="text-c1 md:text-body ">About Us</h1>
              <h1 className="text-c1 md:text-body ">Contact Us</h1>
            </div>
            <div className="space-y-2">
              <h1 className="text-c1 md:text-body ">Privacy policy</h1>
              <h1 className="text-c1 md:text-body ">Terms & Condition</h1>
            </div>
            <div className="space-y-2">
              <h1 className="text-body font-bold">Social Link</h1>
              <div className="flex gap-6 ">
                <img src="/Facebook.png"></img>
                <img src="/Twitter.png"></img>
                <img src="/Linkedin.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[58px] bg-[#7E53D4] flex items-center justify-center">
          <h1>© 2024 | We5ive</h1>
        </div>
      </div>
    </>
  );
}
