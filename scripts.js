var tablinks = document.getElementsByClassName("tab_links");
      var tabcontents = document.getElementsByClassName("tab_contents");
      function opentab(tabname) {
        for (tablink of tablinks) {
          tablink.classList.remove("active_link");
        }
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active_tab");
        }
        event.currentTarget.classList.add("active_link");
        document.getElementById(tabname).classList.add("active_tab");
      }

      var sidemenu = document.getElementById("sidemenu");

      function openmenu(){
        sidemenu.style.right = "0";
      }
      function closemenu(){
        sidemenu.style.right = "-200";
      }

      const scriptURL = 'https://script.google.com/macros/s/AKfycbyfu2DimLwd7M0tWWjDXG697aXgzwGlD_vMsrIFFUnRk1rWDFWaZ61TIJaPJCoqOoyh/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg")
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML = "Message Successfully Sent"
            setTimeout(function(){
              msg.innerHTML = ""
            }, 5000)
            form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })

      window.addEventListener("scroll", function(){
        var header = document.querySelector("nav");
        header.classList.toggle("sticky", window.scrollY > 0);
      })