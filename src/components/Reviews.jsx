export default function Reviews() {
  return (
    <>
      <div className="w-full pb-10">
        <div className="bg-[url(https://img.freepik.com/free-photo/background_53876-32169.jpg?w=1380&t=st=1689249572~exp=1689250172~hmac=92bd8e8c44731e758ab3820c7d9c56413e75806e4732b9e68364f196a040458f)] max-w-7xl mx-auto">
          {/* <img
            className="justify-center w-[1200px] h-[500px] absolute mix-blend-overlay "
            src="https://img.freepik.com/free-photo/background_53876-32169.jpg?w=1380&t=st=1689249572~exp=1689250172~hmac=92bd8e8c44731e758ab3820c7d9c56413e75806e4732b9e68364f196a040458f"
            alt=""
          /> */}
          <div className=" pt-[20px] pl-[60px]  ">
            <h1 className="text-slate-700 font-semibold text-2xl font-sans flex justify-center pt-32 pr-10 ">
              "The most expensive and critically-acclaimed coffee in America,
              maybe the world"
            </h1>
          </div>
          <div className="pt-10 pl-10 flex justify-around pb-10">
            <img
              className="w-[160px]"
              src="https://portofmokha.com/cdn/shop/files/bbc_1024x1024.png?v=1613734076"
              alt=""
            />
            <img
              className="w-[160px]"
              src="https://portofmokha.com/cdn/shop/files/la-magazine-green_1024x1024.png?v=1613734076"
              alt=""
            />
            <img
              className="w-[100px]"
              src="https://portofmokha.com/cdn/shop/files/7x7_1024x1024.png?v=1613734082"
              alt=""
            />
            <img
              className="w-[100px]"
              src="https://portofmokha.com/cdn/shop/files/inc_1024x1024.png?v=1613734082"
              alt=""
            />
            <img
              className="w-[300px]"
              src="https://portofmokha.com/cdn/shop/files/cbs-news_1024x1024.png?v=1613734082"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
