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

  const badgeUrl = `https://badgers.space/github/release/${owner}/${repo}`;
  document.getElementById("previewImage").src = badgeUrl;
  document.getElementById("previewURL").innerHTML = badgeUrl;
}

function constructGitHubURLIssues() {
  const owner = document.getElementById("ghiowner").value;
  const repo = document.getElementById("ghirepo").value;

  const badgeUrl = `https://badgers.space/github/issues/${owner}/${repo}`;
  document.getElementById("previewImage").src = badgeUrl;
  document.getElementById("previewURL").innerHTML = badgeUrl;
}

function constructGitHubURLOpenIssues() {
  const owner = document.getElementById("ghoiowner").value;
  const repo = document.getElementById("ghoirepo").value;

  const badgeUrl = `https://badgers.space/github/open-issues/${owner}/${repo}`;
  document.getElementById("previewImage").src = badgeUrl;
  document.getElementById("previewURL").innerHTML = badgeUrl;
}

function constructGitHubURLClosedIssues() {
  const owner = document.getElementById("ghciowner").value;
  const repo = document.getElementById("ghcirepo").value;

  const badgeUrl = `https://badgers.space/github/closed-issues/${owner}/${repo}`;
  document.getElementById("previewImage").src = badgeUrl;
  document.getElementById("previewURL").innerHTML = badgeUrl;
}

function constructGitHubURLChecks() {
  const owner = document.getElementById("ghcowner").value;
  const repo = document.getElementById("ghcrepo").value;

  const badgeUrl = `https://badgers.space/github/checks/${owner}/${repo}`;
  document.getElementById("previewImage").src = badgeUrl;
  document.getElementById("previewURL").innerHTML = badgeUrl;
}

function constructGitHubURLChecksBranch() {
  const owner = document.getElementById("ghcbowner").value;
  const repo = document.getElementById("ghcbrepo").value;
  const branch = document.getElementById("ghcbranch").value;

  const badgeUrl = `https://badgers.space/github/checks/${owner}/${repo}/${branch}`;
  document.getElementById("previewImage").src = badgeUrl;
  document.getElementById("previewURL").innerHTML = badgeUrl;
}

function constructGitHubURLContributors() {
  const owner = document.getElementById("ghcontowner").value;
  const repo = document.getElementById("ghcontrepo").value;

  const badgeUrl = `https://badgers.space/github/contributors/${owner}/${repo}`;
  document.getElementById("previewImage").src = badgeUrl;
  document.getElementById("previewURL").innerHTML = badgeUrl;
}

function constructGitHubURLLicense() {
  const owner = document.getElementById("ghlowner").value;
  const repo = document.getElementById("ghlrepo").value;

  const badgeUrl = `https://badgers.space/github/license/${owner}/${repo}/`;
  document.getElementById("previewImage").src = badgeUrl;
  document.getElementById("previewURL").innerHTML = badgeUrl;
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
    const crate = document.getElementById('cnname').value;

    const badgeUrl = `https://badgers.space/crates/name/${crate}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
}

function constructCIOURLVersion() {
    const crate = document.getElementById('cnvname').value;

    const badgeUrl = `https://badgers.space/crates/version/${crate}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
}

function constructCIOURLNameAndVersion() {
    const crate = document.getElementById('cniname').value;

    const badgeUrl = `https://badgers.space/crates/info/${crate}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
}

function constructCIOURLDownloads() {
    const crate = document.getElementById('cndname').value;

    const badgeUrl = `https://badgers.space/crates/downloads/${crate}`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
}

function constructCIOURLDownloadsLatest() {
    const crate = document.getElementById('cndlname').value;

    const badgeUrl = `https://badgers.space/crates/downloads/${crate}/latest`;
    document.getElementById("previewImage").src = badgeUrl;
    document.getElementById("previewURL").innerHTML = badgeUrl;
}









/**
                           
                           
 _ __    _ __    _ __ ___  
| '_ \  | '_ \  | '_ ` _ \ 
| | | | | |_) | | | | | | |
|_| |_| | .__/  |_| |_| |_|
        | |                
        |_|                

 */









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