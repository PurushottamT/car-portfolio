interface TitleBoxProps {
  title: string;
  text: string;
  rank?: number;
  className?: string
}

const TextBox: React.FC<TitleBoxProps> = ({ title, text, rank }) => {
  return (
    <>
      <div className="max-w-[22rem] mx-auto bg-white shadow-md rounded-xl px-8 py-14 mb-4 flex flex-col relative overflow-hidden">
        <h2 className="mb-4 text-xl font-bold">{title}</h2>
        <p className="text-gray-700 text-base p-2">{text}</p>
        <div className="absolute text-10xl text-customOrange -right-3.5 -bottom-24 font-extrabold">
          {rank}
        </div>
      </div>
    </>
  );
};
export default TextBox;
