const s=document.getElementById("search-box");
// const btn=document.getElementById("btn");
const form=document.getElementById("search");
const sres=document.getElementById("search-result");
const smor=document.getElementById("show-more");

let keyword="";
let page=1;
let accesskey="6ZsgmJLvX2T947Pql-VDVSNbu32bXVXlDju5aIigveA";
async function SearchImages(p) {
    keyword=s.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=36`;
    
    const response =await fetch(url);
    const data=await response.json();
    const res=data.results;
    if (page==1)
        sres.innerHTML="";
    res.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        sres.appendChild(imageLink);

    })
}
form.addEventListener("submit",(e)=>{
    e.preventDefault(); 
    page=1;
    SearchImages();
    smor.style.display="block";
})

smor.addEventListener("click",(e)=>{
    e.preventDefault();
    page++;
    SearchImages();

})