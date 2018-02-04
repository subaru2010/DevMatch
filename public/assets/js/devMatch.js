let pageAnsArr = [];
let pageAnsObj = {
  this.name = name;
  this.email = email;
  this.tel = tel;
  this.etc = etc;
};



document.getElementById("next").addEventListener("click", function() {
  pageAnsObj
  
  
  pageAnsArr.push(pageAnsObj);
});

document.getElementById("submit").addEventListener("click", function() {
  pageData = pageData.replace(/\s+/g, "");

  // QUESTION: What does $.get do? What are the parameters it is expecting?
  axios.post("/api/" + searchedCharacter, function(data) {
    console.log(data);
    if (data) {
      $("#stats").show();
      $("#name").text(data.name);
      $("#role").text(data.role);
      $("#age").text(data.age);
      $("#force-points").text(data.forcePoints);
    }
    else {
      $("#name").text("The force is not strong with this one. Your character was not found.");
      $("#stats").hide();
    }
  });
});