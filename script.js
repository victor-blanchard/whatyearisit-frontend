fetch("https://whatyearisit-backend-nine-alpha.vercel.app/year")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#year").textContent = data.year;
  });
