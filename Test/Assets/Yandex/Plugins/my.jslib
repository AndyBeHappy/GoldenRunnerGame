mergeInto(LibraryManager.library, {

  Hello: function () {
    window.alert("Hello, world!");
    console.log("Hello, world!");
  },

  GiveMePlayerData: function () {
    console.log(player.getname());
    console.log(player.getPhoto("medium"));
  },
});