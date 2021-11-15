// const authors = [
//   {
//     id: "auth1",
//     name: "Baudelaire",
//     books: [
//       {
//         id: "b1",
//         title: "Book 1",
//         isbn: "123",
//       },
//       {
//         id: "b2",
//         title: "Book 2",
//         isbn: "124",
//       },
//     ],
//   },
//   {
//     id: "auth2",
//     name: "Camus",
//     books: [
//       {
//         id: "b3",
//         title: "Book 3",
//         isbn: "125",
//       },
//     ],
//   },
//   {
//     id: "auth3",
//     name: "Flaubert",
//     books: [
//       {
//         id: "b4",
//         title: "Book 4",
//         isbn: "126",
//       },
//       {
//         id: "b5",
//         title: "Book 5",
//         isbn: "127",
//       },
//       {
//         id: "b6",
//         title: "Book 6",
//         isbn: "128",
//       },
//     ],
//   },
// ]

const books = [
    {
      id: "b1",
      title: "Book 1",
      author: {
        id: "auth1",
        name: "Baudelaire",
      },
    },
    {
      id: "b2",
      title: "Book 2",
      author: {
        id: "auth1",
        name: "Baudelaire",
      },
    },
    {
      id: "b3",
      title: "Book 3",
      author: {
        id: "auth2",
        name: "Camus",
      },
    },
    {
      id: "b4",
      title: "Book 4",
      author: {
        id: "auth3",
        name: "Flaubert",
      },
    },
    {
      id: "b5",
      title: "Book 5",
      author: {
        id: "auth3",
        name: "Flaubert",
      },
    },
    {
      id: "b6",
      title: "Book 6",
      author: {
        id: "auth3",
        name: "Flaubert",
      },
    },
  ]
  
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  
  export const fetchBooks =  () => {
    // throw new Error()
    return books
  }
  export const addBook = (book) => {
    const id = "b"+(books.length+1)
    const newBook = { ...book, id }
    books.push(newBook)
    return newBook
  }
  