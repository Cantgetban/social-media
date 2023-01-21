function RecommendPost(props){
    var userName = document.getElementById('RegisterUserName').value
    var Password = document.getElementById('RegisterPassword').value
    fetch('http://localhost:8080/movies/', {
    method: 'GET',
    body: JSON.stringify({
        "name":userName, "password":Password
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
})
    .catch((err) => {
        console.log(err.message);
});
    }
export default RecommendPost