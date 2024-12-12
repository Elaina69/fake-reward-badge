let type = 1

import * as upl from 'pengu-upl'

upl.observer.subscribeToElementCreation(".wallet-and-badges", (element: any) => {
	let container = document.createElement("div")
	let badgeDiv = document.createElement("div")
	let badgeImage = document.createElement("i")

	container.setAttribute("class", "navigation-badge-container ember-view")
	badgeDiv.setAttribute("class", "loyalty-navbar-badge")

    if (type == 0) {
        badgeImage.setAttribute("class", "loyalty-navbar-badge-icon loyalty-navbar-badge-icon--rewards")
    }
    else if (type == 1) {
        badgeImage.setAttribute("class", "loyalty-navbar-badge-icon")
    }
	
	container.append(badgeDiv)
	badgeDiv.append(badgeImage)

	if (!element.querySelector(".loyalty-navbar-badge")) {
		element.insertBefore(container, element.querySelector(".currency-container-stacked.ember-view"))
	}
})