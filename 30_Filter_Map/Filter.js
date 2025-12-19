// FILTER

const books = [
  { title: "book one", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "book two", genre: "History", publish: 2001, edition: 2005 },
  { title: "book three", genre: "Science", publish: 1981, edition: 2009 },
  { title: "book four", genre: "Math", publish: 1997, edition: 2016 },
  { title: "book five", genre: "History", publish: 2008, edition: 1993 },
  { title: "book six", genre: "Islamic", publish: 1981, edition: 2026 },
];
// const userbooks = books.filter((bk) => bk.publish >= 2000);
// const userbooks = books.filter((bk) => bk.genre === "History");
// const userbooks = books.filter((pb) => pb.publish > 2000);
const userbooks = books.filter((lk) => {
  return lk.genre === "History" && lk.edition > 2000;
});
// const userbk = books.filter((mk) => {
//   return mk.genre === "History" && mk.edition > 2001;
// });
// console.log(userbk);

console.log(userbooks);
