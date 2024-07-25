import Accordion from "../../../components/accordion.components";

const items = [
  {
    title: 'First Item',
    content: 'This is the content of the first item.',
  },
  {
    title: 'Second Item',
    content: 'This is the content of the second item.',
  },
  {
    title: 'Third Item',
    content: 'This is the content of the third item.',
  },
];
const FAQ: React.FC = () => {
  return (
    <>
    <div className={`container mx-auto w-3/5`}>
      <h3 className={`text-customOrange text-sm`}>List of the Answer to the Question</h3>
      <h1 className={`text-2xl font-bold mb-4`}>Frequently Asked Questions</h1>
      <hr />
      <Accordion items={items} />
    </div>
    </>
  )
}
export default FAQ