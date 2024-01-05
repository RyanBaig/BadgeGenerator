$(document).ready(function () {
  $(".Ryans-Dropdowns").select2({
    templateResult: formatOption,
    templateSelection: formatOption,
  });
  function formatOption(option) {
    if (!option.id) {
      return option.text;
    }

    var $option = $(
      '<span><img src="' +
        $(option.element).data("image") +
        '" class="img-thumbnail" />' +
        option.text +
        "</span>"
    );

    return $option;
  }
  $(".Ryans-Dropdowns-Provider").select2({
    templateResult: formatOption2,
    templateSelection: formatOption2,
  });
  function formatOption2(option) {
    if (!option.id) {
      return option.text;
    }

    var $option = $(
      '<span><img src="' +
        $(option.element).data("image") +
        '" class="img-thumbnail-provider" style="max-width: 20px; margin-right: 10px; margin-bottom: 5px;"/>' +
        option.text +
        "</span>"
    );

    return $option;
  }
});

const providerSelect = document.getElementById("provider");
// PROVIDERS
const githubProvider = document.getElementById("githubProvider");
const cratesIoProvider = document.getElementById("cratesIoProvider");
const npmProvider = document.getElementById("npmProvider");
const pypiProvider = document.getElementById("pypiProvider");
// OPTIONS
const githubOption = document.getElementById("githubOption");
const cratesIoOption = document.getElementById("cratesIoOption");
const npmOption = document.getElementById("npmOption");
const pypiOption = document.getElementById("pypiOption");
// PREVIEW BUTTON
const previewButton = document.getElementById("previewButton");

// Event listener for provider dropdown change
$("#provider").on("change", function () {
  const selectedProvider = $(this).val();
  hideAllProviders();

  if (selectedProvider === "github") {
    $("#githubProvider").show();
  } else if (selectedProvider === "crates.io") {
    $("#cratesIoProvider").show();
  } else if (selectedProvider === "npm") {
    $("#npmProvider").show();
  } else if (selectedProvider === "pypi") {
    $("#pypiProvider").show();
  }
});

function hideAllProviders() {
  githubProvider.style.display = "none";
  cratesIoProvider.style.display = "none";
  npmProvider.style.display = "none";
  pypiProvider.style.display = "none";
}

$("#githubOption").on("change", function () {
  hideAllGitHubOptions();
  const selectedOption = $(this).val();
  if (selectedOption === "latestRelease") {
    $("#githubLatestRelease").show();
  } else if (selectedOption === "issues") {
    $("#githubIssues").show();
  } else if (selectedOption === "openIssues") {
    $("#githubOpenIssues").show();
  } else if (selectedOption === "closedIssues") {
    $("#githubClosedIssues").show();
  } else if (selectedOption === "checks") {
    $("#githubChecks").show();
  } else if (selectedOption === "checksBranch") {
    $("#githubChecksBranch").show();
  } else if (selectedOption === "contributors") {
    $("#githubContributors").show();
  } else if (selectedOption === "license") {
    $("#githubLicense").show();
  }
});

$("#cratesIoOption").on("change", function () {
  hideAllCratesIoOptions();
  const selectedOption = $(this).val();
  if (selectedOption === "name") {
    $("#cratesIoName").show();
  } else if (selectedOption === "version") {
    $("#cratesIoVersion").show();
  } else if (selectedOption === "name&version") {
    $("#cratesIoNameAndVersion").show();
  } else if (selectedOption === "downloads") {
    $("#cratesIoDownloads").show();
  } else if (selectedOption === "latestDownloads") {
    $("#cratesIoDownloadsLatest").show();
  }
});

$("#npmOption").on("change", function () {
  hideAllNpmOptions();
  const selectedOption = $(this).val();
  if (selectedOption === "name") {
    $("#npmName").show();
  } else if (selectedOption === "nameScoped") {
    $("#npmNameScoped").show();
  } else if (selectedOption === "version") {
    $("#npmVersion").show();
  } else if (selectedOption === "versionScoped") {
    $("#npmVersionScoped").show();
  } else if (selectedOption === "license") {
    $("#npmLicense").show();
  } else if (selectedOption === "licenseScoped") {
    $("#npmLicenseScoped").show();
  } else if (selectedOption === "types") {
    $("#npmTypes").show();
  } else if (selectedOption === "typesScoped") {
    $("#npmTypesScoped").show();
  }
});

$("#pypiOption").on("change", function () {
  hideAllPyPiOptions();
  const selectedOption = $(this).val();
  if (selectedOption === "name") {
    $("#pypiName").show();
  } else if (selectedOption === "version") {
    $("#pypiVersion").show();
  } else if (selectedOption === "name&version") {
    $("#pypiNameAndVersion").show();
  } else if (selectedOption === "license") {
    $("#pypiLicense").show();
  }
});

function hideAllGitHubOptions() {
  $("#githubLatestRelease").hide();
  $("#githubIssues").hide();
  $("#githubOpenIssues").hide();
  $("#githubClosedIssues").hide();
  $("#githubChecks").hide();
  $("#githubChecksBranch").hide();
  $("#githubContributors").hide();
  $("#githubLicense").hide();
}

function hideAllCratesIoOptions() {
  $("#cratesIoName").hide();
  $("#cratesIoVersion").hide();
  $("#cratesIoNameAndVersion").hide();
  $("#cratesIoDownloads").hide();
  $("#cratesIoDownloadsLatest").hide();
}

function hideAllNpmOptions() {
  $("#npmName").hide();
  $("#npmNameScoped").hide();
  $("#npmVersion").hide();
  $("#npmVersionScoped").hide();
  $("#npmLicense").hide();
  $("#npmLicenseScoped").hide();
  $("#npmTypes").hide();
  $("#npmTypesScoped").hide();
}

function hideAllPyPiOptions() {
  $("#pypiName").hide();
  $("#pypiVersion").hide();
  $("#pypiNameAndVersion").hide();
  $("#pypiLicense").hide();
}

$("#previewButton").on("click", function () {
  const GHselectedOption = $("#githubOption").val();
  const CIOselectedOption = $("#cratesIoOption").val();
  const NPMselectedOption = $("#npmOption").val();
  const PyPiselectedOption = $("#pypiOption").val();

  const selectedProvider = $("#provider").val();

  if (selectedProvider === "github") {
    // ---------- GitHub ----------
    if (GHselectedOption === "latestRelease") {
      constructGitHubURLLatestRelease();
      $("#githubLatestRelease").show();
    } else if (GHselectedOption === "issues") {
      constructGitHubURLIssues();
      $("#githubIssues").show();
    } else if (GHselectedOption === "openIssues") {
      constructGitHubURLOpenIssues();
      $("#githubOpenIssues").show();
    } else if (GHselectedOption === "closedIssues") {
      constructGitHubURLClosedIssues();
      $("#githubClosedIssues").show();
    } else if (GHselectedOption === "checks") {
      constructGitHubURLChecks();
      $("#githubChecks").show();
    } else if (GHselectedOption === "checksBranch") {
      constructGitHubURLChecksBranch();
      $("#githubChecksBranch").show();
    } else if (GHselectedOption === "contributors") {
      constructGitHubURLContributors();
      $("#githubContributors").show();
    } else if (GHselectedOption === "license") {
      constructGitHubURLLicense();
      $("#githubLicense").show();
    }
  } else if (selectedProvider === "crates.io") {
    // ---------- crates.io ----------
    if (CIOselectedOption === "name") {
      constructCIOURLName();
      $("#cratesIoName").show();
    } else if (CIOselectedOption === "version") {
      constructCIOURLVersion();
      $("#cratesIoVersion").show();
    } else if (CIOselectedOption === "name&version") {
      constructCIOURLNameAndVersion();
      $("#cratesIoNameAndVersion").show();
    } else if (CIOselectedOption === "downloads") {
      constructCIOURLDownloads();
      $("#cratesIoDownloads").show();
    } else if (CIOselectedOption === "latestDownloads") {
      constructCIOURLDownloadsLatest();
      $("#cratesIoDownloadsLatest").show();
    }
  } else if (selectedProvider === "npm") {
    // ---------- NPM ----------
    if (NPMselectedOption === "name") {
      constructNPMURLName();
      $("#npmName").show();
    } else if (NPMselectedOption === "nameScoped") {
      constructNPMURLNameScoped();
      $("#npmNameScoped").show();
    } else if (NPMselectedOption === "version") {
      constructNPMURLVersion();
      $("#npmVersion").show();
    } else if (NPMselectedOption === "versionScoped") {
      constructNPMURLVersionScoped();
      $("#npmVersionScoped").show();
    } else if (NPMselectedOption === "license") {
      constructNPMURLLicense();
      $("#npmLicense").show();
    } else if (NPMselectedOption === "licenseScoped") {
      constructNPMURLLicenseScoped();
      $("#npmLicenseScoped").show();
    } else if (NPMselectedOption === "types") {
      constructNPMURLTypes();
      $("#npmTypes").show();
    } else if (NPMselectedOption === "typesScoped") {
      constructNPMURLTypesScoped();
      $("#npmTypesScoped").show();
    }
  } else if (selectedProvider === "pypi") {
    // ---------- PyPi ----------
    if (PyPiselectedOption === "name") {
      constructPyPiURLName();
      $("#pypiName").show();
    } else if (PyPiselectedOption === "version") {
      constructPyPiURLVersion();
      $("#pypiVersion").show();
    } else if (PyPiselectedOption === "name&version") {
      constructPyPiURLNameVersion();
      $("#pypiNameAndVersion").show();
    } else if (PyPiselectedOption === "license") {
      constructPyPiURLLicense();
      $("#pypiLicense").show();
    }
  }
});
