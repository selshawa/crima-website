// <!--  Script for toggling menu options  -->
  <script>
  document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-list");

    burger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  });
</script>
