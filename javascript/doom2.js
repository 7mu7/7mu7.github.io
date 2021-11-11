var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
          dosbox.run("../arcade/doom2.zip", "./doomiido/DOOM2.EXE" -file "./met2.pk3");
        },
        onrun: function (dosbox, app) {
          console.log("App '" + app + "' is runned");
        }
      });