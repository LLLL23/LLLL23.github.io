var images = [
    { src: "MyFirstGallery_images/001_Bo Bartlett.jpg", width: 2000, height: 1500, artistName: "Bo Bartlett" , title: "The Promised Land (2016)", lead: "oil on linen, 223.5 × 304.8 cm", description: "With a powerful ability to discern and amplify the magical possibilities of ordinary life, Bo Bartlett exemplifies the potential for exploration in narrative figurative painting with his informed and technically skilled interpretation of contemporary portraiture. The Columbus, Georgia-based painter dissolves formal distinctions between portraiture and self-representation, exploring the unspoken implications of identity, as well as relationships within an image and the viewer-subject relationship. Bartlett’s subjects are rendered fully as individuals, and his articulation of realism transcends mere mimesis. Often approaching the fantastical, the artists's meticulous control of his medium tempers his imagination, inflecting each painting with an uncanny psychological resonance. In single and group portraits, Bartlett takes up the influence and concerns of American realists, like Andrew Wyeth and Thomas Eakins, to capture the elusive coexistence of physical reality, emotional experience, memory, and dreams." },
    { src: "MyFirstGallery_images/002_Joe Coleman.jpg", width: 2000, height: 1500, artistName: "Joe Coleman" ,title: "Tunnel of Love, 1993", lead: "acrylic on panel, 50 x 66 cm", description: "Joe Coleman is a world-renowned painter, writer and performer who has exhibited for four decades in major museums throughout the world including one-man exhibitions at the Palais de Tokyo in Paris, the Kunst-Werke Institute for Contemporary Art in Berlin, the Barbican Centre in London, Tilton Gallery and Dickinson Gallery in New York. He was recently featured in the ground-breaking 'Unrealism' show in Miami presented by Jeffrey Deitch and Larry Gagosian. His performance work from the 1980's was some of the most radical of its time, and can be seen in the films Mondo New York (1988) and Captured (2008). The new book on extreme performance, Avant Garde from Below: Transgressive Performance from Iggy Pop to Joe Coleman and G.G. Allin by Clemens Marschall, explores Coleman's influence during this pivotal period. An avid and passionate collector, Coleman's 'Odditorium' is a private museum where sideshow objects, wax figures, crime artifacts and works of religious devotion live together to form a dark mirror that reflects the alternative side of the American psyche. His work has been published in numerous books, prints and records." },
    { src: "MyFirstGallery_images/003_Otto Dix.jpg", width: 2000, height: 1500, artistName: "Otto Dix", title: "The War (1929-32)", lead: "egg tempera and oil on wood, Middle panel: 204 x 204 cm; Left and right wing each 204 x 102 cm; Predella: 60 x 204 cm", description: "The Great War is a history painting within a landscape set out over four panels, a triptych with a predella panel below. The narrative begins in the left panel, the soldiers in their steel helmets depart for war through a thick haze, already doomed in Dix’s view. In the right panel, a wounded soldier is carried from the battlefield, while the destructive results of battle are starkly depicted in the central panel. This is a bleak and desolate landscape, filled with death and ruin, presided over by a corpse. Trees are charred, bodies are battered and torn and lifeless. War has impacted every part of the landscape." }
  ];
  
  var galleryDiv = document.getElementById("gallery");
  var imageContainerDiv = document.getElementById("image-container");
  var currentImage = document.getElementById("current-image");
  var imageDescription = document.getElementById("image-description");
  var artistName = document.getElementById("artistName");
  var title = document.getElementById("title");
  var lead = document.getElementById("lead");
  var descriptionText = document.getElementById("description-text");
  var currentIndex = 0;
  
  function showImage(index) {
    currentImage.src = images[index].src;
    artistName.textContent = images[index].artistName;
    title.textContent = images[index].title;
    lead.textContent = images[index].lead;
    descriptionText.textContent = images[index].description;
    currentIndex
}
  
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  showImage(currentIndex);

  var thumbnailsContainer = document.getElementById("thumbnails");


  function createThumbnail(index) {
    var thumbnail = document.createElement("img");
    thumbnail.src = images[index].src;
    thumbnail.classList.add("thumbnail");
    thumbnail.style.width = "100px";
    thumbnail.style.height = "100px";
    thumbnail.onclick = function() {
      showImage(index);
    };
    return thumbnail;
  }
  
  for (var i = 0; i < images.length; i++) {
    var thumbnail = createThumbnail(i);
    thumbnailsContainer.appendChild(thumbnail);
  }



  

  
  

  

  