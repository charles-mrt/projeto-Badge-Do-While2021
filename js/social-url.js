/**
 * get social media links 
 * **/

const LinksSocialMedia = {
  github: "charles-mrt",
  youtube: "charles-mrt",
  facebook: "charles.martins.3956",
  instagram: "charles__mrt",
  twitter: "charles-mrt"
}

function changeSocialMediaLinks() {

  for (let li of social_links.children) {

    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

  }

}

changeSocialMediaLinks()