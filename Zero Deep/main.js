// Animate Smooth Scroll
$('#about').on('click', function() {
  const images = $('#images').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    900
  );
});

$('#projects').on('click', function() {
  const Projects = $('#Projects').position().top;

  $('html, body').animate(
    {
      scrollTop: Projects
    },
    1200
  );
});