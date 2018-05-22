var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
          dosbox.run("../arcade/digdug.zip", "./dig-dug/digdug.com");
        },
        onrun: function (dosbox, app) {
          console.log("App '" + app + "' is runned");
        }
      });