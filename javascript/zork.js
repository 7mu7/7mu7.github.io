var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
          dosbox.run("../arcade/zork.zip", "./ZORK1.BAT");
        },
        onrun: function (dosbox, app) {
          console.log("App '" + app + "' is runned");
        }
      });