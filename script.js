const output = document.getElementById('app');

// Create blog schema
class Blog {
  constructor (body, date) {
    this.body = body;
    this.date = date;
  }
  
}
let blogs = [];
// Return each post
function returnPost() {
  const postText = document.getElementById("blogText");
  blogs.push(new Blog(postText.value, new Date()));
  // console.log(blogs);
  output.innerHTML = '';
  let html ='';  
  
  blogs.sort((a, b) => {
    // sort by date added
    return new Date(b.date) - new Date(a.date);
  }).forEach((blog) => {
    html += 
    `
      <p>${blog.body} </br>
         <b>Posted on:</b> ${blog.date.toLocaleDateString()}, 
         ${blog.date.toLocaleTimeString()}
      </p>
    `
  });
  output.innerHTML = html;
  postText.value = "";
}