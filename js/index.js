       var btn = document.getElementById("btn");
       btn.onclick = function() {
           var password = prompt("Enter the password");
           if (password == "12345") {
               parent.location = 'quiz.html';
           } else {
               var msg = document.getElementById("msg");
               msg.innerHTML = "كلمة المرور غير صحيحة";
           }
       }