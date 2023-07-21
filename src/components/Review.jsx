import React, { useState } from 'react';
import { AiFillStar, AiFillCamera } from 'react-icons/ai';
import { BiSolidVideo } from 'react-icons/bi';

export default function Review() {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [url, setUrl] = useState('');

  const toggleReviewForm = () => {
    setShowForm(!showForm);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan logika atau aksi yang sesuai dengan kebutuhan aplikasi Anda
    // Misalnya, mengirim data ke backend atau menyimpan ke database
    // Setelah itu, Anda dapat mereset nilai-nilai state form jika diperlukan
    setName('');
    setEmail('');
    setTitle('');
    setReview('');
    setImageUrl('');
    setVideoUrl('');
    setUrl('');
    setRating(0);
    setShowForm(false);
  };

  return (
    <>
      <div className="py-10">
        <div>
          <h1 className="text-2xl font-bold tracking-widest">CUSTOMER REVIEWS</h1>
          <div className="grid grid-cols-5 gap-4">
            <div className="pr-4 py-4 pl-0">
              <div className="flex">
                <AiFillStar className="w-4 h-4 text-slate-500 mr-1" />
                <AiFillStar className="w-4 h-4 text-slate-500 mr-1" />
                <AiFillStar className="w-4 h-4 text-slate-500 mr-1" />
                <AiFillStar className="w-4 h-4 text-slate-500 mr-1" />
                <AiFillStar className="w-4 h-4 text-slate-500 mr-1" />
              </div>
              <h3>Based on 290 reviews</h3>
            </div>
            <div className="col-span-3 p-4">
              <div className="">
                {/* Opsi rating */}
              </div>
            </div>
            <div className="p-4">
              <button
                className="cursor-pointer border border-black bg-none py-4 px-4 font-semibold tracking-wide"
                onClick={toggleReviewForm}
              >
                {showForm ? 'CANCEL REVIEW' : 'WRITE A REVIEW'}
              </button>
            </div>
          </div>

          <div className="inline-block relative w-36">
            <select className="block appearance-none text-sm w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Highest Rating</option>
                <option>Most Recent</option>
                <option>Lowest Rating</option>
                <option>Only Picture</option>
                <option>Picture First</option>
                <option>Video First</option>
                <option>Most Helpful</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div>
            {showForm && (
              <form className="my-4" onSubmit={handleSubmit}>
                <div className="my-4">
                    <label 
                        for="email" 
                        className="block text-sm font-semibold text-gray-800">
                            Name (displayed publicly like)
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>

                <div className="my-4">
                    <label 
                        for="email" 
                        className="block text-sm font-semibold text-gray-800">
                            Email
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>

                <div className="my-4">
                  <label className="block font-semibold mb-1">Rating</label>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <AiFillStar
                        key={value}
                        className={`cursor-pointer text-slate-500 ${
                          rating >= value ? 'fill-current' : ''
                        }`}
                        onClick={() => handleRatingChange(value)}
                      />
                    ))}
                  </div>
                </div>

                <div className="my-4">
                    <label 
                        for="email" 
                        className="block text-sm font-semibold text-gray-800">
                            Review Title
                    </label>
                    <input
                        type="title"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </div>

                <div className="my-4">
                  <label htmlFor="review" className="block font-semibold mb-1">
                    Review
                  </label>
                  <textarea
                    id="review"
                    className="border border-gray-400 px-[45%] py-2 w-full h-28"
                    value={review}
                    onChange={handleReviewChange}
                    required
                  ></textarea>
                </div>

                <div className="my-4">
                  <label htmlFor="image" className="block font-semibold mb-1">
                    Image:
                  </label>
                  <div>
                    <label htmlFor="image" className="flex items-center cursor-pointer">
                      <AiFillCamera 
                        type="file"
                        id="image"
                        accept="image/*"
                        className="mr-2 text-slate-700 hover:text-slate-900"
                        value={imageUrl}
                        onChange={handleImageUrlChange}
                        size={100} 
                        />
                    </label>
                  </div>
                </div>

                <div className="my-4">
                  <label htmlFor="video" className="block font-semibold mb-1">
                    Video:
                  </label>
                  <div>
                  <label htmlFor="video" className="flex items-center cursor-pointer">
                      <BiSolidVideo 
                        type="file"
                        id="video"
                        accept="video/*"
                        className="mr-2 text-slate-700 hover:text-slate-900"
                        value={videoUrl}
                        onChange={handleVideoUrlChange}
                        size={100} 
                        />
                    </label>
                  </div>
                </div>

                <div className="my-4">
                    <label 
                        for="url" 
                        className="block text-sm font-semibold text-gray-800">
                            URL
                    </label>
                    <input
                        type="url"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={url}
                        onChange={handleUrlChange}
                        required
                    />
                </div>

                <button
                  type="submit"
                  className="border border-black bg-none text-black py-4 px-5 font-semibold"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
