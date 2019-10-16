$(document).ready(function () {

  // reageer op change event op radio button
  $("[name='fietstype']").on("change", function () {
    var checked = $("[name='fietstype']:checked").val();
    alert("Je gekozen fietstype is: " + checked + " Kies uw fietskader");

    if (checked == "Stadsfiets dames") {

      $("[for='Maat 43']").hide();
      $("#Maat43").hide();

      $("[for='Maat 50']").show();
      $("#Maat50").show();

      $("[for='Maat 57']").show();
      $("#Maat57").show();

      $("[for='Maat 61']").hide();
      $("#Maat61").hide();

      $("[for='Geen maat']").hide();
      $("#Geenmaat").hide();
    }

    if (checked == "Stadsfiets heren") {

      $("[for='Maat 43']").hide();
      $("#Maat43").hide();

      $("[for='Maat 50']").show();
      $("#Maat50").show();

      $("[for='Maat 57']").show();
      $("#Maat57").show();

      $("[for='Maat 61']").show();
      $("#Maat61").show();

      $("[for='Geen maat']").hide();
      $("#Geenmaat").hide();
    }

    if (checked == "Elektrische fiets dames") {

      $("[for='Maat 43']").show();
      $("#Maat43").show();

      $("[for='Maat 50']").show();
      $("#Maat50").show();

      $("[for='Maat 57']").show();
      $("#Maat57").show();

      $("[for='Maat 61']").hide();
      $("#Maat61").hide();

      $("[for='Geen maat']").hide();
      $("#Geenmaat").hide();
    }

    if (checked == "Elektrische fiets heren") {

      $("[for='Maat 43']").hide();
      $("#Maat43").hide();

      $("[for='Maat 50']").show();
      $("#Maat50").show();

      $("[for='Maat 57']").show();
      $("#Maat57").show();

      $("[for='Maat 61']").show();
      $("#Maat61").show();

      $("[for='Geen maat']").hide();
      $("#Geenmaat").hide();
    }

    if (checked == "Vouwfiets") {

      $("[for='Maat 43']").hide();
      $("#Maat43").hide();

      $("[for='Maat 50']").hide();
      $("#Maat50").hide();

      $("[for='Maat 57']").hide();
      $("#Maat57").hide();

      $("[for='Maat 61']").hide();
      $("#Maat61").hide();

      $("[for='Geen maat']").show();
      $("#Geenmaat").show();
    }
  })
});

  