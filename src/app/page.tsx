import Navbar from "../components/Navbar";

//api.openweathermap.org/data/2.5/weather?lat=50&lon=40&appid=02198656acbfe2c2afe6c0d052bc513c
https: export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
    </div>
  );
}
