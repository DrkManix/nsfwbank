// add accordion to menu
        $('.menu-button').click(function(){
          // add open class to button
          $(this).toggleClass("open");
          // get next element, which is description
          var subnav = $(this).next();
          if ( subnav.height() ) {
            // description is open, we want to close it!
            // so: we delete the max-height attribute
            subnav.css('max-height', '0');
          } else {
            // description is closed, we want to open it!
            // scrollHeight is the height of the object, regardless of whether it's displayed or not
            subnav.css('max-height', subnav.prop('scrollHeight') + "px");
          }
        });


// Change the Content Of A Div Without Refreshing The Page
$(document).ready(function()
       {

            var p1 = "<h2>NFT SAFE SYSTEM</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
            var p2 = "<h2>OUS MISSION</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>";
            var p3 = "<h2>OUR MEMBERS</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>";
            var p4 = "<img src='img/006.jpg'>";
            var p5 = "<img src='img/007.jpg'>";
            var p6 = "<img src='img/001.jpg'>";
            var p7 = "<h2>LOGIN</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
            var p8 = "<h2>ARCHIVE 2021</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
            var p9 = "<img src='img/002.jpg'>";
            var p10 = "<img src='img/003.jpg'>";

            $("#nft").click(function()
            {
                $(".middle").html(p1);
                $(".right").html(p4);
            });
            $("#mission").click(function() {
                $(".middle").html(p2);
                $(".right").html(p5);
            });
            $("#members").click(function() {
                $(".middle").html(p3);
                $(".right").html(p6);
            });
            $("#login").click(function() {
                $(".middle").html(p7);
                $(".right").html(p9);
            });
            $("#2021").click(function() {
                $(".middle").html(p8);
                $(".right").html(p10);
            });
});
