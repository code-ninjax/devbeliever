<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Island Navbar</title>
    <link href="assets/fontawesome-free-6.5.2-web/css/fontawesome.css" rel="stylesheet" />
    <link href="assets/fontawesome-free-6.5.2-web/css/brands.css" rel="stylesheet" />
    <link href="assets/fontawesome-free-6.5.2-web/css/solid.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/template-styles.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/RESET.css">

    <style>
    </style>
</head>
<body>
    <nav class="navbar" id="navbar">
        <div class="logo">Devbeliever</div>
        <div class="hamburger" id="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#" title='Resume'>Experience</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
    </nav>

    <div class="sidebar" id="sidebar">
        <div class="close-btn" id="close-btn">✖</div> <!-- Close button -->
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#" title='Resume'>Experience</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
    </div>

    <script>
   const navbar = document.getElementById('navbar');
   const hamburger = document.getElementById('hamburger');
   const sidebar = document.getElementById('sidebar');
   const closeBtn = document.getElementById('close-btn');
   let lastScrollY = window.scrollY;

   window.addEventListener('scroll', () => {
       if (window.scrollY > lastScrollY) {
           // Scrolling down
           navbar.classList.add('sticky');
       } else {
           // Scrolling up
           navbar.classList.remove('sticky');
       }
       lastScrollY = window.scrollY;
   });

   hamburger.addEventListener('click', () => {
       sidebar.classList.toggle('open'); // Toggle the sidebar
   });

   closeBtn.addEventListener('click', () => {
       sidebar.classList.remove('open'); // Close the sidebar
   });
</script>


   

