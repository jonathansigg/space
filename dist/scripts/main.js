$(document).ready(function(){$("#play").click(function(){$("body").attr("class","starting-game")}),$("#instruct").click(function(){$("#modal-instruct").addClass("show")}),$(".modal").each(function(){var c=$(this);$(this).find(".modal-back").click(function(){c.removeClass("show")}),$(this).find(".modal-close").click(function(){c.removeClass("show")})})});
//# sourceMappingURL=main.js.map
