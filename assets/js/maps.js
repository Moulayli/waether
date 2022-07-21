var mymap = L.map('map').setView([51.505, -0.09], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

	L.marker([51.5, -0.09]).addTo(mymap)
		.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

const getdateortime = (date) => {
    const date1 = new Date(date);
    const date2 = new Date();
    const diff = date2.getTime() - date1.getTime();
    const diffSeconds = Math.floor(diff / 1000);
    const diffMinutes = Math.floor(diff / 60000);
    const diffHours = Math.floor(diff / 3600000);
    const diffDays = Math.floor(diff / 86400000);
    const diffWeeks = Math.floor(diff / 604800000);
    const diffMonths = Math.floor(diff / 2629800000);
    const diffYears = Math.floor(diff / 31557600000);
    if (diffSeconds < 60) {
      return "à l'instant";
    } else if (diffMinutes < 60) {
      if (diffMinutes === 1) {
        return "il y a une minute";
      } else {
        return "il y a " + diffMinutes + " minutes";
      }
    } else if (diffHours < 24) {
      if (diffHours === 1) {
        return "il y a une heure";
      } else {
        return "il y a " + diffHours + " heures";
      }
    } else if (diffDays < 7) {
      if (diffDays === 1) {
        return "hier";
      } else {
        return "il y a " + diffDays + " jours";
      }
    } else if (diffWeeks < 4) {
      if (diffWeeks === 1) {
        return "il y a une semaine";
      } else {
        return "il y a " + diffWeeks + " semaines";
      }
    } else if (diffMonths < 12) {
      if (diffMonths === 1) {
        return "il y a un mois";
      } else {
        return "il y a " + diffMonths + " mois";
      }
    } else {
      if (diffYears === 1) {
        return "il y a un an";
      } else {
        return "il y a " + diffYears + " ans";
      }
    }
  }
