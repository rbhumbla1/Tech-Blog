//***********save the comment
const formComment = document.getElementById("comment-form");

const saveComment =  async(e) => { //async
    e.preventDefault();

    const blogID = document.getElementById('save-comment-button').getAttribute("label");
    const comment = document.getElementById('com-content').value.trim();

    const inputs = {
        content: comment,
        blog_id: blogID,
    };

    console.log("###", inputs);

    if (inputs) {
        const response =  await fetch('/api/comments/', { //await
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(inputs),
        });

        if (response.ok) {

            document.location.replace('/comment/'+ blogID);

        } else {
            alert(response.statusText);
        }
    }
};


    formComment.addEventListener('submit', saveComment);



//***********home button click
const home1 = document.getElementById("home-button")

home1.addEventListener("click", async () => {
    document.location.replace('/');

})

//***********dashboard button click
const dashboard = document.getElementById("dashboard-button")

dashboard.addEventListener("click", async () => {

    document.location.replace('/api/blogs/dashboard');

})