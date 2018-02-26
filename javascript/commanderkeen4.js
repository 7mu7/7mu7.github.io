var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
          dosbox.run("../arcade/commanderkeen4.zip", "./commander-keen-4-secret-of-the-oracle/KEEN4E.EXE");
        },
        onrun: function (dosbox, app) {
          console.log("App '" + app + "' is runned");
        }
      });