var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
          dosbox.run("games/doom2.zip", "./doomiido/DOOM2.EXE");
        },
        onrun: function (dosbox, app) {
          console.log("App '" + app + "' is runned");
        }
      });