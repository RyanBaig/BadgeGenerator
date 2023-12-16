const providerSelect = document.getElementById("provider");
// PROVIDERS
const githubProvider = document.getElementById("githubProvider");
const cratesIoProvider = document.getElementById("crates.ioProvider");
const npmProvider = document.getElementById("npmProvider");
const pypiProvider = document.getElementById("pypiProvider");
// OPTIONS
const githubOption = document.getElementById("githubOption");
const cratesIoOption = document.getElementById("cratesIoOption");
const npmOption = document.getElementById("npmOption");
// PREVIEW BUTTON
const previewButton = document.getElementById("previewButton");

providerSelect.addEventListener("change", function () {
  const selectedProvider = providerSelect.value;
  hideAllProviders();
  if (selectedProvider === "github") {
    githubProvider.style.display = "block";
    cratesIoProvider.style.display = "none";
    npmProvider.style.display = "none";
    pypiProvider.style.display = "none";
  } else if (selectedProvider === "crates.io") {
    githubProvider.style.display = "none";
    cratesIoProvider.style.display = "block";
    npmProvider.style.display = "none";
    pypiProvider.style.display = "none";
  } else if (selectedProvider === "npm") {
    githubProvider.style.display = "none";
    cratesIoProvider.style.display = "none";
    npmProvider.style.display = "block";
    pypiProvider.style.display = "none";
  } else if (selectedProvider === "pypi") {
    githubProvider.style.display = "none";
    cratesIoProvider.style.display = "none";
    npmProvider.style.display = "none";
    pypiProvider.style.display = "block";
  }
});

function hideAllProviders() {
  githubProvider.style.display = "none";
  cratesIoProvider.style.display = "none";
  npmProvider.style.display = "none";
  pypiProvider.style.display = "none";
}

githubOption.addEventListener("change", function () {
  hideAllGitHubOptions();
  const selectedOption = githubOption.value;
  if (selectedOption === "latestRelease") {
    document.getElementById("githubLatestRelease").style.display = "block";
  } else if (selectedOption === "issues") {
    document.getElementById("githubIssues").style.display = "block";
  } else if (selectedOption === "openIssues") {
    document.getElementById("githubOpenIssues").style.display = "block";
  } else if (selectedOption === "closedIssues") {
    document.getElementById("githubClosedIssues").style.display = "block";
  } else if (selectedOption === "checks") {
    document.getElementById("githubChecks").style.display = "block";
  } else if (selectedOption === "checksBranch") {
    document.getElementById("githubChecksBranch").style.display = "block";
  } else if (selectedOption === "contributors") {
    document.getElementById("githubContributors").style.display = "block";
  } else if (selectedOption === "license") {
    document.getElementById("githubLicense").style.display = "block";
  }
});

cratesIoOption.addEventListener("change", function () {
  hideAllCratesIoOptions();
  const selectedOption = cratesIoOption.value;
  if (selectedOption === "name") {
    document.getElementById("cratesIoName").style.display = "block";
  } else if (selectedOption === "version") {
    document.getElementById("cratesIoVersion").style.display = "block";
  } else if (selectedOption === "name&version") {
    document.getElementById("cratesIoName&Version").style.display = "block";
  } else if (selectedOption === "downloads") {
    document.getElementById("cratesIoDownloads").style.display = "block";
  } else if (selectedOption === "latestDownloads") {
    document.getElementById("cratesIoDownloadsLatest").style.display = "block";
  }
});

npmOption.addEventListener("change", function () {
  hideAllNpmOptions();
  const selectedOption = npmOption.value;
  if (selectedOption === "name") {
    document.getElementById("npmName").style.display = "block";
  } else if (selectedOption === "nameScoped") {
    document.getElementById("npmNameScoped").style.display = "block";
  } else if (selectedOption === "version") {
    document.getElementById("npmVersion").style.display = "block";
  } else if (selectedOption === "versionScoped") {
    document.getElementById("npmVersionScoped").style.display = "block";
  } else if (selectedOption === "license") {
    document.getElementById("npmLicense").style.display = "block";
  } else if (selectedOption === "licenseScoped") {
    document.getElementById("npmLicenseScoped").style.display = "block";
  } else if (selectedOption === "types") {
    document.getElementById("npmTypes").style.display = "block";
  } else if (selectedOption === "typesScoped") {
    document.getElementById("npmTypesScoped").style.display = "block";
  }
});

function hideAllGitHubOptions() {
  document.getElementById("githubLatestRelease").style.display = "none";
  document.getElementById("githubIssues").style.display = "none";
  document.getElementById("githubOpenIssues").style.display = "none";
  document.getElementById("githubClosedIssues").style.display = "none";
  document.getElementById("githubChecks").style.display = "none";
  document.getElementById("githubChecksBranch").style.display = "none";
  document.getElementById("githubContributors").style.display = "none";
  document.getElementById("githubLicense").style.display = "none";
}

function hideAllCratesIoOptions() {
  document.getElementById("cratesIoName").style.display = "none";
  document.getElementById("cratesIoVersion").style.display = "none";
  document.getElementById("cratesIoName&Version").style.display = "none";
  document.getElementById("cratesIoDownloads").style.display = "none";
  document.getElementById("cratesIoDownloadsLatest").style.display = "none";
}

function hideAllNpmOptions() {
  document.getElementById("npmName").style.display = "none";
  document.getElementById("npmNameScoped").style.display = "none";
  document.getElementById("npmVersion").style.display = "none";
  document.getElementById("npmVersionScoped").style.display = "none";
  document.getElementById("npmLicense").style.display = "none";
  document.getElementById("npmLicenseScoped").style.display = "none";
  document.getElementById("npmTypes").style.display = "none";
  document.getElementById("npmTypesScoped").style.display = "none";
}

previewButton.addEventListener("click", function () {
  const GHselectedOption = githubOption.value;
  const CIOselectedOption = cratesIoOption.value;
  const NPMselectedOption = npmOption.value;


  // Check the selected provider
  if (providerSelect.value === "github") {
    // ---------- GITHUB ----------
    if (GHselectedOption === "latestRelease") {
      constructGitHubURLLatestRelease();
      document.getElementById("githubLatestRelease").style.display = "block";
    } else if (GHselectedOption === "issues") {
      constructGitHubURLIssues();
      document.getElementById("githubIssues").style.display = "block";
    } else if (GHselectedOption === "openIssues") {
      constructGitHubURLOpenIssues();
      document.getElementById("githubOpenIssues").style.display = "block";
    } else if (GHselectedOption === "closedIssues") {
      constructGitHubURLClosedIssues();
      document.getElementById("githubClosedIssues").style.display = "block";
    } else if (GHselectedOption === "checks") {
      constructGitHubURLChecks();
      document.getElementById("githubChecks").style.display = "block";
    } else if (GHselectedOption === "checksBranch") {
      constructGitHubURLChecksBranch();
      document.getElementById("githubChecksBranch").style.display = "block";
    } else if (GHselectedOption === "contributors") {
      constructGitHubURLContributors();
      document.getElementById("githubContributors").style.display = "block";
    } else if (GHselectedOption === "license") {
      constructGitHubURLLicense();
      document.getElementById("githubLicense").style.display = "block";
    }
  } else if (providerSelect.value === "crates.io") {
    // ---------- CRATES.IO ----------
    if (CIOselectedOption === "name") {
      constructCIOURLName();
      document.getElementById("cratesIoName").style.display = "block";
    } else if (CIOselectedOption === "version") {
      constructCIOURLVersion();
      document.getElementById("cratesIoVersion").style.display = "block";
    } else if (CIOselectedOption === "name&version") {
      constructCIOURLNameAndVersion();
      document.getElementById("cratesIoName&Version").style.display = "block";
    } else if (CIOselectedOption === "downloads") {
      constructCIOURLDownloads();
      document.getElementById("cratesIoDownloads").style.display = "block";
    } else if (CIOselectedOption === "latestDownloads") {
      constructCIOURLDownloadsLatest();
      document.getElementById("cratesIoDownloadsLatest").style.display =
        "block";
    }
  } else if (providerSelect.value === "npm") {
    // ---------- NPM ----------
    if (NPMselectedOption === "name") {
      constructNPMURLName();
      document.getElementById("npmName").style.display = "block";
    } else if (NPMselectedOption === "nameScoped") {
      constructNPMURLNameScoped();
      document.getElementById("npmNameScoped").style.display = "block";
    } else if (NPMselectedOption === "version") {
      constructNPMURLVersion();
      document.getElementById("npmVersion").style.display = "block";
    } else if (NPMselectedOption === "versionScoped") {
      constructNPMURLVersionScoped();
      document.getElementById("npmVersionScoped").style.display = "block";
    } else if (NPMselectedOption === "license") {
      constructNPMURLLicense();
      document.getElementById("npmLicense").style.display = "block";
    } else if (NPMselectedOption === "licenseScoped") {
      constructNPMURLLicenseScoped();
      document.getElementById("npmLicenseScoped").style.display = "block";
    } else if (NPMselectedOption === "types") {
      constructNPMURLTypes();
      document.getElementById("npmTypes").style.display = "block";
    } else if (NPMselectedOption === "typesScoped") {
      constructNPMURLTypesScoped();
      document.getElementById("npmTypesScoped").style.display = "block";
    }
  }
});
