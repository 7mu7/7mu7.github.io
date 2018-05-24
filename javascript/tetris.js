var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
          dosbox.run("../arcade/tetris.zip", "./tetris.com");
        },
        onrun: function (dosbox, app) {
          console.log("App '" + app + "' is runned");
        }
      });