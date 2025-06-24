import { useEffect, useState } from "react"

import two from "../../assets/image/two.jpg"
import one from "../../assets/image/one.jpg"
// import slide3 from "../../assets/image/slide3.jpg"

const slides = [
{
    img: one,
    title: "Welcome to the Dashboard",
    desc: "Monitor your sales and performance in real time.",
},
{
    img: two,
    title: "Track Your Growth",
    desc: "Visualize your business progress month by month.",
},

]

// ...rest of your component remains the same...

const ImageSlider = () => {
const [current, setCurrent] = useState(0)

useEffect(() => {
    const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000) // 3 seconds
    return () => clearInterval(interval)
}, [])

return (
    <div className="relative w-full md:w-[300px] h-[300px] rounded-xl -mx-3 md:ml-20 overflow-hidden shadow">
        <img
        src={slides[current].img}
        alt={slides[current].title}
        className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
        <h2 className="text-2xl font-bold text-white mb-2">{slides[current].title}</h2>
        <p className="text-white text-lg">{slides[current].desc}</p>
        </div>
    </div>
)
}

export default ImageSlider