

var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
          dosbox.run("../arcade/warcraft.zip", "./war.exe");
        },
        onrun: function (dosbox, app) {
          console.log("App '" + app + "' is runned");
        }
      });