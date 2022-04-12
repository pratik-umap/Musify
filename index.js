 var songs=[
     { 
         id:1,
         imgSrc:"./poster/Genius_official_poster.jpg",
         audiosrc:"./audio/02 Dil Meri Na Sune - Genius.mp3",
         title:"Dil meri na sune - Atif Aslam"

     },
     {
        id:2,
        imgSrc:"./poster/jeena jeena.jpg",
        audiosrc:"./audio/Jeena Jeena.mp3",
        title:"Jeena jeena - Atif Aslam"

    },
    {
        id:3,
        imgSrc:"./poster/M-S-Dhoni-The-Untold-Story-3-Hindi-2016-500x500.jpg",
        audiosrc:"./audio/03 Jab Tak - MS Dhoni (Armaan Malik) 190Kbps.mp3",
        title:"Jab Tak- Armaan Malik"

    },
    {
        id:4,
        imgSrc:"./poster/namo-namo-kedarnath.jpg",
        audiosrc:"./audio/Namo Namo Shankara(PagalWorld).mp3",
        title:"Namo Namo - Amit Trivedi"

    },
    {
        id:5,
        imgSrc:"./poster/pehli dafa.jpg",
        audiosrc:"./audio/Pehli Dafa - Atif Aslam 320Kbps.mp3",
        title:"Pehli Dafa - Atif Aslam | Shiraz Uppal"

    },
    {
        id:6,
        imgSrc:"./poster/Raataan-Lambiyan.jpg",
        audiosrc:"./audio/Raataan Lambiyan - Shershaah.mp3",
        title:"Raataan Lambiyan - Asees Kaur | Jubin Nautiyal "

    },
    {
        id:7,
        imgSrc:"./poster/rafta rafta.jpg",
        audiosrc:"./audio/Rafta Rafta - Atif Aslam.mp3",
        title:"Rafta Rafta - Atif Aslam"

    },
    {
        id:8,
        imgSrc:"./poster/Ranjha-Lyrics-Shershaah.jpg",
        audiosrc:"./audio/Ranjha - Shershaah.mp3",
        title:"Ranjha - Jasleen Royal | B Praak"

    },
    {
        id:9,
        imgSrc:"./poster/sawan mein lag gyi.jpeg",
        audiosrc:"./audio/Sawan Mein Lag Gayi Aag - Ginny Weds Sunny.mp3",
        title:"Sawan Mein Lag Gayi Aag - Mika Singh | Payal Dev"

    },
    {
        id:10,
        imgSrc:"./poster/srivally.jpg",
        audiosrc:"./audio/Srivalli Pushpa The Rise 128 Kbps.mp3",
        title:"Srivally - Javed Ali | Devi Sri Prasad"

    },
    {
        id:11,
        imgSrc:"./poster/Tamasha_(film_poster).jpg",
        audiosrc:"./audio/03 Tum Saath Ho - Tamasha (Arijit Singh) 320Kbps.mp3",
        title:"Agar Tum Sath Ho - Alka Yagnik | Arijit Singh"

    },
    {
        id:12,
        imgSrc:"./poster/thoda thoda.jpg",
        audiosrc:"./audio/Thoda Thoda Pyar(PagalWorld).mp3",
        title:"Thoda Thoda Pyaar - Stebin Ben, Nilesh Ahuja | Kumaar"

    }
    
 ]

  function playAudio(songid){
      var song=songs.find(function(song,index){
          return song.id===songid;
      });
      
      document.getElementById("song_poster").src=song.imgSrc;
      document.getElementById("audio_control").src=song.audiosrc;
     document.getElementById("title").innerText=song.title;
     document.getElementById("audio_control").play();
  }


