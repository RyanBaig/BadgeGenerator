/**
 _____   _   _     _   _           _     
|  __ \ (_) | |   | | | |         | |    
| |  \/  _  | |_  | |_| |  _   _  | |__  
| | __  | | | __| |  _  | | | | | | '_ \ 
| |_\ \ | | | |_  | | | | | |_| | | |_) |
 \____/ |_|  \__| \_| |_/  \__,_| |_.__/ 

 */
function constructGitHubURLLatestRelease() {
  const owner = document.getElementById("ghlrowner").value;
  const repo = document.getElementById("ghlrrepo").value;

  if (!owner || !repo) {
    alert(
      "Please fill the required fields: Github Repository Owner, GitHub Repository"
    );
  } else {
    const badgeUrl = `https://badgers.space/github/release/${owner}/${repo}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructGitHubURLIssues() {
  const owner = document.getElementById("ghiowner").value;
  const repo = document.getElementById("ghirepo").value;

  if (!owner || !repo) {
    alert(
      "Please fill the required fields: Github Repository Owner, GitHub Repository"
    );
  } else {
    const badgeUrl = `https://badgers.space/github/issues/${owner}/${repo}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructGitHubURLOpenIssues() {
  const owner = document.getElementById("ghoiowner").value;
  const repo = document.getElementById("ghoirepo").value;

  if (!owner || !repo) {
    alert(
      "Please fill the required fields: Github Repository Owner, GitHub Repository"
    );
  } else {
    const badgeUrl = `https://badgers.space/github/open-issues/${owner}/${repo}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructGitHubURLClosedIssues() {
  const owner = document.getElementById("ghciowner").value;
  const repo = document.getElementById("ghcirepo").value;
  if (!owner || !repo) {
    alert(
      "Please fill the required fields: Github Repository Owner, GitHub Repository"
    );
  } else {
    const badgeUrl = `https://badgers.space/github/closed-issues/${owner}/${repo}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructGitHubURLChecks() {
  const owner = document.getElementById("ghcowner").value;
  const repo = document.getElementById("ghcrepo").value;
  if (!owner || !repo) {
    alert(
      "Please fill the required fields: Github Repository Owner, GitHub Repository"
    );
  } else {
    const badgeUrl = `https://badgers.space/github/checks/${owner}/${repo}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructGitHubURLChecksBranch() {
  const owner = document.getElementById("ghcbowner").value;
  const repo = document.getElementById("ghcbrepo").value;
  const branch = document.getElementById("ghcbranch").value;
  if (!owner || !repo || !branch) {
    alert(
      "Please fill the required fields: Github Repository Owner, GitHub Repository, GitHub Repository Branch"
    );
  } else {
    const badgeUrl = `https://badgers.space/github/checks/${owner}/${repo}/${branch}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructGitHubURLContributors() {
  const owner = document.getElementById("ghcontowner").value;
  const repo = document.getElementById("ghcontrepo").value;
  if (!owner || !repo) {
    alert(
      "Please fill the required fields: Github Repository Owner, GitHub Repository"
    );
  } else {
    const badgeUrl = `https://badgers.space/github/contributors/${owner}/${repo}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructGitHubURLLicense() {
  const owner = document.getElementById("ghlowner").value;
  const repo = document.getElementById("ghlrepo").value;
  if (!owner || !repo) {
    alert(
      "Please fill the required fields: Github Repository Owner, GitHub Repository"
    );
  } else {
    const badgeUrl = `https://badgers.space/github/license/${owner}/${repo}/`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

/**
                       _                      _         
                      | |                    (_)        
  ___   _ __    __ _  | |_    ___   ___       _    ___  
 / __| | '__|  / _` | | __|  / _ \ / __|     | |  / _ \ 
| (__  | |    | (_| | | |_  |  __/ \__ \  _  | | | (_) |
 \___| |_|     \__,_|  \__|  \___| |___/ (_) |_|  \___/ 
                                                        
                                                        
 */

function constructCIOURLName() {
  const crate = document.getElementById("cnname").value;

  if (!crate) {
    alert("Please fill the required fields: crates.io Crate Name");
  } else {
    const badgeUrl = `https://badgers.space/crates/name/${crate}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructCIOURLVersion() {
  const crate = document.getElementById("cnvname").value;
  if (!crate) {
    alert("Please fill the required fields: crates.io Crate Name");
  } else {
    const badgeUrl = `https://badgers.space/crates/version/${crate}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructCIOURLNameAndVersion() {
  const crate = document.getElementById("cniname").value;
  if (!crate) {
    alert("Please fill the required fields: crates.io Crate Name");
  } else {
    const badgeUrl = `https://badgers.space/crates/info/${crate}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructCIOURLDownloads() {
  const crate = document.getElementById("cndname").value;
  if (!crate) {
    alert("Please fill the required fields: crates.io Crate Name");
  } else {
    const badgeUrl = `https://badgers.space/crates/downloads/${crate}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructCIOURLDownloadsLatest() {
  const crate = document.getElementById("cndlname").value;
  if (!crate) {
    alert("Please fill the required fields: crates.io Crate Name");
  } else {
    const badgeUrl = `https://badgers.space/crates/downloads/${crate}/latest`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

/**
                           
                           
 _ __    _ __    _ __ ___  
| '_ \  | '_ \  | '_ ` _ \ 
| | | | | |_) | | | | | | |
|_| |_| | .__/  |_| |_| |_|
        | |                
        |_|                

 */
function constructNPMURLName() {
  const name = document.getElementById("npmNName").value;
  if (!name) {
    alert("Please fill the required fields: npm Package Name");
  } else {
    const badgeUrl = `https://badgers.space/npm/name/${name}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructNPMURLNameScoped() {
  const name = document.getElementById("npmNNameS").value;
  const org = document.getElementById("npmNOrgS").value;
  if (!name || !org) {
    alert(
      "Please fill the required fields: npm Package Name, npm Package Owner/Organization"
    );
  } else {
    if (!org.startsWith("@")) {
      alert(
        "The Organization Name Must Start with '@', For Example: @packageOwner"
      );
    } else {
      const badgeUrl = `https://badgers.space/npm/name/${org}/${name}`;
      document.getElementById("previewImage").src = badgeUrl;
      document.getElementById("previewURL").innerHTML = badgeUrl;
    }
  }
}

function constructNPMURLVersion() {
  const name = document.getElementById("npmVName").value;
  if (!name) {
    alert("Please fill the required fields: npm Package Name");
  } else {
    const badgeUrl = `https://badgers.space/npm/version/${name}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructNPMURLVersionScoped() {
  const name = document.getElementById("npmVNameS").value;
  const org = document.getElementById("npmVOrgS").value;
  if (!name || !org) {
    alert(
      "Please fill the required fields: npm Package Name, npm Package Owner/Organization"
    );
  } else {
    if (!org.startsWith("@")) {
      alert(
        "The Organization Name Must Start with '@', For Example: @packageOwner"
      );
    } else {
      const badgeUrl = `https://badgers.space/npm/version/${org}/${name}`;
      document.getElementById("previewImage").src = badgeUrl;
      document.getElementById("previewURL").innerHTML = badgeUrl;
    }
  }
}

function constructNPMURLLicense() {
  const name = document.getElementById("npmLName").value;
  if (!name) {
    alert("Please fill the required fields: npm Package Name");
  } else {
    const badgeUrl = `https://badgers.space/npm/license/${name}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructNPMURLLicenseScoped() {
  const name = document.getElementById("npmLNameS").value;
  const org = document.getElementById("npmLOrgS").value;
  if (!name || !org) {
    alert(
      "Please fill the required fields: npm Package Name, npm Package Owner/Organization"
    );
  } else {
    if (!org.startsWith("@")) {
      alert(
        "The Organization Name Must Start with '@', For Example: @packageOwner"
      );
    } else {
      const badgeUrl = `https://badgers.space/npm/license/${org}/${name}`;
      document.getElementById("previewImage").src = badgeUrl;
      document.getElementById("previewURL").innerHTML = badgeUrl;
    }
  }
}

function constructNPMURLTypes() {
  const name = document.getElementById("npmTName").value;
  if (!name) {
    alert("Please fill the required fields: npm Package Name");
  } else {
    const badgeUrl = `https://badgers.space/npm/types/${name}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructNPMURLTypesScoped() {
  const name = document.getElementById("npmTNameS").value;
  const org = document.getElementById("npmTOrgS").value;
  if (!name || !org) {
    alert(
      "Please fill the required fields: npm Package Name, npm Package Owner/Organization"
    );
  } else {
    if (!org.startsWith("@")) {
      alert(
        "The Organization Name Must Start with '@', For Example: @packageOwner"
      );
    } else {
      const badgeUrl = `https://badgers.space/npm/types/${org}/${name}`;
      document.getElementById("previewImage").src = badgeUrl;
      document.getElementById("previewURL").innerHTML = badgeUrl;
    }
  }
}
/**
______          ______   _ 
| ___ \         | ___ \ (_)
| |_/ /  _   _  | |_/ /  _ 
|  __/  | | | | |  __/  | |
| |     | |_| | | |     | |
\_|      \__, | \_|     |_|
          __/ |            
         |___/             
 */
function constructPyPiURLName() {
  const name = document.getElementById("pypiNName").value;
  if (!name) {
    alert("Please fill the required fields: PyPi Package Name");
  } else {
    const badgeUrl = `https://badgers.space/pypi/name/${name}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructPyPiURLVersion() {
  const name = document.getElementById("pypiVName").value;
  if (!name) {
    alert("Please fill the required fields: PyPi Package Name");
  } else {
    const badgeUrl = `https://badgers.space/pypi/version/${name}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructPyPiURLNameVersion() {
  const name = document.getElementById("pypiNVName").value;
  if (!name) {
    alert("Please fill the required fields: PyPi Package Name");
  } else {
    const badgeUrl = `https://badgers.space/pypi/info/${name}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}

function constructPyPiURLLicense() {
  const name = document.getElementById("pypiLName").value;
  if (!name) {
    alert("Please fill the required fields: PyPi Package Name");
  } else {
    const badgeUrl = `https://badgers.space/pypi/license/${name}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
  }
}