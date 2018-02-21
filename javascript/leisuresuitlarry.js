var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
          dosbox.run("../arcade/leisuresuitlarry.zip", "./LSL/_lsl1.bat");
        },
        onrun: function (dosbox, app) {
          console.log("App '" + app + "' is runned");
        }
      });