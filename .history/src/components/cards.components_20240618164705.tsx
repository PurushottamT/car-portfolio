interface TitleBoxProps {
    title: string
    text: string
    rank?: number
}

const TextBox: React.FC<TitleBoxProps> = ({ title, text, rank }) => {
    return (
        <>
            <div className="relative mx-auto mb-4 flex max-w-[22rem] flex-col overflow-hidden rounded-xl bg-gray-200 px-8 py-14 shadow-md">
                <h2 className="mb-4 text-xl font-bold">{title}</h2>
                <p className="p-2 text-base text-gray-700">{text}</p>
                <div className="absolute -bottom-24 -right-3.5 text-10xl font-extrabold text-customOrange">
                    {rank}
                </div>
            </div>
        </>
    )
}
export default TextBox
