new function() {
			document.documentElement.style.fontSize = innerWidth / 3.20 + "px";
			window.addEventListener(
				"resize",
				function() {
					document.documentElement.style.fontSize = innerWidth / 3.20 + "px";
				}, false
			)
		}