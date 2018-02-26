var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
          dosbox.run("../arcade/wolfenstein3d.zip", "./WOLF3D/Wolf3d.exe");
        },
        onrun: function (dosbox, app) {
          console.log("App '" + app + "' is runned");
        }
      });