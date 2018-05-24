var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
          dosbox.run("../arcade/Sid-Meiers-Civilization_DOS_EN.zip", "./civ/CIV.EXE");
        },
        onrun: function (dosbox, app) {
          console.log("App '" + app + "' is runned");
        }
      });