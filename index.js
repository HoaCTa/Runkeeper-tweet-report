const showMore = document.querySelectorAll(".showMore"); // link with Show More text
const text = document.querySelectorAll(".more-text"); //span

for (let i = 0; i < showMore.length; i++)
{
    showMore[i].addEventListener('click', (e)=>{
        console.log(text,i);
        text[i].classList.toggle('show-more'); // add show-more class on the more-text class
        if(showMore[i].innerText === "Show More")
        {
            showMore[i].innerText = "Show Less";
        }else{
            showMore[i].innerText = "Show More";
        }
    })
}

