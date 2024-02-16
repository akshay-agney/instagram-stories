let pics = [
     {
          dp: "https://i.pinimg.com/236x/18/48/8c/18488cc4e85b366112bedf411e4626dd.jpg",
          story: "https://i.pinimg.com/564x/6c/f3/92/6cf392822ab7e81b37071bf351ecdac4.jpg",
     },
     {
          dp: "https://i.pinimg.com/236x/2d/6b/57/2d6b57810d0d083ac7f1d453dde7b863.jpg",
          story: "https://i.pinimg.com/564x/07/03/65/0703657e7df9a23296ed24a01138a487.jpg",
     },
     {
          dp: "https://i.pinimg.com/564x/63/57/80/635780c19cd7fa15175ce4acd6b1acc6.jpg",
          story: "https://i.pinimg.com/564x/77/0e/89/770e890efede00c4b8e65ed1ace4343a.jpg",
     },
     {
          dp: "https://i.pinimg.com/564x/17/45/e6/1745e6ad13802f3911697787d9f3ba18.jpg",
          story: "https://i.pinimg.com/564x/fa/69/12/fa69121bbbcdae05de30ee65121fec40.jpg",
     },
     {
          dp: "https://i.pinimg.com/564x/89/4d/d2/894dd2f5c69c29353a8d71ea51f412da.jpg",
          story: "https://i.pinimg.com/564x/f8/c7/8b/f8c78b06e91ef15e766f307de0339697.jpg",
     },
     {
          dp: "https://i.pinimg.com/564x/6a/49/7e/6a497e6b1a57cae7d612106c4cd77d31.jpg",
          story: "https://i.pinimg.com/564x/e3/17/cd/e317cda54be16ff403b55252d13a54d4.jpg",
     },
     {
          dp: "https://i.pinimg.com/736x/3c/54/3e/3c543eae3525933926c7b0a9777fa13d.jpg",
          story: "https://i.pinimg.com/564x/6f/1c/39/6f1c39085041260fb45a28c0390ee960.jpg",
     },
     {
          dp: "https://i.pinimg.com/564x/bb/f1/83/bbf1835a43d4a25e646fc7e5a73ccdb2.jpg",
          story: "https://i.pinimg.com/564x/ab/9a/72/ab9a72c5cbcc4fe5c47fe2d5fbaa3954.jpg",
     },
     {
          dp: "https://i.pinimg.com/564x/56/67/ac/5667acf8773ef6b951fafb1f970cda09.jpg",
          story: "https://i.pinimg.com/564x/6f/dd/57/6fdd570f4cbbabf411d9d901bdcc4a1a.jpg",
     },
];
let clutter = "";
pics.forEach((e, idx) => {
     clutter += ` <div class="story">
                                    <img id="${idx}" src="${e.dp}" alt="">
                              </div>`;
});
document.querySelector("#stories").innerHTML = clutter;

document.querySelector("#stories").addEventListener("click", (details) => {
      document.querySelector("#stori").style.display = "block"
      document.querySelector("#stori").style.backgroundImage = `url(${pics[details.target.id].story})` 

      setTimeout(d => {
            document.querySelector("#stori").style.display = "none";
      },1500)
})
