export default function Footer() {
  return (
    <>
      <div>
        {/* Footer */}
        <footer>
          <div className="p-10 bg-gray-500 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-2">
                <div className="mb-5">
                  <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Story</li>
                    <li>Team</li>
                    <li>Terms of Service</li>
                    <li>Refund Policy</li>
                  </ul>
                </div>
                <div className="mb-5">
                  <ul>
                    <li>Auction</li>
                    <li>Wholesale</li>
                    <li>Press</li>
                    <li>Contact</li>
                    <li>Shipping Policy</li>
                    <li>Refund Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                  </ul>
                </div>
                <div className="mb-10 ">
                  <div className="absolute pl-[600px]">
                    <h4>Sign up for email updates</h4>
                    <form className="flex">
                      <input type="text" name="" />
                      <div className="flex justify-end">
                        <button className="">
                          <svg
                            class="w-[18px]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[100px] flex justify-center">
              <img
                className="mix-blend-overlay"
                src="https://portofmokha.com/cdn/shop/files/secondary-logo_150x.png?v=1613734084"
                alt=""
              />
            </div>
            <div className="flex justify-center pb-[10px] pl-3">
              <h1>©2022 Port of Mokha, Inc</h1>
            </div>
          </div>
        </footer>
        {/* end */}
      </div>
    </>
  );
}
