import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "./schemas/book.schema";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { BookService } from "./book.service";

@Controller('book')
export class BookController {
    constructor(private bookService:BookService)  {}

    @Get ()
    async getALLBooks(): Promise<Book[]> {
        return this.bookService.findALL();
    }
    
    @Post()
    async createBook(
        @Body()
        book: CreateBookDto
    ): Promise<Book>{
        return this.bookService.create(book)
    }
    // @Get (':id')
    // async getBook(
    //     @Param('id')
    //     id:string
    // ): Promise<Book> {
    //     return this.bookService.findById(id);
    // }
    @Put(':id')
    async updateBook( @Param('id')
        id:string,
        @Body()
        book: UpdateBookDto,
    ): Promise<Book>{
        return this.bookService.updateById(id, book);
    }
    @Delete (':id')
    async deleteBook(
        @Param('id')
        id:string
    ): Promise<Book> {
        return this.bookService.deleteById(id);
    }

}