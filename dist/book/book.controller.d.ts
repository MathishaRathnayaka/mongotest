import { Book } from "./schemas/book.schema";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { BookService } from "./book.service";
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    getALLBooks(): Promise<Book[]>;
    createBook(book: CreateBookDto): Promise<Book>;
    updateBook(id: string, book: UpdateBookDto): Promise<Book>;
    deleteBook(id: string): Promise<Book>;
}
