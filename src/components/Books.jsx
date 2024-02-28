import { BOOKS } from "../utils/data";
import Book from "./Book";

const Books = () => (
  <section id="readings" className="scroll-mt-[100px] relative mx-0 my-16">
    <h5 className="text-[1.5rem] font-[6000] mb-12">Currently Reading</h5>
    <div>
      {BOOKS.map((book) => (
        <Book key={book.isbn} book={book} />
      ))}
    </div>
  </section>
);

export default Books;
