//save the comment
const saveBtn = docuemnt.getElementById("save-comment-button");

const saveComment = async (e) => { //async
    e.preventDefault();

    const blogID = document.getElementById('save-comment-button').getAttribute("label");
    const comment = document.getElementById('comment-comment').ariaValueMax.trim();

    const inputs = {
        content: comment,
        blog_id: blogID,
    };

    console.log("###", inputs);

    if (inputs) {
        const response = await fetch('/api/comment', { //await
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(inputs),
        });

        if (response.ok) {

            document.location.replace('/api/comment/'+ blogID);

        } else {
            alert(response.statusText);
        }
    }
};

if (saveBtn)
    saveBtn.addEventListener('submit', saveComment);



//home button click
const home = document.getElementById("home-button")

home.addEventListener("click", async () => {
    document.location.replace('/');

})

//dashboard button click
const dashboard = document.getElementById("dashboard-button")

dashboard.addEventListener("click", async () => {

    document.location.replace('/api/blogs/dashboard');

})