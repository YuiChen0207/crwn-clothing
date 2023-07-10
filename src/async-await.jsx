//two ways do asynchronous

//1 
//do then and callback
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
    );
  })
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.log(error));

//2
//use try and catch 
//await will sent back the data
const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await usersResponse.json();
    const secondUser = users[1];
    console.log(secondUser);

    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
    );
    const posts = await postsResponse.json();

    console.log(posts);
  } catch (err) {
    console.log("There was an error");
  }
};

myAsyncFunction()
