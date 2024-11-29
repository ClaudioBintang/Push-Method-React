import { Link } from "react-router-dom"
import image1  from "../../assets/brandMovie.jpg"
import image2  from "../../assets/spiderman movie.jpg"
const Home = () => {
 return (
    <body>
        <div className="flex flex-row justify-between bg-gray-200 items-center">
            <div className="w-20 pl-6">
                <img src={image1} alt="logo" className="rounded-md"/>
            </div>
            <div className="p-8">
                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4
                 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700
                  dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
            </div>
        </div>
        <div className="relative">
  <img src={image2} alt="spiderman" className="w-full object-cover h-[600px]" />

  <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 px-9 text-start backdrop-blur-sm">
    <h2 className="text-3xl font-bold text-red-500">Spider-Man</h2>
    <p className="text-lg text-black-400 italic font-bold">Far From Home</p>
  </div>
</div>
    </body>
 )
}
export default Home