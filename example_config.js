		{
			module: 'MMM-OctoMonV2',
			position: 'top_center',
			header: '<img src="modules/MMM-OctoMonV2/public/octobw.jpg" style="width:20px;vertical-align:bottom;"/> Octopus Energy',
			config: {
				elecApiUrl: 'https://api.octopus.energy/v1/electricity-meter-points/1234567890123/meters/1234567890/consumption/?group_by=day',
				elecExpApiUrl: 'https://api.octopus.energy/v1/electricity-meter-points/1234567890123/meters/1234567890/consumption/?group_by=day',
				gasApiUrl: 'https://api.octopus.energy/v1/gas-meter-points/1234567890123/meters/1234567890/consumption/?group_by=day',
				api_key: 'your-API-key',
				displayDays: 7,

				elecMedium: 10,
				elecHigh: 13,
				elecCostKWH: 0.2270,
				elecCostSC: 0.6537,

				elecExpMedium: 4.3582,
				elecExpHigh: 6.3245,
				elecExpCostKWH: 0.15,
				elecExpCostSC: 0,

				gasMedium: 5,
				gasHigh: 10,
				gasCostKWH: 0.0608,
				gasCostSC: 0.2949,

				decimalPlaces: 2,
				showUpdateTime: true,
				updateInterval: 60000*60,
				retryDelay: 5000,
				animationSpeed: 2000,
			}
		},
