// <!--  Script for toggling menu options  -->
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const burger = document.querySelector(".burger");
      const nav = document.querySelector(".nav-list");
    
      if (burger && nav) {
        burger.addEventListener("click", function () {
          nav.classList.toggle("active");
        });
      }
    });
</script>
