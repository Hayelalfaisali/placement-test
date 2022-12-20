       var btn = document.getElementById("btn");
       btn.onclick = function() {

           parent.location = 'quiz.html';
       }
       var note = document.getElementById("TestNotes");
       note.onclick = function() {
           document.getElementById("notes").style.display = "block";


       }
