<?php


class Book {
    var $title;
    var $author;
    var $pages;

    function __construct($aTitle, $aAuthor, $aPages){
        $this->title = $aTitle;
        $this->author = $aAuthor;
        $this->pages = $aPages;
    }
    
}

$book1 = new Book("Harry Potter", "JK Rowling", 400);

$book2 = new Book("Lord Of The Rings", "Tolkien", 700);

$book3 = new Book("The Alchemist", "Paulo Coelho", 200);

$book4 = new Book("Wings of Fire", "A. P. J. Abdul Kalam", 180);

?>