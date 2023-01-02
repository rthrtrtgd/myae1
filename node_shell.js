const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'345e04cc-4db8-4890-afe0-ac5782b7213d'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
