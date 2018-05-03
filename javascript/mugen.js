var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
          dosbox.run("../arcade/mugen/mugen.exe");
        },
        onrun: function (dosbox, app) {
          console.log("App '" + app + "' is runned");
        }
      });