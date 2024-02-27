const Book = ({ book }) => (
  <div>
    <a
      className="no-underline text-[0.9rem] font-medium text-white relative cursor-pointer before:bg-menuItemGradient before:content-['_'] before:w-8 before:h-[0.2rem] before:absolute before:bottom-[-0.6rem] before:opacity-0 before:translate-x-[-1.5rem] before:transition-all before:duration-[0.3s] before:ease-[ease] before:rounded-lg hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100"
      href={book.publisher_url}
    >
      {book.title}
    </a>
    <p>{book.author}</p>
    <p>{book.publication_date.year}</p>
  </div>
);

export default Book;
