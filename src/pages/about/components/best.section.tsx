import model from '../../../assets/images/modelCar.jpg'
const BestDriver = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-0 p-3 h-[650px] mt-20">
    <div className="flex">
        <img
            src={model}
            alt=""
            className="h-1/2 w-full object-cover"
        />
    </div>
    <div className="flex flex-col justify-center bg-gray-100 p-24 space-y-6 h-1/2">
        <h3 className="text-sm text-slate-500">
            Sherpa Vehicle Service
        </h3>
        <h1 className="text-5xl font-bold">
            We Care About Your Comfort And Safety
        </h1>
        <p>
            Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Netus et sed malesuada fames ac turpis. Netus et sed males ada fames ac turpis egesta doi tempus urna. Amet nulla facilisi morbi temp do.
        </p>
    </div>
</div>

        </>
    )
}
export default BestDriver
